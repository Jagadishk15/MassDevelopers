<template>
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
import { defineComponent, ref, h, onMounted } from 'vue';
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
                            img: new URL('@/assets/Img/images/image127.svg', import.meta.url).href,
                            content: "Pon vidhyasharam : KG Block building"
                        },
                        {
                            img: new URL('@/assets/Img/images/image128.svg', import.meta.url).href,
                            content: "Mahatma Gandhi Medical College"
                        },
                        {
                            img: new URL('@/assets/Img/images/image129.svg', import.meta.url).href,
                            content: "Rajiv Gandhi Medical College"
                        },

                    ],
                    bottomimage: [
                        {
                            img: new URL('@/assets/Img/images/image130.svg', import.meta.url).href,
                            content: "Sathya Sai Medical College"
                        },
                        {
                            img: new URL('@/assets/Img/images/image131.svg', import.meta.url).href,
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
                            img: new URL('@/assets/Img/images/image77.svg', import.meta.url).href,
                            content: ""
                        },
                        {
                            img: new URL('@/assets/Img/images/image80.svg', import.meta.url).href,
                            content: ""
                        },
                        {
                            img: new URL('@/assets/Img/images/image76.svg', import.meta.url).href,
                            content: ""
                        },

                    ],
                    bottomimage: [
                        {
                            img: new URL('@/assets/Img/images/image79.svg', import.meta.url).href,
                            content: ""
                        },
                        {
                            img: new URL('@/assets/Img/images/image81.svg', import.meta.url).href,
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
                            img: new URL('@/assets/Img/images/image54.svg', import.meta.url).href,
                            content: ""
                        },
                        {
                            img: new URL('@/assets/Img/images/image55.svg', import.meta.url).href,
                            content: ""
                        },
                        {
                            img: new URL('@/assets/Img/images/image133.svg', import.meta.url).href,
                            content: ""
                        },

                    ],
                    bottomimage: [
                        {
                            img: new URL('@/assets/Img/images/image132.svg', import.meta.url).href,
                            content: ""
                        },
                        {
                            img: new URL('@/assets/Img/images/image134.svg', import.meta.url).href,
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
                            img: new URL('@/assets/Img/images/image70.svg', import.meta.url).href,
                            content: ""
                        },
                        {
                            img: new URL('@/assets/Img/images/image74.svg', import.meta.url).href,
                            content: ""
                        },
                        {
                            img: new URL('@/assets/Img/images/image73.svg', import.meta.url).href,
                            content: ""
                        },

                    ],
                    bottomimage: [
                        {
                            img: new URL('@/assets/Img/images/image71.svg', import.meta.url).href,
                            content: ""
                        },
                        {
                            img: new URL('@/assets/Img/images/image67.svg', import.meta.url).href,
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
                            img: new URL('@/assets/Img/images/image135.svg', import.meta.url).href,
                            content: ""
                        },
                        {
                            img: new URL('@/assets/Img/images/image136.svg', import.meta.url).href,
                            content: ""
                        },
                        {
                            img: new URL('@/assets/Img/images/image137.svg', import.meta.url).href,
                            content: ""
                        },

                    ],
                    bottomimage: [
                        {
                            img: new URL('@/assets/Img/images/image62.svg', import.meta.url).href,
                            content: ""
                        },
                        {
                            img: new URL('@/assets/Img/images/image58.svg', import.meta.url).href,
                            content: ""
                        },


                    ],

                },

            ]
        )
        onMounted(() => {
            window.scrollTo(0, 0);
        });
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
</style>
