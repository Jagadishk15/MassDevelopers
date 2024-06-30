<template>
    <div>
        <section>
            <div class="h-title">
                <p class="c-name">Mass Developers</p>

            </div>
        </section>

        <b-container>
            <Content />
            <b-row>
                <b-col cols='12' sm="12" lg="6" class="wedoC">
                    <div class="wedo">
                        <div>
                            <p>What do we do</p>
                            <p class="hp">
                                Construction Management, Architecturally Designed,
                                Innovative, Integrated Building Management and
                                Fresh thinking to create workable solutions in
                                everything we do.

                            </p>
                        </div>
                    </div>
                </b-col>
                <b-col cols='12' sm="12" lg="6" class="wedologo">
                    <div class="logoalign">
                        <img class="cbg" src="@/assets/Img/images/logo.svg">
                        <div class="logon">
                            <h1>MASS DEVELOPERS</h1>
                            <p>We build your Dream</p>
                        </div>

                    </div>
                </b-col>
            </b-row>
            <p class="txt-title my-4">
                Our Services
            </p>
            <b-row>
                <b-col style="display: flex;
    justify-content: center;" v-for="item in servicelist" cols='12' sm="6" lg="3" md="4">
                    <div class="Cservice" @click="routetopage(item.route)">
                        <!-- <img class="serviceimg" src="@/assets/Img/images/Rectangle29.png"> -->

                        <img class="serviceimg" :src="`${item.image}`">
                        <!-- {{ `@/${item.image}` }} -->
                        <div class="servicecontent">
                            <p class="serviceH">{{ item.title }}</p>
                            <p class="serviceD">Find out more</p>
                            <img class="arrowto" src="@/assets/Img/images/construction.png">

                        </div>
                    </div>
                </b-col>
            </b-row>
            <p class="txt-title my-4">
                Our Products
            </p>
            <b-row>
                <b-col cols='12' sm="12" lg="6" class="wedoC">
                    <div class="displayalign">
                        <div class="mainrightalign">
                            <div class="servicecontainer" @click="$router.push({
                                name: 'paverblocks',
                                path: '/paverblocks'
                            })">
                                <div class="imgconatain">
                                    <img class="Simg" src="@/assets/Img/images/image206.svg">
                                    <div class="service-align">
                                        <p class="stitle">Paver Blocks</p>
                                        <img class="navigate" src="@/assets/Img/images/image38.png">
                                    </div>
                                </div>
                            </div>
                            <div class="servicecontainersmall marginleftalignimg" @click="$router.push({
                                name: 'blueMetals',
                                path: '/blueMetals'
                            })">
                                <div class="imgconatain">
                                    <img class="Simg" src="@/assets/Img/images/image206.svg">
                                    <div class="service-align">
                                        <p class="stitle">Blue Metal</p>
                                        <img class="navigate" src="@/assets/Img/images/image38.png">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="margintopalignimg">
                            <div class="servicecontainersmall" @click="$router.push({
                                name: 'mSand',
                                path: '/mSand'
                            })">
                                <div class="imgconatain">
                                    <img class="Simg" src="@/assets/Img/images/image206.svg">
                                    <div class="service-align">
                                        <p class="stitle">M Sand</p>
                                        <img class="navigate" src="@/assets/Img/images/image38.png">
                                    </div>
                                </div>
                            </div>
                            <div class="servicecontainer" @click="$router.push({
                                name: 'blocks',
                                path: '/blocks'
                            })">
                                <div class="imgconatain">
                                    <img class="Simg" src="@/assets/Img/images/image206.svg">
                                    <div class="service-align">
                                        <p class="stitle">Blocks</p>
                                        <img class="navigate" src="@/assets/Img/images/image38.png">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </b-col>
                <b-col cols='12' sm="12" lg="5" class="">
                    <div class="dClass">
                        <p class="pdescription">How can we help you ?</p>

                        <p class="txt-d">From the most basic to the most specialized needs and safety
                            products work as hard as you do to provide the safety and production.</p>
                        <p class="txt-d">We use different materials depending on their structural
                            capabilities. In different regions, local and national standards govern building
                            materials in construction. On the other hand, Architects choose construction
                            materials based on aesthetics and cost. Picking the suitable material for your
                            project means enhancing and lengthening a project’s lifetime.</p>

                        <img class="dpimage" src="@/assets/Img/images/image29.png">
                    </div>


                </b-col>
            </b-row>
            <div>
                <v-container>
                    <v-carousel>

                        <v-carousel-item src="/src/assets/Img/images/image93.svg" cover></v-carousel-item>
                        <v-carousel-item src="/src/assets/Img/images/image94.svg" cover></v-carousel-item>
                        <v-carousel-item src="/src/assets/Img/images/image91.svg" cover></v-carousel-item>
                        <v-carousel-item src="/src/assets/Img/images/image911.svg" cover></v-carousel-item>
                    </v-carousel>


                </v-container>
            </div>
            <div class="brief">
                <p>A loyal, dedicated, efficient and force support <span>Mass Developers</span> with the skilled work to
                    compete with
                    its counterparts, in several departments of construction. </p>
            </div>

        </b-container>
        <section>
            <div class="formbg">
                <img class="high" src="@/assets/Img/images/high.jpg">
                <div class="cform">
                    <div class="alignf">
                        <b-col cols='11' sm="11" lg="6" xl="5">
                            <div class="leftq">
                                <p class="leftquote">“</p>
                                <p>The Company’s endeavour towards excellence in construction quality, Safety,
                                    performance, Employee satisfaction and social responsibility has enabled it to be
                                    the most trusted and sought after Construction company in the region.</p>

                                <p class="rightquote">“</p>
                            </div>

                        </b-col>
                        <b-col cols='11' sm="11" lg="6" xl="5">
                            <div class="rightq">
                                <p class="rhead">Our Construction Company MASS DEVELOPERS has been
                                    established in the 2020.</p>
                                <p class="bre">The Company has always embraced changes within the
                                    industry and thrived on innovation, continuous
                                    improvement and best practice and it has developed into
                                    a dynamic and forward thinking Company.</p>
                                <Divider type="solid" />
                                <p class="des">It is located at Chennai and has grown up significantly
                                    still maintaining the construction ethics and family values.
                                    Our Goal is to win our clients’ respect, trust with the attention detail,
                                    quality of workmanship, honesty and integrity.</p>
                                <p class="conc">Mass Developers</p>
                                <p class="conc">Siddharth Transport</p>
                                <p class="conc">Managing Director: Siddharth.Y</p>


                            </div>
                        </b-col>
                    </div>

                </div>
            </div>

        </section>
        <b-container>
            <div class="img-align mb-5">
                <div class="imgrows">
                    <div class="column">
                        <img src="@/assets/Img/images/image98.png" style="width:100%">

                        <img src="@/assets/Img/images/image75.png" style="width:100%">

                    </div>
                    <div class="column">
                        <img src="@/assets/Img/images/image751.png" style="width:75%">
                        <img src="@/assets/Img/images/image101.png" style="width:75%">
                        <img src="@/assets/Img/images/image103.png" style="width:80%">
                        <img src="@/assets/Img/images/image102.png" style="width:100%">
                    </div>
                    <div class="column">
                        <img src="@/assets/Img/images/image99.png" style="width:70%">
                        <img src="@/assets/Img/images/image100.svg" style="width:70%">
                    </div>

                </div>
            </div>
        </b-container>


        <b-container class="mt-5">
            <div>
                <div class="careerh">


                    <div class='d-flex'>
                        <div class='contain mt-2'></div>
                        <div class="w-100">
                            <p class="ml-3 txt-title">Careers</p>
                            <Divider type="solid" />
                            <div class="resumebtn mt-1">
                                <p>Resume</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="careerd ml-3  mb-5">
                    <div class="d-flex">
                        <h5>The Company’s endeavour towards-</h5>
                        <div class='contain mt-2'></div>
                    </div>
                    <ul>
                        <li>Construction Quality</li>


                        <li>Safety Performance</li>
                        <li>Clients Satisfaction</li>
                    </ul>

                </div>
            </div>

        </b-container>

        <section>
            <div class="enqfitalign">

                <img class="enqfit" src="@/assets/Img/images/enq.jpg">
                <div class="enqform">

                    <div class="">
                        <b-row class="form-align">

                            <b-col cols='8' sm="8" md="3" lg="2">
                                <div class="field">
                                    <TextField type="text" :rules="{ required: true }" :required-icon="true"
                                        name="Email" id="Email" label="Email address" />
                                </div>
                            </b-col>
                            <b-col cols='8' sm="8" md="3" lg="2">
                                <div class="field">
                                    <TextField type="text" :rules="{ required: true }" :required-icon="true"
                                        name="Email" id="Email" label="Email address" />
                                </div>
                            </b-col>
                            <b-col cols='8' sm="8" md="3" lg="2">
                                <div class="customd">
                                    <div class="field">
                                        <Dropdown type="text" :rules="{ required: true }" :required-icon="true"
                                            name="Email" id="Email" label="Email address" />
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                        <div class="form-align">
                            <div class="subbtn">
                                <p>Enquiry</p>
                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </section>


    </div>
    <section>
        <contactUS class="my-5" />
    </section>

