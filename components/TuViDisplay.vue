// components/TuViDisplay.vue
<template>
  <div class="max-w-6xl mx-auto p-4">
    <div class="grid grid-cols-4 gap-4">
      <!-- Hàng 1: Tý - Sửu - Dần - Mão -->
      <div class="border rounded p-4 bg-white shadow-sm">
        <CungBox :cung="cungTy" />
      </div>
      <div class="border rounded p-4 bg-white shadow-sm">
        <CungBox :cung="cungSuu" />
      </div>
      <div class="border rounded p-4 bg-white shadow-sm">
        <CungBox :cung="cungDan" />
      </div>
      <div class="border rounded p-4 bg-white shadow-sm">
        <CungBox :cung="cungMao" />
      </div>

      <!-- Hàng 2: Hợi - Center - Thìn -->
      <div class="border rounded p-4 bg-white shadow-sm">
        <CungBox :cung="cungHoi" />
      </div>
      <div class="col-span-2 row-span-2 border rounded p-4 bg-yellow-50 shadow-sm">
        <PersonInfo />
      </div>
      <div class="border rounded p-4 bg-white shadow-sm">
        <CungBox :cung="cungThin" />
      </div>

      <!-- Hàng 3: Tuất - Center - Tị -->
      <div class="border rounded p-4 bg-white shadow-sm">
        <CungBox :cung="cungTuat" />
      </div>
      <div class="border rounded p-4 bg-white shadow-sm">
        <CungBox :cung="cungTi" />
      </div>

      <!-- Hàng 4: Dậu - Thân - Mùi - Ngọ -->
      <div class="border rounded p-4 bg-white shadow-sm">
        <CungBox :cung="cungDau" />
      </div>
      <div class="border rounded p-4 bg-white shadow-sm">
        <CungBox :cung="cungThan" />
      </div>
      <div class="border rounded p-4 bg-white shadow-sm">
        <CungBox :cung="cungMui" />
      </div>
      <div class="border rounded p-4 bg-white shadow-sm">
        <CungBox :cung="cungNgo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAstrologyStore } from '@/stores/astrology'
import CungBox from './CungBox.vue'
import PersonInfo from './PersonInfo.vue'

const store = useAstrologyStore()

// Computed properties cho từng cung
const cungTy = computed(() => store.cungVi[0])
const cungSuu = computed(() => store.cungVi[1])
const cungDan = computed(() => store.cungVi[2])
const cungMao = computed(() => store.cungVi[3])
const cungThin = computed(() => store.cungVi[4])
const cungTi = computed(() => store.cungVi[5])
const cungNgo = computed(() => store.cungVi[6])
const cungMui = computed(() => store.cungVi[7])
const cungThan = computed(() => store.cungVi[8])
const cungDau = computed(() => store.cungVi[9])
const cungTuat = computed(() => store.cungVi[10])
const cungHoi = computed(() => store.cungVi[11])
</script>
