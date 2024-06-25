<template>
  <div class="download_btn excel-btns" v-if="HideAndShow">
    <i class="pi pi-download" title="Download" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"></i>
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  PropType,
  reactive,
  computed,
  watch,
  onMounted,
} from "vue";

import ExcelJS from "exceljs";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { boolean } from "yup";
// import { string } from "yup";

export default defineComponent({
  components: {},

  props: {
    ExportList: {
      type: Array,
      default: [],
    },
    PageName: {
      type: String,
      default: "",
    },
    ExportOption: {
      type: String,
      default: "",
    },
    HideAndShow: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const menu = ref();
    const items = ref([
      {
        label: "Download",
        items: [
          {
            label: "Excel",
            icon: "pi pi-file-excel",
            command: async () => {
              ExportExcel();
            },
          },
          {
            label: "Pdf",
            icon: "pi pi-file-pdf",
            command: async () => {
              ExportPDF();
            },
          },
        ],
      },
    ]);

    const toggle = (event) => {
      menu.value.toggle(event);
    };

    function ExportExcel() {
      debugger;
      emit("ExportExcel");
    }

    function ExportPDF() {
      debugger;
      emit("ExportPDF");
    }

    watch(
      () => props.ExportList,
      (newVal: any) => {
        debugger;
        if (props.ExportOption == "Excel") {
          Excel(newVal);
        } else if (props.ExportOption == "PDF") {
          PDF(newVal);
        } else {
          alert("Somthing went wrong");
        }
      }
    );

    //Export as Excel
    async function Excel(ExcelData) {
      debugger;
      const workbook = new ExcelJS.Workbook();
      const sheet = workbook.addWorksheet("Sheet1");

      // Add headers
      const headers = Object.keys(ExcelData[0]);
      sheet.addRow(headers);

      // Add data
      ExcelData.forEach((item) => {
        const row: any = [];
        headers.forEach((header) => {
          row.push(item[header]);
        });
        sheet.addRow(row);
      });

      // Create a blob from the Excel workbook
      const blob = await workbook.xlsx.writeBuffer();

      // Trigger a file download
      const blobUrl = URL.createObjectURL(
        new Blob([blob], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        })
      );

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "" + props.PageName + ".xlsx";
      link.click();
      URL.revokeObjectURL(blobUrl);
    }

    //Export as PDF
    async function PDF(PdfData) {
      const pdf: any = new jsPDF();

      // Add headers
      const headers = Object.keys(PdfData[0]);

      // Extract data from objects
      const data = PdfData.map((item) => headers.map((header) => item[header]));

      // Add a table with autotable
      pdf.autoTable({
        head: [headers],
        body: data,
      });

      // Save the PDF
      pdf.save("" + props.PageName + ".pdf");
    }

    return {
      ExportExcel,
      ExportPDF,
      items,
      toggle,
      menu,
    };
  },
});
</script>

<style lang="scss">
// .download_btn .pi-download {
//   background-color: #e1e1e1;
//   color: #444444;
//   font-size: 14px;
//   border-radius: 5px;
//   padding: 8px 8px;
//   border-radius: 50%;
// }
.excel-btns .pi {
  // background-color: #8daccc;
  // color: #ffffff;
  // font-size: 18px;
  // border-radius: 5px;
  // padding: 5px;
  margin: 0 10px;
  color: #6366f1;
  background-color: #e1e1e1;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer
}
</style>
