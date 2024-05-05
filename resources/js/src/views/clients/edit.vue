<template>
    <div v-if="isPemissionOK" class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Client</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Edit</span></li>
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
                        <router-link to="/clients" class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block ml-1" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                            <span class="ms-2">Back to clients list</span>
                        </router-link>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 text-start">
                        <small>{{ created_by ? 'created by: ' + created_by + ' | ' + created_at : '' }}</small>
                    </div>
                    <div class="col-6 text-end">
                        <small>{{ updated_by ? 'last updated by: ' + updated_by + ' | ' + updated_at : '' }}</small>
                    </div>
                </div>
                <div class="panel br-6 p-0">
                    <div id="flFormsGrid" class="col-lg-12">
                        <div class="statbox panel box box-shadow">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <span class="badge-title badge badge-dark badge-classic">edit client</span>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div v-if="$route.query.successMessage"
                                    class="route_message alert alert-light-primary alert-dismissible border-0 mb-4">{{
                                    $route.query.successMessage }}</div>
                                <div v-if="successMessage"
                                    class="alert alert-light-primary alert-dismissible border-0 mb-4">{{ successMessage
                                    }}</div>
                                <div v-if="errorMessage" class="alert alert-danger alert-dismissible border-0 mb-4">{{
                                    errorMessage
                                    }}</div>
                                <form @submit.prevent="submitForm">
                                    <div class="row">
                                        <input type="hidden" v-model="id">
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
                                            <input type="text" class="form-control" id="inputClientCode"
                                                v-model="client_code" placeholder="Code" required="required" readonly />
                                            <small id="sh-text1" class="block text-muted">Client Code</small>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="date" class="form-control" id="date" v-model="register_date"
                                                placeholder="Date" required="required" />
                                            <small id="sh-text1" class="block text-muted">Register Date</small>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <select id="title" class="form-select" v-model="title" required="required">
                                                <option value="" selected>Title</option>
                                                <option value="Bapak">Bapak</option>
                                                <option value="Ibu">Ibu</option>
                                            </select>
                                            <small id="sh-text1" class="block text-muted">Title</small>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="text" class="form-control" id="inputClientCode" v-model="name"
                                                placeholder="Name" required="required" />
                                            <small id="sh-text1" class="block text-muted">Name</small>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <input type="email" class="form-control" id="inputEmail" v-model="email"
                                                placeholder="Email" required="required" />
                                            <small id="sh-text1" class="block text-muted">Email</small>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="text" class="form-control" id="inputTelephone" v-model="phone"
                                                placeholder="Phone" required="required" />
                                            <small id="sh-text1" class="block text-muted">Phone</small>
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
                                            <select id="id_type" class="form-select" v-model="id_type"
                                                required="required">
                                                <option value="" selected>ID Type</option>
                                                <option value="KTP">KTP</option>
                                                <option value="Passport">Passport</option>
                                                <option value="NPWP">NPWP</option>
                                            </select>
                                            <small id="sh-text1" class="block text-muted">ID Type</small>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <input type="text" class="form-control" id="inputIdNumber"
                                                v-model="id_number" placeholder="ID Number" required="required" />
                                            <small id="sh-text1" class="block text-muted">ID Number</small>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <select id="nationality" class="form-select" v-model="nationality"
                                                required="required">
                                                <option value="" selected>Nationality</option>
                                                <option value="WNI">WNI</option>
                                                <option value="WNA">WNA</option>
                                            </select>
                                            <small id="sh-text1" class="block text-muted">Nationality</small>
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
                                                    <h4 class="text-decoration-underline">Personal Bank</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" id="inputBankName"
                                                    v-model="personal_bank_name" placeholder="Bank Name"
                                                    required="required" />
                                                <small id="sh-text1" class="block text-muted">Bank Name</small>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" id="inputBeneficiaryName"
                                                    v-model="personal_beneficiary_name" placeholder="Beneficiary Name"
                                                    required="required" />
                                                <small id="sh-text1" class="block text-muted">Beneficiary Name</small>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" id="inputAccountNumber"
                                                    v-model="personal_account_number" placeholder="Account Number"
                                                    required="required" />
                                                <small id="sh-text1" class="block text-muted">Account Number</small>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" id="inputBranch"
                                                    v-model="personal_branch" placeholder="Branch"
                                                    required="required" />
                                                <small id="sh-text1" class="block text-muted">Branch</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xl-12 col-md-12 col-sm-12 col-12 p-0">
                                                    <h4 class="text-decoration-underline">RDN Bank Detail</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" id="inputBankNameRDN"
                                                    v-model="rdn_bank_name" placeholder="Bank Name"
                                                    required="required" />
                                                <small id="sh-text1" class="block text-muted">Bank Name</small>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" id="inputBeneficiaryNameRDN"
                                                    v-model="rdn_beneficiary_name" placeholder="Beneficiary Name"
                                                    required="required" />
                                                <small id="sh-text1" class="block text-muted">Beneficiary Name</small>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" id="inputAccountNumberRDN"
                                                    v-model="rdn_account_number" placeholder="Account Number"
                                                    required="required" />
                                                <small id="sh-text1" class="block text-muted">Account Number</small>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" id="inputBranchRDN"
                                                    v-model="rdn_branch" placeholder="Branch" required="required" />
                                                <small id="sh-text1" class="block text-muted">Branch</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xl-12 col-md-12 col-sm-12 col-12 p-0">
                                                    <h4 class="text-decoration-underline">Attachment</h4>
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
    </div>
    <div v-else class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Client</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>View</span></li>
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
                        <router-link to="/clients" class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block ml-1" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                            <span class="ms-2">Back to clients list</span>
                        </router-link>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 text-start">
                        <small>{{ created_by ? 'created by: ' + created_by + ' | ' + created_at : '' }}</small>
                    </div>
                    <div class="col-6 text-end">
                        <small>{{ updated_by ? 'last updated by: ' + updated_by + ' | ' + updated_at : '' }}</small>
                    </div>
                </div>
                <div class="panel br-6 p-0">
                    <div id="flFormsGrid" class="col-lg-12">
                        <div class="statbox panel box box-shadow">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <span class="badge-title badge badge-dark badge-classic">view client</span>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div v-if="$route.query.successMessage"
                                    class="route_message alert alert-light-primary alert-dismissible border-0 mb-4">{{
                                    $route.query.successMessage }}</div>
                                <div v-if="successMessage"
                                    class="alert alert-light-primary alert-dismissible border-0 mb-4">{{ successMessage
                                    }}</div>
                                <div v-if="errorMessage" class="alert alert-danger alert-dismissible border-0 mb-4">{{
                                    errorMessage
                                    }}</div>
                                <form @submit.prevent="submitForm">
                                    <div class="row">
                                        <input type="hidden" v-model="id">
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
                                            <input type="text" class="form-control" id="inputClientCode"
                                                v-model="client_code" placeholder="Code" required="required" readonly />
                                            <small id="sh-text1" class="block text-muted">Client Code</small>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="text" class="form-control" id="date" v-model="formattedDate"
                                                placeholder="Date" required="required" readonly />
                                            <small id="sh-text1" class="block text-muted">Register Date</small>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <select id="title" class="form-select" v-model="title" required="required"
                                                readonly>
                                                <option value="" selected>Title</option>
                                                <option value="Bapak">Bapak</option>
                                                <option value="Ibu">Ibu</option>
                                            </select>
                                            <small id="sh-text1" class="block text-muted">Title</small>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="text" class="form-control" id="inputClientCode" v-model="name"
                                                placeholder="Name" required="required" readonly />
                                            <small id="sh-text1" class="block text-muted">Name</small>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <input type="email" class="form-control" id="inputEmail" v-model="email"
                                                placeholder="Email" required="required" readonly />
                                            <small id="sh-text1" class="block text-muted">Email</small>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="text" class="form-control" id="inputTelephone" v-model="phone"
                                                placeholder="Phone" required="required" readonly />
                                            <small id="sh-text1" class="block text-muted">Phone</small>
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
                                            <select id="id_type" class="form-select" v-model="id_type"
                                                required="required" readonly>
                                                <option value="" selected>ID Type</option>
                                                <option value="KTP">KTP</option>
                                                <option value="Passport">Passport</option>
                                                <option value="NPWP">NPWP</option>
                                            </select>
                                            <small id="sh-text1" class="block text-muted">ID Type</small>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <input type="text" class="form-control" id="inputIdNumber"
                                                v-model="id_number" placeholder="ID Number" required="required"
                                                readonly />
                                            <small id="sh-text1" class="block text-muted">ID Number</small>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <select id="nationality" class="form-select" v-model="nationality"
                                                required="required" readonly>
                                                <option value="" selected>Nationality</option>
                                                <option value="WNI">WNI</option>
                                                <option value="WNA">WNA</option>
                                            </select>
                                            <small id="sh-text1" class="block text-muted">Nationality</small>
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
                                    <div>
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
                                                    <h4 class="text-decoration-underline">Personal Bank</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" id="inputBankName"
                                                    v-model="personal_bank_name" placeholder="Bank Name"
                                                    required="required" readonly />
                                                <small id="sh-text1" class="block text-muted">Bank Name</small>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" id="inputBeneficiaryName"
                                                    v-model="personal_beneficiary_name" placeholder="Beneficiary Name"
                                                    required="required" readonly />
                                                <small id="sh-text1" class="block text-muted">Beneficiary Name</small>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" id="inputAccountNumber"
                                                    v-model="personal_account_number" placeholder="Account Number"
                                                    required="required" readonly />
                                                <small id="sh-text1" class="block text-muted">Account Number</small>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" id="inputBranch"
                                                    v-model="personal_branch" placeholder="Branch" required="required"
                                                    readonly />
                                                <small id="sh-text1" class="block text-muted">Branch</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xl-12 col-md-12 col-sm-12 col-12 p-0">
                                                    <h4 class="text-decoration-underline">RDN Bank Detail</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" id="inputBankNameRDN"
                                                    v-model="rdn_bank_name" placeholder="Bank Name" required="required"
                                                    readonly />
                                                <small id="sh-text1" class="block text-muted">Bank Name</small>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" id="inputBeneficiaryNameRDN"
                                                    v-model="rdn_beneficiary_name" placeholder="Beneficiary Name"
                                                    required="required" readonly />
                                                <small id="sh-text1" class="block text-muted">Beneficiary Name</small>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" id="inputAccountNumberRDN"
                                                    v-model="rdn_account_number" placeholder="Account Number"
                                                    required="required" readonly />
                                                <small id="sh-text1" class="block text-muted">Account Number</small>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" id="inputBranchRDN"
                                                    v-model="rdn_branch" placeholder="Branch" required="required"
                                                    readonly />
                                                <small id="sh-text1" class="block text-muted">Branch</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xl-12 col-md-12 col-sm-12 col-12 p-0">
                                                    <h4 class="text-decoration-underline">Attachment</h4>
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
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import { useMeta } from '@/composables/use-meta';
import { useRouter } from 'vue-router';
import config from '@/config/config.js';
import { isLoading } from '@/router/loading_router';
import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css';
import baguetteBox from 'baguettebox.js';
import 'baguettebox.js/dist/baguetteBox.min.css';

