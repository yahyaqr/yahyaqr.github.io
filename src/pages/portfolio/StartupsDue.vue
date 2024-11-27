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
    title: 'Startups Due Diligence Automation',
    subtitle: 'Streamline the due diligence process with automated data collection and evaluation.',
};

const about = {
    title: 'About Startups Due Diligence Automation',
    content:
        'Startups Due Diligence Automation is a SaaS web application that streamlines the due diligence process for venture capitalists. By combining web scraping, pitch deck analysis, and machine learning, the platform automates data collection and evaluation, enabling VCs to assess startup funding readiness efficiently.',
};

const overviewContent = [
    'Startups Due Diligence Automation is a SaaS web application that streamlines the due diligence process for venture capitalists.',
    'The platform combines web scraping, pitch deck analysis, and machine learning to automate data collection and evaluation.',
    'It enables VCs to assess startup funding readiness efficiently, reducing manual effort.',
];

const keyFeaturesContent = [
    'Pitch Deck Data Extraction: Automatically extracts and analyzes key information from uploaded pitch decks.',
    'Web Scraping for Market Insights: Gathers relevant data from the internet, including competitors, market trends, and financials.',
    'Machine Learning Evaluation: Employs advanced ML models to predict the probability of startup funding success based on collected data.',
];

const techStackContent = [
    {
        label: 'Frontend',
        content: [
            'Framework: Next.js for building a scalable, SEO-friendly web application.',
            'Styling: TailwindCSS for creating a modern, responsive UI.',
        ],
    },
    {
        label: 'Backend',
        content: [
            'Web Scraping and Data Extraction:',
            'Axios: For making HTTP requests to gather web content.',
            'Cheerio: For parsing and extracting specific HTML data.',
            'PDF-Parse: For extracting structured information from uploaded pitch decks.',
        ],
    },
    {
        label: 'AI Integration',
        content: [
            'OpenAI API: Powers the machine learning model for funding success predictions.',
            'Server: Built on Express.js for robust API endpoints.',
        ],
    },
    {
        label: 'File Management',
        content: [
            'Multer: Handles file uploads securely.',
        ],
    },
    {
        label: 'DevOps and Development Tools',
        content: [
            'Concurrency Management: concurrently for running multiple processes in development.',
            'PostCSS and Autoprefixer: Optimize CSS for cross-browser compatibility.',
        ],
    },
];

const targetUsersContent = [
    {
        avatar: '',
        type: 'Venture Capitalists',
        description: 'Simplifies the process of evaluating startups for potential investments.',
        isValidImage: false,
    },
    {
        avatar: '',
        type: 'Startups',
        description: 'Prepares funding readiness reports to showcase their viability to investors.',
        isValidImage: false,
    },
];

const problemContent = {
    asIs: [
        'The due diligence process in startup funding involves labor-intensive data gathering and evaluation.',
    ],
    possible: [
        'This app automates those steps, significantly reducing time and effort while enhancing decision-making with data-driven insights.',
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