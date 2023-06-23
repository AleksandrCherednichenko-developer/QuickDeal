<template>
    <label class="input-wrapper">
        <input
            class="input-field"
            :value="props.modelValue"
            type="text"
            :placeholder="props.placeholder"
            @input="onInput"
        >
        <SvgIcon
            v-if="props.modelValue"
            class="input-icon"
            name="close"
            @click="emit('clear-input')"
        />
    </label>
</template>

<script>
export default {
    name: 'BaseInput',
};
</script>

<script setup>
import SvgIcon from '@/components/ui/SvgIcon/index.vue';

const props = defineProps({
    modelValue: { type: String, default: '' },
    placeholder: { type: String, default: '' },
});

const emit = defineEmits(['update:modelValue', 'clear-input']);

const onInput = ev => {
    const { value } = ev.target;
    return emit('update:modelValue', value.trim());
};
</script>
