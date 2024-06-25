<script setup lang="ts">
import { toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
    type: {
        type: String,
        default: 'text',
    },
    value: {
        type: String,
        default: '',
    },
    name: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    successMessage: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
});

const name = toRef(props, 'name');

const {
    value: inputValue,
    errorMessage,
    handleBlur,
    handleChange,
    meta,
} = useField(name, undefined, {
    initialValue: props.value,
});
</script>

<template>
    <div class="header"></div>
    <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
    <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner diagonal part-1"></div>
        <div class="spinner horizontal"></div>
        <div class="spinner diagonal part-2"></div>
    </label>
    <div id="sidebarMenu">
        <ul class="sidebarMenuInner">
            <li>HARUN PEHLİVAN <span>INFORMATION TECHNOLOGY FOUNDER CEO</span></li>
            <li><a href="https://www.shortcutz.link/harunpehlivan" target="_blank">Company</a></li>
            <li><a href="https://www.instagram.com/harunpehlivantebimtebitagem" target="_blank">Instagram</a></li>
            <li><a href="https://www.slideshare.net/harunpehlivan581" target="_blank">SlideShare</a></li>
            <li><a href="https://www.freecodecamp.org/harunpehlivan" target="_blank">FreeCodeCamp</a></li>
            <li><a href="https://codepen.io/harunpehlivan" target="_blank">CodePen</a></li>
        </ul>
    </div>


</template>

<style scoped>
.TextInput {
    position: relative;
    margin-bottom: calc(1em * 1.5);
    width: 100%;
}

label {
    display: block;
    margin-bottom: 4px;
    width: 100%;
}

input {
    border-radius: 5px;
    border: 2px solid transparent;
    padding: 15px 10px;
    outline: none;
    background-color: #f2f5f7;
    width: 100%;
    transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
        background-color 0.3s ease-in-out;
}

input:focus {
    border-color: var(--primary-color);
}

.help-message {
    position: absolute;
    bottom: calc(-1.5 * 1em);
    left: 0;
    margin: 0;
    font-size: 14px;
}

.TextInput.has-error input {
    background-color: var(--error-bg-color);
    color: var(--error-color);
}

.TextInput.has-error input:focus {
    border-color: var(--error-color);
}

.TextInput.has-error .help-message {
    color: var(--error-color);
}

.TextInput.success input {
    background-color: var(--success-bg-color);
    color: var(--success-color);
}

.TextInput.success input:focus {
    border-color: var(--success-color);
}

.TextInput.success .help-message {
    color: var(--success-color);
}
</style>
