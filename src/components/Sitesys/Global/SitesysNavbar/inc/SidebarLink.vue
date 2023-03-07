<template>
  <RouterLink
    :to="path"
    :class="classes"
    class="block text-left font-semibold rounded-r leading-5 px-4 py-3"
  >
    <slot />
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  path: {
    type: String,
    default: '',
  },
  active: Boolean,
})

const classes = computed(() => {
  return props.active
    ? 'w-full bg-brand-700 text-white border-white border-l-2 hover:text-white focus:outline-none focus:bg-brand-600 transition'
    : 'w-full text-gray-300 border-white border-transparent hover:bg-brand-600 hover:text-white hover:border-l-2 focus:bg-brand-600 focus:outline-none focus:text-white focus:border-white transition'
})
</script>

<style scoped></style>