const todayISO = new Date().toISOString().split('T')[0];
function formatToDDMMYYYY(dateISO) {
    const [year, month, day] = dateISO.split('-');
    return `${day}/${month}/${year}`;
}

const register_date = ref(todayISO);
const register_date_formatted = ref(todayISO);
const formattedRDate = computed(() => {
    return formatToDDMMYYYY(register_date_formatted.value);
});

const formattedDate = computed(() => {
    return formatToDDMMYYYY(register_date_formatted.value);
});

const token = localStorage.getItem('token');

const loading = ref(false);
const errorMessage = ref('');
const id = ref('');
const name = ref('');
const email = ref('');
const nationality = ref("");
const id_type = ref("");
const id_number = ref("");
const client_code = ref("");
const title = ref("");
const phone = ref("");
const personal_bank_name = ref("");
const personal_beneficiary_name = ref("");
const personal_account_number = ref("");
const personal_branch = ref("");
const rdn_bank_name = ref("");
const rdn_beneficiary_name = ref("");
const rdn_account_number = ref("");
const rdn_branch = ref("");
const updated_by = ref('');
const updated_at = ref('');
const created_by = ref('');
const created_at = ref('');

const isEditMode = ref(false);
const toggleEditMode = () => {
    isEditMode.value = !isEditMode.value;
};

