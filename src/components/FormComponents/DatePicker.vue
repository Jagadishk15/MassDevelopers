<template>
  <!-- dateformat: {
        type: String,
        default: "dd-mm-yy",
      }, -->
  <!-- <Dropdown placeholder="Select" v-model="model" :type="type" :disabled="disabled" :options="items" optionValue="Id"
        optionLabel="name" :key-field="valueField" :label-field="textField" @update:value="input">
    </Dropdown> -->
  <!-- <label path="storeid">{{ label }} <span class="red">*</span></label> -->
  <label path="storeid" v-if="showlabel">{{ label }} <span class="red" v-if="requiredIcon">*</span></label>
  <!-- <Calendar
    inputId="basic"
    v-model="model"
    autocomplete="off"
    @update:modelValue="input"
    :showIcon="true"
    :disabled="disabled"
    dateFormat="dd-mm-yy"
    :class="{ 'p-invalid': errorMessages.length }"
  /> -->
  <div class="custom-datepicker">
    <Calendar inputId="basic" v-model="model" panelClass="min-w-min w-10rem" :id="id"
      :class="{ 'date-picker': true, 'p-invalid': errorMessages.length }" @input="$emit('update:modelValue', model)"
      @change="$emit('change')" ref="inputField" :showIcon="true" :disabled="disabled" :type="type"
      :dateFormat="dateformat" :maxDate="maxDate" :timeOnly="timeOnly" hourFormat="12" :showButtonBar="showButtonBar"
      @date-select="$emit('date-select')" @clear-click="$emit('clear-click')" :placeholder="placeholder" />
    <span v-if="errorMessages.length" class="err_msg_style">{{
    errorMessages[0]
  }}</span>
  </div>
  <!-- <Dropdown v-model="model" :options="cities" optionLabel="name" optionValue="code" placeholder="Select a City" /> -->
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, computed, watch, PropType } from "vue";
import { useField, defineRule, configure, validate } from "vee-validate";

export default defineComponent({
  props: {
    id: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showlabel: {
      type: Boolean,
      default: true,
    },
    textField: {
      type: String,
      default: "name",
    },
    timeOnly: {
      type: Boolean,
      default: false,
    },
    maxDate: {
      type: Date as PropType<Date>,
      required: false
    },
    items: {
      type: [],
      default: () => {
        return [];
      },
    },
    dateformat: {
      type: String,
      default: "dd-mm-yy",
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
      type: Date,
      default: "date",
    },
    invalid: {
      type: String,
      default: "This field is required",
    },
    value: {},
    requiredIcon: {
      type: Boolean,
      defalut: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
    input: {
      type: String,
      default: "",
    },
    showButtonBar: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const model = ref();

    onMounted(() => {
      model.value = props.value;
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
    // watch(model, (newVal) => {
    //   emit("update:modelValue", newVal);
    //   update();
    // });

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

    return {
      update,
      model,

      errorMessages,
      handleBlur,
      //handleDateChange,
    };
  },
  // created() {
  //     alert('hii')
  // },
});
</script>

<style lang="scss">
.p-datepicker-group-container {
  width: 300px !important;
  height: auto !important;
}

.p-datepicker table td {
  padding: 0px !important;
}

.p-datepicker table {
  font-size: 14px !important;
  margin: 0px 0 !important;
}

.p-datepicker .p-datepicker-buttonbar {
  padding: 0rem 0 !important;
  border-top: 1px solid #dee2e6;
}

.p-datepicker table td>span {
  width: 30px !important;
  height: 33px !important;
  border-radius: 10% !important;
  transition: box-shadow 0.2s;
  border: 1px solid transparent;
}
</style>
