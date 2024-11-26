<template>
    <header id="home" class="bg-[#151515]">
        <div class="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
                <div class="inline-block bg-[#ffdb70]/10 px-4 py-2 rounded-full mb-4">
                    👋 Hola,
                </div>
                <h1 class="text-4xl md:text-5xl font-bold mb-4">
                    It's
                    <a href="#about" class="hover:text-[#ffdb70] transition-colors cursor-pointer">Yahya Aqrom</a>,
                    a Developer that owns a
                    <a href="https://www.vismayastudio.id" target="_blank"
                        class="hover:text-[#ffdb70] transition-colors cursor-pointer">Digital Agency</a>.
                </h1>
                <div class="flex gap-4 mt-8">
                    <!-- View My Work Button using Vue Router -->
                    <router-link to="/portfolio"
                        class="bg-[#ffdb70] text-[#151515] px-6 py-2 rounded-full font-medium hover:bg-[#ffdb70]/90">
                        View My Work
                    </router-link>
                    <!-- Contact Me Button with LinkedIn -->
                    <a href="https://www.linkedin.com/in/yahya-aqrom/" target="_blank"
                        class="flex justify-center items-center gap-1 border border-[#555] px-6 py-2 rounded-full font-medium hover:bg-white/5">
                        <img src="../../assets/linkedin.svg" alt="Skill icon"
                            class="w-6 h-auto filter invert brightness-0" />
                        Hire Me
                    </a>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <img src="https://media.giphy.com/media/QNFhOolVeCzPQ2Mx85/giphy.gif" alt="GIF" class="w-[650px]">
            </div>
        </div>
    </header>
</template>

<script setup>
import { Linkedin } from 'lucide-vue-next';
</script>
