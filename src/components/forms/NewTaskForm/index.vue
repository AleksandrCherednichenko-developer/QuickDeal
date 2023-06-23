<template>
    <form class="form" @submit.prevent>
        <BaseInput v-model="newTask" placeholder="Create new task" @clear-input="newTask=''" />
        <SimpleButton text="Create" @click.prevent="createNewTask" />
    </form>
</template>

<script>
export default {
    name: 'NewTaskForm',
};
</script>

<script setup>
import { ref } from 'vue';
import { useTasksStore } from '@/store/tasks.store';
import BaseInput from '@/components/inputs/BaseInput/index.vue';
import SimpleButton from '@/components/buttons/SimpleButton/index.vue';

const tasksStore = useTasksStore();

const newTask = ref();

const createNewTask = () => {
    tasksStore.createNewTask(newTask.value);
    newTask.value = '';
};
</script>

<style src="./styles.scss" lang="scss" scoped />
