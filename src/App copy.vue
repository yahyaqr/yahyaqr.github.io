<template>
  <div class="min-h-screen bg-[#151515] text-white">
    <!-- Navigation -->
    <nav class="bg-[#151515]">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div>
            <a href="#" class="text-2xl font-bold hover:text-[#ffdb70] transition-colors">yahyaqr.github.io</a>
          </div>
          <div class="flex gap-8">
            <a v-for="link in [
              { name: 'Home', href: '#home' },
              { name: 'Works', href: '#works' },
              { name: 'Testimonials', href: '#testimonials' },
              { name: 'About', href: '#about' }
            ]" :key="link.name" :href="link.href" class="hover:text-[#ffdb70] transition-colors">
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header id="home" class="bg-[#151515]">
      <div class="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div class="inline-block bg-[#ffdb70]/10 px-4 py-2 rounded-full mb-4">
            👋 Hola,
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            It's <span class="hover:text-[#ffdb70] transition-colors cursor-pointer">Yahya Aqrom</span> Creative
            Designer and
            Storyteller
          </h1>
          <div class="flex gap-4 mt-8">
            <button class="bg-[#ffdb70] text-[#151515] px-6 py-2 rounded-full font-medium hover:bg-[#ffdb70]/90">
              View My Work
            </button>
            <button class="border border-[#555] px-6 py-2 rounded-full font-medium hover:bg-white/5">
              Contact Me
            </button>
          </div>
        </div>
        <div class="flex justify-center">
          <img src="https://placeholder.pics/svg/400" alt="Hero illustration" class="max-w-sm" />
        </div>
      </div>
    </header>

    <!-- Recent Work Section -->
    <section id="works" class="bg-alternate">
      <div class="container mx-auto px-6 py-16">
        <h2 class="text-3xl font-bold mb-12">My Recent Work</h2>
        <div class="space-y-8">
          <div v-for="i in 3" :key="i"
            class="bg-white/5 rounded-2xl p-8 border border-[#555] hover:border-[#ffdb70] transition-colors">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-2xl font-bold mb-4">Sheepify States</h3>
                <p class="text-gray-400 mb-6">
                  Designed some empty state screens in kawaii style for the popular sheepify app.Tailored
                  the app aesthetically apply utility classes to different states using sprint modifiers.
                </p>
                <a href="#" class="text-[#ffdb70] hover:underline">View Case Study</a>
              </div>
              <div class="flex justify-center">
                <img src="https://placeholder.pics/svg/500x300" alt="Project screenshot" class="rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="bg-[#151515]">
      <div class="container mx-auto px-6 py-16">
        <h2 class="text-3xl font-bold text-center mb-4">Some Generous Words</h2>
        <p class="text-center text-gray-400 mb-12">Some of my favorite testimonials from my clients</p>

        <div class="relative">
          <button class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/5 p-2 rounded-full border border-[#555]">
            <ChevronLeftIcon class="h-6 w-6" />
          </button>
          <div class="mx-12 bg-white/5 rounded-2xl p-8 border border-[#555]">
            <img src="https://placeholder.pics/svg/150x150" alt="Company logo" class="mb-6" />
            <p class="text-gray-400 mb-4">
              "Slack grows rapidly, using Stripe helps them scale payments early — supporting everything from
              getting paid by users around the world"
            </p>
            <p class="font-medium">— MD Sulaiman Hassan</p>
          </div>
          <button class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/5 p-2 rounded-full border border-[#555]">
            <ChevronRightIcon class="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="bg-alternate">
      <div class="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="flex justify-center">
          <img src="https://placeholder.pics/svg/400" alt="About illustration" class="max-w-sm" />
        </div>
        <div>
          <h2 class="text-3xl font-bold mb-6">Sheepify States</h2>
          <p class="text-gray-400">
            I am working in an Indian Startup as a User Experience Designer. In my short time as a designer,
            I've had featured various times on many big and small marketplaces, portfolio websites and blogs. I
            also received some awards and recognitions from some of the big and small award companies. Besides
            designing, I love to play video games and solve sudoku.
          </p>
          <a href="#" class="text-[#ffdb70] hover:underline mt-6 inline-block">View Case Study</a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#151515]">
      <div class="container mx-auto px-6 py-16">
        <div class="text-center max-w-2xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-12">
            Let's work together and make everything super cute and super useful.
          </h2>
          <div class="flex justify-center gap-6 mb-8">
            <a href="#" class="hover:text-[#ffdb70] transition-colors">
              <Facebook class="h-6 w-6" />
            </a>
            <a href="#" class="hover:text-[#ffdb70] transition-colors">
              <Twitter class="h-6 w-6" />
            </a>
            <a href="#" class="hover:text-[#ffdb70] transition-colors">
              <Instagram class="h-6 w-6" />
            </a>
            <a href="#" class="hover:text-[#ffdb70] transition-colors">
              <Linkedin class="h-6 w-6" />
            </a>
          </div>
          <a href="mailto:hire@author.com" class="text-gray-400 hover:text-[#ffdb70]">
            hire@author.com
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-vue-next'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

.bg-alternate {
  background-color: #1a1a1a;
}
</style>
