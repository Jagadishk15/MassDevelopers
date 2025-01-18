<template>
    <div>
        <div class="container1">

            <div>
                <img class="p-title" src="@/assets/Img/images/image171.png">
            </div>
            <p class="p-name">Coordination with PMC and Vendors</p>
        </div>
    </div>

    <div>

        <b-container>
            <div class="txtheader">
                <div class="dcontaineralign">
                    <p class="txt-title">
                        Coordination with PMC
                    </p>
                    <div class='containl'>

                    </div>
                    <!-- <div class='containr' v-else>

                    </div> -->
                </div>
                <p class="txt-d mt-5">
                    Coordination with a PMC is essential for ensuring the successful planning, execution, and completion
                    of
                    a project.  At the initiation phase, collaboration with the PMC involves clearly defining project
                    objectives,
                    scope, deliverables, and timelines. This includes aligning the PMC with the organization's goals and
                    ensuring a shared understanding of project success criteria.
                </p>
                <p class="txt-d mt-5">
                    Collaborate with the PMC in resource planning, including human resources, equipment, and materials.
                    Coordination ensures that resource allocation aligns with the project timeline and budget,
                    preventing
                    potential bottlenecks.
                </p>
                <p class="txt-d mt-5">
                    Coordination with the PMC is vital during the budgeting phase. Regular updates and communication
                    help in monitoring and controlling project costs, ensuring that expenditures align with the planned
                    budget.
                </p>


                <p class="txt-d mt-5">
                    Establish a communication plan with the PMC to ensure effective information flow between project
                    teams, stakeholders, and leadership. Clear channels of communication help in addressing issues
                    promptly and keeping all parties informed
                </p>
                <p class="txt-d mt-5">
                    Effective coordination with a PMC requires open communication, a collaborative mindset, and a shared
                    commitment to project success. Regular meetings, status updates, and a proactive approach to issue
                    resolution contribute to a successful partnership between the organization and the PMC.
                </p>
            </div>

            <p class="endtxt">"</p>

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
    color: #2932a6;
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
//     color: #2932a6;
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
    left: -2%;
    height: 30px;
    width: 30px;
    rotate: 30deg;
}

.containr {

    position: absolute;
    bottom: 50%;
    right: 80%;
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
</style>
