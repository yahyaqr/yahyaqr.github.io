<template>
    <article
        class="bg-[#151515] border border-gray-600 rounded-2xl p-5 mb-5 text-gray-300 transition-colors duration-300 hover:border-[#ffdb70] group"
        title="Education">
        <h2 class="text-xl font-bold mb-4 text-white transition-colors duration-300 group-hover:text-[#ffdb70]">
            Education
        </h2>
        <ul class="list-none p-0 m-0">
            <li v-for="education in educationData" :key="education.title" class="mt-5 cursor-help">
                <h3 class="text-lg font-bold mb-2">{{ education.title }}</h3>
                <p class="italic text-gray-400 mb-2">
                    {{ education.institution }} | {{ education.date }}
                </p>
                <ul class="ml-5">
                    <li v-for="desc in education.description" :key="desc" class="mb-2 last:mb-0 leading-7">
                        {{ desc }}
                    </li>
                </ul>
            </li>
        </ul>
    </article>
</template>

<script setup>
import { ref } from "vue";

const educationData = ref([
    {
        title: "Information System and Technology",
        institution: "Institut Teknologi Bandung",
        date: "Aug 2019 - Oct 2024",
        description: [
            "Studied and implemented software engineering concepts (25 SCH): Programming Fundamentals, Algorithm and Data Structures, Object-Oriented Programming, Software Engineering, Mobile Platform Development, Human-Computer Interaction, Database Modeling, and Management.",
        ],
    },
]);
</script>
