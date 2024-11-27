<template>
    <div class="border border-gray-600 rounded-2xl p-4">
        <!-- Tabs Navigation -->
        <div class="flex border-b border-gray-600 mb-4">
            <button v-for="(tab, index) in content" :key="index" @click="selectedTab = index" :class="[
                'px-4 py-2 text-gray-300',
                selectedTab === index ? 'border-b-2 border-[#ffdb70] text' : ''
            ]" class="focus:outline-none">
                {{ tab.label }}
            </button>
        </div>

        <!-- Tab Content -->
        <ul class="text-gray-300 list-disc pl-6">
            <li v-for="(item, index) in content[selectedTab].content" :key="index" class="mb-2">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script setup>
// Props
defineProps({
    content: {
        type: Array,
        required: true,
    },
});

// Reactive state for the selected tab
import { ref } from 'vue';

const selectedTab = ref(0);
</script>

<style scoped>
button {
    transition: color 0.3s, border-color 0.3s;
}

.text {
    color: #ffdb70;
}
</style>
