<template>
    <div v-if="isPemissionOK" class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Setting</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Attorney</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="row">
                    <div class="col-12 text-end">
                        <small>{{ updated_by ? 'last updated by: ' + updated_by + ' | ' + updated_at : '' }}</small>
                    </div>
                </div>
                <div class="panel br-6 p-0">
                    <div id="flFormsGrid" class="col-lg-12">
                        <div class="statbox panel box box-shadow">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <span class="badge-title badge badge-dark badge-classic">attorney</span>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div v-if="successMessage"
                                    class="alert alert-light-primary alert-dismissible border-0 mb-4">{{ successMessage
                                    }}</div>
                                <div v-if="failedMessage" class="alert alert-danger alert-dismissible border-0 mb-4">{{
                                    failedMessage }}</div>
                                <form @submit.prevent="submitForm">
                                    <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
                                    <div class="row">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xl-12 col-md-12 col-sm-12 col-12 ps-0">
                                                    <h4 class="text-decoration-underline">General</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="inputTitle">Title</label>
                                            <select id="title" class="form-select" v-model="title" required="required">
                                                <option value="Bapak">Bapak</option>
                                                <option value="Ibu">Ibu</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputName">Name</label>
                                            <input type="text" class="form-control" id="inputClientCode" v-model="name"
                                                placeholder="Name" required="required" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail">Email</label>
                                            <input type="email" class="form-control" id="inputEmail" v-model="email"
                                                placeholder="Email" required="required" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputTelephone">Telephone</label>
                                            <input type="text" class="form-control" id="inputTelephone" v-model="phone"
                                                placeholder="Telephone" required="required" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPosition">Position</label>
                                            <input type="text" class="form-control" id="inputPosition"
                                                v-model="position" placeholder="Direktur" required="required" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="row">
                                            <div class="panel-heading">
                                                <div class="row">
                                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12 ps-0">
                                                        <h4 class="text-decoration-underline">Identity</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputIdType">ID Type</label>
                                            <select id="id_type" class="form-select" v-model="id_type"
                                                required="required">
                                                <option value="KTP">KTP</option>
                                                <option value="Passport">Passport</option>
                                                <option value="NPWP">NPWP</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputIdNumber">ID Number</label>
                                            <input type="text" class="form-control" id="inputIdNumber"
                                                v-model="id_number" placeholder="ID Number" required="required" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputIdNationality">Nationality</label>
                                            <select id="nationality" class="form-select" v-model="nationality"
                                                required="required">
                                                <option value="WNI">WNI</option>
                                                <option value="WNA">WNA</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xl-12 col-md-12 col-sm-12 col-12 ps-0 d-inline">
                                                    <h4 class="text-decoration-underline d-inline">Address</h4>
                                                    <a class="expand_collapse text-white badge badge-primary d-inline align-middle ms-2"
                                                        @click="toggleEditMode">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-edit-2 align-middle me-1">
                                                            <path
                                                                d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z">
                                                            </path>
                                                        </svg>
                                                        edit
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="isEditMode">
                                        <div class="row">
                                            <div class="form-group col-md-6">
                                                <select class="form-control" id="inputProvince"
                                                    v-model="selectedProvince" @change="fetchCities"
                                                    required="required">
                                                    <option value="" disabled selected>Select Province</option>
                                                    <option v-for="item in provinces" :key="item.id" :value="item.id">{{
                                                        item.name }}</option>
                                                </select>
                                                <small id="sh-text1" class="block text-muted">Province</small>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <select class="form-control" id="inputCity"
                                                    :disabled="!selectedProvince" v-model="selectedCity"
                                                    @change="fetchDistricts" required="required">
                                                    <option value="" selected>Select City</option>
                                                    <option :value="key" v-for="(value, key) in cities" :key="key">{{
                                                        value }}</option>
                                                </select>
                                                <small id="sh-text1" class="block text-muted">City</small>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-4">
                                                <select class="form-control" id="inputDistrict"
                                                    :disabled="!selectedCity" v-model="selectedDistrict"
                                                    @change="fetchSubdistricts" required="required">
                                                    <option value="" selected>Select district</option>
                                                    <option :value="key" v-for="(value, key) in districts" :key="key">{{
                                                        value }}</option>
                                                </select>
                                                <small id="sh-text1" class="block text-muted">District</small>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <select class="form-control" id="inputSubdistrict"
                                                    :disabled="!selectedDistrict" v-model="selectedSubDistrict"
                                                    @change="fetchPostcode" required="required">
                                                    <option value="" selected>Select subdistrict</option>
                                                    <option :value="key" v-for="(value, key) in subdistricts"
                                                        :key="key">{{
                                                        value }}</option>
                                                </select>
                                                <small id="sh-text1" class="block text-muted">Subdistrict</small>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <input type="text" class="form-control" id="inputPostcode"
                                                    :disabled="!selectedDistrict" v-model="selectedPostcode"
                                                    placeholder="Postcode" />
                                                <small id="sh-text1" class="block text-muted">Postcode</small>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-12">
                                                <input type="text" class="form-control" id="inputAddress"
                                                    :disabled="!selectedDistrict" v-model="selectedAddress"
                                                    placeholder="Address" required="required" />
                                                <small id="sh-text1" class="block text-muted">Address</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <div class="row">
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" id="inputProvince"
                                                    v-model="data_province" readonly="" />
                                                <small id="sh-text1" class="block text-muted">Province</small>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" id="inputCity"
                                                    v-model="data_city" readonly="" />
                                                <small id="sh-text1" class="block text-muted">City</small>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-4">
                                                <input type="text" class="form-control" id="inputDistrict"
                                                    v-model="data_district" readonly="" />
                                                <small id="sh-text1" class="block text-muted">District</small>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <input type="text" class="form-control" id="inputSubdistrict"
                                                    v-model="data_subdistrict" readonly="" />
                                                <small id="sh-text1" class="block text-muted">Subdistrict</small>
                                            </div>
                                            <div class="form-group col-md-4">
                                                <input type="text" class="form-control" id="inputPostcode"
                                                    v-model="data_postcode" readonly="" />
                                                <small id="sh-text1" class="block text-muted">Postcode</small>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-12">
                                                <input type="text" class="form-control" id="inputAddress"
                                                    v-model="data_address" readonly="readonly" />
                                                <small id="sh-text1" class="block text-muted">Address</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xl-12 col-md-12 col-sm-12 col-12 ps-0">
                                                    <h4 class="text-decoration-underline">Documents</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 col-sm-12 col-12 ps-0">
                                                <div class="dropzone" ref="dropzoneRef">
                                                    <div class="fallback">
                                                        <input ref="fileInput" type="file" multiple />
                                                    </div>
                                                    <div class="dz-message">
                                                        Drag files here or click to upload.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12 ps-0">
                                            <button v-if="!loading" type="submit" class="btn btn-primary">Save</button>
                                            <button v-else type="button" class="btn btn-danger btn-lg mb-3 me-3"
                                                disabled><span
                                                    class="spinner-border text-white me-2 align-self-center loader-sm">Loading...</span>
                                                Loading</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isLoading" class="loading-overlay">
            <div class="spinner-border text-success align-self-center">Loading...</div>
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
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useMeta } from '@/composables/use-meta';
import '@/assets/sass/pages/error/style-400.scss';
import config from '@/config/config.js';
import { isLoading } from '@/router/loading_router';
import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css';
import baguetteBox from 'baguettebox.js';
import 'baguettebox.js/dist/baguetteBox.min.css';