const successMessage = ref('');
const failedMessage = ref('');
const provinces = ref([]);
const cities = ref([]);
const districts = ref([]);
const subdistricts = ref([]);
const attachments = ref([]);
const selectedProvince = ref('');
const selectedProvince_text = ref('');
const selectedCity = ref('');
const selectedCity_text = ref('');
const selectedDistrict = ref('');
const selectedDistrict_text = ref('');
const data_province = ref('');
const data_city = ref('');
const data_district = ref('');
const data_subdistrict = ref('');
const data_postcode = ref('');
const data_address = ref('');
const selectedSubDistrict = ref('');
const selectedSubDistrict_text = ref('');
const selectedAddress = ref('');
const selectedPostcode = ref('');

const router = useRouter();

useMeta({ title: 'Client - Edit' });

// upload images
const dropzoneRef = ref(null);
const fileInput = ref(null);
const uploadedFiles = ref([]);

let myDropzone;
// end upload images

const submitForm = async () => {
    const formData = new FormData();

    formData.append('code', client_code.value);
    formData.append('register_date', register_date.value);
    formData.append('title', title.value);
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('phone', phone.value);
    formData.append('id_type', id_type.value);
    formData.append('id_number', id_number.value);
    formData.append('nationality', nationality.value);
    formData.append('personal_bank_name', personal_bank_name.value);
    formData.append('personal_beneficiary_name', personal_beneficiary_name.value);
    formData.append('personal_account_number', personal_account_number.value);
    formData.append('personal_branch', personal_branch.value);
    formData.append('rdn_bank_name', rdn_bank_name.value);
    formData.append('rdn_beneficiary_name', rdn_beneficiary_name.value);
    formData.append('rdn_account_number', rdn_account_number.value);
    formData.append('rdn_branch', rdn_branch.value);

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

    try {
        loading.value = true;
        const response = await axios.put(`${config.baseAPIURL}clients/update/${id.value}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        const FileformData = new FormData();

        uploadedFiles.value.forEach(file => {
            FileformData.append('files[]', file);
            FileformData.append('id', id.value);
        });

        loading.value = false;
        if (response.data.message) {
            successMessage.value = response.data.message;
            failedMessage.value = '';

            const alertElement = document.querySelector('.route_message.alert-light-primary');
            if (alertElement) {
                alertElement.remove();
            }
        }
    } catch (error) {
        loading.value = false;
        if (error.response && error.response.data && error.response.data.message) {
            failedMessage.value = error.response.data.message;
            successMessage.value = '';
        } else {
            console.error('Error submitting form:', error);
        }

        const newPath = `${config.baseAPIURL}clients/update/${id.value}`;
        window.history.replaceState({}, '', newPath);

        const alertElement = document.querySelector('.route_message.alert-light-primary');
        if (alertElement) {
            alertElement.remove();
        }
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

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
    isPemissionOK.value = await checkSinglePermission('editClient');

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
        const clientId = router.currentRoute.value.params.Id;
        const response = await axios.get(`${config.baseAPIURL}clients/show/${clientId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const client_response = response.data.data;

        id.value = client_response.id;
        client_code.value = client_response.code;
        register_date.value = client_response.register_date_formatted;
        register_date_formatted.value = client_response.register_date_formatted;
        title.value = client_response.title;
        name.value = client_response.name;
        email.value = client_response.email;
        phone.value = client_response.phone;
        id_type.value = client_response.id_type;
        id_number.value = client_response.id_number;
        nationality.value = client_response.nationality;
        personal_bank_name.value = client_response.personal_bank_name;
        personal_beneficiary_name.value = client_response.personal_beneficiary_name;
        personal_account_number.value = client_response.personal_account_number;
        personal_branch.value = client_response.personal_branch;
        rdn_bank_name.value = client_response.rdn_bank_name;
        rdn_beneficiary_name.value = client_response.rdn_beneficiary_name;
        rdn_account_number.value = client_response.rdn_account_number;
        rdn_branch.value = client_response.rdn_branch;
        attachments.value = response.data.attachment_urls;
        updated_by.value = client_response.updated_by;
        updated_at.value = client_response.updated_at_formatted;
        created_by.value = client_response.created_by;
        created_at.value = client_response.created_at_formatted;
        const addressObject = JSON.parse(client_response.address);

        data_province.value = addressObject.province;
        data_city.value = addressObject.city;
        data_district.value = addressObject.district;
        data_subdistrict.value = addressObject.subdistrict;
        data_postcode.value = addressObject.postcode;
        data_address.value = addressObject.street_address;

        myDropzone = new Dropzone(dropzoneRef.value, {
            url: `${config.baseAPIURL}clients/upload_attachments/${id.value}`,
            autoProcessQueue: true,
            uploadMultiple: true,
            addRemoveLinks: true,
            renameFile: false,
            maxFiles: 10,
            acceptedFiles: 'image/*',
            headers: {
                Authorization: `Bearer ${token}`
            },
            init: function () {
                this.on('addedfile', function (file) {
                    if (!uploadedFiles.value.some(f => f.name === file.name)) {
                        uploadedFiles.value.push(file);
                    }
                });
                this.on('success', function (file, response) {
                    const newFileName = response.files;
                    if (newFileName) {
                        file.upload.filename = newFileName;
                    }
                });
                this.on('removedfile', async function (file) {
                    try {
                        const response = await axios.post(`${config.baseAPIURL}clients/remove_attachment/${id.value}`, {
                            fileName: file.upload.filename
                        }, {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        });
                        if (response.data.success) {
                            //console.log('File removed successfully from server.');
                        } else {
                            console.error('Failed to remove file from server:', response.data.message);
                        }

                        // Remove the file from the uploadedFiles array
                        const index = uploadedFiles.value.findIndex(f => f.name === file.upload.filename);
                        if (index !== -1) {
                            uploadedFiles.value.splice(index, 1);
                        }
                    } catch (error) {
                        console.error('Error removing file:', error);
                    }
                });
                this.on('complete', function (file) {
                    //this.removeFile(file);
                });
                this.on('error', function (file, errorMessage) {
                    console.error('Error uploading file:', errorMessage);
                });
            },
        });

        attachments.value.forEach(filePath => {
            const file = {
                name: filePath.split('/').pop(),
                size: 0,
                url: `${config.baseAPIURL}storage/uploads/clients/${filePath.split('/').pop()}`
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
            removeLink.addEventListener('click', async () => {
                try {
                    if (confirm("Are you sure want to remove this file? this can't be undone")) {
                        const response = await axios.post(
                            `${config.baseAPIURL}clients/remove_attachment/${id.value}`,
                            { url: file.url },
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }
                            }
                        );

                        if (response.data.success) {
                            const index = myDropzone.files.findIndex(f => f.url === file.url);
                            if (index !== -1) {
                                myDropzone.files.splice(index, 1);
                                dzPreviewDiv.remove();
                            }
                        } else {
                            console.error('Failed to remove image:', response.data.message);
                        }
                    }
                } catch (error) {
                    console.error('Error removing image:', error);
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

router.afterEach(() => {
    window.scrollTo(0, 0);
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
.dz-preview .dz-image img {
    width: 100%;
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

.expand_collapse {
    cursor: pointer;
}

.badge-title {
    font-size: 14px;
    text-transform: uppercase;
}
</style>