</template>

<script lang="ts">
import { defineComponent, ref, h, onMounted } from 'vue';
import Content from '@/components/headercontent.vue'
import groupimage from '@/components/groupimage.vue'
import contactUS from '@/components/contactUs.vue'
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import TextField from '@/components/FormComponents/TextInput.vue';
import Dropdown from '@/components/FormComponents/Dropdown.vue';

import TextArea from '@/components/FormComponents/TextArea.vue';
import { required } from '@vee-validate/rules';


export default defineComponent({
    components: {
        Content,
        groupimage,
        contactUS,
        TextField,
        Dropdown,
        TextArea
    },
    setup() {
        const products = ref();
        const router = useRouter();
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
        const servicelist = ref([
            {
                title: 'Construction of Buildings and Roads',
                image: new URL('@/assets/Img/images/Rectangle29.png', import.meta.url).href,
                route: 'construction'
            },
            {
                title: 'Architectural and Structural design',
                image: new URL('@/assets/Img/images/Rectangle30.png', import.meta.url).href,
                route: 'architectural'
            },
            {
                title: 'Coordination with PMC and Vendors',
                image: new URL('@/assets/Img/images/Rectangle31.png', import.meta.url).href,
                route: 'vendors'
            },
            {
                title: 'Transport Services',
                image: new URL('@/assets/Img/images/transportservice.png', import.meta.url).href,
                route: 'transportation'
            }
        ]);
        const routetopage = (routes) => {
            router.push({
                path: '/' + routes,
                name: routes
            })
        }
        onMounted(() => {
            window.scrollTo(0, 0);
        });
        return {
            routetopage,
            servicelist,
            products,
            responsiveOptions
        }
    }

})
</script>
<style lang="scss">
.customd .p-dropdown {
    background-color: transparent;

}

