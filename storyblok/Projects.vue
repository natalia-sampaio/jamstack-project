<script setup>
defineProps({
    blok: Object,
});
</script>
<template>
    <div class="container project-page">
        <div class="project-title">
            <h1>{{ blok.name || "New project" }}</h1>
            <NuxtLink :to="{ name: 'index' }">Go back</NuxtLink>
        </div>
        <div class="project-description">
            <img
                :src="blok.image?.filename || 'https://picsum.photos/300/176'"
                :alt="blok.image?.alt" />
            <p>
                {{
                    blok.description ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
                }}
            </p>
        </div>
    </div>
</template>
