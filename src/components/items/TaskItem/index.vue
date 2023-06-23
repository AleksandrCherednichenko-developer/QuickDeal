<template>
    <div class="task__item">
        <div class="task__item-info">
            <h6 class="task__item-info__title">
                Task id: {{ props.id }}
            </h6>
            <p v-if="!toggleEdit" class="task__item-info__description">
                {{ description }}
            </p>
            <BaseInput v-else v-model="description" />
        </div>
        <div class="task__item-controls">
            <UICheckbox
                class="task__item-controls__completed"
                :checked="props.completed"
                @click-checkbox="(val)=>emit('change-completed',val)"
            />
            <SimpleButton
                v-if="!toggleEdit"
                class="task__item-controls__edit"
                icon="pencil"
                @click="toggleEdit=true"
            />
            <SimpleButton
                v-else
                class="task__item-controls__save"
                icon="apply"
                @click="toggleEdit=false; emit('edit-task', description)"
            />
            <SimpleButton
                class="task__item-controls__remove"
                icon="delete"
                @click="emit('remove-task')"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'TaskItem',
};
</script>

<script setup>
import { ref } from 'vue';
import UICheckbox from '@/components/ui/UICheckbox/index.vue';
import SimpleButton from '@/components/buttons/SimpleButton/index.vue';
import BaseInput from '@/components/inputs/BaseInput/index.vue';

const props = defineProps({
    id: { type: [String, Number], default: '' },
    title: { type: String, default: '' },
    completed: { type: Boolean },
});

const emit = defineEmits(['edit-task', 'remove-task', 'change-completed']);

const toggleEdit = ref(false);
const description = ref(props.title);

</script>

<style src="./styles.scss" lang="scss" scoped />
