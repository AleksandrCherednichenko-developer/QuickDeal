<template>
    <header class="header">
        <div class="header__inner content-container section">
            <UITitle title="Task lists" />
            <UINavbar />
        </div>
    </header>
</template>

<script>
export default {
    name: 'UIHeader',
};
</script>

<script setup>
import UINavbar from '@/components/ui/UINavbar/index.vue';
import UITitle from '@/components/ui/UITitle/index.vue';
</script>
