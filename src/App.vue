<template>
  <div class="min-h-screen bg-[#111111] text-white">
    <TenantPage v-if="subdomain" />
    <template v-else>
      <Header v-if="!hideShell" />
      <router-view />
      <Footer v-if="!hideShell" />
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import TenantPage from './pages/TenantPage.vue';
import { detectSubdomain } from './lib/tenant';

const route = useRoute();
const subdomain = detectSubdomain();
const hideShell = computed(() => Boolean(route.meta.hideShell));
</script>
