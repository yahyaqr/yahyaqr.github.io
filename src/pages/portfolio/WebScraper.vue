<template>
    <div class="container mx-auto px-6 py-16 text-white">


        <!-- Header -->
        <header class="mb-8">
            <div class="flex items-center gap-2">
                <h1 class="text-2xl sm:text-4xl font-bold">{{ headings.title }}</h1>
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
    title: 'Web Scraper',
    subtitle: 'Effortless data extraction from websites to Excel files.',
};

const about = {
    title: 'About Web Scraper',
    content:
        'Web Scraper is a free and user-friendly desktop application designed to help non-technical users extract data from websites and save it into an Excel file (.xlsx) effortlessly. The app simplifies web scraping for personal, professional, or business needs, eliminating the need for manual data collection.',
};

const overviewContent = [
    'Web Scraper is a free and user-friendly desktop application for data extraction.',
    'Designed for non-technical users to collect and save website data into Excel files (.xlsx).',
    'Simplifies the process of web scraping for personal, professional, and business purposes.',
];

const keyFeaturesContent = [
    'Provide simple, intuitive design tailored for non-technical users.',
    'Supports extracting data from various websites, including tables, lists, and structured content.',
    'Automatically saves the extracted data into an organized .xlsx file.',
    'No cost to use, making data collection accessible for everyone.',
];

const techStackContent = [
    {
        label: 'Backend',
        content: [
            'Puppeteer: Automates browser interactions and extracts complex web data.',
            'Cheerio: Parses and manipulates HTML for targeted data extraction.',
            'Axios: Handles HTTP requests to fetch web content.',
            'XLSX: Converts extracted data into Excel files.',
        ],
    },
    {
        label: 'Frontend',
        content: [
            'Electron.js: Framework to turn the app into a cross-platform desktop application.',
        ],
    },
];

const targetUsersContent = [
    {
        avatar: '',
        type: 'Non-technical Users',
        description: 'Individuals with limited technical expertise needing web data for personal, professional, or business purposes.',
        isValidImage: false,
    },
    {
        avatar: '',
        type: 'Small Businesses',
        description: 'Entrepreneurs gathering market data for insights.',
        isValidImage: false,
    },
    {
        avatar: '',
        type: 'Students and Researchers',
        description: 'Simplifies data collection for academic projects and research.',
        isValidImage: false,
    },
];

const problemContent = {
    asIs: [
        'Manual data collection from websites is time-consuming and inefficient.',
    ],
    possible: [
        'Web Scraper automates the process, allowing users to quickly gather, structure, and save web data without needing technical skills.',
    ],
};

const platforms = {
    desktop: {
        images: [
            new URL('../../assets/web-scraper/d1.png', import.meta.url).href,
            new URL('../../assets/web-scraper/d1.webp', import.meta.url).href,
        ],
        downloadHandler: () => {
            const link = document.createElement('a');
            link.href = 'https://github.com/yahyaqr/releases-web-scraper/releases/download/v1.0.0/WebScraper-win32-x64.zip';
            link.download = '';
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
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