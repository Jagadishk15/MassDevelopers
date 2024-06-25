<template>
    <!-- <p>sas</p> -->

    <div class="txtheader">

        <div class="dcontaineralign">

            <p class="txt-title">
                <!-- Welcome to Mass Developers -->
                {{ headercontent['Header'] }}

            </p>
            <div class='containl' v-if="headercontent['uicontainer'] == true">

            </div>
            <div class='containr' v-else>

            </div>
        </div>
        <p class="txt-d
        ">
            <!-- Great ability develops and reveals itself increasingly with every new assignment. Since its inception in
            April 2020, Mass Developers is raring to go and is equipped with all vital criterias to reach the acme in
            this construction arena. Imposing structures stand tall in and around the state posing and praising the
            innovative architectural designs of Mass Developers. A loyal, dedicated, efficient and skilled work force
            support Mass Developers to compete with its counterparts, in several departments of construction. Our team
            respects the core business values like integrity and commitment to timely completion of projects. The wider
            client network asserts a sound proof of our company's incomparable growth. We march ahead in our mission
            leaving behind good records in cosultancy and architecture. We blend professional knowledge with
            craftsmanship. Quality, Technology and Commitment have been the foremost values adopted by the company. -->
            {{ headercontent['Content'] }}



        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props: {

        headercontent: {
            default: {}
        },

    },
    setup() {
        return {

        }
    }

})
</script>

<style lang="scss" scoped>
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
</style>
