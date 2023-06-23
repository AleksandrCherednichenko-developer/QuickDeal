<template>
    <h4 class="title">
        {{ props.title }}
    </h4>
</template>

<script>
export default {
    name: 'UITitle',
};
</script>

<script setup>
const props = defineProps({
    title: { type: String, default: '' },
});
</script>

<style lang="scss" scoped>
.title {
    text-transform: uppercase;
    font-size: calc-rem(26px);
}
</style>