useMeta({ title: 'Setting - Attorney' });

const token = localStorage.getItem('token'); // token
const successMessage = ref('');
const failedMessage = ref('');
const fullAddressData = ref(false);
const loading = ref(false);
const isPemissionOK = ref(true);

// assign parameters
const errorMessage = ref('');
const title = ref('');
const name = ref('');
const position = ref('');
const email = ref('');
const phone = ref('');
const id_type = ref('');
const id_number = ref('');
const nationality = ref('');

// variable
const provinces = ref([]);
const cities = ref([]);
const districts = ref([]);
const subdistricts = ref([]);
const data_province = ref('');
const data_city = ref('');
const data_district = ref('');
const data_subdistrict = ref('');
const data_postcode = ref('');
const data_address = ref('');
const attachments = ref([]);
const selectedProvince = ref('');
const selectedProvince_text = ref('');
const selectedCity = ref('');
const selectedCity_text = ref('');
const selectedDistrict = ref('');
const selectedDistrict_text = ref('');
const selectedSubDistrict = ref('');
const selectedSubDistrict_text = ref('');
const selectedAddress = ref('');
const selectedPostcode = ref('');
const updated_by = ref('');
const updated_at = ref('');

// upload images
const dropzoneRef = ref(null);
const fileInput = ref(null);
const uploadedFiles = ref([]);

