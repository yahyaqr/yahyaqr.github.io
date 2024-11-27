<template>
    <div class="min-h-screen text-white">
        <section id="works" class="container mx-auto px-6 py-16">
            <div class="flex flex-wrap md:flex-nowrap justify-between items-center mb-12 gap-4">
                <!-- Title Section -->
                <h1 class="text-4xl font-bold text-center md:text-left flex-grow md:flex-grow-0">
                    My Recent Work
                </h1>

                <!-- Categories Section -->
                <div
                    class="flex flex-wrap justify-center md:justify-end items-center space-x-0 md:space-x-4 gap-2 md:gap-0">
                    <button v-for="category in categories" :key="category" @click="filterCategory(category)" :class="[
                        'px-4 py-2 rounded-full transition-colors text-sm md:text-base',
                        currentCategory === category
                            ? 'bg-[#ffdb70] text-gray-900'
                            : 'bg-white/10 hover:bg-white/20'
                    ]">
                        {{ category }}
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <router-link v-for="project in filteredProjects" :key="project.id" :to="project.url"
                    class="bg-white/5 rounded-2xl p-8 border border-[#555] hover:border-[#ffdb70] transition-all duration-300 transform hover:-translate-y-2 block group">
                    <img loading="lazy" :src="project.image" :alt="project.title"
                        class="w-full h-48 object-cover rounded-xl mb-6 filter transition duration-300 group-hover:filter-none saturate-0" />
                    <h3 class="text-2xl font-bold mb-4 group-hover:text-[#ffdb70]">{{ project.title }}</h3>
                    <p class="text-gray-400 mb-6 line-clamp-3">
                        {{ project.description }}
                    </p>
                    <div class="flex space-x-2">
                        <span v-for="tech in project.technologies" :key="tech"
                            class="px-2 py-1 bg-white/10 rounded-full text-xs">
                            {{ tech }}
                        </span>
                    </div>
                </router-link>
            </div>

            <div v-if="shouldShowLoadMore" class="mt-12 flex justify-center">
                <button @click="loadMore"
                    class="px-6 py-3 bg-[#ffdb70] text-gray-900 rounded-full font-bold transition-colors"
                    :class="noMoreProjects ? 'cursor-not-allowed bg-gray-400 opacity-50' : 'hover:bg-[#ffd24d]'"
                    :disabled="noMoreProjects">
                    {{ noMoreProjects ? 'No More Projects' : 'Load More' }}
                </button>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const projects = ref([
    {
        id: 1,
        title: 'Sleep Research Tool',
        description: 'A desktop and mobile app that aids researchers in analyzing psychomotor vigilance tasks for sleep-deprived individuals.',
        image: new URL('../../src/assets/portfolio/sleep-research.webp', import.meta.url).href,
        url: '/portfolio/sleep-research',
        category: 'Design',
        technologies: ['Figma', 'Illustrator'],
    },
    {
        id: 2,
        title: 'Startups Due Diligence',
        description: 'A web application that automates financial and operational evaluation for startups, leveraging web scraping, pitch deck analysis, and machine learning.',
        image: new URL('../../src/assets/portfolio/startups-diligence.webp', import.meta.url).href,
        url: '/portfolio/startups-diligence',
        category: 'Development',
        technologies: ['Vue.js', 'Firebase'],
    },
    {
        id: 3,
        title: 'FastContent',
        description: 'A desktop application that uses AI to generate scripts and conversation audio in formats such as discussions, interviews, and storytelling, with voice cloning support.',
        image: new URL('../../src/assets/portfolio/fast-content.webp', import.meta.url).href,
        url: '/portfolio/fast-content',
        category: 'Mobile',
        technologies: ['React Native', 'Node.js'],
    },
    {
        id: 4,
        title: 'LinkedIn Journal',
        description: 'A desktop app that automates LinkedIn content creation with AI-generated posts, customizable tone, and a content management dashboard for scheduling posts.',
        image: new URL('../../src/assets/portfolio/linkedin-journal.webp', import.meta.url).href,
        url: '/portfolio/linkedin-journal',
        category: 'Design',
        technologies: ['Figma', 'Illustrator'],
    },
    {
        id: 5,
        title: 'GSheets-as-DB',
        description: 'A SaaS platform that transforms Google Sheets into a dynamic backend database with an automated CRUD dashboard for developers and freelancers.',
        image: new URL('../../src/assets/portfolio/gsheets-db.webp', import.meta.url).href,
        url: '/portfolio/gsheets-db',
        category: 'Database',
        technologies: ['Vue.js', 'Firebase'],
    },
    {
        id: 6,
        title: 'Instant Backend',
        description: 'A SaaS platform for developers to rapidly create CRUD APIs and dashboards using AI-powered endpoint generation, reducing repetitive tasks.',
        image: new URL('../../src/assets/portfolio/instant-backend.webp', import.meta.url).href,
        url: '/portfolio/instant-backend',
        category: 'Mobile',
        technologies: ['React Native', 'Node.js'],
    },
    {
        id: 7,
        title: 'Web Scraper',
        description: 'A desktop application designed for non-technical users to extract web data and export it as Excel files, automating data collection tasks.',
        image: new URL('../../src/assets/portfolio/web-scraper.webp', import.meta.url).href,
        url: '/portfolio/web-scraper',
        category: 'Mobile',
        technologies: ['React Native', 'Node.js'],
    },
]);

const categories = ['All', 'Design', 'Development', 'Mobile', 'Database'];
const currentCategory = ref('All');
const visibleProjects = ref(9);

const filterCategory = (category) => {
    currentCategory.value = category;
    visibleProjects.value = 9;
};

const filteredProjects = computed(() => {
    let filtered =
        currentCategory.value === 'All'
            ? projects.value
            : projects.value.filter((project) => project.category === currentCategory.value);
    return filtered.slice(0, visibleProjects.value);
});

const noMoreProjects = computed(() => {
    return (
        visibleProjects.value >=
        (currentCategory.value === 'All'
            ? projects.value.length
            : projects.value.filter((project) => project.category === currentCategory.value).length)
    );
});

const loadMore = () => {
    visibleProjects.value += 9;
};

const shouldShowLoadMore = computed(() => projects.value.length > 9);
</script>

<style scoped>
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
}

.filter {
    filter: saturate(0%);
}

.filter-none {
    filter: saturate(100%);
}
</style>
