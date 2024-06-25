<template>
  <label path="storeid">{{ label }} <span class="red" v-if="requiredIcon">*</span></label>
  <InputNumber :disabled="disabled" :maxlength="maxlength" v-model="model" type="number" :id="id"
    :class="{ 'p-invalid': errorMessages.length }" @input="$emit('update:modelValue', model)" ref="inputField"
    :showButtons="showButtons" mode="currency" currency="INR" />
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
  nextTick,
} from "vue";

import { useField, defineRule, configure, validate } from "vee-validate";
import { required, email } from "@vee-validate/rules";
// type Messages = {
//   [key: string]: string;
// };
// configure({
//   generateMessage: function (ctx) {
//     const messages: Messages = {
//       required: `${ctx.field} is required`,
//     };
//     const message =
//       messages[ctx.rule?.name ?? ""] ||
//       `Please enter a valid value for ${ctx.field}.`;
//     if (ctx.value === "" && ctx.rule?.name === "required") {
//       nextTick(() => {
//         const inputField = document.querySelector(
//           `input[id="${ctx.field}"]:not([disabled]):not([readonly]):first-of-type`
//         ) as HTMLInputElement | null;
//         if (inputField !== null) {
//           inputField.focus();
//         }
//       });
//     }
//     return message;
//   },
// });

// defineRule("required", required);
defineRule("email", (value) => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return true;
  }
  // Check if email
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
    return "This field must be a valid email";
  }
  return true;
});
defineRule("numeric", (value) => {
  if (!value || !value.length) {
    return true;
  }
  if (!/^\d+$/.test(value)) {
    return "This field must be numeric";
  }
  return true;
});
defineRule("alphanumeric", (value) => {
  if (!value || !value.length) {
    return true;
  }
  if (!/^[a-zA-Z0-9 ]+$/.test(value)) {
    return "This field must be alphanumeric";
  }
  return true;
});

defineRule("alphabet", (value) => {
  if (!value || !value.length) {
    return true;
  }
  if (!/^[a-zA-Z ]+$/.test(value)) {
    return "This field must be alphabets";
  }
  return true;
});
defineRule("nonzeroable", (value) => {
  if (value == 0) {
    return "This field must be greater than zero";
  }
  return true;
});
export default defineComponent({
  props: {
    value: {},
    id: {
      type: String,
      default: "",
    },

    input: {
      type: String,
      default: "",
    },
    placeholder: {
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
    rules: {
      type: Object,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showButtons: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "number",
    },
    modelValue: {
      type: Number,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    requiredIcon: {
      type: Boolean,
      defalut: false,
    },
    maxlength: {
      type: Number,
    },
  },

  setup(props, { emit }) {
    const model = ref();

    onMounted(() => {
      debugger;
      model.value = props.modelValue;

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

    // const handleInput = () => {
    //     validate(props.name, model.value).then((result) => {
    //         errorMessage.value = result.errors.length > 0 ? result.errors[0] : '';
    //     });
    //     console.log("test")
    // };

    return {
      value,
      errorMessages,
      handleBlur,
      model,
      // handleInput,
      update,
    };
  },
});
</script>

<style>
span.p-inputnumber-button-group {
  height: 37px;
}
</style>
  