<template>
  <label path="storeid">{{ label }} <span class="red" v-if="requiredIcon">*</span></label>

  <MultiSelect v-model="model" :type="type" :disabled="disabled" :options="items" optionValue="value" optionLabel="name"
    :key-field="valueField" :label-field="textField" @change="input" @blur="$emit('blur')"
    :class="{ 'p-invalid': errorMessages.length }">
  </MultiSelect>
  <span v-if="errorMessages.length" class="err_msg_style">{{
    errorMessages[0]
  }}</span>
  <!-- <Dropdown v-model="model" :options="cities" optionLabel="name" optionValue="code" placeholder="Select a City" /> -->
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, computed, watch } from "vue";
import { useField, defineRule, configure, validate } from "vee-validate";
import { required, email } from "@vee-validate/rules";
import { value } from "dom7";
import selectfield from "@/components/FormComponents/Dropdown.vue";

defineRule("required", required);
export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false,
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
      default: false,
    },
  },
  setup(props, { emit }) {
    const model = ref();

    onMounted(() => {
      debugger;
      model.value = props.modelValue;
      input();
      blur();
    });
    watch(props, (newValue) => {
      debugger;

      model.value = newValue.modelValue;
      //input();
      blur();
    });
    function input() {
      debugger;
      emit("update:modelValue", model.value);
    }
    function blur() {
      debugger;
      emit("update:modelValueblur", model.value);
    }
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
      blur,
    };
  },
});
</script>

<style lang="scss" scoped></style>
