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
    title: 'LinkedIn Journal',
    subtitle: 'Streamline your LinkedIn content creation for impactful personal branding',
};

const about = {
    title: 'About LinkedIn Journal',
    content:
        'LinkedIn Journal is a powerful desktop application designed to streamline the creation of high-quality LinkedIn content. Tailored for professionals, it helps users maintain a consistent posting schedule, ensuring their personal branding efforts align with a professional standard.',
};

const overviewContent = [
    'LinkedIn Journal is a powerful desktop application designed to streamline the creation of high-quality LinkedIn content.',
    'Tailored for professionals, it helps users maintain a consistent posting schedule, ensuring their personal branding efforts align with a professional standard.',
];

const keyFeaturesContent = [
    'Effortlessly produce LinkedIn posts by submitting ideas or stories.',
    'Select the desired tone and style of the content to match your personal or professional brand.',
    'Manage, edit, and organize all generated content within the app for easy scheduling and posting.',
];

const techStackContent = [
    {
        label: 'Frontend',
        content: [
            'Electron Ensures the app runs seamlessly as a desktop application across platforms.',
        ],
    },
    {
        label: 'AI Integration',
        content: [
            'OpenAI SDK powers the app content generation capabilities, allowing for intelligent and context-aware post creation.',
        ],
    },
];

const targetUsersContent = [
    {
        avatar: '',
        type: 'Professionals',
        description: 'Professionals looking to enhance their personal branding on LinkedIn.',
        isValidImage: false,
    },
    {
        avatar: '',
        type: 'Individuals',
        description: 'Individuals seeking a time-saving tool for crafting professional-level LinkedIn posts.',
        isValidImage: false,
    },
];

const problemContent = {
    asIs: [
        'Creating LinkedIn content can be time-intensive, especially for busy professionals.',
    ],
    possible: [
        'LinkedIn Journal simplifies this process by turning ideas or raw material into polished, professional posts, ensuring personal branding remains impactful without consuming valuable time.',
    ],
};

const platforms = {
    desktop: {
        images: [
            new URL('../../assets/linkedin-journal/d1.png', import.meta.url).href,
            new URL('../../assets/linkedin-journal/d1.webp', import.meta.url).href,
            new URL('../../assets/linkedin-journal/d2.webp', import.meta.url).href,
            new URL('../../assets/linkedin-journal/d3.webp', import.meta.url).href,
            new URL('../../assets/linkedin-journal/d4.webp', import.meta.url).href,
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