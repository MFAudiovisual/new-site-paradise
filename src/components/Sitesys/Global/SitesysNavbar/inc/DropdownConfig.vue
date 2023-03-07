<template>
  <div class="relative inline-block text-left">
    <button
      type="button"
      @click="isOpen = !isOpen"
      class="inline-flex justify-center rounded-md py-2 font-medium text-gray-700 hover:outline-none focus:outline-none"
      id="menu-button"
      aria-expanded="true"
      aria-haspopup="true"
    >
      <svg
        class="w-6 h-6 text-gray-300 hover:text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        ></path>
      </svg>
    </button>
    <button
      v-show="isOpen"
      @click="isOpen = false"
      class="fixed w-full h-full inset-0 bg-black opacity-30 cursor-default"
      tabindex="-1"
    ></button>
    <div
      v-if="isOpen"
      class="absolute bg-light dark:bg-dark dark:text-gray-300 right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-2" role="none">
        <div
          class="text-gray-700 block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          tabindex="-1"
        >
          <DarkMode />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DarkMode from '@/components/Sitesys/Global/DarkMode/DarkMode.vue'

const isOpen = ref(false)
</script>
