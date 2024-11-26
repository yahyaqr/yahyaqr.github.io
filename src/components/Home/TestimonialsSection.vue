<template>
    <section id="testimonials" class="bg-[#151515]">
        <div class="container mx-auto px-6 py-16">
            <h2 class="text-3xl font-bold text-center mb-4">Some Generous Words</h2>
            <p class="text-center text-gray-400 mb-12">
                Some of my favorite testimonials from my clients
            </p>
            <div class="relative text-center" :class="{ 'cursor-grabbing': isDragging, 'cursor-grab': !isDragging }"
                @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp"
                @mouseleave="handleMouseUp" @touchstart="handleTouchStart" @touchmove="handleTouchMove"
                @touchend="handleTouchEnd">
                <!-- Previous Button (hidden on mobile) -->
                <button @click="prevTestimonial"
                    class="absolute left-0 top-1/2 -translate-y-1/2 rounded hover:bg-white/5 p-2 hidden sm:block">
                    <ChevronLeftIcon class="h-6 w-6" />
                </button>

                <!-- Testimonial Content -->
                <div class="sm:mx-12 bg-white/5 rounded-2xl p-8 border border-[#555] select-none transition-transform duration-300"
                    :style="{ transform: `translateX(${swipeOffset}px)` }">
                    <img loading="lazy" :src="currentTestimonial.image" alt="Client logo"
                        class="mb-6 mx-auto unselectable" />
                    <p class="text-gray-400 mb-4">"{{ currentTestimonial.text }}"</p>
                    <p class="font-medium">— {{ currentTestimonial.author }}</p>
                </div>

                <!-- Next Button (hidden on mobile) -->
                <button @click="nextTestimonial"
                    class="absolute right-0 top-1/2 -translate-y-1/2 rounded hover:bg-white/5 p-2 hidden sm:block">
                    <ChevronRightIcon class="h-6 w-6" />
                </button>
            </div>

            <!-- Dots Indicator -->
            <div class="flex justify-center mt-6 space-x-2">
                <button v-for="(testimonial, index) in testimonials" :key="index" @click="goToTestimonial(index)"
                    class="w-3 h-3 rounded-full" :class="{
                'bg-[#ffdb70]': currentTestimonialIndex === index,
                'bg-white/10': currentTestimonialIndex !== index,
            }"></button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-vue-next";
import { ref, computed } from "vue";

// Testimonials data
const testimonials = ref([
    {
        text: "Slack grows rapidly, using Stripe helps them scale payments early — supporting everything from getting paid by users around the world.",
        author: "MD Sulaiman Hassan",
        image: "https://placeholder.pics/svg/150x150",
    },
    {
        text: "The team was fantastic, and the design exceeded my expectations. Their process is seamless and professional.",
        author: "Jane Doe",
        image: "https://placeholder.pics/svg/150x150",
    },
    {
        text: "The work was outstanding, delivered on time, and provided exceptional value. Highly recommended.",
        author: "John Smith",
        image: "https://placeholder.pics/svg/150x150",
    },
]);

// State for the current testimonial
const currentTestimonialIndex = ref(0);

const currentTestimonial = computed(() => {
    return testimonials.value[currentTestimonialIndex.value];
});

// Handlers for navigating between testimonials
const prevTestimonial = () => {
    currentTestimonialIndex.value =
        (currentTestimonialIndex.value - 1 + testimonials.value.length) %
        testimonials.value.length;
};

const nextTestimonial = () => {
    currentTestimonialIndex.value =
        (currentTestimonialIndex.value + 1) % testimonials.value.length;
};

// Go to a specific testimonial
const goToTestimonial = (index) => {
    currentTestimonialIndex.value = index;
};

// Swipe functionality
const swipeStart = ref(0);
const swipeOffset = ref(0);
const isDragging = ref(false);

const handleMouseDown = (event) => {
    isDragging.value = true;
    swipeStart.value = event.clientX;
    swipeOffset.value = 0;
};

const handleMouseMove = (event) => {
    if (!isDragging.value) return;
    swipeOffset.value = event.clientX - swipeStart.value;
};

const handleMouseUp = () => {
    if (!isDragging.value) return;
    if (swipeOffset.value > 50) {
        prevTestimonial();
    } else if (swipeOffset.value < -50) {
        nextTestimonial();
    }
    swipeOffset.value = 0;
    isDragging.value = false;
};

const handleTouchStart = (event) => {
    isDragging.value = true;
    swipeStart.value = event.touches[0].clientX;
    swipeOffset.value = 0;
};

const handleTouchMove = (event) => {
    if (!isDragging.value) return;
    swipeOffset.value = event.touches[0].clientX - swipeStart.value;
};

const handleTouchEnd = () => {
    if (!isDragging.value) return;
    if (swipeOffset.value > 50) {
        prevTestimonial();
    } else if (swipeOffset.value < -50) {
        nextTestimonial();
    }
    swipeOffset.value = 0;
    isDragging.value = false;
};
</script>

<style scoped>
.cursor-grab {
    cursor: grab;
}

.cursor-grabbing {
    cursor: grabbing;
}

.transition-transform {
    transition: transform 0.3s ease-in-out;
}

.unselectable {
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
</style>
