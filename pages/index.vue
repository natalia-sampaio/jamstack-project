<script setup>
const has_storyblok = useRoute().query._storyblok;

const story = await useStoryblok("home", {
    version: has_storyblok ? "draft" : "published",
    resolve_relations: "featuredProjects.projects",
});
</script>
<template>
    <StoryblokComponent v-if="story" :blok="story.content"></StoryblokComponent>
</template>
