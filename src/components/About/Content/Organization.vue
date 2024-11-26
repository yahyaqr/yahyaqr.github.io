<template>
    <article
        class="bg-[#151515] border border-gray-600 rounded-2xl p-5 mb-5 text-gray-300 transition-colors duration-300 hover:border-[#ffdb70] group"
        title="Organizational Experience">
        <h2 class="text-xl font-bold mb-4 text-white transition-colors duration-300 group-hover:text-[#ffdb70]">
            Organizational Experience
        </h2>
        <ul class="list-none p-0 m-0">
            <li v-for="org in organizationalExperiences" :key="org.title" class="mt-5 cursor-help">
                <h3 class="text-lg font-bold mb-2">{{ org.title }}</h3>
                <p class="italic text-gray-400 mb-2">
                    {{ org.organization }} | {{ org.date }}
                </p>
                <ul class="ml-5">
                    <li v-for="desc in org.description" :key="desc" class="mb-2 last:mb-0 leading-7">
                        {{ desc }}
                    </li>
                </ul>
            </li>
        </ul>
    </article>
</template>

<script setup>
import { ref } from "vue";

const organizationalExperiences = ref([
    {
        title: "Secretary General",
        organization: "Himpunan Mahasiswa Informatika ITB",
        date: "Mar 2022 - Apr 2023",
        description: [
            "Assisted the chairman in coordinating 22 work divisions within a team of 60+ members.",
            "Developed an integrated student needs service center and a sustainable knowledge management system, benefiting over 1,000 HMIF ITB students.",
        ],
    },
    {
        title: "Secretary General",
        organization: "SPARTA (HMIF ITB Student Orientation)",
        date: "Jun - Sep 2021",
        description: [
            "Assisted the project officer in tightly coordinating 12 work divisions within a team of 120+ members.",
            "Built a robust and sustainable Discord-based project framework, impacting over 400 sophomore ITB students.",
        ],
    },
    {
        title: "Secretary General",
        organization: "Ganesha Academy Pioneer (ITB Freshman Training)",
        date: "Jul 2020 - Jan 2021",
        description: [
            "Assisted the project officer in coordinating 3 work divisions within a team of 15 members.",
            "Collaborated with the KM ITB Freshman Ministry to curate local and national leaders as speakers, impacting over 100 freshman ITB students.",
        ],
    },
]);
</script>
