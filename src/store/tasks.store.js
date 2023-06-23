import { defineStore } from 'pinia';
import { ref } from 'vue';
import { toastError, toastSuccess } from '@/composables/toast';
import { setLS, getLS, removeLS } from '@/composables/local-storage';

const taskNameLS = 'tasks-list';

export const useTasksStore = defineStore('tasks', () => {
    const tasksList = ref([
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, nesciunt.',
            completed: false,
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            completed: false,
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet, consectetur',
            completed: true,
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet. Beatae, nesciunt.',
            completed: false,
        },
    ]);
    tasksList.value = tasksList.value.sort((a, b) => b.id - a.id);

    function findSavingTasks () {
        if (!getLS(taskNameLS)) {
            return setLS(taskNameLS, tasksList.value);
        }
        tasksList.value = getLS(taskNameLS);
    }

    function createNewTask (text) {
        tasksList.value.unshift(
            {
                id: tasksList.value.length + 1,
                title: text,
                completed: false,
            },
        );
        setLS(taskNameLS, tasksList.value);
        toastSuccess('Task added');
    }

    function removeTask (id) {
        const index = tasksList.value.findIndex(task => task.id === id);
        if (index !== -1) {
            tasksList.value.splice(index, 1);
        }
        setLS(taskNameLS, tasksList.value);
        toastError('Task removed');
    }

    function changeDescription (id, text) {
        const index = tasksList.value.findIndex(obj => obj.id === id);
        if (index !== -1) {
            tasksList.value[index].description = text;
        }
        setLS(taskNameLS, tasksList.value);
        toastSuccess('Task changed');
    }

    function changeCompleted (id, val) {
        const index = tasksList.value.findIndex(obj => obj.id === id);
        if (index !== -1) {
            tasksList.value[index].completed = val;
        }
        setLS(taskNameLS, tasksList.value);
        toastSuccess('Task completed');
    }

    function filterTasksList (val) {
        return tasksList.value.filter(item => item?.completed === val);
    }

    return {
        tasksList,
        findSavingTasks,
        createNewTask,
        removeTask,
        changeDescription,
        changeCompleted,
        filterTasksList,
    };
});
