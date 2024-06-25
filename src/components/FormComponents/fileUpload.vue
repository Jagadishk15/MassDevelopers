<template>
    <div v-if="profileoption == true">
        <!-- <div>
            <div class="image-preview">
                <img :src="selectimage" alt="Preview" class="circle-preview">
            </div>
        </div> -->
        <!-- {{ selectimage }}ll{{ src }} -->
        <label>
            <div class="image-preview">
                <img :src="singlesrcpreview" alt="" class="circle-preview">
            </div>
            <input type="file" name="filesend" :accept="format" ref="fileInput" @change="onFileSingleSelected"
                style="display: none" />
            <!-- {{ singlesrcpreview }}dd -->

        </label>

        <!-- <input type="file" class="uploadbtn" :multiple="false" name="filesend" @change="onFileSelected" ref="fileInput"
            accept="image/*"> -->
    </div>
    <div v-else>

        <b-row v-if="uploadoption == 'imageupload'" class="choose-file file-height">
            <b-col lg="2" md="2" sm="2" cols="2" class="img-list px-0">
                <ul class="img-list-ul" v-for="(item, index) in srcpreview" :key="index">
                    <li @click="(imagereview = true), (selectimage = srcpreview[index])">
                        <img alt="logo" class="logo" :src="srcpreview[index]" />
                        <Divider type="solid" />
                    </li>
                </ul>
            </b-col>
            <b-col lg="10" md="10" sm="10" cols="10" class="file-height">
                <div class="img-upload">
                    <div v-if="imagereview">
                        <div class="drop-zone" @drop.prevent="onDrop" @dragover.prevent>
                            <img alt="" class="logo1" :src="selectimage" />
                            {{ selectimage }}
                        </div>
                    </div>
                    <div v-else>
                        <div class="drop-zone" @drop.prevent="onDrop" @dragover.prevent>
                            <img alt="Vue logo" class="choose-file-icon" src="@/assets/Img/icons/drag-and-drop.svg" />
                            <span>Drag and Drop </span>
                            <input type="file" :multiple="true" data-max_length="20" name="filesend"
                                @change="onFileSelected" ref="fileInput" style="display: none" :accept="format" />
                        </div>
                        <!-- <img alt="Vue logo" class="choose-file-icon" src="@/assets/Img/icons/drag-and-drop.svg" />
          <p class="choose-img py-3">Choose an image or drag and drop</p> -->
                    </div>
                </div>

                <b-row class="class1">
                    <b-col class="add-img-logo">
                        <!-- <input type="file" :multiple='true' data-max_length="20" name="filesend" @change="onFileSelected"> -->
                        <img class="icon1" src="@/assets/Img/icons/dummy-image2.svg" />
                        <label>
                            Add Media
                            <input type="file" :multiple="true" data-max_length="20" name="filesend" :accept="format"
                                @change="onFileSelected" />
                        </label>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>

    <!-- <img alt="Vue logo" :src="src" class="logo" /> -->
</template>
<script lang="ts">
import { defineComponent, ref, h, watch, onMounted } from "vue";
import CommonService from "@/modules/crm/service/commonService";
import { clear } from 'console';
import { value } from 'dom7';

