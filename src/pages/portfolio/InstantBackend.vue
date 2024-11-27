<template>
    <div class="container mx-auto px-6 py-16 text-white">
        <!-- Breadcrumbs -->
        <div class="flex items-center gap-2 text-gray-400 sm:my-8 my-4">
            <router-link to="/portfolio" class="hover:text-white hover:underline focus:outline-none">
                My Work
            </router-link>
            <span>></span>
            <span>{{ headings.title }}</span>
        </div>

        <!-- Header -->
        <header class="mb-8">
            <div class="flex items-center gap-2">
                <h1 class="text-3xl font-bold">{{ headings.title }}</h1>
                <button @click="openModal(about)" class="text-gray-400 hover:text-white focus:outline-none mt-1"
                    aria-label="More information">
                    <InfoIcon class="w-6 h-6" />
                </button>
            </div>
            <p class="text-xl text-gray-400 mt-2">{{ headings.subtitle }}</p>
        </header>

        <!-- Main Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="flex flex-col gap-4">
                <!-- Problem Section -->
                <Problem :title="headings.title" :content="problemContent" />

                <!-- Overview Section -->
                <Overview :content="overviewContent" />

                <!-- Key Features Section -->
                <KeyFeatures :content="keyFeaturesContent" />

                <!-- Target Audience Section -->
                <TargetUsers :content="targetUsersContent" />
            </div>

            <div class="flex flex-col gap-4">
                <!-- PlatformTabs Section -->
                <PlatformTabs :platforms="platforms" />

                <!-- Tech Stack Section -->
                <TechStack :content="techStackContent" />
            </div>
        </div>

        <!-- Modal -->
        <transition name="modal">
            <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                @click.self="closeModal">
                <div class="bg-[#111111] border border-gray-600 rounded-2xl p-4 sm:p-6 max-w-md w-full">
                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{{ modal.title }}</h2>
                    <p class="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">{{ modal.content }}</p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import Overview from '../../components/Portfolio/Overview.vue';
import KeyFeatures from '../../components/Portfolio/KeyFeatures.vue';
import TechStack from '../../components/Portfolio/TechStack.vue';
import TargetUsers from '../../components/Portfolio/TargetUsers.vue';
import Problem from '../../components/Portfolio/Problem.vue';
import PlatformTabs from '../../components/Portfolio/PlatformTabs.vue';
import { ref } from 'vue';
import { InfoIcon } from 'lucide-vue-next';

// Reactive state for modal visibility
const showModal = ref(false);

// Modal data
const modal = ref({
    title: '',
    content: '',
});

// Methods to handle modal
const openModal = (modalData) => {
    modal.value.title = modalData.title;
    modal.value.content = modalData.content;
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};

// Headings and content for the page
const headings = {
    title: 'Instant Backend',
    subtitle: 'Accelerate backend development with AI-powered CRUD API creation',
};

const about = {
    title: 'About Instant Backend',
    content:
        'Instant Backend is a SaaS web application designed to accelerate the development of CRUD APIs. It simplifies and automates the creation of REST APIs, GraphQL endpoints, and dashboards using AI, enabling developers to save time and reduce repetitive coding tasks.',
};

const overviewContent = [
    'Instant Backend is a SaaS web application designed to accelerate the development of CRUD APIs.',
    'It simplifies and automates the creation of REST APIs, GraphQL endpoints, and dashboards using AI.',
    'This tool enables developers to save time and reduce repetitive coding tasks.',
];

const keyFeaturesContent = [
    'AI-Powered API Creation: Instantly generate REST APIs and GraphQL endpoints by simply describing the desired functionality.',
    'Dashboard Generation: Automatically create admin dashboards alongside the APIs.',
    'Customizable Output: Developers retain control over the output, allowing fine-tuning of the generated APIs and dashboards.',
];

const techStackContent = [
    {
        label: 'Backend',
        content: [
            'FastAPI: A high-performance Python web framework for building APIs.',
            'Uvicorn: An ASGI server for running FastAPI applications in development.',
            'Gunicorn: A production-grade server for running the app in live environments.',
        ],
    },
    {
        label: 'Testing',
        content: [
            'Pytest: Ensures robust testing of the generated APIs.',
        ],
    },
    {
        label: 'Other Tools',
        content: [
            'Custom Script (generate.ps1): Facilitates AI-driven generation of API components.',
        ],
    },
];

const targetUsersContent = [
    {
        avatar: '',
        type: 'Developers and Startups',
        description: 'Developers and startups who want to quickly set up backend services for new projects.',
        isValidImage: false,
    },
    {
        avatar: '',
        type: 'Teams',
        description: 'Teams looking to minimize repetitive tasks in CRUD API development.',
        isValidImage: false,
    },
];

const problemContent = {
    asIs: [
        'Creating CRUD APIs often involves repetitive coding, consuming time that could be better spent on unique features.',
    ],
    possible: [
        'Instant Backend eliminates this bottleneck, providing instant scaffolding for APIs and dashboards, so developers can focus on innovation.',
    ],
};

const platforms = {
    desktop: {
        images: [
            new URL('../../assets/1.jpg', import.meta.url).href,
            new URL('../../assets/2.jpg', import.meta.url).href,
            new URL('../../assets/3.jpg', import.meta.url).href,
        ],
        downloadHandler: () => {
            console.log('Downloading Desktop App');
        },
    }
};

</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>