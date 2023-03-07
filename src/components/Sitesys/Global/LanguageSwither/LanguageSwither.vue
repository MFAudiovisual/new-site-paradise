<template>
  <div class="relative inline-block text-left">
    <button
      type="button"
      @click="isOpen = !isOpen"
      class="my-2.5 inline-flex justify-center rounded-md font-medium text-gray-700 hover:outline-none focus:outline-none"
      id="menu-button"
      aria-expanded="true"
      aria-haspopup="true"
    >
      <img :src="imageUrl1" v-show="language == 'en'" class="" alt="" />
      <img :src="imageUrl2" v-show="language == 'pt_BR'" class="" alt="" />
    </button>
    <button
      type="button"
      v-show="isOpen"
      @click="isOpen = false"
      class="fixed w-full h-full inset-0 bg-black opacity-30 cursor-default"
      tabindex="-1"
    ></button>
    <div
      v-if="isOpen"
      class="absolute bg-light dark:bg-dark dark:text-gray-300 right-0 z-10 mt-2 w-48 origin-top-right rounded-md shadow-lg focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-2" role="none">
        <div
          @click="setLanguage('en')"
          class="cursor-pointer flex items-center px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700"
          tabindex="-1"
        >
          <img :src="imageUrl1" class="mr-2" alt="" /> - EN
        </div>
        <div
          @click="setLanguage('pt_BR')"
          class="cursor-pointer flex items-center px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700"
          tabindex="-1"
        >
          <img :src="imageUrl2" class="mr-2" alt="" /> - PT
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import imageUrl1 from '@/assets/images/sitesys/flags/Estados Unidos.png'
import imageUrl2 from '@/assets/images/sitesys/flags/Brasil.png'

const isOpen = ref(false)

const language = ref(null)

onMounted(() => {
  if (localStorage.getItem('lang') == null) {
    localStorage.setItem('lang', 'en')
  }
  language.value = localStorage.getItem('lang')
  document
    .querySelector('html')
    .setAttribute('lang', localStorage.getItem('lang'))
})

const setLanguage = (lang) => {
  localStorage.setItem('lang', lang)
  window.location.reload()
}
</script>
