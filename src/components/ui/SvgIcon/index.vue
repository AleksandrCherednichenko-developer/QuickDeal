<template>
    <component :is="icon" :key="props.name" class="icon" />
</template>

<script>
export default {
    name: 'SvgIcon',
};
</script>

<script setup>
import { defineProps, defineAsyncComponent } from 'vue';

const props = defineProps({
    name: { type: String, required: true },
});

const icon = defineAsyncComponent(() => {
    return import(`../../../assets/icons/${props.name}.svg?component`);
});
</script>

<style src="./styles.scss" lang="scss" scoped />
