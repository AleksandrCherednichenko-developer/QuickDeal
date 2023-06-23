<template>
    <button class="simple__button">
        <span v-if="props.text" class="simple__button-text">
            {{ props.text }}
        </span>
        <SvgIcon v-if="props.icon" class="simple__button-icon" :name="props.icon" />
    </button>
</template>

<script>
export default {
    name: 'SimpleButton',
};
</script>

<script setup>
import SvgIcon from '@/components/ui/SvgIcon/index.vue';

const props = defineProps({
    text: { type: String, default: '' },
    icon: { type: String, default: '' },
});
</script>

<style src="./styles.scss" lang="scss" scoped />
