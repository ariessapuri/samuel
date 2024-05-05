<template>
    <div v-if="isPemissionOK" class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Agreements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Add</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="row pb-4">
                    <div class="col-12">
                        <router-link to="/agreements" class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block ml-1" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                            Back to agreement list
                        </router-link>
                    </div>
                </div>
                <div class="panel br-6 p-0">
                    <div id="flFormsGrid" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <span class="badge-title badge badge-dark badge-classic">add agreement</span>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form @submit.prevent="handleSubmit">
                                    <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
                                    <div class="row">
                                        <div class="form-group col-md-4">
                                            <label for="inputType">Type</label>
                                            <select id="type" class="form-select" v-model="type" required="required">
                                                <option value="" selected>Choose</option>
                                                <option value="protected">protected</option>
                                                <option value="non protected">non protected</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputDate">Date</label>
                                            <input type="date" class="form-control" id="date" v-model="date"
                                                placeholder="Date" required="required" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputAttorneyName">Attorney <span v-if="attorneyPagePermission">
                                                    <a :href="routing_to_attorney"
                                                        class="text-white badge badge-primary d-inline align-middle ms-2"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-edit-2 align-middle me-1">
                                                            <path
                                                                d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z">
                                                            </path>
                                                        </svg> edit </a></span></label>
                                            <input type="hidden" v-model="attorney_id">
                                            <input type="text" class="form-control" id="attorney_name"
                                                v-model="attorney_name" required="required" readonly />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xl-12 col-md-12 col-sm-12 col-12 ps-0">
                                                    <h4 class="text-decoration-underline">Client
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="mt-2 mb-2">
                                            <a :href="routing_new_client"
                                                class="text-white badge badge-primary d-inline align-middle ms-2">add
                                                client </a>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="hidden" v-model="client_code">
                                            <div class="autocomplete-container">
                                                <input type="text" class="form-control" v-model="searchTerm"
                                                    @input="onInput" @blur="onBlur" placeholder="type client code"
                                                    required />
                                                <ul v-if="showSuggestions && filteredSuggestions.length > 0"
                                                    class="suggestions-list">
                                                    <li v-for="(suggestion, index) in filteredSuggestions" :key="index"
                                                        @mousedown="selectSuggestion(suggestion)">
                                                        {{ suggestion }}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-4">
                                        <div class="col-md-12">
                                            <textarea class="form-control" rows="6" v-model="client_detail"
                                                readonly></textarea>
                                        </div>
                                        <hr />
                                    </div>
                                    <div class="row">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xl-12 col-md-12 col-sm-12 col-12 ps-0">
                                                    <h4 class="text-decoration-underline">Investment</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="inputInvestmentValue">Value</label>
                                            <div class="input-group mb-4">
                                                <span class="input-group-text">Rp.</span>
                                                <input type="text" class="form-control" @input="formatInput"
                                                    v-model="investment_value" @blur="generateAgreement"
                                                    aria-label="Amount" required />
                                                <span class="input-group-text">.00</span>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputInvestmentValue"></label>
                                            <div class="mt-3">
                                                <a href="#" class="btn btn-success btn-sm"
                                                    @click.prevent="regenerateValue">Regenerate
                                                    Value</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-4">
                                            <label for="inputProfitGuarantee">Profit Guarantee</label>
                                            <div class="input-group mb-4">
                                                <input type="text" class="form-control" v-model="profit_guarantee"
                                                    readonly required />
                                                <span class="input-group-text">%</span>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputShareProfitInvestor">Share Profit Investor</label>
                                            <div class="input-group mb-4">
                                                <input type="number" class="form-control"
                                                    v-model="share_profit_investor_percentage" @blur="generateAgreement"
                                                    :readonly="isReadonly" min="0" max="100" required />
                                                <span class="input-group-text">%</span>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputShareProfitInvestor">Share Profit Guarantor</label>
                                            <div class="input-group mb-4">
                                                <input type="text" class="form-control"
                                                    v-model="share_profit_guarantor_percentage" readonly required />
                                                <span class="input-group-text">%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-4">
                                            <label for="inputRealiazedGain">Realiazed Gain</label>
                                            <div class="input-group mb-4">
                                                <span class="input-group-text">Rp.</span>
                                                <input type="text" class="form-control" v-model="realized_gain"
                                                    aria-label="Realized Gain" readonly required />
                                                <span class="input-group-text">.00</span>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputProfitInvestor">Profit Investor</label>
                                            <div class="input-group mb-4">
                                                <span class="input-group-text">Rp.</span>
                                                <input type="text" class="form-control"
                                                    v-model="share_profit_investor_value" aria-label="Amount" readonly
                                                    required />
                                                <span class="input-group-text">.00</span>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputProfitGuarantor">Profit Guarantor</label>
                                            <div class="input-group mb-4">
                                                <span class="input-group-text">Rp.</span>
                                                <input type="text" class="form-control"
                                                    v-model="share_profit_guarantor_value" v-comma-format
                                                    aria-label="Amount" readonly required />
                                                <span class="input-group-text">.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <input type="hidden" v-model="total_days">
                                        <div class="form-group col-md-4">
                                            <label for="inputInvestmentPeriod">Investment Period</label>
                                            <div class="input-group mb-4">
                                                <input type="text" class="form-control" v-model="investment_period"
                                                    aria-label="Period" @blur="GetEndInvestment" required />
                                                <span class="input-group-text">month</span>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputStartInvestment">Start Investment</label>
                                            <input type="date" class="form-control" id="date"
                                                v-model="start_investment_date" @blur="GetEndInvestment"
                                                placeholder="Date" required="required" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputEndInvestment">End Investment</label>
                                            <input type="date" class="form-control" id="date"
                                                v-model="end_investment_date" @change="get_total_days"
                                                placeholder="Date" required="required" />
                                            <small class="text-muted"
                                                v-if="total_days !== null && total_days !== ''">Total Days: {{
                                                total_days }}</small>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xl-12 col-md-12 col-sm-12 col-12 ps-0">
                                                    <h4 class="text-decoration-underline">Fee</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="inputBuyingFee">Buying Fee</label>
                                            <div class="input-group mb-4">
                                                <input type="number" class="form-control" v-model="buying_fee" min="0"
                                                    step=".01" required>
                                                <span class="input-group-text">%</span>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputSellingFee">Selling Fee</label>
                                            <div class="input-group mb-4">
                                                <input type="number" class="form-control" v-model="selling_fee" min="0"
                                                    step=".01" required>
                                                <span class="input-group-text">%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xl-12 col-md-12 col-sm-12 col-12 ps-0">
                                                    <h4 class="text-decoration-underline">Referral</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="inputReferralFee1">Referral Fee 1</label>
                                            <div class="input-group mb-4">
                                                <input type="number" class="form-control" v-model="referral_fee_1"
                                                    min="0" step=".01">
                                                <span class="input-group-text">%</span>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputReferralFee2">Referral Fee 2</label>
                                            <div class="input-group mb-4">
                                                <input type="number" class="form-control" v-model="referral_fee_2"
                                                    min="0" step=".01">
                                                <span class="input-group-text">%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xl-12 col-md-12 col-sm-12 col-12 ps-0">
                                                    <h4 class="text-decoration-underline">Attachment</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <div class="checkbox-default custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input"
                                                    id="include_client_attachment"
                                                    v-model="include_client_attachment" />
                                                <label class=" custom-control-label" for="include_client_attachment">
                                                    Include Client Attachment </label>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <div class="checkbox-default custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input"
                                                    id="include_attorney_attachment"
                                                    v-model="include_attorney_attachment" />
                                                <label class=" custom-control-label" for="include_attorney_attachment">
                                                    Include Attorney Attachment </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-12">
                                            <div class="col-md-12 col-sm-12 col-12 ps-0">
                                                <div class="dropzone" ref="dropzoneRef">
                                                    <div class="fallback">
                                                        <input ref="fileInput" type="file" multiple />
                                                    </div>
                                                    <div v-if="!attachments" class="dz-message">
                                                        Drag files here or click to upload.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button v-if="!loading" type="submit" class="btn btn-primary">Create</button>
                                    <button v-else type="button" class="btn btn-danger btn-lg mb-3 me-3" disabled><span
                                            class="spinner-border text-white me-2 align-self-center loader-sm">Loading...</span>
                                        Loading</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="layout-px-spacing">
        <div class="error404 text-center">
            <div class="container-fluid error-content">
                <div class="">
                    <h1 class="error-number">403</h1>
                    <p class="mini-text">Ooops!</p>
                    <p class="error-text mb-4 mt-1">You have no access to see this page</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, computed, onMounted, watch } from 'vue';
