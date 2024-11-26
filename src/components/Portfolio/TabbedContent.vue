<template>
    <div class="bg-[#151515] border border-gray-600 rounded-2xl p-5 text-gray-300">
        <!-- Tab Buttons -->
        <div class="flex border-b border-gray-700 mb-4">
            <button @click="activeTab = 'desktop'"
                :class="{ 'text-[#ffdb70] border-b-2 border-[#ffdb70]': activeTab === 'desktop' }"
                class="flex-1 py-2 focus:outline-none flex items-center justify-center gap-2">
                <MonitorIcon class="w-4 h-4 sm:w-5 sm:h-5" /> Desktop App
            </button>
            <button @click="activeTab = 'mobile'"
                :class="{ 'text-[#ffdb70] border-b-2 border-[#ffdb70]': activeTab === 'mobile' }"
                class="flex-1 py-2 focus:outline-none flex items-center justify-center gap-2">
                <SmartphoneIcon class="w-4 h-4 sm:w-5 sm:h-5" /> Mobile App
            </button>
        </div>

        <!-- Tab Content -->
        <div v-if="activeTab === 'desktop'">
            <h3 class="text-xl font-semibold mb-2">{{ desktopTitle }}</h3>
            <p class="text-gray-300 mb-4">{{ desktopDescription }}</p>
            <!-- Desktop Carousel -->
            <Carousel :images="desktopImages" />
            <button @click="onDownloadDesktop"
                class="w-full bg-[#ffdb70] hover:bg-[#ffcb2f] text-[#151515] font-bold py-4 px-4 rounded transition duration-300 flex items-center justify-center gap-2">
                <Download class="w-4 h-4 sm:w-5 sm:h-5" />
                Download for Desktop
            </button>
        </div>

        <div v-if="activeTab === 'mobile'">
            <h3 class="text-xl font-semibold mb-2">{{ mobileTitle }}</h3>
            <p class="text-gray-300 mb-4">{{ mobileDescription }}</p>
            <!-- Mobile Carousel -->
            <Carousel :images="mobileImages" />
            <button @click="onDownloadMobile"
                class="w-full bg-[#ffdb70] hover:bg-[#ffcb2f] text-[#151515] font-bold py-4 px-4 rounded transition duration-300 flex items-center justify-center gap-2">
                <Download class="w-4 h-4 sm:w-5 sm:h-5" />
                Download for Mobile
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { MonitorIcon, SmartphoneIcon, Download } from 'lucide-vue-next';
import Carousel from './Carousel.vue';

// Props
defineProps({
    desktopTitle: { type: String, required: true },
    desktopDescription: { type: String, required: true },
    mobileTitle: { type: String, required: true },
    mobileDescription: { type: String, required: true },
    desktopImages: { type: Array, required: true },
    mobileImages: { type: Array, required: true },
});

// Emits
defineEmits(['downloadDesktop', 'downloadMobile']);

// Reactive State
const activeTab = ref('desktop');

// Emit Handlers
const onDownloadDesktop = () => {
    emit('downloadDesktop');
};

const onDownloadMobile = () => {
    emit('downloadMobile');
};
</script>

<style scoped>
/* Add additional styles for indicators or animations if needed */
</style>
