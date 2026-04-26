<template>
  <main
    class="min-h-screen flex items-center justify-center px-6 py-12"
    :style="{ backgroundColor: pageTheme.background, color: '#ffffff' }"
  >
    <section v-if="loading" class="text-center">
      <p class="text-sm uppercase tracking-[0.25em] text-white/50">Loading</p>
      <h1 class="mt-4 text-3xl font-semibold">Resolving subdomain</h1>
    </section>

    <section v-else-if="error" class="w-full max-w-xl text-center">
      <p class="text-sm uppercase tracking-[0.25em]" :style="{ color: pageTheme.accent }">404</p>
      <h1 class="mt-4 text-4xl font-bold">This subdomain is not available.</h1>
      <p class="mt-4 text-white/70">{{ error }}</p>
      <a
        :href="rootUrl"
        class="mt-8 inline-flex items-center justify-center border border-white/20 px-5 py-3 text-sm font-medium hover:bg-white/10"
      >
        Back to yahyaqr.xyz
      </a>
    </section>

    <section v-else-if="externalTenant" class="w-full max-w-xl text-center">
      <p class="text-sm uppercase tracking-[0.25em]" :style="{ color: pageTheme.accent }">External</p>
      <h1 class="mt-4 text-4xl font-bold">{{ externalTenant.title }}</h1>
      <p class="mt-4 text-white/70">
        This subdomain is reserved for another Vercel project. Add this exact domain to that project so it handles traffic before the wildcard app.
      </p>
      <a
        v-if="externalTenant.targetUrl"
        :href="externalTenant.targetUrl"
        target="_blank"
        rel="noreferrer"
        class="mt-8 inline-flex items-center justify-center border px-5 py-3 text-sm font-medium hover:bg-white/10"
        :style="{ borderColor: pageTheme.accent, color: pageTheme.accent }"
      >
        Open reference project
      </a>
    </section>

    <section v-else class="w-full max-w-2xl">
      <p class="text-sm uppercase tracking-[0.25em]" :style="{ color: pageTheme.accent }">
        {{ tenant.subdomain }}.{{ rootDomain }}
      </p>
      <h1 class="mt-5 text-4xl font-bold md:text-6xl">
        {{ content.headline || tenant.title }}
      </h1>
      <p v-if="content.description" class="mt-6 text-lg leading-8 text-white/75">
        {{ content.description }}
      </p>

      <div v-if="links.length" class="mt-10 flex flex-wrap gap-3">
        <a
          v-for="link in links"
          :key="`${link.label}-${link.url}`"
          :href="link.url"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center justify-center border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
          :style="{ borderColor: pageTheme.accent, color: pageTheme.accent }"
        >
          {{ link.label }}
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { detectSubdomain, fetchSubdomainConfig, findActiveTenant, ROOT_DOMAIN } from '../lib/tenant';
import { isValidHttpUrl } from '../../lib/subdomainValidation';

const loading = ref(true);
const error = ref('');
const tenant = ref(null);
const externalTenant = ref(null);
const rootDomain = ROOT_DOMAIN;
const rootUrl = `https://${ROOT_DOMAIN}`;
const fallbackTheme = {
  background: '#111111',
  accent: '#ffdb70',
};

const pageTheme = computed(() => tenant.value?.theme || fallbackTheme);
const content = computed(() => tenant.value?.content || {});
const links = computed(() => {
  if (!Array.isArray(content.value.links)) {
    return [];
  }

  return content.value.links.filter((link) => link?.label && isValidHttpUrl(link?.url));
});

onMounted(async () => {
  try {
    const subdomain = detectSubdomain();

    if (!subdomain) {
      error.value = 'No wildcard subdomain was detected for this request.';
      return;
    }

    const records = await fetchSubdomainConfig();
    const record = findActiveTenant(records, subdomain);

    if (!record) {
      error.value = `${subdomain}.${ROOT_DOMAIN} does not have an active page.`;
      return;
    }

    if (record.type === 'redirect') {
      window.location.replace(record.targetUrl);
      return;
    }

    if (record.type === 'external') {
      externalTenant.value = record;
      document.title = record.title;
      return;
    }

    tenant.value = record;
    document.title = record.title;
  } catch (err) {
    error.value = err.message || 'Unable to resolve this subdomain.';
  } finally {
    loading.value = false;
  }
});
</script>
