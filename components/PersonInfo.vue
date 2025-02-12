// components/PersonInfo.vue
<template>
  <div class="h-full flex flex-col items-center justify-center">
    <h2 class="text-xl font-bold mb-4">Thông tin cá nhân</h2>
    <div class="space-y-2 text-sm">
      <p><span class="font-medium">Họ tên:</span> {{ personInfo.name }}</p>
      <p><span class="font-medium">Giới tính:</span> {{ formatGender }}</p>
      <p><span class="font-medium">Ngày sinh:</span> {{ formatDate }}</p>
      <p><span class="font-medium">Giờ sinh:</span> {{ personInfo.birthTime }}</p>
      <p><span class="font-medium">Nơi sinh:</span> {{ personInfo.birthPlace }}</p>
      <p><span class="font-medium">Cung mệnh:</span> {{ store.cungMenh }}</p>
      <p><span class="font-medium">Cung thân:</span> {{ store.cungThan }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAstrologyStore } from '@/stores/astrology'

const store = useAstrologyStore()
const personInfo = computed(() => store.personInfo)

// Format giới tính
const formatGender = computed(() => 
  personInfo.value.gender === 'male' ? 'Nam' : 'Nữ'
)

// Format ngày sinh
const formatDate = computed(() => {
  const date = new Date(personInfo.value.birthDate)
  return date.toLocaleDateString('vi-VN')
})
</script>