.customd .field .p-dropdown {
    border: 2px solid white !important;
}

.p-divider.p-divider-horizontal {
    margin: 0.25rem 0 !important;
    padding: 0 0.25rem !important;
}
</style>
<style lang="scss" scoped>
.h-title {
    width: 100%;
    height: 350px;
    background-color: #B086E7;
    // text-align: center;
    display: flex;
    justify-content: center;
}

.leftq {
    float: right;
    // height: 200px;
    padding: 23px 25px;
    width: 80%;
    background-color: #FFFFFF;

    .leftquote {
        // font-family: Poppins;
        font-family: Poppins;
        font-size: 64px;
        font-style: italic;
        font-weight: 600;
        // line-height: 96px;
        text-align: left;
        height: 0px;
        padding: 18px 5px;
    }

    .rightquote {
        // font-family: Poppins;
        font-family: Poppins;
        font-size: 64px;
        font-style: italic;
        font-weight: 600;
        // line-height: 96px;
        text-align: right;
        height: 0px;
        padding-right: 30px;
        padding-bottom: 20px;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        color: #000;
        line-height: 39px;
        font-family: Open Sans Hebrew;
        // padding: 10px;
        // text-align: center;
    }

}

.rightq {
    background-color: #A49D9D99;
    // height: 450px;
    width: 80%;
    padding: 20px 25px;
    text-align: -webkit-center;

    .rhead {
        font-weight: 500;
        font-size: 14px;
        color: #ffffff;
        font-family: Open Sans Hebrew;
        padding: 10px;
    }

    .conc {
        font-weight: 500;
        font-size: 17px;
        color: #ffffff;
        font-family: Open Sans Hebrew;
        padding: 10px;
        text-align: left;
    }

    .bre {
        font-weight: 200;
        font-size: 14px;
        color: #ffffff;
        font-family: Open Sans Hebrew;
        padding: 10px;

    }

    .des {
        font-weight: 600;
        font-size: 13px;
        color: #ffffff;
        font-family: Open Sans Hebrew;
        padding: 10px;
        line-height: 29px;
        // text-align: left;
    }
}

