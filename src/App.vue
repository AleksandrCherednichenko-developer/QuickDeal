<template>
    <UIHeader />
    <main class="main">
        <RouterView />
    </main>
    <UIFooter />
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, provide, ref } from 'vue';
import throttle from 'lodash.throttle';
import { useBreakpoints } from '@/composables/breakpoints';
import UIHeader from '@/components/ui/UIHeader/index.vue';
import UIFooter from '@/components/ui/UIFooter/UIFooter.vue';
import { useTasksStore } from '@/store/tasks.store';

const tasksStore = useTasksStore();
const breakpoints = useBreakpoints();

const windowWidth = ref(window.innerWidth);
const windowHeight = ref(window.innerHeight);
provide('windowWidth', windowWidth);
provide('windowHeight', windowHeight);

const isXl = computed(() => windowWidth.value < breakpoints.horizontal.xl);
const isLg = computed(() => windowWidth.value < breakpoints.horizontal.lg);
const isMd = computed(() => windowWidth.value < breakpoints.horizontal.md);
const isSm = computed(() => windowWidth.value < breakpoints.horizontal.sm);
const isXs = computed(() => windowWidth.value < breakpoints.horizontal.xs);

provide('isXl', isXl);
provide('isLg', isLg);
provide('isMd', isMd);
provide('isSm', isSm);
provide('isXs', isXs);

const isHXl = computed(() => windowHeight.value < breakpoints.vertical.xl);
const isHLg = computed(() => windowHeight.value < breakpoints.vertical.lg);
const isHMd = computed(() => windowHeight.value < breakpoints.vertical.md);
const isHSm = computed(() => windowHeight.value < breakpoints.vertical.sm);
const isHXs = computed(() => windowHeight.value < breakpoints.vertical.xs);

provide('isHXl', isHXl);
provide('isHLg', isHLg);
provide('isHMd', isHMd);
provide('isHSm', isHSm);
provide('isHXs', isHXs);

const breakpointHorizontal = computed(() => {
    return Object.entries(breakpoints.horizontal).reverse().find(([_, value]) => windowWidth.value < value)?.[0] ?? 'default';
});

provide('breakpointHorizontal', breakpointHorizontal);

const setCssVars = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
};

const onResize = throttle(() => {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
    setCssVars();
}, 500);

onMounted(() => {
    tasksStore.findSavingTasks();
    setCssVars();
    window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize);
});
</script>
