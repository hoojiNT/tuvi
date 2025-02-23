<template>
  <div class="bg-white shadow rounded-lg p-6">
    <form @submit.prevent="handleSubmit">
      <div class="grid grid-cols-1 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Họ và tên
          </label>
          <input v-model="personInfo.name" type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">
            Giới tính
          </label>
          <select v-model="personInfo.gender"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">
            Ngày sinh
          </label>
          <input v-model="personInfo.birthDate" type="date"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">
            Giờ sinh
          </label>
          <input v-model="personInfo.birthTime" type="time"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">
            Nơi sinh
          </label>
          <input v-model="personInfo.birthPlace" type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>

        <div class="mt-6">
          <button type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Lập Lá Số
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAstrologyStore } from '~/stores/astrology'

const store = useAstrologyStore()
const emit = defineEmits(['submit'])

const personInfo = ref({
  name: "",
  gender: "male",
  birthDate: "",
  birthTime: "",
  birthPlace: "",
})

const handleSubmit = () => {
  store.setPersonInfo(personInfo.value)
  store.tinhCungMenh()
  store.tinhCungThan()
  emit('submit')
}
</script>