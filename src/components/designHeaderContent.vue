<template>
    <div class="txtheader">

        <div class="dcontaineralign">

            <p class="txt-title">
                {{ headercontent['Header'] }}

            </p>
            <div class='containl' v-if="headercontent['uicontainer'] == true">

            </div>
            <div class='containr' v-else>

            </div>
        </div>
        <p class="txt-d
        ">

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



@media only screen and (max-width: 428px) {
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

@media only screen and (max-width: 768px) {}
</style>
