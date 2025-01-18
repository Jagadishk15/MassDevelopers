<template>
  <label path="storeid">{{ label }} <span class="red" v-if="requiredIcon">*</span></label>
  <Dropdown v-model="model" :type="type" :disabled="disabled" :filter="filter" :options="items" optionValue="value"
    optionLabel="name" :key-field="valueField" :label-field="textField" @focus="$.emit('focus')"
    :class="{ 'p-invalid': errorMessages.length, styleclass }" @change="$.emit('change')" @update:model-value="input"
    :id="id" :showClear="showClear" class="w-full md:w-14rem" :placeholder="placeholder">
  </Dropdown>
  <span v-if="errorMessages.length" class="err_msg_style">{{
    errorMessages[0]
  }}</span>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, computed, watch } from "vue";
import { useField, defineRule, configure, validate } from "vee-validate";
import { required, email } from "@vee-validate/rules";

defineRule("required", required);
export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    filter: {
      type: Boolean,
      default: true,
    },
    showClear: {
      type: Boolean,
      default: true,
    },
    id: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    // modelValue: {},
    textField: {
      type: String,
      default: "name",
    },
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
    valueField: {
      type: String,
      default: "value",
    },
    vid: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    rules: {
      type: [String, Object],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    invalid: {
      type: String,
      default: "This field is required",
    },
    modelValue: {
      type: [String, Number, Object, Boolean, Array],
      default: null,
    },
    requiredIcon: {
      type: Boolean,
      defalut: false,
    },
    styleclass: {
      type: String,
      default: "",
    },

  },
  setup(props, { emit }) {
    const model = ref();

    onMounted(() => {
      model.value = props.modelValue;
      input();
    });

    function input() {
      emit("update:modelValue", model.value);
    }
    watch(
      () => props.modelValue,
      (newVal) => {
        model.value = newVal;
        emit("update", model.value);
      }
    );
    const { value, errorMessage, handleBlur, handleChange } = useField(
      props.name,
      props.rules,
      { initialValue: props.modelValue }
    );

    const errorMessages = computed(() => {
      return errorMessage.value ? [errorMessage.value] : [];
    });
    const fieldClass = computed(() => {
      return {
        "is-invalid": errorMessages.value.length > 0,
      };
    });
    return {
      input,
      model,
      errorMessages,
      handleBlur,
      fieldClass,
    };
  },
});
</script>

<style lang="scss">
.styleclass {
  background-color: #f8f8f8 !important;
  width: 200px !important;
  border-radius: 30px !important;
}
</style>
