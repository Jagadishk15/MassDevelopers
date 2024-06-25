<!-- <template>
    <div>
        <div class="container1">

            <div>
                <img class="p-title" src="@/assets/Img/images/const.webp">
            </div>
            <p class="p-name">Construction of Buildings and Roads</p>
        </div>
    </div>

    <div>

        <b-container>
            <div v-for="item in headercontent">
                <designheadercontent :headercontent="item" />

                <groupimage :topimage="item?.topimage" :bottomimage="item?.bottomimage" />
                <p class="endtxt">"</p>

            </div>

        </b-container>

    </div>
    <contactUS />

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Content from '@/components/headercontent.vue'
import designheadercontent from '@/components/designHeaderContent.vue'

import groupimage from '@/components/groupimage.vue'
import contactUS from '@/components/contactUs.vue'


export default defineComponent({
    components: {
        Content,
        groupimage,
        contactUS,
        designheadercontent
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
        let headercontent = ref(
            [
                {
                    Header: "Institutional Buildings",
                    Content: 'One of the many aspects of development administration is institution building, which as a component of economic development, contributes to development action and is utilized for inducing and protecting change. The institution building model has been primarily designed.',
                    uicontainer: false,
                    topimage: [
                        {

                            img: "/src/assets/Img/images/image 127.svg",
                            content: "Pon vidhyasharam : KG Block building"
                        },
                        {

                            img: "/src/assets/Img/images/image 128.svg",
                            content: "Mahatma Gandhi Medical College"
                        },
                        {

                            img: "/src/assets/Img/images/image 129.svg",
                            content: "Rajiv Gandhi Medical College"
                        },

                    ],
                    bottomimage: [
                        {

                            img: "/src/assets/Img/images/image 130.svg",
                            content: "Sathya Sai Medical College"
                        },
                        {

                            img: "/src/assets/Img/images/image 131.svg",
                            content: "PSP Medical College"
                        },


                    ],

                },
                //



                {
                    Header: "Industrial Buildings",
                    Content: 'Industrial buildings include buildings used directly in the production of power, the manufacture of products, the mining of raw materials, and the storage of textiles, petroleum products, wood and paper products, chemicals, plastics, and metals.',
                    uicontainer: true,
                    topimage: [
                        {

                            img: "/src/assets/Img/images/image 77.svg",
                            content: ""
                        },
                        {

                            img: "/src/assets/Img/images/image 80.svg",
                            content: ""
                        },
                        {

                            img: "/src/assets/Img/images/image 76.svg",
                            content: ""
                        },

                    ],
                    bottomimage: [
                        {

                            img: "/src/assets/Img/images/image 79.svg",
                            content: ""
                        },
                        {

                            img: "/src/assets/Img/images/image 81.svg",
                            content: ""
                        },


                    ],

                },

                //
                {
                    Header: "Commercial Buildings",
                    Content: 'Commercial buildings are supposed to be of engineered construction in the sense that they might have been analyzed and designed to meet the provisions of the relevant codes of practice and building bye-laws; the construction might have been supervised by trained persons.',
                    uicontainer: false,
                    topimage: [
                        {

                            img: "/src/assets/Img/images/image 54.svg",
                            content: ""
                        },
                        {

                            img: "/src/assets/Img/images/image 55.svg",
                            content: ""
                        },
                        {

                            img: "/src/assets/Img/images/image 133.svg",
                            content: ""
                        },

                    ],
                    bottomimage: [
                        {

                            img: "/src/assets/Img/images/image 132.svg",
                            content: ""
                        },
                        {

                            img: "/src/assets/Img/images/image 134.svg",
                            content: ""
                        },


                    ],

                },
                //
                {
                    Header: "Residential Buildings",
                    Content: 'These building include any building in which sleeping accommodation provide for normalresidential purposes, with or without cooking and dining facilities.It includes single or multi-family dwellings, apartment houses, lodgings or rooming houses, restaurants, hostels,dormitories and residential hostels',
                    uicontainer: true,
                    topimage: [
                        {

                            img: "/src/assets/Img/images/image 70.svg",
                            content: ""
                        },
                        {

                            img: "/src/assets/Img/images/image 74.svg",
                            content: ""
                        },
                        {

                            img: "/src/assets/Img/images/image 73.svg",
                            content: ""
                        },

                    ],
                    bottomimage: [
                        {

                            img: "/src/assets/Img/images/image 71.svg",
                            content: ""
                        },
                        {

                            img: "/src/assets/Img/images/image 67.svg",
                            content: ""
                        },


                    ],

                },
                //
                {
                    Header: "Roads and Drains",
                    Content: 'Road drainage system. The road drainage system is used for the removal and disposal of water from the surface as well as subsurface water. It maintains the stability and durability of the road, by keeping it dry as possible. The longer water sits on a surface, the more susceptible it is to contamination.',
                    uicontainer: false,
                    topimage: [
                        {

                            img: "/src/assets/Img/images/image 135.svg",
                            content: ""
                        },
                        {

                            img: "/src/assets/Img/images/image 136.svg",
                            content: ""
                        },
                        {

                            img: "/src/assets/Img/images/image 137.svg",
                            content: ""
                        },

                    ],
                    bottomimage: [
                        {

                            img: "/src/assets/Img/images/image 62.svg",
                            content: ""
                        },
                        {

                            img: "/src/assets/Img/images/image 58.svg",
                            content: ""
                        },


                    ],

                },

            ]
        )
        return {
            headercontent,
            products,
            responsiveOptions
        }
    }

})
</script>

<style lang="scss" scoped>
.endtxt {
    font-family: Open Sans Hebrew;
    margin-top: 20px;
    font-size: 78px;
    color: #9747FF;
    // font-style: italic;
    font-weight: 600;
    // line-height: 28.13px;
    text-align: center;
    padding-bottom: 20px;
}

.p-title {
    // margin-top: 10px;
    position: relative;
    width: 100%;
    height: 400px;
    max-width: 100%;
    // max-height: 450px;
    object-fit: fill;
    // opacity: 0.7;
    // background-color: #B086E7;
    // text-align: center;
    // display: flex;
    // justify-content: center;
}

.container1 {

    position: relative;
    text-align: center;
    color: white;
}

.p-name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Roboto;
    font-size: 40px;
    color: white;
    font-style: italic;
    font-weight: 900;
    // display: flex;
    // align-items: center;
}

.wedo {
    height: auto;
    width: 500px;
    text-align: -webkit-center;
    float: inline-end;
    margin: 0px 50px;
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
        font-weight: 800;
        font-size: 30px;
        // font-family: Open Sans Hebrew !important;
    }

    p {
        color: #B1ADAD;
        font-weight: 600;
        font-size: 20px;
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
</style> -->
<template>
    <p>sas</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({

    setup() {
        return {

        }
    }

})
</script>

<style lang="scss" scoped>
.tab-icon {
    width: 30px;
}
</style>
