<template>
  <SectionAbout />
</template>

<script setup>
import SectionAbout from '@/components/Sitesys/Global/Sections/SectionAbout.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'SiteSyS WPA - My About Page',
  meta: [
    {
      name: 'description',
      content: 'My description About Page',
    },

    /* Social */
    {
      property: 'og:title',
      content: 'SiteSyS WPA - My About Page',
    },
    {
      property: 'og:description',
      content: 'SiteSyS WPA - My description About Page',
    },
    {
      property: 'og:image',
      content: '/src/assets/images/sitesys/icons/favicon.ico',
    },
  ],
})
</script>
