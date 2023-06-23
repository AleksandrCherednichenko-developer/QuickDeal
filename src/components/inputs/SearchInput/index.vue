<template>
    <label class="input-wrapper">
        <input
            class="input-field"
            :value="props.modelValue"
            type="text"
            placeholder="Search"
            @input="onInput"
        >
        <SvgIcon
            v-if="props.modelValue"
            class="input-icon"
            name="search"
        />
    </label>
</template>

<script>
export default {
    name: 'SearchInput',
};
</script>

<script setup>
import debounce from 'lodash.debounce';
import SvgIcon from '@/components/ui/SvgIcon/index.vue';

const props = defineProps({
    modelValue: { type: String, default: '' },
});

const emit = defineEmits(['update:modelValue']);

const onInput = debounce(ev => {
    emit('update:modelValue', ev.target.value.trim());
}, 500);
</script>

<style scoped>

</style>