.formbg {
    margin: 70px 0px;
    width: 100%;
    height: 100%;
    //   margin-bottom: 120px;
    // background-image: url("@/assets/Img/images/contactus.svg");
    // background-color: #cccccc;
}

.alignf {
    display: flex;
    justify-content: center;
    // align-items: center
}

.high {
    position: absolute;
    width: 100%;
    object-fit: cover;
    height: 700px;

    opacity: 1; // background-im

}

.cform {
    padding-top: 60px;
    position: relative;
    height: 700px;
    // background-color: #7E7A7A99;
}

.careerd {
    ul li {
        font-weight: 500;
        font-size: 14px;
        color: #000;
        font-family: Open Sans Hebrew;
        padding: 10px;
        // line-height: 39px;
    }

    ul {
        list-style-type: disc;
    }
}

.brief {
    margin: 35px 0px;
    text-align: center;

    width: 100%;


    display: flex;
    justify-content: center;

    p {
        padding: 0px 10%;
        font-weight: 500;
        font-size: 18px;
        color: #000;
        font-family: Open Sans Hebrew;
        line-height: 39px;
    }

    span {
        // padding: 0px 10%;
        font-weight: 700;
        font-size: 20px;
        color: #9747FF;
        font-family: Open Sans Hebrew;
        line-height: 39px;
    }
}

.contain {

    // position: absolute;
    // bottom: 50%;
    border: solid 4px #9747FF;
    height: 33px;
    width: 33px;
    rotate: 30deg;
}

.form-align {
    display: flex;
    align-items: center;
    // margin: 0px 50px;
    justify-content: center;
}

// .enqfit {
//     position: absolute;

//     object-fit: cover; // margin-top: 130px;
//     width: 100%;
//     height: 500px;
// }

.w100 {
    width: 100%;
}

.enqfitalign {
    height: 100%;
    width: 100%;
    contain: content;
    // width: 100%;
    // background-color: #7E7A7A80;


    .enqfit {
        position: absolute;
        object-fit: cover;
        height: 100%;
        width: 100%;
        opacity: 0.8;
    }
}

.enqform {
    position: relative;
    height: 440px;
    place-content: center;
    // width: 100%;
    background-color: #7E7A7A80;
}

