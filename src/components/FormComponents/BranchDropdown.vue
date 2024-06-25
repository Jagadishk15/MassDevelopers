<template>
  <!-- <n-form-item label="Store Manager Name" path="Branch">

    </n-form-item> -->

  <!-- <n-input v-model="branchname" placeholder="Enter Store Manager Name" /> -->

  <!-- <n-select   :options="options" /> -->
  <!-- <Dropdown :options="branch_data" /> -->

  <CustomDropDown
    v-model="model"
    :disabled="disabled"
    :items="branch_data"
    :name="name"
    :label="$t('5000.Branch')"
    :rules="{ required: true }"
    :required-icon="true"
    id="branch"
    @update:modelValue="input"
  />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";

import commonservice from "../../modules/Inventory/Service/StoreService";
import CustomDropDown from "../FormComponents/Dropdown.vue";
export default defineComponent({
  props: {
    branchname: {
      type: String,
      default: ref(""),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    textField: {
      type: String,
      default: "name",
    },
    items: {
      type: [],
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
    value: {},
    modelValue: {
      type: String,
      default: null,
    },
    // textField: {
    //     type: String,
    //     default: "name",
    // },
    // Designation: {
    //     type: String,
    //     default: ''
    // }
  },
  components: {
    CustomDropDown,
  },
  setup(props, { emit }) {
    const model = ref();
    const branch_data = ref([]);
    let session: any = localStorage.getItem("UsersData");

    session = JSON.parse(session);
    let HospitalId = session.OrganizationId;
    watch(props, (newValue) => {
      debugger;

      model.value = newValue.modelValue;
      input();
    });
    // watch(
    //     () => props.modelValue,
    //     (newVal) => {
    //         debugger;
    //         model.value = newVal
    //         input()
    //     }
    // );
    onMounted(() => {
      debugger;
      model.value = props.modelValue;
      input();
    });
    function input() {
      debugger;
      emit("update:modelValue", model.value);
    }
    //Branch Load
    async function LoadBranch() {
      debugger;
      const dataModel = {
        Dml_Indicator: "LBRAN",
        hospital_id: "USH00005",
      };
      let result = await commonservice.getBranch(session.OrganizationId);
      //let result1 = await commonservice.insertStore(dataModel);
      //console.log(result1);
      // branch_data.value = result.data.Table.map(
      //     (v) => ({
      //         name: v["branch_name"],
      //         value: v["hospital_branch_id"]
      //     }));
      branch_data.value = result["result"]
        .map((item) => {
          item.name = item.Name;
          item.value = item.ID;
          return item;
        })
        .filter((items) => items.OrganizationId == HospitalId);
      console.log(branch_data.value);
    }

    return {
      model,
      LoadBranch,
      branch_data,
      input,
      branch_value: ref(null),
    };
  },
  async created() {
    await this.LoadBranch();
  },
});
</script>

<style lang="scss" scoped></style>