import { useMeta } from '@/composables/use-meta';
import { useRouter } from 'vue-router';
import config from '@/config/config.js';
import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css';

axios.defaults.headers.common['Accept'] = 'application/json';

const loading = ref(false);
const errorMessage = ref('');
const type = ref('');
const client_code = ref('');
const client_detail = ref('');
const profit_guarantee = ref('');
const share_profit_investor_value = ref('');
const share_profit_guarantor_value = ref('');
const realized_gain = ref('');
const share_profit_investor_percentage = ref('');
const share_profit_guarantor_percentage = ref('');
const isReadonly = ref(true);
const investment_period = ref('');
const total_days = ref('');
const referral_fee_1 = ref('');
const referral_fee_2 = ref('');
const routing_new_client = ref('/clients/add');
const routing_to_attorney = ref('/setting/attorney');
const attorney_id = ref('');
const attorney_name = ref('');
const buying_fee = ref('');
const selling_fee = ref('');
const include_client_attachment = ref(false);
const include_attorney_attachment = ref(false);

// upload images
const dropzoneRef = ref(null);
const fileInput = ref(null);
const uploadedFiles = ref([]);

let myDropzone;

onMounted(() => {
    myDropzone = new Dropzone(dropzoneRef.value, {
        url: '/upload',
        autoProcessQueue: false,
        uploadMultiple: true,
        addRemoveLinks: true,
        renameFile: false,
        maxFiles: 10,
        acceptedFiles: 'image/*',
        init: function () {
            this.on('addedfile', function (file) {
                if (!uploadedFiles.value.some(f => f.name === file.name)) {
                    uploadedFiles.value.push(file);
                }
            });
            this.on('removedfile', function (file) {
                const index = uploadedFiles.value.findIndex(f => f.name === file.name);
                if (index !== -1) {
                    uploadedFiles.value.splice(index, 1);
                }
            });
            this.on('complete', function (file) {
                this.removeFile(file);
            });
            this.on('error', function (file, errorMessage) {
                console.error('Error uploading file:', errorMessage);
            });
        },
    });
});

