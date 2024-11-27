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
    title: 'FastContent',
    subtitle: 'AI-powered content creation tool for effortless storytelling',
};

const about = {
    title: 'About FastContent',
    content:
        'FastContent is a cutting-edge desktop application that uses AI to simplify and accelerate content creation. It offers users the ability to generate content in various formats such as Discussions, Interviews, Monologues, and Storytelling. Helping both individuals and businesses save time and effort in crafting high-quality content.',
};

const overviewContent = [
    'FastContent is a cutting-edge desktop application that uses AI to simplify and accelerate content creation.',
    'It offers users the ability to generate content in various formats such as Discussions, Interviews, Monologues, and Storytelling.',
    'Helping both individuals and businesses save time and effort in crafting high-quality content.',
];

const keyFeaturesContent = [
    'Diverse Content Formats: Create content in formats like Discussions, Interviews, Monologues, and Storytelling instantly.',
    'AI-Powered Script Creation: Accepts raw text materials and transforms them into complete scripts with ease.',
    'Voice Cloning: Allows users to integrate their own voice for a personalized and realistic content experience.',
];

const techStackContent = [
    {
        label: 'Frontend',
        content: [
            'Built using Vue.js 3.5.12 for a modern and dynamic user interface.',
            'TailwindCSS 3.4.14 for a responsive and customizable design.',
        ],
    },
    {
        label: 'Backend',
        content: [
            'Powered by Vite 5.4.9 for a fast and optimized development environment.',
        ],
    },
    {
        label: 'Others',
        content: [
            'Audio Processing: Libraries like audio-buffer, audiobuffer-to-wav, and wav-encoder ensure high-quality audio management and processing for voice cloning and script playback.',
            'Additional Tools: Lucide Vue Next for scalable icons, PostCSS, and Autoprefixer for efficient CSS management and cross-browser compatibility.',
        ],
    },
];

const targetUsersContent = [
    {
        avatar: '',
        type: 'Businesses & Individuals',
        description: 'Individuals or businesses looking to speed up and simplify the content creation process.',
        isValidImage: false,
    },
    {
        avatar: '',
        type: 'Professionals',
        description:
            'Professionals who find traditional content creation methods time-consuming, including scriptwriting, recording, and editing.',
        isValidImage: false,
    },
];

const problemContent = {
    asIs: [
        'Traditional content creation involves lengthy processes such as preparing materials, writing scripts, recording, and editing.',
    ],
    possible: [
        'FastContent eliminates these inefficiencies, enabling faster, more accessible content generation with AI-driven features.',
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