.c-name {
    // 
    // margin: 0px auto;s
    animation: bounce;
    /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s;
    /* don't forget to set a duration! */
    font-family: Roboto;
    margin: 0px 10px;
    font-size: 40px;
    color: #442370;
    font-style: italic;
    font-weight: 900;
    display: flex;
    align-items: center;
}

.resumebtn {
    // border: 1.5px solid white;
    padding: 7px 35px;
    width: 150px;
    margin-right: 15px;
    margin-bottom: 10px;
    float: right;
    text-align: center;
    border-radius: 5px;
    background-color: #442370;
    cursor: pointer;

    p {
        font-size: 14px;
        color: white;
        font-weight: 400;
        font-family: Open Sans Hebrew;
    }
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
        cursor: pointer;
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
    // padding-bottom: 20px;


}

.cbg {
    height: 120px;
}


.servicecontainer {
    border-radius: 12px;
    padding: 15px 0px;
    height: auto;
    width: 250px;
    // text-align: center;
    align-content: center;
    text-align: center;
    // background-color: #F3EEEE;
    margin: 5px;

    .imgconatain {
        height: auto;

        .Simg {
            object-fit: cover;
            height: 150px;
            width: 190px;
            opacity: 0.8;
            border-radius: 12px;
        }

        .stitle {
            margin-top: 15px;
            text-align: center;
            line-height: 30px;
            width: auto;
            font-weight: 700;
            font-size: 15px;
            color: #442370;
            font-family: Open Sans Hebrew;
            cursor: pointer;
        }

        .navigate {
            rotate: degree(10%);
            margin-top: 12px;
            margin-left: 6px;
            height: 25px;
            cursor: pointer;
        }

        .service-align {
            display: flex;
            align-items: center;
            // margin: 0px 50px;
            justify-content: center;
        }
    }

}

.servicecontainersmall {
    border-radius: 12px;
    padding: 15px 0px;
    height: auto;
    width: 220px;
    // text-align: center;
    align-content: center;
    text-align: center;
    // background-color: #F3EEEE;
    margin: 5px;

    .imgconatain {
        height: auto;

        .Simg {
            object-fit: cover;
            height: 130px;
            width: 150px;
            opacity: 0.8;
            border-radius: 12px;
        }

        .stitle {
            margin-top: 10px;
            text-align: center;
            line-height: 30px;
            width: auto;
            font-weight: 700;
            font-size: 14px;
            color: #442370;
            font-family: Open Sans Hebrew;
            cursor: pointer;
        }

        .navigate {
            rotate: degree(10%);
            margin-top: 12px;
            margin-left: 6px;
            height: 23px;
            cursor: pointer;
        }

        .service-align {
            display: flex;
            align-items: center;
            // margin: 0px 50px;
            justify-content: center;
        }
    }
}

.servicecontainer:hover {
    background-color: #F3EEEE;
    cursor: pointer;
}

.servicecontainersmall:hover {
    background-color: #F3EEEE;
    cursor: pointer;
}

.dClass {
    text-align: center;

    .txt-d {
        font-family: Roboto;
        margin: 20px 10px;
        font-size: 13px;
        color: #8F8F8F;
        // font-style: italic;
        font-weight: 400;
        line-height: 16.13px;
        text-align: center;
    }


    .pdescription {
        font-family: Roboto;
        margin: 0px 10px;
        font-size: 18px;
        color: #442370;
        // font-style: italic;
        font-weight: 700;
        line-height: 23.13px;
        text-align: center;
    }

    .dpimage {
        height: 300px;
    }
}

.displayalign {
    display: flex;
    justify-content: center;
}

.margintopalignimg {
    margin-top: 50px;
}

.marginleftalignimg {
    margin-left: 40px;
    // justify-content: center;
}