export default defineComponent({
    props: {
        profileoption: {
            type: Boolean,
            default: false
        },
        uploadoption: {
            type: String,
            default: "",
        },
        imageData: {
            type: String,
        },
        FileNames: {
            type: Array,
            default: [],
        },
        format: {
            type: String,
            default: ''
        }
    },

    methods: {
        // onDrop(event: DragEvent) {
        //   alert('hi')
        //   event.preventDefault();
        //   const file = event.dataTransfer?.files?.[0];
        //   if (e.target.files.length <= 5) {
        //     for (let i = 0; i < e.target.files.length; i++) {
        //       const file = e.target.files[i];
        //       src.push(file)
        //       srcpreview.push(URL.createObjectURL(e.target.files[i]))
        //       // src.push(e.target.files.item(i))
        //     }
        //   }
        //   else {
        //     alert("select only 5 images")
        //   }
        //   // this.handleFile(file);
        // },
        // onFileSelected(event: Event) {
        //     const target = event.target as HTMLInputElement;
        //     const file = target.files?.[0];
        //     alert(target.files?.[0]);
        //     this.handleFile(file);
        // },
        // handleFile(file: File | undefined) {
        //     if (!file) return;
        //     // handle the file upload here
        //     this.uploadFile()
        // },
        onFileValidation(event) {
            const files = event.target.files;
            const allowedExtensions = ["mp3"];

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const extension = file.name.split(".").pop().toLowerCase();

                if (!allowedExtensions.includes(extension)) {
                    // Handle error for invalid file type
                    alert("Please select only .mp3 files.");
                    return;
                }

                // Process the valid .mp3 file
                // ...
            }
        }
    },

    setup(props, { emit }) {
        const file = ref();
        const myRef = ref<never[]>([]);

        let src: any = myRef.value;
        let singlesrc: any = myRef.value;

        let srcpreview: string[] = ref<never[]>([]).value;
        let singlesrcpreview = ref();


        const imageModel = ref();
        const message = ref("");
        const isLoading = ref(false);

        function isFileImage(file) {
            return file && file["type"].split("/")[0] === "image";
        }
        function onDrop(event: DragEvent) {
            debugger;
            event.preventDefault();

            const items = event.dataTransfer?.files ?? [];

            if (items!.length <= 5) {
                for (let i = 0; i < items!.length; i++) {
                    // const item = items[i];

                    src.push(items[i]);

                    srcpreview.push(URL.createObjectURL(items[i]));
                    console.log(srcpreview);
                }
            } else {
                alert("select only 5 images");
            }

            debugger;
            console.log(src);
            imageModel.value = true;
            uploadFile();
        }

        // watch(
        //   () => props.FileNames,
        //   (newVal) => {
        //     debugger;
        //     if (newVal) {
        //       console.log("WatchImageValues", newVal);
        //       for (let i = 0; i < newVal.length; i++) {
        //         let name = newVal[i];
        //         let ImgName = name["imageFile"];
        //         const imagePath = `D:\\InventoryImages\\${ImgName}`;
        //         console.log(imagePath);
        //       }
        //     }
        //   }
        // );

        watch(
            () =>
                props.FileNames as Array<{
                    // Id: number;
                    // ManufactureId: number;
                    ImgPath: string;
                    FileName: string;
                    // IsNew: boolean;
                    // IsModified: null;
                }>,
            (newVal) => {
                debugger;
                if (newVal) {
                    console.log("WatchImageValues", newVal);
                    for (let i = 0; i < newVal.length; i++) {
                        let name = newVal[i];
                        //let ImgPathValue = name.ImgPath;
                        let ImgName = name.FileName;
                        let ImgPathValue = `D:\\InventoryImages\\${ImgName}`;
                        let imagePath = ImgPathValue;
                        if (imagePath != null) {
                            srcpreview.push(imagePath);
                        }

                        console.log("ImgPath", imagePath);
                    }
                }
            }
        );
        // watch(
        //     () => props.imageData,
        //     () => {
        //         alert(props.imageData)
        //         //  let   File = props.imageData,
        //         singlesrcpreview.value = URL.createObjectURL(props.imageData)
        //     }
        // );
        watch(
            () => props.imageData,
            () => {
                if (props.imageData) {
                    try {
                        const xhr = new XMLHttpRequest();
                        xhr.open('GET', props.imageData, true);
                        xhr.responseType = 'blob';

                        xhr.onload = () => {
                            if (xhr.status === 200) {
                                const blob = xhr.response;
                                singlesrcpreview.value = URL.createObjectURL(blob);
                                alert(singlesrcpreview.value);
                            } else {
                                console.error("Failed to fetch the image:", xhr.statusText);
                            }
                        };

                        xhr.onerror = () => {
                            console.error("Error fetching the image:", xhr.statusText);
                        };

                        xhr.send();
                    } catch (error) {
                        console.error("Error fetching the image:", error);
                    }
                }
            }
        );

        // function onFileSelected(e) {
        //     debugger;

        //     //alert(e.target.files.length);

        //     if (e.target.files.length <= 5) {
        //         for (let i = 0; i < e.target.files.length; i++) {
        //             const file = e.target.files[i];
        //             src.push(file);
        //             srcpreview.push(URL.createObjectURL(e.target.files[i]));
        //             // src.push(e.target.files.item(i))
        //         }
        //     } else {
        //         alert("select only 5 images");
        //     }

        //     debugger;
        //     console.log(src);
        //     imageModel.value = true;
        //     uploadFile();
        // }
        function onFileSelected(e) {
            // alert('d')
            debugger;
            const files = e.target.files;

            if (files.length <= 5) {
                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    const extension = file.name.split(".").pop().toLowerCase();

                    src.push(file);
                    srcpreview.push(URL.createObjectURL(file));

                }
            } else {
                alert("Please select only 5 images.");
                return;
            }

            debugger;
            console.log(src);
            imageModel.value = true;
            uploadFile();
        }
        function onFileSingleSelected(e) {
            const files = e.target.files;

            // if (files.length <= 5) {
            // for (let i = 0; i < files.length; i++) {
            const file = files[0];
            const extension = file.name.split(".").pop().toLowerCase();

            // src.push(file);
            singlesrc = file
            // srcpreview.push(URL.createObjectURL(file));
            // alert(file.name)
            singlesrcpreview.value =
                URL.createObjectURL(file)

            // alert(JSON.stringify(singlesrcpreview.value))
            // }
            // } else {
            //     alert("Please select only 5 images.");
            //     return;
            // }

            debugger;
            console.log(src);
            imageModel.value = true;
            singleuploadFile();
        }

        //  const blobUrlWithoutPrefix = computed(() => src.value.replace(/^blob:/, ''));

        async function uploadFile() {
            // alert('f')
            debugger;
            imageModel.value = false;
            try {
                debugger;
                isLoading.value = true;
                let imgArray: any = ref([]); //

                for (let i = 0; i < src.length; i++) {
                    let form = new FormData();
                    console.log(src[i]);
                    form.append("file", src[i]);
                    let result = await CommonService.fileupload(form);
                    // message.value = Message;

                    let ResponseValue = result; //
                    // alert(JSON.stringify(ResponseValue))
                    imgArray.value.push(ResponseValue); //
                    console.log(imgArray.value); //
                }
                emit("FileNames", imgArray.value);

                // form.append("file", file.value);
                // let { Message } = (await Supplierservice.fileupload(form)).data;
                // message.value = Message;
                // console.log(Message);
            } catch (error) {
                // alert(error.message);
            } finally {
                isLoading.value = false;
            }
        }
        async function singleuploadFile() {
            // alert('f')
            debugger;
            imageModel.value = false;
            try {
                debugger;
                isLoading.value = true;
                let imgArray: any = ref([]); //

                let form = new FormData();

                form.append("file", singlesrc);
                let result = await CommonService.fileupload(form);
                // message.value = Message;

                let ResponseValue = result; //
                // alert(JSON.stringify(ResponseValue))
                imgArray.value.push(ResponseValue); //
                console.log(imgArray.value); //
                emit("FileNames", imgArray.value);

                // form.append("file", file.value);
                // let { Message } = (await Supplierservice.fileupload(form)).data;
                // message.value = Message;
                // console.log(Message);
            } catch (error) {
                // alert(error.message);
            } finally {
                isLoading.value = false;
            }
            //  debugger;
            // imageModel.value = false;
            // try {
            //     debugger;
            //     isLoading.value = true;
            //     let imgArray: any = ref([]); //

            //     for (let i = 0; i < src.length; i++) {
            //         let form = new FormData();
            //         console.log(src[i]);
            //         form.append("file", src[i]);
            //         let result = await CommonService.fileupload(form);
            //         // message.value = Message;

            //         let ResponseValue = result; //
            //         // alert(JSON.stringify(ResponseValue))
            //         imgArray.value.push(ResponseValue); //
            //         console.log(imgArray.value); //
            //     }
            //     emit("FileNames", imgArray.value);

            //     // form.append("file", file.value);
            //     // let { Message } = (await Supplierservice.fileupload(form)).data;
            //     // message.value = Message;
            //     // console.log(Message);
            // } catch (error) {
            //     // alert(error.message);
            // } finally {
            //     isLoading.value = false;
            // }
        }
        // function onDrop(event: DragEvent) {
        //   event.preventDefault();
        //   const file = event.dataTransfer?.files?.[0];
        //   handleFile(file);
        // }
        // function onFileSelected(event: Event) {
        //   const target = event.target as HTMLInputElement;
        //   const file = target.files?.[0];
        //   handleFile(file);
        // }
        function handleFile(file: File | undefined) {
            if (!file) return;
            // handle the file upload here
        }
        // return this.src.replace(/^blob:/, '');
        let imagereview = ref(false);
        let selectimage = ref("");
        function cleardata() {
            srcpreview = [];

        }
        return {
            onFileSingleSelected,
            cleardata,
            onDrop,
            imagereview,
            srcpreview,
            onFileSelected,
            uploadFile,
            src,
            selectimage,
            singlesrcpreview
        };
    },
});
</script>

