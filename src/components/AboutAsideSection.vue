<template>
    <aside id="aside" class="flex-1 lg:sticky top-5 max-h-fit overflow-x-none">
        <div class="card" name="identity">
            <!-- Identity Section -->
            <div
                :class="['flex flex-col justify-center items-center', { 'hidden': !identityVisible, 'flex animate-fade-in': identityVisible }]">
                <img :src="getImageUrl(content.profile.image)" alt="Identity Picture" class="rounded-full w-24" />
                <div class="text-center mt-5">
                    <h2 class="text-[#fafafa] mb-2 text-lg font-semibold">{{ content.profile.name }}</h2>
                    <p class="text-[#d6d6d6] text-sm">{{ content.profile.title }}</p>
                </div>
            </div>

            <!-- Contact List -->
            <ul class="list-none p-0 mt-6">
                <li v-for="(contact, index) in contactItems" :key="index" class="flex items-center my-4">
                    <div class="flex justify-center items-center p-3 border border-gray-500/50 rounded-full mr-3">
                        <img :src="getIconUrl(contact.icon)" :alt="contact.label" class="w-8 h-auto max-w-none" />
                    </div>
                    <div class="flex flex-col">
                        <p class="text-sm font-bold text-[#d6d6d6] m-0">{{ contact.label }}</p>
                        <a v-if="contact.isLink" :href="contact.url"
                            class="text-base font-bold text-[#fafafa] no-underline mt-1">
                            {{ contact.value }}
                        </a>
                        <address v-else class="text-base font-bold text-[#fafafa] not-italic mt-1">
                            {{ contact.value }}
                        </address>
                    </div>
                </li>
            </ul>

            <!-- Separator -->
            <div class="my-6 border-t border-gray-600"></div>

            <!-- Social Links -->
            <ul class="flex justify-center items-center list-none p-0">
                <li v-for="(social, index) in socialLinks" :key="index" class="mx-2">
                    <a :href="social.url"
                        class="flex justify-center items-center p-2 rounded-full hover:bg-[#ffdb70] transition-colors">
                        <img :src="getIconUrl(social.icon)" :alt="social.icon.replace('.svg', '')"
                            class="w-8 h-auto filter invert no-hover-invert" />
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const content = {
    profile: {
        name: "Yahya Aqrom",
        title: "Fullstack Engineer",
        description:
            "As a fullstack developer, I have gained proficiency in React, React Native, Bootstrap, Tailwind, and SASS. I also have hands-on experience with Git, Node.js, Hapi.js, Electron.js, Vue.js, CodeIgniter, and FastAPI.",
        image: "1.jpg",
    },
    contact: {
        email: "aqrom.yahya75@gmail.com",
        location: "Depok, Jawa Barat",
        social: {
            linkedin: "https://www.linkedin.com/in/yahya-aqrom/",
            github: "https://github.com/yahyaqr",
            twitter: "https://twitter.com/AqromYahya",
            instagram: "https://www.instagram.com/yahyaqr/",
        },
    },
};

const identityVisible = ref(false);

const contactItems = [
    {
        label: "Email",
        value: content.contact.email,
        url: `mailto:${content.contact.email}`,
        isLink: true,
        icon: "email.svg",
    },
    {
        label: "Location",
        value: content.contact.location,
        isLink: false,
        icon: "location.svg",
    },
];

const socialLinks = [
    { icon: "linkedin.svg", url: content.contact.social.linkedin },
    { icon: "github.svg", url: content.contact.social.github },
    { icon: "twitter.svg", url: content.contact.social.twitter },
    { icon: "instagram.svg", url: content.contact.social.instagram },
];

const handleScroll = () => {
    const asideElement = document.getElementById("aside");
    identityVisible.value = asideElement?.getBoundingClientRect().top <= 20;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});

const getIconUrl = (iconPath) => new URL(`../assets/${iconPath}`, import.meta.url).href;
const getImageUrl = (imgPath) => new URL(`../assets/${imgPath}`, import.meta.url).href;
</script>
