<template>
    <div>
        <h2 class="text-xl font-semibold mb-4">Key Features</h2>
        <ul class="space-y-4">
            <li v-for="(feature, index) in content" :key="index" class="flex items-center justify-center text-gray-300">
                <div class="flex gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#ffdb70]" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{{ feature }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
// Props
defineProps(['content']);
</script>
