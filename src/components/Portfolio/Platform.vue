<template>
    <div>
        <h2 class="text-2xl font-semibold mb-4">{{ title }}</h2>
        <p class="text-gray-300 mb-4" v-for="(paragraph, index) in content" :key="index">
            {{ paragraph }}
        </p>
    </div>
</template>

<script setup>
// Props
defineProps(['title', 'content']);
</script>