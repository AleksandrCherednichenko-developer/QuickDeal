<template>
    <label
        class="checkbox"
        :style="props.textOnTheRight ? 'flex-direction: row-reverse' : ''"
        tabindex="0"
        @keyup.enter="clickCheckbox"
    >
        <p v-if="props.text">
            {{ props.text }}
        </p>
        <input
            type="checkbox"
            :checked="checked"
            :disabled="props.disabled"
            @change="clickCheckbox"
        >
        <span />
    </label>
</template>

<script>
export default {
    name: 'UICheckbox',
};
</script>

<script setup>
const emit = defineEmits(['click-checkbox']);

const props = defineProps({
    textOnTheRight: { type: Boolean },
    text: { type: String, default: '' },
    checked: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
});

const clickCheckbox = event => {
    emit('click-checkbox', event.target.checked);
};
</script>

<style src="./styles.scss" lang="scss" scoped />
