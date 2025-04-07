<template>
  <div class="bg-white shadow rounded-lg p-6">
    <form @submit.prevent="handleSubmit">
      <div class="grid grid-cols-1 gap-6">
        <div class="field">
          <label class="block text-sm font-medium text-gray-700">
            Họ và tên
          </label>
          <InputText v-model="personInfo.name" class="w-full" />
        </div>

        <div class="field">
          <label class="block text-sm font-medium text-gray-700">
            Giới tính
          </label>
          <Dropdown v-model="personInfo.gender" :options="genderOptions" optionLabel="label" optionValue="value"
            class="w-full" />
        </div>

        <div class="field">
          <label class="block text-sm font-medium text-gray-700">
            Ngày sinh
          </label>
          <Calendar v-model="personInfo.birthDate" dateFormat="dd/mm/yy" class="w-full" showIcon />
        </div>

        <div class="field">
          <label class="block text-sm font-medium text-gray-700">
            Giờ sinh
          </label>
          <Calendar v-model="personInfo.birthTime" timeOnly hourFormat="24" class="w-full" showIcon />
        </div>

        <div class="field">
          <label class="block text-sm font-medium text-gray-700">
            Nơi sinh
          </label>
          <InputText v-model="personInfo.birthPlace" class="w-full" />
        </div>

        <div class="mt-6">
          <Button type="submit" label="Lập Lá Số" class="w-full" severity="primary" />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAstrologyStore } from '~/stores/astrology'
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
const store = useAstrologyStore()
const emit = defineEmits(['submit'])
const resolver = zodResolver(
  z.object({
    birthDate: z.date()
  })
);
const genderOptions = [
  { label: 'Nam', value: 'male' },
  { label: 'Nữ', value: 'female' }
]

const personInfo = ref({
  name: "Nguyen The Hoi",
  gender: "male",
  birthDate: new Date('2000-11-19'),
  birthTime: new Date('2000-01-01 19:00'),
  birthPlace: "Ho Chi Minh",
})

const handleSubmit = (e) => {
  // console.log("🚀 ~ handleSubmit ~ e:", e)
  const newVal = {
    ...personInfo.value,
    birthTime: personInfo.value.birthTime.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
  }
  console.log("🚀 ~ handleSubmit ~ newVal:", newVal)
  store.setPersonInfo(newVal)
  emit('submit')
}
</script>