const removeFile = (index) => {
    myDropzone.removeFile(uploadedFiles.value[index]);
    attachments = "test";
    uploadedFiles.value.splice(index, 1);
};
// end upload images

const router = useRouter();

const get_total_days = async () => {
    try {
        const response = await axios.get(`${config.baseAPIURL}agreement/get_total_days`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                start_investment_date: start_investment_date.value,
                end_investment_date: end_investment_date.value,
            },
        });

        total_days.value = response.data.days_difference;

    } catch (error) {
        console.error("Error fetching agreement data:", error);
    }

}
const todayISO = new Date().toISOString().split('T')[0];
function formatToDDMMYYYY(dateISO) {
    const [year, month, day] = dateISO.split('-');
    return `${day}/${month}/${year}`;
}

const date = ref(todayISO);
const start_investment_date = ref(todayISO);
const end_investment_date = ref('');

const showSuggestions = ref(false);
const attorneyPagePermission = ref(true);

const searchTerm = ref('');
const suggestions = ref([]);

const filteredSuggestions = computed(() => {
    if (searchTerm.value === '') {
        return [];
    }
    return suggestions.value.filter((s) =>
        s.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
});

const onInput = () => {
    showSuggestions.value = true;
};

const onBlur = () => {
    setTimeout(() => {
        showSuggestions.value = false;
    }, 100);
};

const GetEndInvestment = async () => {
    if (investment_period.value) {
        try {
            const response = await axios.get(`${config.baseAPIURL}agreement/get_end_investment`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    investment_period: investment_period.value,
                    start_investment_date: start_investment_date.value,
                },
            });

            end_investment_date.value = response.data.end_investment_date;
            total_days.value = response.data.days_difference;

        } catch (error) {
            console.error("Error fetching agreement data:", error);
        }
    }
};

const generateAgreement = async () => {
    if (investment_value.value) {
        try {
            const response = await axios.get(`${config.baseAPIURL}agreement/generate_agreement_value`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    nominal: investment_value.value,
                    investor_percentage: share_profit_investor_percentage.value || 70,
                },
            });

            profit_guarantee.value = response.data.random_percent;
            share_profit_investor_value.value = response.data.profit_sharing_investor;
            share_profit_guarantor_value.value = response.data.profit_sharing_guarantor;
            realized_gain.value = response.data.realized_gain;
            share_profit_investor_percentage.value = response.data.profit_investor_percentage;
            share_profit_guarantor_percentage.value = response.data.profit_guarantor_percentage;
            buying_fee.value = response.data.buying_fee;
            selling_fee.value = response.data.selling_fee;

            isReadonly.value = false;
        } catch (error) {
            console.error("Error fetching agreement data:", error);
        }
    }
};

const regenerateValue = () => {
    generateAgreement();
};

