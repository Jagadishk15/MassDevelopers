<!--<template>
    <div class="overall-bg">
        <b-container>
            <BacktoPage></BacktoPage>
            <Headerlayout headertext="Create a new Store" contenttext="The supplier list for a hospital is a
                comprehensive list of vendors who provide necessary products and services to the hospital. 
                It includes contact information for each supplier, along with product and service details.
                 The list helps ensure that the hospital receives the highest quality products and services.">
            </Headerlayout>
        </b-container>

        <b-container class="form-white-bg py-4 px-3">
            <b-row>
                <b-col class="pt-2" lg="12" cols="12">
                    <h6>Store Type</h6>
                </b-col>
                <b-row>
                </b-row>
                <b-tabs class="btstabs" pills card>
                    <b-tab title="Main Store" active>
                        <n-form ref="formRef" :model="MainStoreformValue" :rules="rules">
                            <b-row>
                                <b-col lg="3" md="4" sm="6" cols="8">
                                    <n-form-item label="Display Store Id" path="Stored.storeInfo.storeid">
                                        <n-input v-model:value="Stored.storeInfo.storeid" class="DS-Id" type="text"
                                            placeholder="Enter Display Store Id" />
                                    </n-form-item>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" md="6" sm="12" cols="12">
                                    <n-form-item label="Store Name" path="Stored.storeInfo.storename">
                                        <n-input v-model:value="Stored.storeInfo.storename" class="DS-Id" type="text"
                                            placeholder="Enter Store Name" />
                                    </n-form-item>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="3" md="4" sm="6" cols="8">
                                    <n-form-item label="Inventory Managed at">
                                        <ManagedAt />
                                    </n-form-item>
                                </b-col>
                                <b-col lg="3" md="4" sm="6" cols="8">
                                    <n-form-item label="Branch">
                                        <Branch />
                                    </n-form-item>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" md="6" sm="12" cols="12">
                                    <n-form-item label="Choose Sub-Store">
                                        <Substore />
                                    </n-form-item>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" md="6" sm="12" cols="12">
                                    <ContactDetails />
                                </b-col>
                            </b-row>
                            <b-row class="py-5">
                                <Description />
                            </b-row>
                            <b-row>
                                <div class="d-flex flex-row-reverse">
                                    <Save class="mx-2" />
                                    <Cancel />
                                </div>
                            </b-row>
                        </n-form>
                    </b-tab>
                    <!-- <b-tab title="Sub Store">
                        <b-row>
                            <n-form ref="formRef" :model="Stored.mainstore" :rules="Stored.rules">

                                <b-row>
                                    <b-col lg="3" md="4" sm="6" cols="8">
                                        <n-form-item label="Display Store Id" path="Stored.storeInfo.storeid">
                                            <n-input v-model:value="Stored.storeInfo.storeid" class="DS-Id" type="text"
                                                placeholder="Enter Display Store Id" />
                                        </n-form-item>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col lg="6" md="6" sm="12" cols="12">
                                        <n-form-item label="Store Name" path="Stored.storeInfo.storename">
                                            <n-input v-model:value="Stored.storeInfo.storename" class="DS-Id"
                                                type="text" placeholder="Enter Store Name" />
                                        </n-form-item>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col lg="3" md="4" sm="6" cols="8">
                                        <n-form-item label="Branch">
                                            <Branch />
                                        </n-form-item>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col lg="6" md="6" sm="12" cols="12">
                                        <n-form-item label="Choose Main Store">
                                            <DepartmentStore />
                                        </n-form-item>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col lg="6" md="6" sm="12" cols="12">
                                        <n-form-item label="Choose Department Store">
                                            <MainStore />
                                        </n-form-item>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col lg="3" md="4" sm="6" cols="8">
                                        <n-form-item label="Transaction Billing Allowed" path="radioGroupValue">
                                            <n-radio-group name="radiogroup1">
                                                <n-space>
                                                    <n-radio value="Yes">
                                                        Yes
                                                    </n-radio>
                                                    <n-radio value="No">
                                                        No
                                                    </n-radio>
                                                </n-space>
                                            </n-radio-group>
                                        </n-form-item>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col lg="6" md="6" sm="12" cols="12">
                                        <ContactDetails />
                                    </b-col>
                                </b-row>
                                <b-row class="py-5">
                                    <Description />
                                </b-row>
                                <b-row>
                                    <div class="d-flex flex-row-reverse">
                                        <Save class="mx-2" />
                                        <Cancel />
                                    </div>
                                </b-row>
                            </n-form>
                        </b-row>
                    </b-tab>
                    <b-tab title="Dept.Store">
                        <n-form ref="formRef" :model="Stored.mainstore" :rules="Stored.rules">
                            <b-row>
                                <b-col lg="3" md="4" sm="6" cols="8">
                                    <n-form-item label="Display Store Id" path="Stored.storeInfo.storeid">
                                        <n-input v-model:value="Stored.storeInfo.storeid" class="DS-Id" type="text"
                                            placeholder="Enter Display Store Id" />
                                    </n-form-item>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" md="6" sm="12" cols="12">
                                    <n-form-item label="Store Name" path="Stored.storeInfo.storename">
                                        <n-input v-model:value="Stored.storeInfo.storename" class="DS-Id" type="text"
                                            placeholder="Enter Store Name" />
                                    </n-form-item>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="3" md="4" sm="6" cols="8">
                                    <n-form-item label="Branch">
                                        <Branch />
                                    </n-form-item>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" md="6" sm="12" cols="12">
                                    <n-form-item label="Tag SubStore/Main Store">
                                        <TagSubandMainStore />
                                    </n-form-item>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" md="6" sm="12" cols="12" class="mt-3">
                                    <DepartmentStoreDetails />
                                </b-col>
                                <b-col lg="6" md="6" sm="12" cols="12" class="mt-3">
                                    <ContactDetails />
                                </b-col>
                            </b-row>
                            <b-row class="py-5">
                                <Description />
                            </b-row>
                            <b-row>
                                <div class="d-flex flex-row-reverse">
                                    <Save class="mx-2" @savebtn="handleValidateClick" />
                                    <Cancel />
                                </div>
                            </b-row>
                        </n-form>
                    </b-tab> --
                </b-tabs>
            </b-row>
        </b-container>
    </div>

