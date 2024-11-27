<template>
    <section id="works" class="bg-alternate">
        <div class="container mx-auto px-6 py-16">
            <div class="flex justify-between items-center mb-12">
                <h2 class="text-3xl font-bold">My Recent Work</h2>
                <router-link to="/portfolio" class="text-[#ffdb70] hover:underline font-medium">
                    View All
                </router-link>
            </div>
            <div class="space-y-8">
                <div v-for="project in projects.slice(0, 9)" :key="project.id"
                    class="bg-white/5 rounded-2xl p-8 border border-[#555] hover:border-[#ffdb70] transition-colors project-card">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-2xl font-bold mb-4">{{ project.title }}</h3>
                            <p class="text-gray-400 mb-6">
                                {{ project.description }}
                            </p>
                            <router-link :to="project.url" class="text-[#ffdb70] hover:underline">Learn
                                More</router-link>
                        </div>
                        <div class="flex justify-center">
                            <router-link :to="project.url">
                                <img loading="lazy" :src="project.image" :alt="project.title"
                                    class="rounded-xl project-image" />
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
    {
        id: 1,
        title: 'Sleep Research Tool',
        description: 'A desktop and mobile app that aids researchers in analyzing psychomotor vigilance tasks for sleep-deprived individuals.',
        image: new URL('../../assets/portfolio/sleep-research.webp', import.meta.url).href,
        url: '/portfolio/sleep-research',
        category: 'Design',
        technologies: ['Figma', 'Illustrator'],
    },
    {
        id: 2,
        title: 'FastContent',
        description: 'A desktop application that uses AI to generate scripts and conversation audio in formats such as discussions, interviews, and storytelling, with voice cloning support.',
        image: new URL('../../assets/portfolio/fast-content.webp', import.meta.url).href,
        url: '/portfolio/fast-content',
        category: 'Mobile',
        technologies: ['React Native', 'Node.js'],
    },
    {
        id: 3,
        title: 'LinkedIn Journal',
        description: 'A desktop app that automates LinkedIn content creation with AI-generated posts, customizable tone, and a content management dashboard for scheduling posts.',
        image: new URL('../../assets/portfolio/linkedin-journal.webp', import.meta.url).href,
        url: '/portfolio/linkedin-journal',
        category: 'Design',
        technologies: ['Figma', 'Illustrator'],
    },
]);
</script>

<style scoped>
.project-image {
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: 0 50%;
    filter: grayscale(100%);
}

.project-card:hover .project-image {
    filter: grayscale(0%);
}
</style>