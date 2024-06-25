<template>
    <div>
        <div class="container1">
            <!-- <img src="img_snow_wide.jpg" alt="Snow" style="width:100%;">
        <div class="bottom-left">Bottom Left</div>
        <div class="top-left">Top Left</div>
        <div class="top-right">Top Right</div>
        <div class="bottom-right">Bottom Right</div>
        <div class="centered">Centered</div> -->
            <div>
                <img class="p-title" src="@/assets/Img/images/projectfit.jpeg">
            </div>
            <p class="p-name">Our Projects</p>
        </div>
    </div>

    <div>

        <b-container>
            <!-- <designheadercontent /> -->
            <div class="txtheader">

                <div class="dcontaineralign">

                    <p class="headertxt-title">
                        We’ve Done

                    </p>
                    <div class='contain'>

                    </div>
                </div>

                <p class="txt-title">
                    Medical Collegs

                </p>
                <ul>
                    <li class="txt-d">Sri Sathya Sai Medical College  </li>
                    <li class="txt-d">Tagore Dental & Medical College           </li>
                    <li class="txt-d">Mahatma Gandhi Medical College        </li>
                    <li class="txt-d">Sri Manakula Vinayagar Medical College </li>
                    <li class="txt-d">Lakshmi Narayana Medical college </li>

                </ul>
                <p class="txt-title">
                    Engineering Collegs

                </p>
                <ul>
                    <li class="txt-d">GKM Engineering College</li>
                    <li class="txt-d">Bharath Engineering College </li>
                    <li class="txt-d">Sri Manakula Vinayagar Engineering College </li>
                    <li class="txt-d">Ramanujar Engineering College </li>
                    <li class="txt-d">MNM Engineering Jain College </li>
                    <li class="txt-d">Sri Ram Engineering College </li>
                    <li class="txt-d">Jerusalem College of Engineering </li>
                    <li class="txt-d">Tagore Engineering College    </li>

                </ul>
                <p class="txt-title">
                    Roads

                </p>
                <ul>
                    <li class="txt-d">Nemili Site </li>
                    <li class="txt-d">Aadil Ashfaque & Co (P) Ltd   </li>
                    <li class="txt-d">IM Gears Company </li>
                    <li class="txt-d">Indo Land </li>
                    <li class="txt-d">Mgm Healthcare </li>
                    <li class="txt-d">RKM Enterprises </li>
                    <li class="txt-d">Hariway Lines Private Limited  </li>

                </ul>
                <!-- <p class=" txt-d ">
                    Great ability develops and reveals itself increasingly with every new assignment. Since its
                    inception in
                    April 2020, Mass Developers is raring to go and is equipped with all vital criterias to reach the
                    acme in
                    this construction arena. Imposing structures stand tall in and around the state posing and praising
                    the
                    innovative architectural designs of Mass Developers. A loyal, dedicated, efficient and skilled work
                    force
                    support Mass Developers to compete with its counterparts, in several departments of construction.
                    Our team
                    respects the core business values like integrity and commitment to timely completion of projects.
                    The wider
                    client network asserts a sound proof of our company's incomparable growth. We march ahead in our
                    mission
                    leaving behind good records in cosultancy and architecture. We blend professional knowledge with
                    craftsmanship. Quality, Technology and Commitment have been the foremost values adopted by the
                    company.


                </p> -->
            </div>


            <!-- <groupimage /> -->
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
        return {
            products,
            responsiveOptions
        }
    }

})
</script>

<style lang="scss" scoped>
.contain {

    position: absolute;
    bottom: 50%;
    left: 12%;
    border: solid 4px #442370;
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

    ul li {
        margin: 10px 0px;
    }
}

.p-title {
    // margin-top: 10px;
    position: relative;
    width: 100%;
    height: 400px;
    max-width: 100%;
    // max-height: 450px;
    object-fit: fill;
    opacity: 0.7;
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

.headertxt-title {
    font-family: Roboto;
    margin: 0px 10px;
    font-size: 24px;
    color: #B086E7;
    // font-style: italic;
    font-weight: 600;
    // line-height: 28.13px;
    text-align: left;
    padding-bottom: 20px;


}

.dcontaineralign {
    position: relative;
}
</style>
