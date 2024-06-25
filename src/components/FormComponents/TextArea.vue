<template>
  <label path="storeid" v-if="visiblelabel">{{ label }} <span class="red" v-if="requiredIcon">*</span></label>
  <Textarea :disabled="disabled" v-model="model" :rows="rows" :autoResize="true" :id="id"
    @input="$emit('update:modelValue', model)" :class="{ 'p-invalid': errorMessages.length }" @keyup="handleInput"
    @keydown="handleInput" :placeholder="placeholder" />
  <span v-if="errorMessages.length" class="err_msg_style">{{
    errorMessages[0]
  }}</span>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  onMounted,
  computed,
  watch
} from "vue";
import { useField, defineRule, configure, validate } from "vee-validate";
import { required, email } from "@vee-validate/rules";
// import { rules } from "@/modules/Inventory/rules/rules";
import { number } from "@intlify/core-base";
import { id } from "date-fns/locale";
import Textarea from "primevue/textarea";

export default defineComponent({
  props: {
    value: {},
    input: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "",
    },
    rules: {
      type: Object,
      default: null,
    },
    modelValue: {
      type: String,
      default: "",
    },
    visiblelabel: {
      type: Boolean,
      default: true
    },
    rows: {
      type: Number,
      default: "4",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    requiredIcon: {
      type: Boolean,
      defalut: false,
    },
  },

  setup(props, { emit }) {
    const model = ref();
    const id = ref();
    onMounted(() => {
      model.value = props.modelValue;
      id.value = props.modelValue;
      update();
    });
    watch(props, (newValue) => {


      model.value = newValue.modelValue;
      update();
    });

    function update() {
      emit("update:modelValue", model);
    }

    const { value, errorMessage, handleBlur, handleChange } = useField(
      props.name,
      props.rules,
      { initialValue: props.modelValue }
    );

    const errorMessages = computed(() => {
      return errorMessage.value ? [errorMessage.value] : [];
    });

    const handleInput = () => {
      validate(props.name, model.value).then((result) => {
        errorMessage.value = result.errors.length > 0 ? result.errors[0] : "";
      });
      console.log("test");
    };

    const clear = () => {
      model.value = "";
    };
    return {
      model,
      id,
      clear,
      errorMessages,
      handleBlur,
      handleInput,
      update,
    };
  },
});
</script>
