<template>
    <section id="skills" class="bg-[#151515]">
        <div
            class="border-t border-b border-gray-700 flex flex-wrap justify-center items-center py-12 text-gray-200 gap-5">
            <div v-for="skill in content.skills" :key="skill.title"
                class="flex flex-col items-center text-center mx-5 max-w-xs">
                <img :src="getIconUrl(skill.icon)" alt="Skill icon" class="w-12 h-auto mb-2 md:mb-0" />
                <div>
                    <h3 class="text-xl mb-2">{{ skill.title }}</h3>
                    <!-- Hidden description on mobile -->
                    <p class="hidden md:block text-base text-gray-400">{{ skill.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const content = {
    skills: [
        {
            title: "Optimized",
            description: "Writing user-friendly interfaces that delight.",
            icon: "fire.svg",
        },
        {
            title: "Interactive",
            description: "Crafting interactive experiences that engage.",
            icon: "toggle.svg",
        },
        {
            title: "Responsive",
            description: "Designing captivating screens that adapt.",
            icon: "frame.svg",
        },
    ],
};

const getIconUrl = (iconPath) => {
    return new URL(`../../assets/${iconPath}`, import.meta.url).href;
};
</script>

<style scoped>
/* No custom CSS needed, handled entirely with Tailwind */
</style>
