<template>
    <div>
        <h2 class="text-xl font-semibold mb-4">Target Users</h2>

        <!-- Users Cards -->
        <div v-for="(users, index) in content" :key="index"
            class="flex items-center mb-4 border-gray-600 border p-4 rounded-2xl">
            <!-- Avatar with Fallback -->
            <div
                class="min-w-16 min-h-16 flex items-center justify-center rounded-full mr-4 border-2 border-gray-600 bg-gray-700">
                <img v-if="users.isValidImage" :src="users.avatar" alt="users Avatar"
                    class="w-full h-full rounded-full" />
                <div v-else class="w-12 h-auto text-gray-400">
                    <SmileIcon class="w-full h-full" />
                </div>
            </div>

            <!-- Information -->
            <div>
                <h3 class="font-semibold text-white">{{ users.type }}</h3>
                <p class="text-gray-300">{{ users.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Smile as SmileIcon } from 'lucide-vue-next';

// Props
defineProps({
    content: {
        type: Array,
        required: true,
    },
});
</script>

<style scoped>
img {
    object-fit: cover;
}
</style>
