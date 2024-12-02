<template>
    <article
        class="bg-[#151515] border border-gray-600 rounded-2xl p-5 text-gray-300 transition-colors duration-300 hover:border-[#ffdb70] group"
        title="Teaching Experience">
        <h2 class="text-xl font-bold mb-4 text-white transition-colors duration-300 group-hover:text-[#ffdb70]">
            Teaching Experience
        </h2>
        <ul class="list-none p-0 m-0">
            <li v-for="teach in teachingExperiences" :key="teach.title" class="mt-5 cursor-help">
                <h3 class="text-lg font-bold mb-2">{{ teach.title }}</h3>
                <p class="italic text-gray-400 mb-2">
                    {{ teach.institution }} | {{ teach.date }}
                </p>
                <ul class="ml-5">
                    <li v-for="desc in teach.description" :key="desc" class="mb-2 last:mb-0 leading-7">
                        {{ desc }}
                    </li>
                </ul>
            </li>
        </ul>
    </article>
</template>


<script setup>
import { ref } from "vue";

const teachingExperiences = ref([
    {
        title: "Mentor of Innovation and Entrepreneurship Class 2024",
        institution: "Program Studi Teknik Elektro ITB",
        date: "Feb 2024 - July 2024 (Expected)",
        description: [
            "Selected as a Mentor to teach 24-Step Discipline Entrepreneurship by MIT Sloan School of Management.",
            "Conducted weekly mentoring sessions for a team of three on a Computer Vision-based business.",
        ],
    },
    {
        title: "Training Facilitator of Initiator Class Vol 1 & 2",
        institution: "Kabinet KM ITB",
        date: "Aug 2020 - Sep 2020",
        description: [
            "Volunteered twice as a Training Facilitator, teaching design thinking principles in Initiator Class Vol 1.",
            "Taught initiating social movement skills in Initiator Class Vol 2.",
            "My mentee group achieved best team awards in both Vol 1 and Vol 2.",
        ],
    },
    {
        title: "Training Facilitator of Kawah Kepemimpinan Pelajar Jawa Barat",
        institution: "Dinas Pendidikan Provinsi Jawa Barat",
        date: "Jun 2017 - Jul 2019",
        description: [
            "Volunteered three times as a training facilitator (annually: 2017, 2018, 2019).",
            "Taught leadership skills and principles to over 300 Student Organization leaders across West Java.",
            "Earned this opportunity from my achievement as a West Java representative at KKP Nasional 2017.",
        ],
    },
]);
</script>
