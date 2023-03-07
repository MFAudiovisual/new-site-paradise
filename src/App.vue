<template>
  <SitesysNavbar />
  <RouterView />
  <ScrollToTop />
  <SitesysFooter />
</template>

<script setup>
import SitesysNavbar from '@/components/Sitesys/Global/SitesysNavbar/SitesysNavbar.vue'
import SitesysFooter from '@/components/Sitesys/Global/SitesysFooter/SitesysFooter.vue'
import ScrollToTop from '@/components/Sitesys/Global/ScrollToTop/ScrollToTop.vue'

import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useStorage } from '@vueuse/core'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const state = useStorage('vueuse-color-scheme')

onMounted(() => {
  if (!state.value === 'light') {
    useDark()
  }
})
</script>
