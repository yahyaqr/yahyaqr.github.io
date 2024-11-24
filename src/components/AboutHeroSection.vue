<template>
    <div id="jumbotron" class="py-20 text-[#fafafa]">
        <div class="container mx-auto max-w-[1200px] flex flex-wrap justify-between items-center">
            <!-- Profile Image Section -->
            <div class="flex-1 max-w-[45%] relative cursor-pointer" @click="nextProfileImage">
                <img :src="currentProfileImage" alt="Profile Picture" class="rounded-full w-full h-auto" />
                <div
                    class="absolute inset-0 bg-black/60 rounded-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
                    <span class="text-white text-2xl font-bold text-center">Next image</span>
                </div>
            </div>
            <!-- Profile Information Section -->
            <div class="flex-1 max-w-[45%]">
                <h1 class="mt-0 mb-2 text-4xl font-bold">{{ content.profile.name }}</h1>
                <p class="mt-0 mb-6 text-[#ffdb70] text-lg">{{ content.profile.title }}</p>
                <p class="mt-0 mb-6 text-[#d6d6d6] text-lg leading-relaxed">{{ content.profile.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Content Data
const content = {
    profile: {
        name: "Yahya Aqrom, S.T.",
        title: "Fullstack Engineer",
        description:
            "As a fullstack developer, I have gained proficiency in Vue, React, React Native, Bootstrap, Tailwind, and SASS. I also have hands-on experience with Git, Node.js, Hapi.js, Electron.js, Capacitor.js, CodeIgniter, and FastAPI.",
    },
};

// Profile Images
const profileImages = ref([
    new URL("../assets/1.jpg", import.meta.url).href,
    new URL("../assets/2.jpg", import.meta.url).href,
    new URL("../assets/3.jpg", import.meta.url).href,
]);

const profileImageIndex = ref(0);
const currentProfileImage = ref(profileImages.value[0]);

// Function to Switch to the Next Profile Image
const nextProfileImage = () => {
    profileImageIndex.value = (profileImageIndex.value + 1) % profileImages.value.length;
    currentProfileImage.value = profileImages.value[profileImageIndex.value];
};

// Auto-Switch Images Every 10 Seconds
let profileImageInterval;
onMounted(() => {
    profileImageInterval = setInterval(nextProfileImage, 10000);
});

// Clear Interval on Component Unmount
onBeforeUnmount(() => {
    clearInterval(profileImageInterval);
});
</script>

<style scoped>
/* Scoped styles removed as Tailwind handles all styles */
</style>
