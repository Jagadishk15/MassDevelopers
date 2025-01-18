<template>

    <div class="chead">
        <div class="titletxt">
            <p class="ctitle">Contact Us</p>
            <p class="csubtitle">Get in touch</p>

        </div>
        <img class="titlebg" src="@/assets/Img/images/contactusbg.svg">
    </div>
    <section>
        <b-form @submit.prevent="isSubmit">
            <div class="formbg">
                <img class="cbg" src="@/assets/Img/images/cc1.jpg">
                <div class="cform">
                    <div class="alignf">
                        <b-col cols='12' sm="12" lg="6" xl="5">
                            <div class="alignf my-5">
                                <b-col cols='10' sm="10" lg="6" class="m-2">
                                    <div class="label-d-none label">
                                        <TextField type="text" :rules="{ required: false }" :required-icon="false"
                                            v-model="isForm.name" placeholder="Name" name="Name" id="Name"
                                            label="Name" />
                                    </div>
                                </b-col>
                                <b-col cols='10' sm="10" lg="6" class="m-2">
                                    <div class="label-d-none label">
                                        <TextField type="text" :rules="{ required: false }" :required-icon="false"
                                            v-model="isForm.phone" placeholder="Phone Number" name="Number" id="Number"
                                            label="Phone Number" />
                                    </div>
                                </b-col>
                            </div>
                            <div class="alignf  my-5">
                                <b-col cols='10' sm="10" lg="12" class="m-2">
                                    <div class="label-d-none label customd">
                                        <TextField type="text" :rules="{ required: false }" :required-icon="false"
                                            v-model="isForm.mail" placeholder="Email Id" name="Email" id="Email"
                                            label="Email address" />
                                    </div>
                                </b-col>

                            </div>
                            <div class="alignf  my-5">
                                <b-col cols='10' sm="10" lg="12" class="m-2">
                                    <div class="dec">

                                        <div class="label-d-none label">
                                            <TextArea type="text" :rules="{ required: false }" :required-icon="false"
                                                name="Description" placeholder="Description" :rows="6" id="Description"
                                                v-model="isForm.des" label="" />
                                        </div>
                                    </div>
                                </b-col>

                            </div>
                            <div class="submitbtnalign">

                                <b-button type="submit" class="mt-4">
                                    <div class="subbtn" type="submit">
                                        <p>Submit</p>

                                    </div>
                                </b-button>

                            </div>

                        </b-col>
                        <b-col cols='11' sm="11" lg="5">
                            <div class="logoalign">
                                <img class="cbglogo" src="@/assets/Img/images/logo.svg">
                                <div class="logon">
                                    <h1>MASS DEVELOPERS</h1>
                                    <p>Since 2020</p>
                                </div>

                            </div>
                            <p class=" cttxtalign contact-txt my-3">Follow us on</p>
                            <div class="cttxtalign">

                                <img class="sharelogo" src="@/assets/Img/images/insta.svg">
                                <p class="contact-txt mx-5">_.mass_developers._</p>

                            </div>
                            <div class="cttxtalign">
                                <Divider type="solid" />

                            </div>
                            <div class="cttxtalign">

                                <img class="sharelogo" src="@/assets/Img/images/loc.svg">
                                <p class="contact-txt mx-5">No.12, Kalaiarasi Garden, Manivakkam, Chennai - 600 048.</p>

                            </div>

                            <div class="cttxtalign">

                                <img class="sharelogocall" src="@/assets/Img/images/call.svg">
                                <p class="contact-txt mx-5">9941711888<br>
                                    9282122188</p>

                            </div>
                            <div class="cttxtalign">

                                <img class="sharelogomail" src="@/assets/Img/images/mail.svg">
                                <p class="contact-txt mx-5">massdevelopers.civil@gmail.com</p>

                            </div>
                        </b-col>
                    </div>

                </div>
            </div>
        </b-form>
    </section>


</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import TextField from '@/components/FormComponents/TextInput.vue';
import TextArea from '@/components/FormComponents/TextArea.vue';
import { useForm, validate } from 'vee-validate';
import commonService from "@/Services/commonService"
import { useToast } from "primevue/usetoast";

