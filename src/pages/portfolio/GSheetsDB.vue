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

        <header class="mb-8">
            <div class="flex items-center gap-2">
                <h1 class="text-3xl font-bold">{{ headings.title }}</h1>
                <button @click="openModal" class="text-gray-400 hover:text-white focus:outline-none mt-1"
                    aria-label="More information">
                    <InfoIcon class="w-6 h-6" />
                </button>
            </div>
            <p class="text-xl text-gray-400 mt-2">{{ headings.subtitle }}</p>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- About Section -->
            <Content :aboutTitle="headings.aboutTitle" :aboutContent="content.about" />

            <!-- Tabbed Content -->
            <TabbedContent :desktopTitle="content.desktopTitle" :desktopDescription="content.desktopDescription"
                :mobileTitle="content.mobileTitle" :mobileDescription="content.mobileDescription"
                :desktopImages="desktopImages" :mobileImages="mobileImages" @downloadDesktop="downloadDesktop"
                @downloadMobile="downloadMobile" />
        </div>

        <!-- Modal -->
        <transition name="modal">
            <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                @click.self="closeModal">
                <div class="bg-[#111111] border border-gray-600 rounded-2xl p-4 sm:p-6 max-w-md w-full">
                    <h2 class="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                        {{ modal.title }}
                    </h2>
                    <p class="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                        {{ modal.content }}
                    </p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import Content from '../../components/Portfolio/Content.vue';
import TabbedContent from '../../components/Portfolio/TabbedContent.vue';
import { ref } from 'vue';
import { InfoIcon } from 'lucide-vue-next';

// Reactive state for modal visibility
const showModal = ref(false);

// Modal data
const modal = ref({
    title: '',
    content: '',
});

// Headings and content for the page
const headings = {
    title: 'Sleep Research Tool',
    subtitle: 'Advanced sleep analysis for researchers and professionals',
    aboutTitle: 'About the Tool',
};

const content = {
    about: [
        'The Sleep Research Tool is a comprehensive platform designed for sleep scientists, researchers, and healthcare professionals.',
        'It provides advanced analytics, data collection, and visualization capabilities to support sleep studies and improve our understanding of sleep patterns and disorders.',
        'With features like real-time monitoring, customizable dashboards, and collaborative tools, the Sleep Research Tool empowers you to uncover new insights and advance the field of sleep science.',
    ],
    desktopTitle: 'Desktop Application',
    desktopDescription:
        'Our powerful desktop application provides comprehensive analysis tools and visualization capabilities for in-depth sleep research.',
    mobileTitle: 'Mobile Application',
    mobileDescription:
        'Our mobile app allows for on-the-go data collection and real-time monitoring of sleep patterns.',
};

// Image data
const desktopImages = [
    new URL('../../assets/1.jpg', import.meta.url).href,
    new URL('../../assets/2.jpg', import.meta.url).href,
    new URL('../../assets/3.jpg', import.meta.url).href,
];
const mobileImages = [
    new URL('../../assets/1.jpg', import.meta.url).href,
    new URL('../../assets/2.jpg', import.meta.url).href,
    new URL('../../assets/3.jpg', import.meta.url).href,
];

// Methods to handle modal
const openModal = () => {
    modal.value.title = 'About Sleep Research Tool';
    modal.value.content =
        'The Sleep Research Tool is a state-of-the-art platform designed to revolutionize sleep studies.';
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};

// Methods for downloading
const downloadDesktop = () => {
    console.log('Downloading Desktop App');
};

const downloadMobile = () => {
    console.log('Downloading Mobile App');
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
