<template>
    <section id="about" class="bg-[#151515] text-white py-16">
        <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <!-- Profile Image Feature -->
            <div class="relative flex justify-center items-center">
                <img loading="lazy" :src="currentProfileImage" alt="Profile Picture"
                    class="rounded-full max-w-full w-72 h-72 object-cover" />
                <div class="absolute w-72 h-72 bg-black/60 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                    @click="nextProfileImage">
                    <span class="text-white text-sm font-bold">Next Image</span>
                </div>
            </div>

            <div>
                <h2 class="text-3xl font-bold mb-6">About Me</h2>
                <p class="text-gray-400 mb-4">
                    I'm a Full-Stack Engineer with a passion for building SaaS applications and solving complex
                    problems. I also
                    run a digital agency, where I help businesses thrive with tech and marketing solutions.
                </p>
                <p class="text-gray-400 mb-6">
                    With expertise in coding and marketing, I bridge the gap between technology and business growth.
                    Beyond work, I love exploring innovative ideas, playing chess, and diving into new challenges.
                </p>
                <router-link to="/profile" class="text-[#ffdb70] hover:underline font-medium">
                    Explore My Profile
                </router-link>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Profile image functionality
const profileImages = ref([
    new URL('../../assets/1.jpg', import.meta.url).href,
    new URL('../../assets/2.jpg', import.meta.url).href,
    new URL('../../assets/3.jpg', import.meta.url).href,
]);
const profileImageIndex = ref(0);
const currentProfileImage = ref(profileImages.value[0]);

const nextProfileImage = () => {
    profileImageIndex.value = (profileImageIndex.value + 1) % profileImages.value.length;
    currentProfileImage.value = profileImages.value[profileImageIndex.value];
};

// Auto-rotate images
let profileImageInterval;
onMounted(() => {
    profileImageInterval = setInterval(nextProfileImage, 10000);
});

onBeforeUnmount(() => {
    clearInterval(profileImageInterval);
});
</script>