let myDropzone;

onMounted(() => {
    myDropzone = new Dropzone(dropzoneRef.value, {
    url : '/upload',
    autoProcessQueue: false,
    uploadMultiple:true,
    addRemoveLinks: true,
    renameFile:true,
    maxFiles: 1,
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
  uploadedFiles.value.splice(index, 1);
};
// end upload images

// start upload
const submitForm = async () => {
    if (uploadedFiles.value.length > 0) {
        await new Promise((resolve) => {
            const intervalId = setInterval(() => {
                if (uploadedFiles.value.length > 0) {
                    clearInterval(intervalId);
                    resolve();
                }
            }, 100);
        });
    }

    const formData = new FormData();

    uploadedFiles.value.forEach(file => {
        formData.append('files[]', file);
    });

    formData.append('title', title.value);
    formData.append('name', name.value);
    formData.append('position', name.value);
    formData.append('email', email.value);
    formData.append('phone', phone.value);
    formData.append('id_type', id_type.value);
    formData.append('id_number', id_number.value);
    formData.append('nationality', nationality.value);

    if (!selectedProvince_text.value && !selectedCity_text.value && !selectedDistrict_text.value && !selectedSubDistrict_text.value && !selectedAddress.value) {
        formData.append('province', data_province.value);
        formData.append('city', data_city.value);
        formData.append('subdistrict', data_subdistrict.value);
        formData.append('district', data_district.value);
        formData.append('address', data_address.value);
        formData.append('postcode', data_postcode.value);
    }
    else {
        formData.append('province', selectedProvince_text.value);
        formData.append('city', selectedCity_text.value);
        formData.append('subdistrict', selectedDistrict_text.value);
        formData.append('district', selectedSubDistrict_text.value);
        formData.append('postcode', selectedPostcode.value);
        formData.append('address', selectedAddress.value);
    }

    try{
        loading.value = true;
        const response = await axios.post(`${config.baseAPIURL}attorney/update`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });

        loading.value = false;
        if (response.data.message) {
            successMessage.value = response.data.message;
            failedMessage.value = '';
        }
    } catch (error) {
        loading.value = false;
        if (error.response && error.response.data && error.response.data.message) {
            failedMessage.value = error.response.data.message;
            successMessage.value = '';
        } else {
            console.error('Error submitting form:', error);
        }
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
// end form submit

// edit mode address
const isEditMode = ref(false);
const toggleEditMode = () => {
  isEditMode.value = !isEditMode.value;
};
// end edit mode address

const fetchCities = async (event) => {
    try {
        selectedProvince_text.value = event.target.options[event.target.selectedIndex].text;
        const response = await axios.get(`${config.baseAPIURL}zone/city/${selectedProvince.value}`, {
            headers: {
            Authorization: `Bearer ${token}`
        }
        });
        cities.value = response.data;

        selectedCity.value = '';
        selectedDistrict.value = '';
        selectedSubDistrict.value = '';
        selectedPostcode.value = '';

    } catch (error) {
        console.error(error);
    }
};

const fetchDistricts = async (event) => {
    try {
        selectedCity_text.value = event.target.options[event.target.selectedIndex].text;
        const response = await axios.get(`${config.baseAPIURL}zone/district/${selectedCity.value}`, {
                headers: {
                Authorization: `Bearer ${token}`
            }
        });
        districts.value = response.data;

        selectedDistrict.value = '';
        selectedSubDistrict.value = '';
        selectedPostcode.value = '';
    } catch (error) {
        console.error(error);
    }
};

const fetchSubdistricts = async (event) => {
    try {
        selectedDistrict_text.value = event.target.options[event.target.selectedIndex].text;
        const response = await axios.get(`${config.baseAPIURL}zone/subdistrict/${selectedDistrict.value}`, {
                headers: {
                Authorization: `Bearer ${token}`
            }
        });
        subdistricts.value = response.data;
        selectedSubDistrict.value = '';

    } catch (error) {
        console.error(error);
    }
};

const fetchPostcode = async (event) => {
    try {
        selectedSubDistrict_text.value = event.target.options[event.target.selectedIndex].text;
        const response = await axios.get(`${config.baseAPIURL}zone/postcode/${selectedSubDistrict.value}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        selectedPostcode.value = '';
        if (response.data.pos == 'NULL') selectedPostcode.value = "";
        else selectedPostcode.value = response.data.pos;

    } catch (error) {
        console.error(error);
    }
};

function getImageUrl(imageName) {
  return require(`@/assets/images/${imageName}`);
}

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
    isPemissionOK.value = await checkSinglePermission('attorneyPage');
  try {
    const response = await axios.get(`${config.baseAPIURL}zone/province`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    provinces.value = response.data;
  } catch (error) {
    console.error(error);
  }

  try {
    const response = await axios.get(`${config.baseAPIURL}attorney`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const attorneyData = response.data.data;
    title.value = attorneyData.title;
    name.value = attorneyData.name;
    position.value = attorneyData.position;
    email.value = attorneyData.email;
    phone.value = attorneyData.phone;
    id_type.value = attorneyData.id_type;
    id_number.value = attorneyData.id_number;
    nationality.value = attorneyData.nationality;
    attachments.value = response.data.attachment_urls;
    updated_by.value = attorneyData.updated_by;
    updated_at.value = attorneyData.updated_at_formatted;

    const addressObject = JSON.parse(attorneyData.address);

    data_province.value = addressObject.province;
    data_city.value = addressObject.city;
    data_district.value = addressObject.district;
    data_subdistrict.value = addressObject.subdistrict;
    data_postcode.value = addressObject.postcode;
    data_address.value = addressObject.street_address;

    attachments.value.forEach(filePath => {
        const file = {
            name: filePath.split('/').pop(),
            size: 0,
            url: `${config.baseAPIURL}storage/uploads/${filePath.split('/').pop()}`
        };

        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', file.url);

        const imageLink = document.createElement('a');
        imageLink.setAttribute('href', file.url);
        imageLink.setAttribute('data-baguettebox', 'gallery');
        imageLink.appendChild(imgElement);

        const removeLink = document.createElement('a');
        removeLink.setAttribute('href', 'javascript:void(0)');
        removeLink.className = 'dz-remove';
        removeLink.textContent = 'Remove file';
        removeLink.addEventListener('click', () => {
        const index = myDropzone.files.findIndex(f => f.url === file.url);
            if (index !== -1) {
                myDropzone.files.splice(index, 1);
                dzPreviewDiv.remove();
            }
        });

        const dzImageDiv = document.createElement('div');
        dzImageDiv.className = 'dz-image';
        dzImageDiv.appendChild(imageLink);

        const dzPreviewDiv = document.createElement('div');
        dzPreviewDiv.className = 'dz-preview dz-image-preview';
        dzPreviewDiv.appendChild(dzImageDiv);
        dzPreviewDiv.appendChild(removeLink);

        myDropzone.element.appendChild(dzPreviewDiv);

        myDropzone.files.push(file);
    });

    baguetteBox.run('.dz-image a[data-baguettebox="gallery"]');

  } catch (error) {
    errorMessage.value = error.response.data.message;
  }
});

</script>
<style>
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
  z-index:9999;
}

.dz-image {
  cursor: pointer;
}
.dz-progress {
    display:none;
}
.dz-preview .dz-image img {
    max-width:200px;
}
.dropzone .dz-preview:hover .dz-image img {
    -webkit-transform: none;
    transform: none;
    -webkit-filter: none;
    filter: none;
    cursor: pointer;
    width: 100%;
}
.expand_collapse {
    cursor:pointer;
}
.badge-title {
    font-size: 14px;
    text-transform: uppercase;
}
</style>
