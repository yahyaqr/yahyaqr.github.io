<template>
    <header class="bg-[#151515] border-b border-[#555]">
        <div
            class="container mx-auto px-6 py-10 flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
            <!-- Rotating Circle Image -->
            <router-link to="/" class="relative threedrelative block group">
                <div class="relative w-16 h-16 -my-4">
                    <!-- Front Face -->
                    <img src="../assets/header.png" alt="Header Logo"
                        class="absolute inset-0 w-full h-full rounded-full backface-visible" />
                </div>
            </router-link>
            <!-- Navigation -->
            <nav id="nav" class="flex justify-center md:justify-start">
                <ul class="flex space-x-4">
                    <li v-for="(item, index) in content.nav.items" :key="item.name" class="relative">
                        <!-- Nav Item -->
                        <component :is="item.link && isExternal(item.link) ? 'a' : 'router-link'"
                            :href="item.link && isExternal(item.link) ? item.link : undefined"
                            :to="item.link && !isExternal(item.link) ? item.link : undefined"
                            class="flex items-center px-5 py-2 text-[#d6d6d6] hover:bg-[#ffdb70] hover:text-[#151515] focus:text-[#151515] rounded-full cursor-pointer transition-colors">
                            {{ item.name }}
                        </component>
                    </li>
                    <!-- "Hire Me" Button -->
                    <li>
                        <a href="https://www.linkedin.com/in/yahya-aqrom/" target="_blank"
                            class="flex justify-center items-center gap-1 px-6 py-2 bg-[#ffdb70] text-[#151515] font-bold rounded-full hover:bg-[#ffcb2f] transition-colors">
                            <img src="../assets/linkedin.svg" alt="Skill icon" class="w-6 h-auto" />
                            Hire Me
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
const isExternal = (link) => {
    if (!link) return false; // Handle undefined or null links
    return link.startsWith('http') || link.startsWith('#');
};

const content = {
    nav: {
        items: [
            {
                name: "My Work",
                link: "/portfolio",
            },
            {
                name: "My Profile",
                link: "/profile",
            },
        ],
    },
};
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
