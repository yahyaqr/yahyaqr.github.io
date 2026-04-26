<template>
  <main class="min-h-screen bg-[#111111] px-6 py-12 text-white">
    <section class="mx-auto flex min-h-[70vh] w-full max-w-md flex-col justify-center">
      <p class="text-sm uppercase tracking-[0.25em] text-[#ffdb70]">Admin</p>
      <h1 class="mt-4 text-4xl font-bold">Dashboard login</h1>
      <p class="mt-3 text-[#d6d6d6]">Use the password stored in your Vercel environment.</p>

      <form class="mt-8 space-y-4" @submit.prevent="login">
        <label class="block">
          <span class="text-sm font-medium text-[#d6d6d6]">Password</span>
          <input
            v-model="password"
            type="password"
            autocomplete="current-password"
            class="mt-2 w-full border border-[#555] bg-[#151515] px-4 py-3 text-white outline-none focus:border-[#ffdb70]"
            required
          />
        </label>

        <p v-if="error" class="text-sm text-red-300">{{ error }}</p>

        <button
          type="submit"
          class="w-full bg-[#ffdb70] px-5 py-3 font-semibold text-[#111111] disabled:cursor-not-allowed disabled:opacity-60"
          :disabled="submitting"
        >
          {{ submitting ? 'Signing in...' : 'Sign in' }}
        </button>
      </form>
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const password = ref('');
const error = ref('');
const submitting = ref(false);

async function checkSession() {
  const response = await fetch('/api/auth/me');

  if (response.ok) {
    router.replace('/dashboard');
  }
}

async function login() {
  error.value = '';
  submitting.value = true;

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: password.value }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.error || 'Unable to sign in.');
    }

    router.replace('/dashboard');
  } catch (err) {
    error.value = err.message;
  } finally {
    submitting.value = false;
  }
}

onMounted(checkSession);
</script>