@media only screen and (max-width: 992px) {
    .alignf {
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: -webkit-center;
    }

    .leftq {
        float: none;
        margin-bottom: 30px;
        // height: 200px;
        // width: 80%;
        // background-color: #FFFFFF;
    }

    .high {
        // position: absolute;
        // width: 100%;
        // object-fit: cover;
        height: 1000px;

        opacity: 1; // background-im

    }

    .cform {
        padding-top: 60px;
        position: relative;
        height: 1000px;
        // background-color: #7E7A7A99;
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

.subbtn {
    margin-top: 19px;
    border: 2px solid white;
    padding: 8px 39px;
    background-color: transparent;
    cursor: pointer;

    p {
        font-size: 14px;
        color: white;
        font-weight: 500;
        font-family: Open Sans Hebrew;
    }
}

@media only screen and (max-width: 425px) {
    .high {
        // position: absolute;
        // width: 100%;
        // object-fit: cover;
        height: 1000px;

        opacity: 1; // background-im

    }

    .rightq {
        background-color: #A49D9D99;
        // height: 450px;
        width: 80%;
        padding: 15px 20px;
        text-align: -webkit-center;

        .rhead {
            font-weight: 500;
            font-size: 14px;
            color: #ffffff;
            font-family: Open Sans Hebrew;
            padding: 5px;
        }

        .conc {
            font-weight: 500;
            font-size: 15px;
            color: #ffffff;
            font-family: Open Sans Hebrew;
            padding: 5px;
            text-align: left;
        }

        .bre {
            font-weight: 200;
            font-size: 14px;
            color: #ffffff;
            font-family: Open Sans Hebrew;
            padding: 5px;

        }

        .des {
            font-weight: 600;
            font-size: 13px;
            color: #ffffff;
            font-family: Open Sans Hebrew;
            padding: 5px;
            line-height: 24px;
            // text-align: left;
        }
    }

    .leftq {
        // float: right;
        // height: 200px;
        padding: 20px 23px;
        width: 80%;
        background-color: #FFFFFF;



        p {
            font-weight: 400;
            font-size: 14px;
            color: #000;
            line-height: 30px;
            font-family: Open Sans Hebrew;
            // padding: 10px;
            // text-align: center;
        }

    }


    .displayalign {
        display: block;
        // justify-content: center;
    }

    .margintopalignimg {
        margin-top: 10px;
    }

    .marginleftalignimg {
        margin-left: 0px;
        // justify-content: center;
    }

    .servicecontainer {
        border-radius: 12px;
        padding: 15px 0px;
        height: auto;
        width: 250px;
        // text-align: center;
        align-content: center;
        text-align: center;
        background-color: #F3EEEE;
        margin: 5px;

        .imgconatain {
            height: auto;

            .Simg {
                object-fit: cover;
                height: 150px;
                width: 190px;
                opacity: 0.8;
                border-radius: 12px;
            }

            .stitle {
                margin-top: 15px;
                text-align: center;
                line-height: 30px;
                width: auto;
                font-weight: 700;
                font-size: 15px;
                color: #442370;
                font-family: Open Sans Hebrew;
            }

            .navigate {
                rotate: degree(10%);
                margin-top: 12px;
                margin-left: 6px;
                height: 25px;
            }

            .service-align {
                display: flex;
                align-items: center;
                // margin: 0px 50px;
                justify-content: center;
            }
        }

    }

    .displayalign {
        text-align: -webkit-center;
    }

    .servicecontainersmall {
        border-radius: 12px;
        padding: 15px 0px;
        height: auto;
        width: 250px;
        // text-align: center;
        align-content: center;
        text-align: center;
        background-color: #F3EEEE;
        margin: 5px;

        .imgconatain {
            height: auto;

            .Simg {
                object-fit: cover;
                height: 150px;
                width: 190px;
                opacity: 0.8;
                border-radius: 12px;
            }

            .stitle {
                margin-top: 15px;
                text-align: center;
                line-height: 30px;
                width: auto;
                font-weight: 700;
                font-size: 15px;
                color: #442370;
                font-family: Open Sans Hebrew;
            }

            .navigate {
                rotate: degree(10%);
                margin-top: 12px;
                margin-left: 6px;
                height: 25px;
            }

            .service-align {
                display: flex;
                align-items: center;
                // margin: 0px 50px;
                justify-content: center;
            }
        }
    }

}

@media only screen and (max-width: 525px) and (min-width: 424px) {
    .high {
        // position: absolute;
        // width: 100%;
        // object-fit: cover;
        height: 1000px;

        opacity: 1; // background-im

    }

    .rightq {
        background-color: #A49D9D99;
        // height: 450px;
        width: 80%;
        padding: 15px 20px;
        text-align: -webkit-center;

        .rhead {
            font-weight: 500;
            font-size: 14px;
            color: #ffffff;
            font-family: Open Sans Hebrew;
            padding: 5px;
        }

        .conc {
            font-weight: 500;
            font-size: 15px;
            color: #ffffff;
            font-family: Open Sans Hebrew;
            padding: 5px;
            text-align: left;
        }

        .bre {
            font-weight: 200;
            font-size: 14px;
            color: #ffffff;
            font-family: Open Sans Hebrew;
            padding: 5px;

        }

        .des {
            font-weight: 600;
            font-size: 13px;
            color: #ffffff;
            font-family: Open Sans Hebrew;
            padding: 5px;
            line-height: 24px;
            // text-align: left;
        }
    }

    .leftq {
        // float: right;
        // height: 200px;
        padding: 20px 23px;
        width: 80%;
        background-color: #FFFFFF;



        p {
            font-weight: 400;
            font-size: 14px;
            color: #000;
            line-height: 30px;
            font-family: Open Sans Hebrew;
            // padding: 10px;
            // text-align: center;
        }

    }


    .displayalign {
        display: block;
        // justify-content: center;
    }

    .margintopalignimg {
        margin-top: 10px;
    }

    .marginleftalignimg {
        margin-left: 0px;
        // justify-content: center;
    }

    .servicecontainer {
        border-radius: 12px;
        padding: 15px 0px;
        height: auto;
        width: 250px;
        // text-align: center;
        align-content: center;
        text-align: center;
        background-color: #F3EEEE;
        margin: 5px;

        .imgconatain {
            height: auto;

            .Simg {
                object-fit: cover;
                height: 150px;
                width: 190px;
                opacity: 0.8;
                border-radius: 12px;
            }

            .stitle {
                margin-top: 15px;
                text-align: center;
                line-height: 30px;
                width: auto;
                font-weight: 700;
                font-size: 15px;
                color: #442370;
                font-family: Open Sans Hebrew;
            }

            .navigate {
                rotate: degree(10%);
                margin-top: 12px;
                margin-left: 6px;
                height: 25px;
            }

            .service-align {
                display: flex;
                align-items: center;
                // margin: 0px 50px;
                justify-content: center;
            }
        }

    }

    .displayalign {
        text-align: -webkit-center;
    }

    .servicecontainersmall {
        border-radius: 12px;
        padding: 15px 0px;
        height: auto;
        width: 250px;
        // text-align: center;
        align-content: center;
        text-align: center;
        background-color: #F3EEEE;
        margin: 5px;

        .imgconatain {
            height: auto;

            .Simg {
                object-fit: cover;
                height: 150px;
                width: 190px;
                opacity: 0.8;
                border-radius: 12px;
            }

            .stitle {
                margin-top: 15px;
                text-align: center;
                line-height: 30px;
                width: auto;
                font-weight: 700;
                font-size: 15px;
                color: #442370;
                font-family: Open Sans Hebrew;
            }

            .navigate {
                rotate: degree(10%);
                margin-top: 12px;
                margin-left: 6px;
                height: 25px;
            }

            .service-align {
                display: flex;
                align-items: center;
                // margin: 0px 50px;
                justify-content: center;
            }
        }
    }
}
</style>