</template>-->
    
<script lang="ts">
// import { defineComponent, ref } from 'vue'
// import Headerlayout from '@/components/Masters/HeaderLayout.vue'
// import BacktoPage from '@/components/FormComponents/BacktoMaster.vue'
// import ContactDetails from '../../../components/MastersforInventory/contactdetails.vue'
// import Description from '../../../components/MastersforInventory/Description.vue'
// import DepartmentStoreDetails from '../../../components/MastersforInventory/DepartmentStoreDetails.vue'
// import Cancel from '../../../../../components/GeneralButtons/CancelButtton.vue'
// import Save from '../../../../../components/GeneralButtons/SaveButton.vue'


// import Branch from '../../../components/DropDown/StoreBranch.vue'
// import ManagedAt from '../../../components/DropDown/InventoryManagedAt.vue'
// import TagSubandMainStore from '../../../components/MultiSelectDropDown/TagSubandMainStore.vue'
// import MainStore from '../../../components/MultiSelectDropDown/MainStore.vue'
// import Substore from '../../../components/MultiSelectDropDown/SubStore.vue'
// import DepartmentStore from '../../../components/MultiSelectDropDown/DepartmentStore.vue'

// import { createStore } from '../../../stores/MasterCreation/CreateStores'

// import { FormInst, useMessage } from 'naive-ui'
// import { requiredMessage } from '../../../Utils/String'


// export default defineComponent({
//     components: {
//         BacktoPage,
//         Headerlayout,
//         ContactDetails,
//         Description,
//         DepartmentStoreDetails,
//         Cancel,
//         Save,
//         ManagedAt,
//         Branch,
//         MainStore,
//         Substore,
//         DepartmentStore,
//         TagSubandMainStore
//     },
//     setup() {
//         const Stored = createStore()
//         const formRef = ref<FormInst | null>(null)
//         const message = useMessage()
//         return {
//             Stored,
//             value: ref(null),
//             handleValidateClick(e: MouseEvent) {
//                 e.preventDefault()
//                 formRef.value?.validate((errors) => {
//                     if (!errors) {
//                         message.success('Valid')
//                     } else {
//                         console.log(errors)
//                         message.error('Invalid')
//                     }
//                 })
//             },
//             MainStoreformValue: ref({
//                 storeid: '',
//                 storename: null,
//                 inventorymanagedat: null,
//                 Branch: '',
//                 chooseSubStore: null,
//                 contactDetails: ref({
//                     managername: null,
//                     designation: '',
//                     phoneno: null,
//                     email: null,
//                     description: null,
//                     // multipleSelectValue: null,
//                 })
//             }),
//             rules: {
//                 storeid: {
//                     required: true,
//                     message: requiredMessage,
//                     trigger: ['input'],
//                 },
//                 storename: {
//                     required: true,
//                     message: requiredMessage,
//                     trigger: ['input']
//                 },
//                 inventorymanagedat: {
//                     required: true,
//                     message: requiredMessage,
//                     trigger: ['input']
//                 },
//                 chooseSubStore: {
//                     required: true,
//                     message: requiredMessage,
//                     trigger: ['input']
//                 },
//                 Branch: {
//                     required: true,
//                     message: requiredMessage,
//                     trigger: ['input']
//                 },
//                 contactDetails: {
//                     managername: {
//                         required: true,
//                         message: requiredMessage,
//                         trigger: ['input']
//                     },
//                     designation: {
//                         required: true,
//                         message: requiredMessage,
//                         trigger: ['input']
//                     },
//                     phoneno: {
//                         required: true,
//                         message: requiredMessage,
//                         trigger: ['input']
//                     },
//                     email: {
//                         required: true,
//                         message: requiredMessage,
//                         trigger: ['input']
//                     },
//                     description: {
//                         required: true,
//                         message: requiredMessage,
//                         trigger: ['input']
//                     },
//                     multipleSelectValue: {
//                         required: true,
//                         message: requiredMessage,
//                         trigger: ['input']
//                     },
//                 },


//             },
//         }
//     }

// })
// </script>


