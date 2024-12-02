<template>
    <div id="jumbotron" class="py-20 text-[#fafafa]">
        <div class="container mx-auto max-w-[1200px] flex flex-wrap md:flex-nowrap justify-between items-center gap-8">
            <!-- Profile Image Section -->
            <div class="w-full md:w-1/2 relative cursor-pointer" @click="nextProfileImage">
                <div class="relative mx-auto w-48 h-48 md:w-full md:h-auto">
                    <img loading="lazy" :src="currentProfileImage" alt="Profile Picture"
                        class="rounded-full w-full h-full object-cover" />
                    <div
                        class="absolute inset-0 bg-black/60 rounded-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
                        <span class="text-white text-lg md:text-2xl font-bold text-center">Next image</span>
                    </div>
                </div>
            </div>
            <!-- Profile Information Section -->
            <div class="w-full sm:px-4 px-6 md:w-1/2">
                <h1 class="text-2xl md:text-4xl font-bold text-center md:text-left">{{ content.profile.name }}</h1>
                <p class="mt-2 mb-4 text-[#ffdb70] text-center md:text-left md:text-lg">
                    {{ content.profile.title }}
                </p>
                <p class="mt-2 text-[#d6d6d6] text-center md:text-left md:text-lg leading-relaxed">
                    {{ content.profile.description }}
                </p>
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
            "As a fullstack engineer, I have gained proficiency in Vue, React, React Native, Bootstrap, Tailwind, and SASS. I also have hands-on experience with Git, Node.js, Hapi.js, Electron.js, Capacitor.js, CodeIgniter, and FastAPI.",
    },
};

// Profile Images
const profileImages = ref([
    new URL("../../assets/1.webp", import.meta.url).href,
    new URL("../../assets/2.webp", import.meta.url).href,
    new URL("../../assets/3.webp", import.meta.url).href,
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

onBeforeUnmount(() => {
    clearInterval(profileImageInterval);
});
</script>

<style scoped>
/* Ensure image aspect ratio matches */
img {
    aspect-ratio: 1 / 1;
}

/* Optional styling for hover effect on mobile */
@media (max-width: 768px) {
    .absolute {
        transition: all 0.3s ease-in-out;
    }
}
</style>
