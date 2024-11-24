<!-- SkillsComponent.vue -->
<template>
    <section id="skills" class="bg-[#151515]">
        <div class=" border-t border-b border-gray-700 flex flex-wrap justify-center items-center py-12 text-gray-200">
            <div v-for="skill in content.skills" :key="skill.title"
                class="flex flex-col justify-center items-center text-center mx-5 max-w-xs">
                <img :src="getIconUrl(skill.icon)" alt="Skill icon" class="w-12 h-auto mb-1" />
                <h3 class="text-xl mb-2">{{ skill.title }}</h3>
                <p class="text-base mb-5 text-gray-400">{{ skill.description }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
const content = {
    skills: [
        {
            title: "Tiny & Fast",
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
    return new URL(`../assets/${iconPath}`, import.meta.url).href;
};
</script>