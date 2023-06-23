<template>
    <section class="home__page content-container section">
        <NewTaskForm />
    </section>
</template>

<script>
export default {
    name: 'HomePage',
};
</script>

<script setup>
import NewTaskForm from '@/components/forms/NewTaskForm/index.vue';

</script>
