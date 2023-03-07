<template>
  <RouterLink :to="path" class="group">
    <slot name="logo" v-if="navbarLogo || navbarLogoMobile">
      <!-- Logo Screen  -->
      <img
        class="object-contain max-w-[140px] max-h-[40px]"
        :src="navbarLogo"
        alt="SiteSys"
      />
    </slot>
    <slot name="title" v-else>
      <h1 class="text-3xl text-white font-bold">SiteSys</h1>
    </slot>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import imgUrl from '@/assets/images/sitesys/logo/logo-header-light.png'

const navbarLogo = imgUrl

const props = defineProps({
  path: {
    type: String,
    default: '',
  },
})
</script>
