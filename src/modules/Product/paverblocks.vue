<template>
    <div>
        <div class="h-title">
            <p class="c-name">Pavers Blocks</p>

        </div>
        <b-container>

            <div class="mb-5">
                <div class="contain"></div>
                <p class="txt-d  my-5
        ">
                    These interlocking blocks are made from concrete or other materials and are designed to create
                    durable,
                    attractive, and functional surfaces. This is often used for creating patios, courtyards, and other
                    outdoor
                    living spaces. Their versatility allows for various patterns and designs, enhancing the aesthetic
                    appeal of
                    the outdoor area.  utilized in landscaping projects to create defined spaces within gardens.

                </p>
                <p class="txt-d my-5
        ">
                    They can be used to construct garden pathways, flowerbed borders, and other decorative elements.
                    These are versatile construction materials that offer durability, aesthetics, and functionality.


                </p>
                <p class="txt-d
        ">
                    Their use in various construction applications contributes to the creation of visually appealing,
                    stable,
                    and long-lasting surfaces in both residential and commercial projects.


                </p>
                <div class="contain1"></div>
            </div>
            <div class=webkitcenter>

                <div class="img-alignp">
                    <div class="imgrows">
                        <div class="column">
                            <!-- <img src="@/assets/Img/images/image21.svg" style="width:100%; ">
                            <img src="@/assets/Img/images/image22.svg" style="width:100%">
                            <img src="@/assets/Img/images/image18.svg" style="width:100%"> -->

                        </div>
                        <div class="column">
                            <!-- <img src="@/assets/Img/images/image14.svg" style="width:100%">
                            <img src="@/assets/Img/images/image15.svg" style="width:100%">
                            <img src="@/assets/Img/images/image24.svg" style="width:100%"> -->



                        </div>
                        <div class="column">
                            <!-- <img src="@/assets/Img/images/image200.svg" style="width:100%"> -->
                            <!-- <img src="@/assets/Img/images/image203.svg" style="width:100%"> -->
                            <!-- <img src="@/assets/Img/images/image199.svg" style="width:100%"> -->

                        </div>

                    </div>
                </div>
            </div>
            <b-form @submit.prevent="isSubmit">
                <div class="s-form mt-5">
                    <b-row class="servicefield  my-5">
                        <b-col cols='10' sm="10" md="3" lg="3" class="m-2">
                            <div class="label-d-none label">
                                <TextField type="text" v-model="isForm.name" :rules="{ required: false }"
                                    :required-icon="true" placeholder="Name" name="Name" id="Name" label="Name" />
                            </div>
                        </b-col>
                        <b-col cols='10' sm="10" md="3" lg="3" class="m-2">
                            <div class="label-d-none label">
                                <TextField type="text" v-model="isForm.phone" :rules="{ required: false }"
                                    :required-icon="true" placeholder="Phone No" name="Phone No" id="Phone No"
                                    label="Phone No" />
                            </div>
                        </b-col>
                        <b-col cols='10' sm="10" md="3" lg="3" class="m-2">
                            <div class="label-d-none label">
                                <TextField type="text" v-model="isForm.mail" :rules="{ required: false }"
                                    :required-icon="true" placeholder="Email Id" name="Email" id="Email"
                                    label="Email address" />
                            </div>
                        </b-col>

                    </b-row>

                    <b-row class="servicefield  my-5">
                        <b-col cols='10' sm="10" md="3" lg="3" class="m-2">
                            <div class="spl">
                                <div class="label-d-none label">
                                    <Dropdown type="text" v-model="isForm.product" :rules="{ required: false }"
                                        :items="productitem" placeholder="products" :required-icon="true" @focus="show"
                                        name="products" id="products" label="products" />
                                </div>
                            </div>
                            <div class="label-d-none label mt-5">
                                <TextField type="text" v-model="isForm.sqft" :rules="{ required: false }"
                                    :required-icon="true" placeholder="sqft" name="sqft" id="sqft" label="sqft" />
                            </div>
                        </b-col>
                        <b-col cols='10' sm="10" md="4" lg="3" class="m-2">
                            <div class="label-d-none label">
                                <TextArea type="text" v-model="isForm.des" :rules="{ required: false }"
                                    :required-icon="true" name="Description" placeholder="Description" :rows="6"
                                    id="Description" label="Description" />
                            </div>
                        </b-col>


                    </b-row>
                    <div class="form-align" type='submit'>
                        <button type='submit'>

                            <div class="enqsubbtn">
                                <p>Enquiry</p>
                            </div>
                        </button>

                    </div>


                </div>
            </b-form>


        </b-container>
    </div>
    <contactUS />
    <Toast />
    <PopupImagesSelect v-if="showDialog == true" v-model:selected-item="productitem" @load="showDialog = false"
        :showButton="true" :showDialog="showDialog" @close="showDialog = false" @loaderhide="loading = false"
        @loadershow="loading = true" @image-selected="handleImageSelected" />
