<template>
    <nav class="navbar">
        <router-link
            v-for="(item, index) in navbarItems"
            :key="index"
            class="navbar-item"
            :to="item.to"
            active-class="navbar-item--active"
        >
            {{ item.name }}
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'UINavbar',
};
</script>

<script setup>
import { ROUTE_NAMES } from '@/constants/routes';

const navbarItems = [
    {
        name: 'Home',
        to: { name: ROUTE_NAMES.HOME_PAGE.routeName },
    },
    {
        name: 'Tasks',
        to: { name: ROUTE_NAMES.TASKS_PAGE.routeName },
    },
];
</script>

<style src="./styles.scss" lang="scss" scoped />
