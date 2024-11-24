<template>
    <div class="min-h-screen text-white">
        <section id="works" class="container mx-auto px-6 py-16">
            <div class="flex justify-between items-center mb-12">
                <h1 class="text-4xl font-bold">My Recent Work</h1>
                <div class="flex items-center space-x-4">
                    <button v-for="category in categories" :key="category" @click="filterCategory(category)"
                        :class="['px-4 py-2 rounded-full transition-colors',
                        currentCategory === category ? 'bg-[#ffdb70] text-gray-900' : 'bg-white/10 hover:bg-white/20']">
                        {{ category }}
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <a v-for="project in filteredProjects" :key="project.id" :href="project.caseStudyUrl"
                    class="bg-white/5 rounded-2xl p-8 border border-[#555] hover:border-[#ffdb70] transition-all duration-300 transform hover:-translate-y-2 block group">
                    <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover rounded-xl mb-6" />
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
                </a>
            </div>

            <div class="mt-12 flex justify-center">
                <button @click="loadMore"
                    class="px-6 py-3 bg-[#ffdb70] text-gray-900 rounded-full font-bold hover:bg-[#ffd24d] transition-colors"
                    :disabled="noMoreProjects">
                    {{ noMoreProjects ? 'No More Projects' : 'Load More' }}
                </button>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const projects = ref([
    {
        id: 1,
        title: 'Sheepify States',
        description: 'Designed empty state screens in kawaii style for the popular sheepify app. Tailored the app aesthetically, applying utility classes to different states using sprint modifiers.',
        image: 'https://placeholder.pics/svg/500x250/DEDEDE/555555-DEDEDE/Sheepify%20States',
        caseStudyUrl: '#',
        category: 'Design',
        technologies: ['Figma', 'Illustrator']
    },
    {
        id: 2,
        title: 'TaskMaster Pro',
        description: 'Developed a feature-rich task management application with real-time collaboration capabilities.',
        image: 'https://placeholder.pics/svg/500x250/DEDEDE/555555-DEDEDE/TaskMaster%20Pro',
        caseStudyUrl: '#',
        category: 'Development',
        technologies: ['Vue.js', 'Firebase']
    },
    {
        id: 3,
        title: 'EcoTrack',
        description: 'Created a mobile app for tracking and reducing personal carbon footprint with gamification elements.',
        image: 'https://placeholder.pics/svg/500x250/DEDEDE/555555-DEDEDE/EcoTrack',
        caseStudyUrl: '#',
        category: 'Mobile',
        technologies: ['React Native', 'Node.js']
    },
    {
        id: 4,
        title: 'Sheepify States',
        description: 'Designed empty state screens in kawaii style for the popular sheepify app. Tailored the app aesthetically, applying utility classes to different states using sprint modifiers.',
        image: 'https://placeholder.pics/svg/500x250/DEDEDE/555555-DEDEDE/Sheepify%20States',
        caseStudyUrl: '#',
        category: 'Design',
        technologies: ['Figma', 'Illustrator']
    },
    {
        id: 5,
        title: 'TaskMaster Pro',
        description: 'Developed a feature-rich task management application with real-time collaboration capabilities.',
        image: 'https://placeholder.pics/svg/500x250/DEDEDE/555555-DEDEDE/TaskMaster%20Pro',
        caseStudyUrl: '#',
        category: 'Development',
        technologies: ['Vue.js', 'Firebase']
    },
    {
        id: 6,
        title: 'EcoTrack',
        description: 'Created a mobile app for tracking and reducing personal carbon footprint with gamification elements.',
        image: 'https://placeholder.pics/svg/500x250/DEDEDE/555555-DEDEDE/EcoTrack',
        caseStudyUrl: '#',
        category: 'Mobile',
        technologies: ['React Native', 'Node.js']
    },
    // Add more projects here...
])

const categories = ['All', 'Design', 'Development', 'Mobile']
const currentCategory = ref('All')
const visibleProjects = ref(3)

const filterCategory = (category) => {
    currentCategory.value = category
    visibleProjects.value = 3
}

const filteredProjects = computed(() => {
    let filtered = currentCategory.value === 'All'
        ? projects.value
        : projects.value.filter(project => project.category === currentCategory.value)
    return filtered.slice(0, visibleProjects.value)
})

const noMoreProjects = computed(() => {
    return visibleProjects.value >= (currentCategory.value === 'All'
        ? projects.value.length
        : projects.value.filter(project => project.category === currentCategory.value).length)
})

const loadMore = () => {
    visibleProjects.value += 3
}
</script>

<style scoped>
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    /* Number of lines to show */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
}
</style>