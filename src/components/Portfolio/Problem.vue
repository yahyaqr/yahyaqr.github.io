<template>
    <div class="border border-gray-600 rounded-xl p-3 text-sm bg-[#1f1f1f]">
        <!-- Header with Toggle -->
        <div class="flex justify-between items-center mb-3">
            <!-- Dynamic Title -->
            <div>
                <h3 v-if="isAsIs" class="text-base font-semibold text-gray-400">Without {{ title }}</h3>
                <h3 v-else class="text-base font-semibold text-[#ffdb70]">With {{ title }}</h3>
            </div>

            <!-- Toggle Button -->
            <div class="relative w-10 h-5 flex items-center bg-gray-400 rounded-full cursor-pointer"
                :class="isAsIs ? '' : 'background'" @click="toggleState">
                <!-- Toggle Knob -->
                <span class="absolute left-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform"
                    :class="isAsIs ? 'translate-x-0' : 'translate-x-5'"></span>
            </div>
        </div>

        <!-- Card Content -->
        <div>
            <div v-if="isAsIs" key="as-is">
                <p v-for="(paragraph, index) in content.asIs" :key="'as-is-' + index" class="text-gray-300 mb-2">
                    {{ paragraph }}
                </p>
            </div>
            <div v-else key="possible">
                <p v-for="(paragraph, index) in content.possible" :key="'possible-' + index" class="text-gray-300 mb-2">
                    {{ paragraph }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
// Props
defineProps({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: Object,
        required: true,
    },
});

// Reactive state for toggling
import { ref } from 'vue';
const isAsIs = ref(true);

// Method to toggle between states
const toggleState = () => {
    isAsIs.value = !isAsIs.value;
};
</script>

<style scoped>
/* Hide the checkbox */
input[type="checkbox"] {
    display: none;
}

.background {
    background-color: #ffdb70;
}

/* Transition Effects */
span {
    transition: transform 0.2s ease;
}
</style>