const selectSuggestion = async (suggestion) => {
    searchTerm.value = suggestion;
    showSuggestions.value = false;

    const selected_client = suggestion.split(" - ");
    client_code.value = selected_client[0];

    try {
        const response = await axios.get(`${config.baseAPIURL}clients/getClientDetail/${client_code.value}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                const client_data = response.data;

                client_detail.value += client_data.title + " " + client_data.name + "\n";
                client_detail.value += client_data.email + " - " + client_data.phone + "\n\n";

                const addressObject = JSON.parse(client_data.address);

                client_detail.value += addressObject.street_address + "\n";
                client_detail.value += addressObject.subdistrict + " - " + addressObject.district + "\n";
                client_detail.value += addressObject.province + " - " + addressObject.city + " - " + addressObject.postcode;
            })
            .catch(error => {
                console.error(error);
            });

    } catch (error) {
        // Handle errors
        errorMessage.value = error.response.data.message;
    }
};

const originalInput = ref('');

const investment_value = ref('');

const formatNumber = (num) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
const formatInput = (event) => {
    const input = event.target.value;

    const rawNumber = input.replace(/,/g, '');

    if (!isNaN(rawNumber) || rawNumber === '') {
        originalInput.value = rawNumber;
        investment_value.value = formatNumber(rawNumber);
    }
    else {
        investment_value.value = '';
    }
};

watch(originalInput, (newVal) => {
    investment_value.value = formatNumber(newVal);
});

useMeta({ title: 'Agreements - Add' });

const token = localStorage.getItem('token');

const isPemissionOK = ref(true);
const checkSinglePermission = (permissionName) => {
    return axios.get(`${config.baseAPIURL}access/checkSinglePermission/${permissionName}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }).then(response => {
        return response.data.status;
    }).catch(error => {
        console.error("Error checking permission:", error);
        return false;
    });
};

onMounted(async () => {
    isPemissionOK.value = await checkSinglePermission('addAgreement');
    attorneyPagePermission.value = await checkSinglePermission('attorneyPage');
    try {
        const response = await axios.get(`${config.baseAPIURL}clients/getClient`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            const clients = response.data;

            suggestions.value = clients.map((client) => client.code_name);
        })
        .catch(error => {
            console.error(error);
        });

        try {
            const response = await axios.get(`${config.baseAPIURL}attorney`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const attorneyData = response.data.data;
            attorney_id.value = attorneyData.id;
            attorney_name.value = attorneyData.name;

        } catch (error) {
            console.error(error);
        }

    } catch (error) {
        // Handle errors
        errorMessage.value = error.response.data.message;
    }
});

async function handleSubmit() {
    // Form data
    const formData = new FormData();

    uploadedFiles.value.forEach(file => {
        formData.append('files[]', file);
    });

    formData.append('type', type.value);
    formData.append('date', date.value);
    formData.append('client_code', client_code.value);
    formData.append('investment_value', investment_value.value);
    formData.append('profit_guarantee', profit_guarantee.value);
    formData.append('share_profit_investor_percentage', share_profit_investor_percentage.value);
    formData.append('share_profit_guarantor_percentage', share_profit_guarantor_percentage.value);
    formData.append('realized_gain', realized_gain.value);
    formData.append('share_profit_investor_value', share_profit_investor_value.value);
    formData.append('share_profit_guarantor_value', share_profit_guarantor_value.value);
    formData.append('total_days', total_days.value);
    formData.append('investment_period', investment_period.value);
    formData.append('start_investment_date', start_investment_date.value);
    formData.append('end_investment_date', end_investment_date.value);
    formData.append('referral_fee_1', parseFloat(referral_fee_1.value));
    formData.append('referral_fee_2', parseFloat(referral_fee_2.value));
    formData.append('buying_fee', parseFloat(buying_fee.value));
    formData.append('selling_fee', parseFloat(selling_fee.value));
    formData.append('attorney_id', attorney_id.value);
    formData.append('include_client_attachment', include_client_attachment.value ? 1 : 0);
    formData.append('include_attorney_attachment', include_attorney_attachment.value ? 1 : 0);


    try {
        loading.value = true;
        const response = await axios.post(`${config.baseAPIURL}agreement/store`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const agreementId = response.data.id;
        loading.value = false;
        router.push({ name: 'agreementsEdit', params: { agreementId: agreementId }, query: { successMessage: 'Agreement created successfully' } });

    } catch (error) {
        loading.value = false;
        errorMessage.value = error.response.data.message;
    }
}
</script>


<style scoped>
.dropzone {
    border: 2px dashed #ccc;
    padding: 20px;
}

.dz-preview {
    display: inline-block;
    position: relative;
    margin: 10px;
}

.dz-remove-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 16px;
    color: #fff;
    background-color: #f00;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    z-index: 9999;
}

.dz-image {
    cursor: pointer;
}

.dz-progress {
    display: none;
}

.dropzone .dz-preview .dz-image img {
    max-width: 200px;
}

.dropzone .dz-preview:hover .dz-image img {
    -webkit-transform: none;
    transform: none;
    -webkit-filter: none;
    filter: none;
    cursor: pointer;
}
.autocomplete-container {
    position: relative;
}

.suggestions-list {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    border: 1px solid #ccc;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    padding-left: 12px;
}

.suggestions-list li {
    padding: 8px;
    cursor: pointer;
}

.suggestions-list li:hover {
    background-color: #f0f0f0;
}
.badge-title {
    font-size: 14px;
    text-transform: uppercase;
}
</style>