</template>

<script lang="ts">
import { defineComponent, ref, h, onMounted } from 'vue';
import Content from '@/components/headercontent.vue'
import groupimage from '@/components/groupimage.vue'
import contactUS from '@/components/contactUs.vue'
import TextField from '@/components/FormComponents/TextInput.vue';
import Dropdown from '@/components/FormComponents/Dropdown.vue';
import { useForm, validate } from 'vee-validate';
import commonService from "@/Services/commonService"

import TextArea from '@/components/FormComponents/TextArea.vue';
import PopupImagesSelect from '@/components/popupImagesSelect.vue';

import { useToast } from "primevue/usetoast";
import { value } from 'dom7';

export default defineComponent({
    components: {
        PopupImagesSelect,
        Content,
        groupimage,
        contactUS,
        TextField,
        Dropdown,
        TextArea
    },
    setup() {
        const products = ref();
        const showDialog = ref(false);
        let loading = ref(false);
        const editItems = ref(
            {
                title: "My Images",
                images: [
                    { url: "/path/to/image1.jpg", caption: "First Image" },
                    { url: "/path/to/image2.jpg", caption: "Second Image" },
                    // ... more images
                ]
            }
        );
        function show() {

            if (productitem.length != 0 && productitem.length != undefined) {
                showDialog.value = true
            }

        }

        const responsiveOptions = ref([
            {
                breakpoint: '1400px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }
        ]);
        const { handleSubmit } = useForm();
        const toast = useToast();

        const isForm = ref({
            "name": "",
            "phone": "",
            "mail": "",
            "des": "",
            "title": "Paver Blocks",
            "product": ref(),
            "sqft": ""
        })

        let productitem = [
            {
                value: "Flexi Paver -60mm/80mm",
                name: "Flexi Paver -60mm/80mm",
                url: new URL('@/assets/Img/images/Fivepatternpaver.jpeg', import.meta.url).href,
            },
            {
                value: "Zigzag Paver -60mm/80mm",
                name: "Zigzag Paver -60mm/80mm",
                url: new URL('@/assets/Img/images/Zigzak.jpeg', import.meta.url).href,

            },
            {
                value: "I Paver -60mm/80mm",
                name: "I Paver -60mm/80mm",
                url: new URL('@/assets/Img/images/Ipatternpaver.jpeg', import.meta.url).href,

            },
            // {
            //     value: "Ball Paver -60mm/80mm",
            //     name: "Ball Paver -60mm/80mm",
            //     url: new URL('@/assets/Img/images/grasspaver.jpeg', import.meta.url).href,

            // },

            {
                value: "Saucer drain",
                name: "Saucer drain",
                url: new URL('@/assets/Img/images/Saucerdrain.jpeg', import.meta.url).href,

            },
            {
                value: "Grass Paver -60mm",
                name: "Grass Paver -60mm",
                url: new URL('@/assets/Img/images/grasspaver.jpeg', import.meta.url).href,

            },
            {
                value: "kerb Stone -100mm/150mm",
                name: "kerb Stone -100mm/150mm",
                url: new URL('@/assets/Img/images/Kerbstone.jpeg', import.meta.url).href,

            },
            {
                value: "Square Paver -60mm",
                name: "Square Paver -60mm",
                url: new URL('@/assets/Img/images/Squarepatternpaver.jpeg', import.meta.url).href,

            },
            {
                value: "Brick Pattern Paver -60mm",
                name: "Brick Pattern Paver -60mm",
                url: new URL('@/assets/Img/images/Brickpaver.jpeg', import.meta.url).href,

            }
        ];

        const isSubmit = handleSubmit(async (values) => {
            try {
                let result: any;
                let msg = "";

                // alert('e')
                debugger;

                result = await commonService.form4(isForm.value);
                // msg = result["ErrorInfo"].ErrorCode;
                debugger
                if (result['result'] == true) {



                    toast.add({
                        severity: "success",
                        summary: "Mail Sent",
                        detail: "Successfully sent",
                        life: 3000,
                    });
                    // resetForm()

                    isForm.value = {
                        "name": "",
                        "phone": "",
                        "mail": "",
                        "des": "",
                        "title": "Paver Blocks",
                        "product": ref(),
                        "sqft": ""
                    };
                }
                // if (result["result"] == "Already" && msg == null) {
                //     existname.value = "Vaccination Name"
                //     alreadyExistPop.value = true;

                // } else if (msg == null) {
                //     successPop.value = true;
                // }
            } catch (error) {
                alert(error);
            }
        });
        onMounted(() => {
            window.scrollTo(0, 0);
        });
        function handleImageSelected({ image, index }) {
            console.log('Selected image:', image);
            isForm.value.product = image.name
            console.log('Selected index:', index);
            showDialog.value = false
            // Handle the selected image data here
        }
        return {
            handleImageSelected,
            show,
            editItems,
            showDialog,
            loading,
            productitem,
            isForm,
            isSubmit,
            products,
            responsiveOptions
        }
    }

})
</script>
<style lang="scss">
.servicefield .p-invalid .p-inputtext {
    border: 1px solid #ffffff !important;
}

.servicefield .p-inputtext {
    border: 2.5px solid #181737 !important;
}

.servicefield .p-inputtext:focus-visible {
    border: 2.5px solid #181737 !important;
}

.servicefield .spl .p-inputtext {
    border: 2.5px solid #ffffff !important;
}

.servicefield .p-dropdown {
    // border: none !important;
    border: 2.5px solid #181737 !important;
    width: 100%
}

.servicefield input::placeholder {
    color: #8F8F8F;
    font-size: 16px !important;
}

.servicefield .field .p-inputtext:hover {
    border-color: #181737 !important;
}

.servicefield .field .p-inputtext:focus {
    box-shadow: none !important;
    border-color: #181737;
}

.servicefield .p-inputtext:enabled:hover {
    border-color: #181737 !important;
}
</style>
<style lang="scss" scoped>
.webkitcenter {
    text-align: -webkit-center;
}

.img-alignp {
    display: flex;
    align-items: center;
    width: 60%;
    // margin-right: 10%;
    // margin-bottom: 30px;
    justify-content: center;
}

.h-title {
    width: 100%;
    height: 350px;
    background-color: #B086E7;
    // text-align: center;
    display: flex;
    justify-content: center;
}

.txt-d {
    position: relative;
    font-family: Roboto;
    margin: 0px 10px;
    font-size: 14px;
    color: #8F8F8F;
    // font-style: italic;
    font-weight: 400;
    line-height: 25.13px;
    text-align: left;
}



.form-align {
    display: flex;
    align-items: center;
    margin-right: 10%;
    margin-bottom: 30px;
    justify-content: center;

    .enqsubbtn {
        border: 2px solid #181737;
        padding: 8px 39px;
        background-color: transparent;
        cursor: pointer;

        p {
            font-size: 14px;
            color: #000000;
            font-weight: 500;
            font-family: Open Sans Hebrew;
        }
    }
}

.c-name {
    // 
    // margin: 0px auto;s
    font-family: Roboto;
    margin: 0px 10px;
    font-size: 40px;
    color: #442370;
    font-style: italic;
    font-weight: 900;
    display: flex;
    align-items: center;
}

.Cservice {
    margin: 10px;
    height: 440px;
    width: 220px;
    // background-color: #7E7A7A80;


    .serviceimg {
        position: absolute;
        object-fit: cover;
        height: 440px;
        width: 220px;
        opacity: 0.8;
    }
}

.servicecontent {

    position: relative;
    height: 440px;
    width: 220px;
    background-color: #7E7A7A80;
    // opacity: 0.9;

    .serviceH {
        padding-top: 50%;
        padding-left: 10px;
        font-weight: 800;
        font-size: 19px;
        color: #FFFFFF;
    }

    .serviceD {
        padding-top: 80%;
        padding-left: 10px;
        font-weight: 700;
        font-size: 19px;
        color: #FFFFFF;
    }

    .arrowto {
        padding-left: 10px;
        padding-top: 13px;
        height: 35px;
    }

}

.wedo {
    height: auto;
    // width: 500px;
    text-align: -webkit-center;
    float: inline-end;
    // margin: 0px 10px;
    padding: 40px;
    // text-align: center;
    background-image: repeating-linear-gradient(#D9D9D900 0%, #F0EBEB 100%);
}

.wedoC {
    // text-align: -webkit-center;

    .hp {
        margin-top: 15px;
        text-align: center;
        line-height: 30px;
        width: 380px;
        font-weight: 600;
        font-size: 14px;
        color: #000;
        font-family: Open Sans Hebrew;

    }
}

.wedologo {
    align-content: center;
}

.logoalign {
    display: flex;
    align-items: center;
    margin: 0px 50px;
    justify-content: center;

    .logon {
        text-align: right;
    }

    h1 {
        color: #442370;
        font-weight: 700;
        font-size: 25px;
        // font-family: Open Sans Hebrew !important;
    }

    p {
        color: #B1ADAD;
        font-weight: 500;
        font-size: 16px;
    }
}

.txt-title {
    font-family: Roboto;
    margin: 0px 10px;
    font-size: 18px;
    color: black;
    // font-style: italic;
    font-weight: 600;
    // line-height: 28.13px;
    text-align: left;
    padding-bottom: 20px;


}

.cbg {
    height: 120px;
}

.contain {
    top: 42%;
    left: 3%;
    position: absolute;
    // bottom: 50%;
    border: solid 4px #2932a6;
    height: 33px;
    width: 33px;
    rotate: 30deg;
}

.contain1 {
    top: 58%;
    right: 4%;
    position: absolute;
    // bottom: 50%;
    border: solid 4px #2932a6;
    height: 33px;
    width: 33px;
    rotate: 30deg;
}

@media only screen and (max-width: 428px) {
    .contain {
        display: none;
    }

    .contain1 {
        display: none;
    }

    .servicefield {
        justify-content: center
    }

    .containl {

        position: absolute;
        bottom: 50%;
        border: solid 4px #B88FEE;
        height: 30px;
        left: -8%;
        width: 30px;
        rotate: 30deg;
    }

    .containr {

        position: absolute;
        bottom: 50%;
        right: 20%;
        border: solid 4px #B88FEE;
        height: 30px;
        width: 30px;
        rotate: 30deg;
    }
}

@media only screen and (max-width: 768px) {

    .servicefield {
        justify-content: center
    }

    .wedo {
        height: auto;
        width: auto;
        text-align: -webkit-center;
        // float: inline-end;
        margin: 20px;
        padding: 10px;
        text-align: center;
        background-image: repeating-linear-gradient(#D9D9D900 0%, #F0EBEB 100%);
    }

    .wedoC {
        // text-align: -webkit-center;

        .hp {
            margin-top: 15px;
            text-align: center;
            line-height: 30px;
            width: auto;
            font-weight: 600;
            font-size: 14px;
            color: #000;
            font-family: Open Sans Hebrew;

        }
    }


    .c-name {
        // 
        // margin: 0px auto;s
        font-family: Roboto;
        margin: 0px 10px;
        font-size: 30px;
        color: #442370;
        font-style: italic;
        font-weight: 900;
        display: flex;
        align-items: center;
    }

    .logoalign {
        display: flex;
        align-items: center;
        margin: 0px 50px;
        justify-content: center;

        .logon {
            text-align: right;

        }

        .cbg {
            height: 100px;
        }

        h1 {
            color: #442370;
            font-weight: 700;
            font-size: 20px;
            // font-family: Open Sans Hebrew !important;
        }

        p {
            color: #B1ADAD;
            font-weight: 500;
            font-size: 15px;
        }
    }
}



//@media only screen and (max-width: 768px) {}</style>
