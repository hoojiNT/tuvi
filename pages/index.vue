<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4">
        <h1 class="text-3xl font-bold text-gray-900">
          Lá Số Tử Vi
        </h1>
      </div>
    </header>

    <div class="flex">
      <!-- Sidebar -->
      <div class="w-96 flex-shrink-0 p-4 border-r bg-white min-h-screen">
        <AstrologyForm @submit="showChart = true" />
      </div>

      <!-- Main Content -->
      <main class="flex-grow p-6">
        <div v-if="showChart" class="bg-white shadow rounded-lg p-6">
          <div class="grid grid-cols-3 gap-4">
            <TuViDisplay />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import AstrologyForm from "~/components/AstrologyForm.vue";
const showChart = ref(false)
</script>
