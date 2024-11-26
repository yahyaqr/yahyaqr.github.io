<template>
    <AboutHeroComponent />
    <main id="main" class="flex flex-col lg:flex-row lg:gap-5 p-5">
        <!-- Main Content -->
        <AboutContentComponent class="flex-grow lg:w-[70%] w-full" />

        <!-- Floating Sidebar -->
        <AboutAsideComponent
            class="sticky top-5 flex-shrink-0 lg:w-[30%] w-full h-auto bg-[#151515] border border-[#555] rounded-2xl p-5 text-[#d6d6d6]" />
    </main>
</template>

<script setup>
import AboutHeroComponent from '../components/About/HeroSection.vue';
import AboutContentComponent from '../components/About/ContentSection.vue';
import AboutAsideComponent from '../components/About/AsideSection.vue';
</script>

<style scoped>
/* No additional styles are required as TailwindCSS handles the layout */
</style>
