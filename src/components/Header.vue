<template>
    <header class="bg-[#151515] border-b border-[#555]">
        <div
            class="container mx-auto px-6 py-10 flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
            <!-- Content Title -->
            <router-link to="/"
                class="text-2xl font-bold hover:text-[#ffdb70] transition-colors text-center md:text-left">
                {{ content.title }}
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
import { Linkedin } from 'lucide-vue-next';

const isExternal = (link) => {
    if (!link) return false; // Handle undefined or null links
    return link.startsWith('http') || link.startsWith('#');
};

const content = {
    title: "yahyaqr.github.io",
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
