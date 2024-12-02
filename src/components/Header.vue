<template>
    <header class="bg-[#151515] border-b border-[#555]">
        <div
            class="container mx-auto px-6 pt-10 pb-4 sm:py-10 flex flex-col md:flex-row md:justify-between items-center space-y-8 md:space-y-0">
            <!-- Rotating Circle Image -->
            <router-link to="/" class="relative threedrelative block group">
                <div class="relative w-16 h-16 -my-4">
                    <img loading="lazy" src="../assets/header.webp" alt="Header Logo"
                        class="absolute inset-0 w-full h-full rounded-full backface-visible" />
                </div>
            </router-link>
            <!-- Navigation -->
            <nav id="nav" class="flex justify-center md:justify-start">
                <ul class="flex space-x-4">
                    <li v-for="(item, index) in navItems" :key="item.name" class="relative">
                        <!-- Nav Item -->
                        <router-link v-if="!isExternal(item.link)" :to="item.link"
                            class="flex items-center px-5 py-2 text-[#d6d6d6] cursor-pointer transition-all relative group"
                            active-class="active-link">
                            {{ item.name }}
                            <span class="absolute left-0 bottom-0 h-[2px] bg-[#555] transition-all duration-300"
                                :class="isActiveRoute(item.link) ? 'w-full' : 'w-0 group-hover:w-full group-focus:w-full'">
                            </span>
                        </router-link>
                        <a v-else :href="item.link" target="_blank"
                            class="flex items-center px-5 py-2 text-[#d6d6d6] cursor-pointer transition-all relative group">
                            {{ item.name }}
                            <span
                                class="absolute left-0 bottom-0 h-[2px] bg-[#555] transition-all duration-300 group-hover:w-full group-focus:w-full">
                            </span>
                        </a>
                    </li>
                    <!-- "Hire Me" Button -->
                    <li>
                        <a href="https://www.linkedin.com/in/yahya-aqrom/" target="_blank"
                            class="flex justify-center items-center gap-1 px-5 py-2 text-[#d6d6d6] cursor-pointer transition-all relative group">
                            <img loading="lazy" src="../assets/linkedin.svg" alt="LinkedIn Icon"
                                class="w-6 h-auto filter invert brightness-0" />
                            Hire Me
                            <span
                                class="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ffdb70] transition-all duration-300 group-hover:w-full group-focus:w-full">
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const isExternal = (url) => /^(http|https):/.test(url);
const route = useRoute();

const isActiveRoute = (link) => route.path === link;

const isMobile = ref(window.innerWidth <= 768);

// Navigation items with dynamic naming for mobile
const navItems = ref([
    { name: "My Work", link: "/portfolio" },
    { name: "My Profile", link: "/profile" },
]);

// Update navigation text based on screen size
const updateNavItems = () => {
    if (isMobile.value) {
        navItems.value[0].name = "Work";
        navItems.value[1].name = "Profile";
    } else {
        navItems.value[0].name = "My Work";
        navItems.value[1].name = "My Profile";
    }
};

// Handle screen resize
const handleResize = () => {
    isMobile.value = window.innerWidth <= 768;
    updateNavItems();
};

onMounted(() => {
    window.addEventListener("resize", handleResize);
    updateNavItems();
});
</script>

<style>
/* Keyframes for horizontal flipping */
@keyframes continuous-flip {
    0% {
        transform: rotateY(0deg);
    }

    25% {
        transform: rotateY(90deg);
    }

    50% {
        transform: rotateY(180deg);
    }

    75% {
        transform: rotateY(270deg);
    }

    100% {
        transform: rotateY(360deg);
    }
}

/* Hover Animation */
.group:hover .relative {
    animation: continuous-flip 0.5s infinite linear;
}

/* 3D effect */
.threedrelative {
    position: relative;
    perspective: 1000px;
}

.backface-visible {
    transform-style: preserve-3d;
    backface-visibility: hidden;
}
</style>
