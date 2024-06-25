<template>
  <label path="storeid">{{ label }} <span class="red" v-if="requiredIcon">*</span></label>
  <InputText :disabled="disabled" :maxlength="maxlength" v-model="model" :type="txttype" :id="id" @blur="handleBlur"
    :class="{ 'p-invalid': errorMessages.length }" @input="$emit('update:modelValue', model)" @change="$emit('change')"
    ref="inputField" :placeholder="placeholder" @keyup="$emit('keyup')" :autocomplete="autocomplete" />
  <p v-if="errorMessages.length" class="err_msg_style">{{
    errorMessages[0]
  }}</p>
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
  watch,
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
// defineRule("website", (value) => {
//   // Field is empty, should pass
//   if (!value || !value.length) {
//     return true;
//   }
//   // Check if special characters
//   if (
//     /^((http|https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/.test(
//       value
//     )
//   ) {
//     return "This field must be a valid website";
//   }
//   return true;
// });
defineRule("website", (value) => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return true;
  }

  // Corrected regular expression for URL validation (accepts both with and without 'www')
  const urlPattern =
    /^(https?:\/\/(www\.)?)?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([/?].*)?$/;
  if (!urlPattern.test(value)) {
    return "This field must be a valid website";
  }

  return true;
});

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
defineRule("Phonenumber", (value) => {
  if (!value || !value.length) {
    return true;
  }
  if (value.length > 10 || value.length < 10) {
    return "Invalid Phone Number";
  }
  // if (!/^\d+$/.test(value)) {
  //   return "This field must be numeric";
  // }
  return true;
});
defineRule("Aadharnumber", (value) => {
  if (!value || !value.length) {
    return true;
  }
  // alert('2')

  if (value.length != 12) {
    return "Invalid Aadhar Number";
  }
  // if (!/^\d+$/.test(value)) {
  //   return "This field must be numeric";
  // }
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
defineRule("decimalnumeric", (value) => {
  if (!value || !value.length) {
    return true;
  }
  if (!/^\d*\.?\d+$/.test(value)) {
    return "This field must be a valid number";
  }
  return true;
});
defineRule("decimalnumber", (value) => {
  if (!value || !value.length) {
    return true;
  }
  if (!/^\d*\.?\d{0,2}$/.test(value)) {
    return "This field must be a valid number with up to two decimal places";
  }
  return true;
});
defineRule("decimal", (value) => {
  if (!value || !value.length) {
    return true;
  }
  if (!/^(\d*\.)?\d+$/.test(value)) {
    return "This field must be decimal";
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
defineRule("percentage", (value) => {
  if (value > 100) {
    return "This field must be less than Hundred";
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
    txttype: {
      type: String,
      default: "text",
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
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
      default: "",
    },
    autocomplete: {
      type: String,
      default: "on",
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
      model.value = props.modelValue;

      update();
    });
    watch(
      () => props.modelValue,
      (newVal) => {
        //debugger;
        model.value = newVal;
        update();
      }
    );

    function update() {
      //   debugger;
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