<style lang="scss" scoped>
.drop-zone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // border: 2px dashed #ccc;
    padding: 20px;
    height: 200px;
    width: 100%;
    cursor: pointer;
}

label {
    padding: 10px;
    background: transparent;
    display: table;
    color: black;
}

input[type="file"] {
    display: none;
}

.choose-file-icon {
    width: 20%;
    height: 20%;
    align-self: center !important;
}

.choose-img {
    color: #444444;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
}

.choose-file {
    border: 1px solid #e1e1e1;
    border-radius: 5px;
}

.file-height {
    height: 300px;
}

.img-list {
    border-right: 1px solid #e1e1e1;
    // height: 300px;
    height: 100%;
    overflow: auto;
}

.img-list-ul {
    width: 88px;
    margin-bottom: 15px;
}

.img-list-ul li {
    height: 43px;
    border: 1px solid #e1e1e1;
    width: 100%;
}

.img-list-ul li img {
    width: 100%;
}

.img-upload {
    color: #000;
    height: 80%;
    padding: 2%;
}

.icon1 {
    width: 30px;
}

.class1 {
    height: 20%;
}

.add-img-logo {
    width: 50%;
    border-top: 1px solid #e1e1e1;
    border-right: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-fileupload .p-fileupload-buttonbar {
    background: #ffffff !important;
    padding: 0.25rem !important;
    border: none !important;
}

.p-fileupload .p-fileupload-content {
    padding: 1rem 1rem !important;
    border: none !important;
}

.p-fileupload .p-fileupload-file {
    padding: 0.5rem !important;
}

.p-fileupload .p-fileupload-file-name {
    margin-bottom: 0rem !important;
}

.p-fileupload-file-thumbnail {
    display: none;
}

.p-fileupload-file-size {
    display: none;
}

.p-badge.p-badge-warning {
    display: none;
}

.card {
    padding: 1rem !important;
}

.p-fileupload .p-fileupload-buttonbar {
    justify-content: center;
}

.p-fileupload-buttonbar .p-button {
    color: #3096ff !important;
    background: #ffffff !important;
    border: 1px solid #3096ff !important;
    padding: 0.5rem 0.5rem !important;
}

.p-fileupload-buttonbar .p-button:focus {
    box-shadow: none !important;
}

// .logo {
//   object-fit: cover;
//   object-position: center right;

//   height:70px;
//   margin-top:10px;
//   margin-bottom:10px;
// }

.logo1 {
    height: 200px;
}
</style>
