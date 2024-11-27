<template>
    <div class="bg-[#151515] border border-gray-600 rounded-2xl p-5 text-gray-300 h-fit">
        <template v-if="platformEntries.length > 1">
            <!-- Tab Buttons -->
            <div class="flex border-b border-gray-700 mb-4">
                <button v-for="([key, platform]) in platformEntries" :key="key" @click="activeTab = key"
                    :class="{ 'text-[#ffdb70] border-b-2 border-[#ffdb70]': activeTab === key }"
                    class="flex-1 py-2 focus:outline-none flex items-center justify-center gap-2">
                    <component :is="platform.icon" class="w-4 h-4 sm:w-5 sm:h-5" />
                    {{ platform.label }}
                </button>
            </div>

            <!-- Tab Content -->
            <div v-if="currentPlatform">
                <Carousel v-if="currentPlatform.images && currentPlatform.images.length > 0"
                    :images="currentPlatform.images" />
                <button v-if="currentPlatform.downloadHandler" @click="currentPlatform.downloadHandler"
                    class="w-full bg-[#ffdb70] hover:bg-[#ffcb2f] text-[#151515] font-bold py-4 px-4 rounded transition duration-300 flex items-center justify-center gap-2">
                    <Download class="w-4 h-4 sm:w-5 sm:h-5" />
                    Download for {{ currentPlatform.label }}
                </button>
            </div>
        </template>

        <template v-else-if="platformEntries.length === 1">
            <!-- Single Platform Content -->
            <div v-for="([key, platform]) in platformEntries" :key="key">
                <Carousel v-if="platform.images && platform.images.length > 0" :images="platform.images" />
                <button v-if="platform.downloadHandler" @click="platform.downloadHandler"
                    class="w-full bg-[#ffdb70] hover:bg-[#ffcb2f] text-[#151515] font-bold py-4 px-4 rounded transition duration-300 flex items-center justify-center gap-2">
                    <Download class="w-4 h-4 sm:w-5 sm:h-5" />
                    Download for {{ platform.label }}
                </button>
            </div>
        </template>

        <template v-else>
            <p class="text-gray-400">No platform data available.</p>
        </template>
    </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue';
import { MonitorIcon, SmartphoneIcon, GlobeIcon, CloudIcon, Download } from 'lucide-vue-next';
import Carousel from './Carousel.vue';

const props = defineProps({
    platforms: {
        type: Object,
        default: () => ({}), // Allow external platforms data
    },
});

// Local Platform Metadata
const platformMeta = ref({
    desktop: {
        label: 'Desktop App',
        icon: MonitorIcon,
    },
    mobile: {
        label: 'Mobile App',
        icon: SmartphoneIcon,
    },
    web: {
        label: 'Web App',
        icon: GlobeIcon,
    },
    saas: {
        label: 'SaaS',
        icon: CloudIcon,
    },
});

// Default Platform Data
const platformData = ref({
    desktop: {
        images: [
            new URL('../../assets/1.jpg', import.meta.url).href,
            new URL('../../assets/2.jpg', import.meta.url).href,
            new URL('../../assets/3.jpg', import.meta.url).href,
        ],
        downloadHandler: () => console.log('Downloading Placeholder Desktop App'),
    },
    mobile: {
        images: [],
        downloadHandler: () => console.log('Downloading Placeholder Mobile App'),
    },
    web: {
        images: [],
        downloadHandler: () => console.log('Placeholder Web App not downloadable'),
    },
    saas: {
        images: [],
        downloadHandler: () => console.log('Placeholder SaaS Platform not downloadable'),
    },
});

// Update platformData dynamically based on props
watchEffect(() => {
    const updatedPlatformData = {};

    for (const [key, meta] of Object.entries(platformMeta.value)) {
        if (props.platforms[key]) {
            // If props contain the platform key, replace images and downloadHandler
            updatedPlatformData[key] = {
                ...meta,
                images: props.platforms[key].images || [],
                downloadHandler: props.platforms[key].downloadHandler || null,
            };
        } else {
            // If props don't contain the platform key, exclude it
            console.warn(`[PlatformTabs] Platform "${key}" is missing from props.platforms. It will be excluded.`);
        }
    }

    platformData.value = updatedPlatformData;
});

// Computed: Combine metadata and platform data into an iterable array
const platformEntries = computed(() => Object.entries(platformData.value));

// Reactive placeholders
const activeTab = ref('desktop');

const currentPlatform = computed(() => {
    const platformEntry = platformEntries.value.find(([key]) => key === activeTab.value);
    return platformEntry ? platformEntry[1] : null;
});
</script>

<style scoped>
button {
    transition: background-color 0.3s, color 0.3s;
}
</style>
