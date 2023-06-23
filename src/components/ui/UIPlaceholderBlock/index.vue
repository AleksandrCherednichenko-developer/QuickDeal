<template>
    <div class="placeholder-block">
        <h5>There are currently no tasks</h5>
    </div>
</template>

<script>
export default {
    name: 'UIPlaceholderBlock',
};
</script>

<style lang="scss" scoped>
.placeholder-block {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    min-height: calc-rem(200px);
}
</style>
