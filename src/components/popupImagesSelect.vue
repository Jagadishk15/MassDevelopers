<template>
    <div>
        <Dialog :modal="true" v-model:visible="localShowDialog" :style="{ width: '60vw' }" header="Products"
            @after-hide="handleDialogHide">
            <!-- Title Section -->
            <div class="dialog-header">
                <h2>{{ model.title }}</h2>
            </div>

            <!-- Image List Section -->
            <div class="image-container">
                <template v-if="model && model && model.length">
                    <div v-for="(image, index) in model" :key="index" class="image-item"
                        :class="{ 'selected': selectedIndex === index }" @click="handleImageSelect(image, index)">
                        <img :src="image.url" :alt="image.name || 'Image'" />
                        <p v-if="image.name" class="image-caption">{{ image.name }}</p>
                    </div>
                </template>
                <div v-else class="no-images">
                    No images available
                </div>
            </div>
        </Dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, watch } from "vue";
import { useForm } from "vee-validate";
import Loader from "@/components/FormComponents/Loader.vue";
import moment from 'moment';
import { useToast } from "primevue/usetoast";

interface ImageItem {
    url: string;
    name?: string;
}

interface DialogItem {
    title?: string;
    images?: ImageItem[];
    [key: string]: any;
}

export default defineComponent({
    props: {
        selectedItem: {
            type: Object as PropType<DialogItem>,
            default: () => ({
                images: []
            }),
        },
        showButton: {
            type: Boolean,
            required: true,
        },
        showDialog: {
            type: Boolean,
            default: false
        },
    },

    components: {
        Loader,
    },

    setup(props, { emit }) {
        const localShowDialog = ref(props.showDialog);
        const model = ref(props.selectedItem);
        const loading = ref(false);
        const selectedIndex = ref<number | null>(null);

        const SelectOption = ref({
            SelectId: ref(),
            selectOptions: [],
        });

        watch(() => props.showDialog, (newValue) => {
            localShowDialog.value = newValue;
        });

        watch(() => props.selectedItem, (newValue) => {
            model.value = newValue;
        }, { deep: true });

        watch(() => localShowDialog.value, (newValue) => {
            emit('update:showDialog', newValue);
        });

        function handleImageSelect(image: ImageItem, index: any) {
            selectedIndex.value = index;
            emit('image-selected', { image, index });
        }

        function handleDialogHide() {
            localShowDialog.value = false;
            selectedIndex.value = null;
            emit('update:showDialog', false);
            emit('load');
            emit('close');
        }

        function IsCreate() {
            localShowDialog.value = true;
        }

        return {
            localShowDialog,
            model,
            SelectOption,
            selectedIndex,
            handleImageSelect,
            handleDialogHide,
            handleValidateButtonClick() {
                emit('clicked');
            },
            IsCreate,
            loading
        };
    },
});
</script>

<style scoped>
.dialog-header {
    margin-bottom: 1rem;
}

.image-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
}

.image-item {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    border-radius: 4px;
    transition: background-color 0.2s ease;
}

.image-item.selected {
    background-color: #e6f3ff;
}

.image-item img {
    height: auto;
    max-width: 80%;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: transform 0.2s ease;
}

.image-item:hover img {
    transform: scale(1.05);
}

.image-caption {
    margin-top: 0.5rem;
    text-align: center;
    font-size: 0.9rem;
    color: #666;
}

.no-images {
    text-align: center;
    color: #666;
    padding: 2rem;
    grid-column: 1 / -1;
}
</style>