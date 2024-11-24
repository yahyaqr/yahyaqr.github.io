<template>
    <section id="works" class="bg-alternate">
        <div class="container mx-auto px-6 py-16">
            <div class="flex justify-between items-center mb-12">
                <h2 class="text-3xl font-bold">My Recent Work</h2>
                <router-link to="/portfolio" class="text-[#ffdb70] hover:underline font-medium">
                    View All
                </router-link>
            </div>
            <div class="space-y-8">
                <div v-for="i in 3" :key="i"
                    class="bg-white/5 rounded-2xl p-8 border border-[#555] hover:border-[#ffdb70] transition-colors">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-2xl font-bold mb-4">Sheepify States</h3>
                            <p class="text-gray-400 mb-6">
                                Designed some empty state screens in kawaii style for the popular sheepify app. Tailored
                                the app
                                aesthetically, applying utility classes to different states using sprint modifiers.
                            </p>
                            <a href="#" class="text-[#ffdb70] hover:underline">View Case Study</a>
                        </div>
                        <div class="flex justify-center">
                            <img src="https://placeholder.pics/svg/500x250" alt="Project screenshot"
                                class="rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
