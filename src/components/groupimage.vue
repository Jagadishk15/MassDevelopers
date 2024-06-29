<template>
    <b-container>
        <div class="fiveImage">
            <b-row>
                <b-col cols="12" lg="4" md="6" xl="4" v-for="item in topimage">
                    <div class="imgalign">

                        <img class="mx-5" :src="item['img']">
                        <p class="subtxt">{{ item['content'] }}</p>

                    </div>
                </b-col>
            </b-row>
            <b-row align-h="around">
                <b-col cols="12" md="6" lg="6" xl="6" v-for="item in bottomimage">
                    <div class="imgalign my-5">

                        <img class="mx-5" :src="item['img']">
                        <p class="subtxt">{{ item['content'] }}</p>
                    </div>
                </b-col>
            </b-row>

        </div>
    </b-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        topimage: {
            // default: []
        },
        bottomimage: {
            // default: []
        },


    },
    setup() {
        return {

        }
    }

})
</script>

<style lang="scss" scoped>
.fiveImage {

    // margin: 30px;
}

.imgalign {
    text-align: center;
    margin: 10px 0px;

    img {
        width: 280px;
    }
}

.subtxt {
    font-size: 14px;
    font-family: Open Sans Hebrew;
    font-weight: 500;
    color: #000000;
    margin: 30px 0px;

}
</style>
