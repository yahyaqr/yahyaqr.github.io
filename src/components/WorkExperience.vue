<template>
    <article
        class="bg-[#151515] border border-gray-600 rounded-2xl p-5 mb-5 text-gray-300 transition-colors duration-300 hover:border-[#ffdb70] group"
        title="Work Experiences">
        <h2 class="text-xl font-bold mb-4 text-white transition-colors duration-300 group-hover:text-[#ffdb70]">
            Work Experiences
        </h2>
        <ul class="list-none p-0 m-0">
            <li v-for="experience in workExperiences" :key="experience.title" class="mt-5 cursor-help">
                <h3 class="text-lg font-bold mb-2">{{ experience.title }}</h3>
                <p class="italic text-gray-400 mb-2">
                    {{ experience.company }} | {{ experience.date }}
                </p>
                <ul class="ml-5">
                    <li v-for="desc in experience.description" :key="desc" class="mb-2 last:mb-0 leading-7">
                        {{ desc }}
                    </li>
                </ul>
            </li>
        </ul>
    </article>
</template>

<script setup>
import { ref } from "vue";

const workExperiences = ref([
    {
        title: "Full Stack Engineer",
        company: "GetSensync.com",
        date: "Aug 2023 - Mar 2024",
        description: [
            "Led a team of two engineers in IoT and Mobile App development, ensuring a reliable Minimum Viable Product (MVP).",
            "Built a comprehensive IoT system collecting fish production data, efficient order management, and an intelligent fish cultivation chatbot.",
        ],
    },
    {
        title: "Full Stack Engineer Intern",
        company: "GetSensync.com",
        date: "Jun - Aug 2023",
        description: [
            "Contributed to the early development stage of Sensync's aquaculture diversification program startup as a full-stack engineer.",
            "Handled requirement elicitation, UX research, competitive analysis, user interface design, and backend development.",
        ],
    },
    {
        title: "Co-Founder",
        company: "Jentera",
        date: "Jan - Jun 2023",
        description: [
            "Conducted primary market research in Desa Jatimalang, Jawa Tengah, involving data collection from 15 shrimp farmers.",
            "Developed a product from scratch using the 23-step Discipline Entrepreneurship framework.",
        ],
    },
    {
        title: "Self-employed Web Developer",
        company: "Vismaya.id",
        date: "Jan 2021 - Dec 2023",
        description: [
            "Established and operated business systems for 10+ design and web development projects.",
            "Managed payroll, marketing, project planning, and coordinated project development as part of a three-member team.",
        ],
    },
    {
        title: "Frontend Web Developer Intern",
        company: "Pexpress.id",
        date: "Jun - Aug 2019",
        description: [
            "Developed desktop and mobile user interfaces using Bootstrap and CodeIgniter under the supervision of a senior developer.",
            "Contributed to UI development for a logistics startup during a three-month internship program.",
        ],
    },
    {
        title: "Freelance Web Developer",
        company: "AAT Connect",
        date: "Jun 2022 - Jul 2022",
        description: [
            "Developed a simple web app for an automotive dealer company using Bootstrap and CodeIgniter within a tight five-week deadline.",
        ],
    },
    {
        title: "Freelance Web Developer",
        company: "Connecting Generations",
        date: "Jul 2021",
        description: [
            "Created a campaign microsite for an FTUI alumni association election candidate using Figma and Bootstrap within a two-week deadline.",
        ],
    },
]);
</script>
