<template>
  <label
    for="toggle"
    class="flex justify-between items-center cursor-pointer group"
  >
    <div
      class="block text-gray-700 dark:text-gray-300 dark:group-hover:text-white"
    >
      DarkMode
    </div>
    <!-- Toggle -->
    <div class="relative">
      <!-- input -->
      <input
        type="checkbox"
        @click="toggleDark()"
        id="toggle"
        class="sr-only"
        :checked="isDark"
      />
      <!-- line -->
      <div class="block bg-gray-600 w-10 h-6 rounded-full"></div>
      <!-- dot -->
      <div
        class="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"
      ></div>
    </div>
  </label>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style lang="scss" scoped>
/* Toggle */
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
</style>
