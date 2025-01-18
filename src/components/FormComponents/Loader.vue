<template>
  <div v-if="loading" class="loader-container">
    <!-- <img src="@/assets/Gif/loadergif.gif" class="Loadergif" alt="Loading..." /> -->
    <!-- <img src="@/assets/Gif/CRMLoader.gif" class="Loadergif" alt="Loading..." /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  opacity: 0.6;
  height: 100%;
  position: relative;
}

.Loadergif {
  height: 100px;
  position: absolute;
  top: 200px;
}

.transaction-tabs .Loadergif {
  height: 100px;
  position: absolute;
  top: 170px;
}

@media screen and (max-width: 2560px) and (min-width: 1400px) {
  .Loadergif {
    top: 400px;
  }

  .Loadergif {
    height: 150px;
  }
}

@media only screen and (max-width:545px) {
  .Loadergif {
    top: 130px;
  }
}
</style>
