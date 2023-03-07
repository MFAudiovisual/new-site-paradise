<template>
  <RouterLink
    :to="path"
    class="font-semibold group transition-all duration-200"
  >
    <span :class="classes" class="py-1">
      <slot />
    </span>
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
  active: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => {
  return props.active
    ? 'text-white link-underline link-underline-black link-active'
    : 'text-gray-300  hover:text-white link-underline link-underline link-underline-black'
})
</script>

<style lang="scss" scoped>
.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#fff, #fff);
  background-size: 0 2px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease-in-out;
}

.link-underline-black {
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#fff, #fff);
}

.link-underline:hover {
  background-size: 100% 2px;
  background-position: 0 100%;
}
.link-active {
  background-size: 100% 2px;
  background-position: 0 100%;
}
</style>
