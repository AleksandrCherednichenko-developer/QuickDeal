<template>
    <section class="tasks__page content-container section">
        <div class="tasks__page-controls">
            <SearchInput v-model="searchValue" />
            <VueMultiselect
                v-model="filterValue"
                :searchable="false"
                :allow-empty="false"
                :preselect-first="true"
                :options="filterOption"
                @update:model-value="filterValues"
            />
        </div>

        <template v-if="!searchResult.length">
            <NewTaskForm />
            <UIPlaceholderBlock />
        </template>

        <template v-else>
            <TaskItem
                v-for="item in searchResult"
                :key="item.id"
                v-bind="item"
                @change-completed="(val)=>changeCompleted(item.id, val)"
                @edit-task="(val)=>editTask(item.id, val)"
                @remove-task="removeTask(item.id)"
            />
        </template>
    </section>
</template>

<script>
export default {
    name: 'TasksPage',
};
</script>

<script setup>
import { computed, ref } from 'vue';
import VueMultiselect from 'vue-multiselect';
import { useTasksStore } from '@/store/tasks.store';
import TaskItem from '@/components/items/TaskItem/index.vue';
import SearchInput from '@/components/inputs/SearchInput/index.vue';
import UIPlaceholderBlock from '@/components/ui/UIPlaceholderBlock/index.vue';
import NewTaskForm from '@/components/forms/NewTaskForm/index.vue';

const tasksStore = useTasksStore();
const tasksList = ref(tasksStore.tasksList);
const searchValue = ref('');
const searchResult = computed(() => tasksList.value.filter(item => item?.title?.toLowerCase().includes(searchValue.value?.toLowerCase())));
const filterOption = ref(['All', 'Completed', 'Unfinished']);
const filterValue = ref(filterOption.value[0]);

const changeCompleted = (id, val) => {
    tasksStore.changeCompleted(id, val);
};

const editTask = (id, val) => {
    tasksStore.changeDescription(id, val);
};

const removeTask = id => {
    tasksStore.removeTask(id);
};

const filterValues = val => {
    switch (val) {
    case 'Completed':
        tasksList.value = tasksStore.filterTasksList(true);
        break;
    case 'Unfinished':
        tasksList.value = tasksStore.filterTasksList(false);
        break;
    case 'All':
        tasksList.value = tasksStore.tasksList;
        break;
    default:
        tasksList.value = tasksStore.tasksList;
        break;
    }
};
</script>

<style src="./styles.scss" lang="scss" scoped />
