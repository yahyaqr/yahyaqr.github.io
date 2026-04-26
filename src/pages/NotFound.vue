<template>
  <main class="container mx-auto px-6 py-24 text-center">
    <p class="text-sm uppercase tracking-[0.25em] text-[#ffdb70]">404</p>
    <h1 class="mt-4 text-4xl font-bold">Page not found</h1>
    <p class="mx-auto mt-4 max-w-xl text-[#d6d6d6]">
      The page you are looking for does not exist, or it may have moved.
    </p>
    <router-link
      to="/"
      class="mt-8 inline-flex border border-[#555] px-5 py-3 text-sm font-medium text-[#ffdb70] hover:bg-white/5"
    >
      Back home
    </router-link>
  </main>
</template>
