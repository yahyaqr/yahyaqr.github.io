<template>
  <main class="min-h-screen bg-[#111111] px-4 py-8 text-white sm:px-6">
    <section class="mx-auto max-w-6xl">
      <div class="flex flex-col gap-4 border-b border-[#333] pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="text-sm uppercase tracking-[0.25em] text-[#ffdb70]">Static CRUD</p>
          <h1 class="mt-3 text-4xl font-bold">Subdomain dashboard</h1>
          <p class="mt-2 max-w-2xl text-[#d6d6d6]">
            Edit the static tenant config, then commit it to GitHub and let Vercel redeploy.
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <button class="border border-[#555] px-4 py-2 text-sm hover:bg-white/5" type="button" @click="loadRecords">
            Reload
          </button>
          <button class="border border-[#555] px-4 py-2 text-sm hover:bg-white/5" type="button" @click="logout">
            Logout
          </button>
          <button class="bg-[#ffdb70] px-4 py-2 text-sm font-semibold text-[#111111]" type="button" @click="saveRecords">
            {{ saving ? 'Saving...' : 'Save to GitHub' }}
          </button>
        </div>
      </div>

      <p v-if="message" class="mt-6 border border-green-500/40 bg-green-500/10 px-4 py-3 text-sm text-green-200">
        {{ message }}
      </p>
      <div v-if="errors.length" class="mt-6 border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
        <p v-for="item in errors" :key="item">{{ item }}</p>
      </div>

      <div v-if="loading" class="py-16 text-center text-[#d6d6d6]">Loading config...</div>

      <div v-else class="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside class="space-y-3">
          <button
            type="button"
            class="w-full border border-[#555] px-4 py-3 text-left text-sm hover:bg-white/5"
            @click="addRecord"
          >
            + New subdomain
          </button>

          <button
            v-for="(record, index) in records"
            :key="`${index}-${record.id || record.subdomain}`"
            type="button"
            class="w-full border px-4 py-3 text-left hover:bg-white/5"
            :class="selectedIndex === index ? 'border-[#ffdb70]' : 'border-[#333]'"
            @click="selectRecord(index)"
          >
            <span class="block font-semibold">{{ record.subdomain || 'New record' }}</span>
            <span class="mt-1 block text-xs uppercase tracking-[0.18em] text-[#d6d6d6]">
              {{ record.type }} / {{ record.status }}
            </span>
          </button>
        </aside>

        <section v-if="selectedRecord" class="border border-[#333] bg-[#151515] p-5">
          <div class="grid gap-4 md:grid-cols-2">
            <label class="block">
              <span class="text-sm font-medium text-[#d6d6d6]">Subdomain</span>
              <input
                v-model.trim="selectedRecord.subdomain"
                class="mt-2 w-full border border-[#555] bg-[#111111] px-3 py-2 outline-none focus:border-[#ffdb70]"
                @input="syncRecordIdentity"
              />
            </label>

            <label class="block">
              <span class="text-sm font-medium text-[#d6d6d6]">Title</span>
              <input
                v-model.trim="selectedRecord.title"
                class="mt-2 w-full border border-[#555] bg-[#111111] px-3 py-2 outline-none focus:border-[#ffdb70]"
              />
            </label>

            <label class="block">
              <span class="text-sm font-medium text-[#d6d6d6]">Type</span>
              <select
                v-model="selectedRecord.type"
                class="mt-2 w-full border border-[#555] bg-[#111111] px-3 py-2 outline-none focus:border-[#ffdb70]"
                @change="prepareRecordForType"
              >
                <option value="page">Page</option>
                <option value="redirect">Redirect</option>
              </select>
            </label>

            <label class="block">
              <span class="text-sm font-medium text-[#d6d6d6]">Status</span>
              <select
                v-model="selectedRecord.status"
                class="mt-2 w-full border border-[#555] bg-[#111111] px-3 py-2 outline-none focus:border-[#ffdb70]"
              >
                <option value="active">Active</option>
                <option value="disabled">Disabled</option>
              </select>
            </label>

            <label class="block">
              <span class="text-sm font-medium text-[#d6d6d6]">Background</span>
              <input
                v-model="selectedRecord.theme.background"
                type="color"
                class="mt-2 h-11 w-full border border-[#555] bg-[#111111] px-2"
              />
            </label>

            <label class="block">
              <span class="text-sm font-medium text-[#d6d6d6]">Accent</span>
              <input
                v-model="selectedRecord.theme.accent"
                type="color"
                class="mt-2 h-11 w-full border border-[#555] bg-[#111111] px-2"
              />
            </label>
          </div>

          <label v-if="selectedRecord.type === 'redirect'" class="mt-4 block">
            <span class="text-sm font-medium text-[#d6d6d6]">Redirect URL</span>
            <input
              v-model.trim="selectedRecord.targetUrl"
              class="mt-2 w-full border border-[#555] bg-[#111111] px-3 py-2 outline-none focus:border-[#ffdb70]"
              placeholder="https://example.com"
            />
          </label>

          <label v-else class="mt-4 block">
            <span class="text-sm font-medium text-[#d6d6d6]">Content JSON</span>
            <textarea
              v-model="contentText"
              rows="12"
              class="mt-2 w-full border border-[#555] bg-[#111111] px-3 py-2 font-mono text-sm outline-none focus:border-[#ffdb70]"
              @blur="applyContentJson"
            />
          </label>

          <div class="mt-6 flex flex-wrap gap-3">
            <button class="border border-[#555] px-4 py-2 text-sm hover:bg-white/5" type="button" @click="toggleStatus">
              Toggle status
            </button>
            <button class="border border-red-400/50 px-4 py-2 text-sm text-red-200 hover:bg-red-500/10" type="button" @click="deleteRecord">
              Delete
            </button>
          </div>
        </section>

        <section v-else class="border border-[#333] bg-[#151515] p-8 text-[#d6d6d6]">
          Select a subdomain or create a new one.
        </section>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import {
  createEmptySubdomainRecord,
  normalizeSubdomainRecord,
  validateSubdomainRecords,
} from '../../lib/subdomainValidation';

const router = useRouter();
const records = ref([]);
const selectedIndex = ref(0);
const contentText = ref('');
const loading = ref(true);
const saving = ref(false);
const message = ref('');
const errors = ref([]);

const selectedRecord = computed(() => records.value[selectedIndex.value] || null);

watch(selectedRecord, (record) => {
  contentText.value = record?.type === 'page' ? JSON.stringify(record.content || {}, null, 2) : '';
});

async function ensureSession() {
  const response = await fetch('/api/auth/me');

  if (!response.ok) {
    router.replace('/dashboard/login');
    return false;
  }

  return true;
}

async function loadRecords() {
  loading.value = true;
  errors.value = [];
  message.value = '';

  try {
    const response = await fetch(`/subdomains.json?ts=${Date.now()}`);

    if (!response.ok) {
      throw new Error('Unable to load static config.');
    }

    const data = await response.json();
    records.value = data.map(normalizeSubdomainRecord);
    selectedIndex.value = records.value.length ? 0 : -1;
  } catch (err) {
    errors.value = [err.message];
  } finally {
    loading.value = false;
  }
}

function addRecord() {
  const record = createEmptySubdomainRecord();
  record.subdomain = `page-${records.value.length + 1}`;
  record.id = record.subdomain;
  record.title = 'New Page';
  record.content.headline = 'New Page';
  records.value = [record, ...records.value];
  selectedIndex.value = 0;
}

function selectRecord(index) {
  selectedIndex.value = index;
}

function syncRecordIdentity() {
  if (!selectedRecord.value) {
    return;
  }

  selectedRecord.value.subdomain = selectedRecord.value.subdomain.toLowerCase();
  selectedRecord.value.id = selectedRecord.value.subdomain;
}

function prepareRecordForType() {
  if (!selectedRecord.value) {
    return;
  }

  if (selectedRecord.value.type === 'redirect') {
    selectedRecord.value.content = null;
  } else if (!selectedRecord.value.content) {
    selectedRecord.value.content = {
      headline: selectedRecord.value.title,
      description: '',
      links: [],
    };
  }
}

function applyContentJson() {
  if (!selectedRecord.value || selectedRecord.value.type !== 'page') {
    return;
  }

  try {
    selectedRecord.value.content = JSON.parse(contentText.value || '{}');
    errors.value = [];
  } catch {
    errors.value = ['Content JSON is invalid. Fix it before saving.'];
  }
}

function toggleStatus() {
  if (!selectedRecord.value) {
    return;
  }

  selectedRecord.value.status = selectedRecord.value.status === 'active' ? 'disabled' : 'active';
}

function deleteRecord() {
  if (!selectedRecord.value) {
    return;
  }

  records.value = records.value.filter((record) => record.subdomain !== selectedRecord.value.subdomain);
  selectedIndex.value = records.value.length ? 0 : -1;
}

async function saveRecords() {
  applyContentJson();
  message.value = '';
  saving.value = true;

  const preparedRecords = records.value.map((record) => ({
    ...normalizeSubdomainRecord(record),
    updatedAt: new Date().toISOString(),
  }));
  const validation = validateSubdomainRecords(preparedRecords);

  if (!validation.valid) {
    errors.value = validation.errors;
    saving.value = false;
    return;
  }

  try {
    const response = await fetch('/api/config/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ records: validation.records }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || 'Unable to save config.');
    }

    records.value = validation.records;
    errors.value = [];
    message.value = data.message || 'Config committed to GitHub. Vercel will redeploy from the new commit.';
  } catch (err) {
    errors.value = [err.message];
  } finally {
    saving.value = false;
  }
}

async function logout() {
  await fetch('/api/auth/logout', { method: 'POST' });
  router.replace('/dashboard/login');
}

onMounted(async () => {
  const authenticated = await ensureSession();

  if (!authenticated) {
    return;
  }

  await loadRecords();
});
</script>