export default defineComponent({
    components: {
        TextField,
        TextArea
    },
    setup() {
        const products = ref();
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
        const { handleSubmit, resetForm } = useForm();
        const toast = useToast();

        const isForm = ref({
            "name": "",
            "phone": "",
            "mail": "",
            "des": "",
            "title": "Contact US",
            // "product": ref(),
            // "sqft": ""
        })

        let productitem = [
            {
                value: "Flexi Paver -60mm/80mm",
                name: "Flexi Paver -60mm/80mm",
            },
            {
                value: "Zigzag Paver -60mm/80mm",
                name: "Zigzag Paver -60mm/80mm",
            },
            {
                value: "I Paver -60mm/80mm",
                name: "I Paver -60mm/80mm",
            },
            {
                value: "Ball Paver -60mm/80mm",
                name: "Ball Paver -60mm/80mm",
            },
            {
                value: "Grass Paver -60mm",
                name: "Grass Paver -60mm",
            },
            {
                value: "kerb Stone -100mm/150mm",
                name: "kerb Stone -100mm/150mm",
            },
            {
                value: "Square Paver -60mm",
                name: "Square Paver -60mm",
            },
            {
                value: "Brick Pattern Paver -60mm",
                name: "Brick Pattern Paver -60mm",
            }
        ];

        const isSubmit = handleSubmit(async (values) => {
            try {
                let result: any;
                let msg = "";

                // alert('e')
                debugger;

                result = await commonService.form3(isForm.value);
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
                        name: "",
                        phone: "",
                        mail: "",
                        des: "",
                        title: "Contact US",
                        // product: null,
                        // sqft: ""
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
        return {
            productitem,
            isForm,
            isSubmit,
            products,
            responsiveOptions
        }
    }
})
</script>

<style lang="scss" scoped>
.dec .label-d-none label .p-inputtextarea-resizable {
    color: white;
}

.p-inputtext {

    color: white !important;
}

.logoalign {
    display: flex;
    align-items: center;
    margin: 10px 50px;
    // justify-content: center;

    .logon {
        text-align: right;

        p {
            color: white;
        }

    }

    .cbglogo {
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

.cttxtalign {
    display: flex;
    align-items: center;
    margin: 10px 69px;
    // justify-content: center;


}

.sharelogo {
    height: 30px;
}

.sharelogocall {
    height: 20px;
}

.sharelogomail {
    height: 20px;
}

.subbtn {
    border: 1.5px solid white;
    padding: 10px 35px;
    background-color: #2932a6;
    cursor: pointer;

    p {
        font-size: 14px;
        color: white;
        font-weight: 500;
        font-family: Open Sans Hebrew;
    }
}

.contact-txt {
    color: white;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    // margin: 5px;
}

.titlebg {

    width: 100%;
    object-fit: cover;
    height: 88px;
}

.titletxt {
    position: absolute;
    top: 15%;
    left: 40px;
    bottom: 50%;
}

.ctitle {
    font-size: 20px;
    color: white;
    font-weight: 600;
}

.csubtitle {
    font-size: 13px;
    color: white;
}

.chead {
    position: relative;
    height: 80px;

}

.formbg {
    width: 100%;
    height: 100%;
    //   margin-bottom: 120px;
    // background-image: url("@/assets/Img/images/contactus.svg");
    // background-color: #cccccc;
}

.cbg {
    position: absolute;
    width: 100%;
    object-fit: cover;
    height: 600px;

    opacity: 1; // background-im

}

.cform {
    padding-top: 60px;
    position: relative;
    height: 600px;
    background-color: #7E7A7A99;
}

.alignf {
    display: flex;
    justify-content: center;
    // align-items: center
    // justify-content: center;
}

.submitbtnalign {
    display: flex;
    justify-content: flex-end //    a
}

@media only screen and (max-width: 992px) {
    .alignf {
        display: block;
        text-align: -webkit-center;
    }

    .contact-txt {

        margin: 18px 0px;
    }

    .logoalign {
        display: flex;
        align-items: center;
        margin: 20px 50px;
        justify-content: center;
    }

    .cttxtalign {
        display: block;
        align-items: center;
        margin: 10px 69px;
        // justify-content: center;
        overflow-wrap: break-word;

    }

    .cbg {
        position: absolute;
        width: 100%;
        object-fit: cover;
        height: 1400px;

        opacity: 1; // background-im

    }

    .submitbtnalign {
        display: flex;
        justify-content: center;
    }

    .cform {
        padding-top: 5px;
        position: relative;
        height: 1400px;
        background-color: #7E7A7A99;
    }
}

.p-button {
    background: transparent;
    border: transparent;
}

.p-button:enabled:active {
    background: transparent;
    border: transparent;
}

.p-button:enabled:hover {
    background: transparent;
    border: transparent;
}
</style>
