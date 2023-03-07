<template>
  <button
    @click="goToTop"
    :class="[y >= 200 ? '' : 'opacity-0']"
    class="fixed z-50 bg-brand-500 hover:bg-brand-600 text-white px-2 py-2 rounded text-base font-semibold leading-6 right-6 bottom-6 transition-all duration-200 whitespace-no-wrap overflow-hidden shadow-sm"
  >
    <svg
      class="w-4 h-4 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      ></path>
    </svg>
  </button>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()

const goToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
}
</script>
