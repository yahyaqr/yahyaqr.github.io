<template>
    <div>
        <h2 class="text-2xl font-semibold mb-4">{{ aboutTitle }}</h2>
        <p class="text-gray-300 mb-4" v-for="(paragraph, index) in aboutContent" :key="index">
            {{ paragraph }}
        </p>
    </div>
</template>

<script setup>
import TabbedContent from './TabbedContent.vue';

// Props
defineProps(['aboutTitle', 'aboutContent']);
</script>