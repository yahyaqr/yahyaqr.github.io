<template>
    <div class="relative h-64 overflow-hidden mb-4">
        <!-- Swiper Carousel -->
        <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{ clickable: true, }" :navigation="true"
            :modules="modules" class="mySwiper">
            <swiper-slide v-for="(image, index) in images" :key="index">
                <img loading="lazy" :src="image" :alt="'Carousel Image ' + (index + 1)"
                    class="w-full h-full object-cover rounded cursor-pointer" @click="openImageModal(image)" />
            </swiper-slide>
        </swiper>

        <!-- Modal for Enlarged Image -->
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            @click.self="closeModal">
            <div class="relative">
                <img :src="currentImage" alt="Enlarged"
                    class="max-w-[calc(100vw-4rem)] max-h-[calc(100vh-4rem)] rounded cursor-pointer"
                    title="Double-click to close" @dblclick="closeModal" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Props
defineProps({
    images: {
        type: Array,
        required: true,
        default: () => [], // Ensures images is always at least an empty array
    },
});

// Modal state
const showModal = ref(false);
const currentImage = ref(null);

// Swiper modules
const modules = [Navigation];

// Handlers
const openImageModal = (image) => {
    currentImage.value = image;
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    currentImage.value = null;
};
</script>

<style scoped>
/* Styles for the Swiper carousel */
.mySwiper {
    width: 100%;
    height: 100%;
}

/* Modal fade-in animation */
.fixed {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
