<template>
    <div>
        <div class="container1">

            <div>
                <img class="p-title" src="@/assets/Img/images/image172.png">
            </div>
            <p class="p-name">Transportation Services</p>
        </div>
    </div>


    <div>
        <b-container>
            <div class="txtheader">
                <div class="dcontaineralign">
                    <p class="txt-title">
                        Ajax Concrete Mixer
                    </p>
                    <div class='containl'>

                    </div>
                    <!-- <div class='containr' v-else>

                    </div> -->
                </div>
                <p class="txt-d">
                    Ajax Engineering is a well-known manufacturer of construction equipment, including concrete mixers.
                    The Ajax concrete mixer is a popular product known for its robust design and efficient performance.
                </p>
                <p class="txt-d mt-5">
                    Ajax concrete mixers are available in various capacities to meet different project requirements.
                    Capacities typically range from small portable mixers for on-site construction to larger units
                    suitable for
                    commercial projects. Ajax concrete mixers incorporate advanced mixing technology to ensure a
                    consistent and homogeneous mix of concrete. This is crucial for achieving the desired strength and
                    quality of the concrete.
                </p>
                <p class="txt-d mt-5">
                    Ajax Engineering emphasizes durability in the construction of its mixers. The components are built
                    to
                    withstand the rigors of construction sites, ensuring a long service life even under challenging
                    conditions.
                    These are versatile and suitable for a range of applications, including residential construction,
                    commercial projects, infrastructure development, and more
                </p>
            </div>
            <div class="webkitcenter">
                <div class="img-alignp">
                    <div class="imgrows">
                        <div class="column">
                            <img src="@/assets/Img/images/image1733.svg" style="width:100%">
                            <img src="@/assets/Img/images/image1766.svg" style="width:100%;float: inline-end">
                        </div>
                        <div class="column">
                            <img src="@/assets/Img/images/image1744.svg" style="width:100%">
                            <img src="@/assets/Img/images/image1755.svg" style="width:100%;float: inline-start;">
                        </div>
                    </div>
                </div>
            </div>
            <p class="endtxt">"</p>


            <div class="txtheader">
                <div class="dcontaineralign">
                    <p class="txt-title">
                        Transport Services
                    </p>

                    <div class='containr'>

                    </div>
                </div>
                <p class="txt-d">
                    Transportation services play a critical role in the efficient movement of materials from one
                    location to
                    another. In the context of a transportation services company, the range of services offered can vary
                    widely.
                </p>
                <p class="txt-d">

                    Transportation of oversized and heavy machinery used in construction, manufacturing, or other
                    industries. Transportation services companies may offer a combination of these services or
                    specialize
                    in specific areas based on their expertise and market demands. The industry continually evolves with
                    advancements in technology, sustainability practices, and regulatory changes
                </p>
            </div>
            <div class="webkitcenter mb-5">
                <div class="img-alignp">
                    <div class="imgrows">
                        <div class="column" style="
    align-content: center;
">
                            <img src="@/assets/Img/images/image1811.svg" style="width:100%">
                            <img src="@/assets/Img/images/image178.svg" style="width:100%;float: inline-end">
                        </div>
                        <div class="column">
                            <img src="@/assets/Img/images/image1799.svg" style="width:100%">
                            <img src="@/assets/Img/images/image1800.svg" style="width:100%;float: inline-start;">
                            <img src="@/assets/Img/images/image1777.svg" style="width:100%;float: inline-start;">

                        </div>
                    </div>
                </div>
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
                    Header: "Welcome to Mass Developers",
                    Content: 'One of the many aspects of development administration is institution building, which as a component of economic development, contributes to development action and is utilized for inducing and protecting change.The institution building model has been primarily designed.',
                    topimage: [
                        {

                            img: new URL('@/assets/Img/images/image127.svg', import.meta.url).href,
                            content: "Pon vidhyasharam : KG Block building"
                        },
                        {

                            img: new URL('@/assets/Img/images/image127.svg', import.meta.url).href,
                            content: "Pon vidhyasharam : KG Block building"
                        },
                        {

                            img: new URL('@/assets/Img/images/image127.svg', import.meta.url).href,
                            content: "Pon vidhyasharam : KG Block building"
                        },

                    ],
                    bottomimage: [
                        {

                            img: new URL('@/assets/Img/images/image127.svg', import.meta.url).href,
                            content: "Pon vidhyasharam : KG Block building"
                        },
                        {

                            img: new URL('@/assets/Img/images/image127.svg', import.meta.url).href,
                            content: "Pon vidhyasharam : KG Block building"
                        },


                    ],

                },
                // {
                //     Header: "Welcome to Mass Developers",
                //     Content: 'One of the many aspects of development administration is institution building, which as a component of economic development, contributes to development action and is utilized for inducing and protecting change.The institution building model has been primarily designed.',
                // },
                // {
                //     Header: "Welcome to Mass Developers",
                //     Content: 'One of the many aspects of development administration is institution building, which as a component of economic development, contributes to development action and is utilized for inducing and protecting change.The institution building model has been primarily designed.',
                // },
                // {
                //     Header: "Welcome to Mass Developers",
                //     Content: 'One of the many aspects of development administration is institution building, which as a component of economic development, contributes to development action and is utilized for inducing and protecting change.The institution building model has been primarily designed.',
                // },
                // {
                //     Header: "Welcome to Mass Developers",
                //     Content: 'One of the many aspects of development administration is institution building, which as a component of economic development, contributes to development action and is utilized for inducing and protecting change.The institution building model has been primarily designed.',
                // },
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



///
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

// .endtxt {
//     font-family: Open Sans Hebrew;
//     margin-top: 20px;
//     font-size: 78px;
//     color: #9747FF;
//     // font-style: italic;
//     font-weight: 600;
//     // line-height: 28.13px;
//     text-align: center;
//     padding-bottom: 20px;
// }

.dcontaineralign {
    position: relative;
}

.containl {

    position: absolute;
    bottom: 50%;
    border: solid 4px #B88FEE;
    height: 30px;
    width: 30px;
    rotate: 30deg;
}

.containr {

    position: absolute;
    bottom: 50%;
    left: 20%;
    border: solid 4px #B88FEE;
    height: 30px;
    width: 30px;
    rotate: 30deg;
}

.txt-d {
    font-family: Roboto;
    margin: 0px 10px;
    font-size: 14px;
    color: #8F8F8F;
    // font-style: italic;
    font-weight: 400;
    line-height: 23.13px;
    text-align: left;
}

.txtheader {

    margin: 30px;
}

.webkitcenter {
    text-align: -webkit-center;
}
</style>
