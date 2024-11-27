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
    title: 'LabPVT+ and PVT+',
    subtitle: 'Modern tools for psychomotor vigilance research and sleep studies',
};

const about = {
    title: 'About LabPVT+ and PVT+',
    content:
        'LabPVT+ and PVT+ are advanced tools for psychomotor vigilance task (PVT) research, designed to assist sleep researchers and participants in conducting and participating in sleep deprivation studies. The apps bridge the gap between research accessibility and modern usability, providing a robust solution for studying cognitive performance under sleep deprivation.',
};

const overviewContent = [
    'LabPVT+ and PVT+ are advanced tools for psychomotor vigilance task (PVT) research.',
    'These tools assist sleep researchers and participants in conducting and participating in sleep deprivation studies.',
    'They modernize and democratize access to tools for studying cognitive performance under sleep deprivation.',
];

const keyFeaturesContent = [
    'Integrated Ecosystem:',
    'LabPVT+ (Desktop App) for researchers to manage studies and analyze data.',
    'PVT+ (Mobile App) for participants to perform tasks conveniently.',
    'Efficient Data Collection and Analysis: Simplifies the generation of research statistics and visualizations.',
    'Modern Accessibility: Provides a more accessible alternative to exclusive solutions like NASA-PVT+.',
];

const techStackContent = [
    {
        label: 'PVT+ (Mobile App)',
        content: [
            'Framework: Vue.js (v3.3.0) for building the user interface.',
            'Mobile Development: Capacitor for cross-platform compatibility on Android and iOS.',
            'Routing: Vue Router (v4.2.0) for navigation.',
            'Utilities: Ionicons for icons, TypeScript for type safety.',
            'Testing: Cypress (end-to-end testing) and Vitest (unit testing).',
            'Build System: Vite for fast development and build processes.',
        ],
    },
    {
        label: 'LabPVT+ (Desktop App)',
        content: [
            'Framework: Vue.js (v3.3.4) for frontend development.',
            'GraphQL Support: Apollo Client and GraphQL integration for managing research data and statistics.',
            'Styling: TailwindCSS (including aspect-ratio and typography plugins) and DaisyUI for a clean, responsive design.',
            'Routing: Vue Router (v4.2.2) for app navigation.',
            'Build System: Vite for efficient development and builds.',
            'Testing and Linting: TypeScript and ESLint for maintaining code quality.',
        ],
    },
];

const targetUsersContent = [
    {
        avatar: '',
        type: 'Sleep Researchers',
        description: 'Professionals conducting psychomotor vigilance studies.',
        isValidImage: false,
    },
    {
        avatar: '',
        type: 'Sleep-Deprived Individuals',
        description: 'Participants involved in sleep research.',
        isValidImage: false,
    },
];

const problemContent = {
    asIs: [
        'Traditional applications for sleep deprivation research, such as NASA-PVT+, are highly exclusive and not easily accessible.',
    ],
    possible: [
        'LabPVT+ and PVT+ modernize and democratize these tools, offering a seamless integration of desktop and mobile platforms to facilitate sleep-related research.',
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