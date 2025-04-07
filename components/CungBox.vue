// components/CungBox.vue
<template>
  <div class="h-full">
    <!-- Tiêu đề cung -->
    <div class="border-b pb-2 mb-2">
      <h3 class="font-bold text-lg">{{ cung?.name ?? "Tên cung" }}</h3>
      <div class="flex gap-2">
        <span v-if="isCungMenh" class="text-red-500 text-sm">Mệnh</span>
        <span v-if="isCungThan" class="text-blue-500 text-sm">Thân</span>
      </div>
    </div>

    <!-- Danh sách sao -->
    <div class="space-y-1">
      <!-- Chính tinh -->
      <div class="flex flex-wrap gap-1">
        <span v-for="star, i in chinhTinh" :key="i" class="text-sm" :class="getStarColorClass(star)">
          {{ star?.name ?? "todo" }}
        </span>
      </div>

      <!-- Phụ tinh -->
      <div class="flex flex-wrap gap-1">
        <span v-for="star, i in phuTinh" :key="i" class="text-sm" :class="getStarColorClass(star)">
          {{ star?.name ?? "todo" }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAstrologyStore } from '@/stores/astrology'

const props = defineProps({
  cung: {
    type: Object,
    required: true
  }
})

const store = useAstrologyStore()

// Kiểm tra xem có phải cung mệnh/thân không
const isCungMenh = computed(() => props.cung?.name === store.cungMenh)
const isCungThan = computed(() => props.cung?.name === store.cungThan)

// Tách sao thành chính tinh và phụ tinh
const chinhTinh = computed(() =>
  props.cung?.stars?.filter(star => star?.type === 'major') ?? []
)

const phuTinh = computed(() =>
  props.cung?.stars?.filter(star => star?.type === 'minor') ?? []
)

// Hàm lấy màu sắc cho sao
const getStarColorClass = (star) => {
  if (star?.category === 'good') return 'text-green-600'
  if (star?.category === 'bad') return 'text-red-600'
  return 'text-blue-600'
}
</script>