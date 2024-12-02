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
    title: 'Google Sheets DB',
    subtitle: 'Transform Google Sheets into a cost-effective backend database.',
};

const about = {
    title: 'About Google Sheets DB',
    content:
        'Google Sheets DB is a SaaS web application designed to provide a cost-effective and user-friendly alternative to traditional cloud databases. By transforming Google Sheets into a dynamic backend database, it enables developers and freelancers to build web applications without incurring ongoing hosting or cloud service expenses.',
};

const overviewContent = [
    'Google Sheets DB provides a cost-effective and user-friendly alternative to traditional cloud databases.',
    'Transforms Google Sheets into a dynamic backend database for web applications.',
    'Enables developers and freelancers to build web apps without ongoing hosting or cloud service expenses.',
];

const keyFeaturesContent = [
    'Turns Google Sheets into a fully functional backend database for dynamic data storage.',
    'Automatically generates a CRUD (Create, Read, Update, Delete) dashboard that updates dynamically with changes to Google Sheets headers.',
    'Eliminates the need for traditional hosting or cloud VPS services, making it ideal for static website deployment.',
];

const techStackContent = [
    {
        label: 'Frontend',
        content: [
            'EJS (Embedded JavaScript) for rendering dynamic web pages.',
        ],
    },
    {
        label: 'Backend',
        content: [
            'Express.js for handling API requests and routing.',
            'gGoogleapis library to connect and interact with Google Sheets.',
            'jsonwebtoken for secure user authentication.',
            'bcrypt for password hashing and security.',
        ],
    },
];

const targetUsersContent = [
    {
        avatar: '',
        type: 'Developers',
        description: 'Seeking an easy and affordable way to manage data for web apps.',
        isValidImage: false,
    },
    {
        avatar: '',
        type: 'Freelancers',
        description: 'Building landing pages or web apps for clients with minimal infrastructure costs.',
        isValidImage: false,
    },
    {
        avatar: '',
        type: 'Clients',
        description: 'Looking for dynamic websites without ongoing database management expenses.',
        isValidImage: false,
    },
];

const problemContent = {
    asIs: [
        'Building web apps and websites often requires a database, but traditional databases can be expensive and require hosting services.',
    ],
    possible: [
        'Google Sheets DB removes these barriers, providing a dynamic database alternative that works seamlessly with static website deployment services.',
    ],
};

const platforms = {
    web: {
        images: [
            new URL('../../assets/gsheets-db.webp', import.meta.url).href,
        ],
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