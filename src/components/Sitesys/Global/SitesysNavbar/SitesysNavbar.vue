<template>
  <header id="header" class="header">
    <!-- Sitesys Navbar -->
    <nav class="fixed top-0 z-50 w-full">
      <div
        :class="[y >= 120 ? 'shadow' : 'bg-opacity-0 pt-6']"
        class="bg-brand px-4 pt-3 pb-2 transition-all duration-300"
      >
        <div class="container mx-auto">
          <!-- Navbar Desktop Content -->
          <div class="flex justify-between items-center">
            <!-- Navbar Logo -->
            <NavbarLogo @click="goToTop()" />
            <!-- Desktop Navbar Menu -->
            <div class="flex">
              <div class="hidden sm:flex items-center space-x-8">
                <!-- Desktop Navbar Links -->
                <NavbarLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  :active="item.current"
                  @click="handleGoToSection(item)"
                  preserve-scroll
                >
                  {{ item.name }}
                </NavbarLink>
              </div>
              <!-- Button Show Mobile Menu -->
              <div class="sm:hidden flex items-center">
                <button @click="showMobileMenu = !showMobileMenu">
                  <svg
                    v-show="showMobileMenu"
                    class="w-8 h-8 text-gray-300 hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                  <svg
                    v-show="!showMobileMenu"
                    class="w-8 h-8 text-gray-300 hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
                <button
                  v-show="!showMobileMenu"
                  @click="showMobileMenu = !showMobileMenu"
                  class="fixed w-full h-full inset-0 bg-black -z-10 opacity-30 cursor-default"
                  tabindex="-1"
                ></button>
              </div>
              <!-- Dropdown Button -->
              <LanguageSwither class="ml-4" />
              <DropdownConfig class="ml-1" />
            </div>
          </div>
        </div>
      </div>
      <!-- Navbar Mobile Content -->
      <div
        class="sm:hidden z-10 bg-brand space-y-2 p-4 transition-all duration-300"
        :class="[
          { hidden: showMobileMenu },
          y >= 120 ? 'shadow' : 'bg-opacity-0',
        ]"
      >
        <!-- Desktop Mobile Links -->
        <SidebarLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          :active="item.current"
          :hover="true"
          @click="handleGoToSection(item)"
          preserve-scroll
          :class="[
            y >= 120
              ? ''
              : 'bg-opacity-0 hover:bg-opacity-0 focus:bg-opacity-0',
          ]"
        >
          {{ item.name }}
        </SidebarLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import NavbarLink from './inc/NavbarLink.vue'
import NavbarLogo from './inc/NavbarLogo.vue'
import SidebarLink from './inc/SidebarLink.vue'
import { goToTop } from '@/utils/scroll.js'
import DropdownConfig from './inc/DropdownConfig.vue'
import { useWindowScroll } from '@vueuse/core'
import LanguageSwither from '@/components/Sitesys/Global/LanguageSwither/LanguageSwither.vue'
import { useI18n } from 'vue-i18n'

const { y } = useWindowScroll()

const handleGoToSection = (item) => {
  navigation.value.forEach((e) => {
    e.current = false
  })
  // item.current = true
  handleCloseNavbar()
}

const handleGoToHeader = () => {
  navigation.value.forEach((e) => {
    e.current = false
  })
  goToTop()
  handleCloseNavbar()
}

const showMobileMenu = ref(true)

const handleCloseNavbar = () => {
  showMobileMenu.value = true
}

const { t } = useI18n()

const navigation = ref([
  {
    name: t('navbar.home'),
    href: { path: '/', hash: '#home' },
    current: false,
  },
  {
    name: t('navbar.about'),
    href: { path: '/', hash: '#about' },
    current: false,
  },
  {
    name: t('navbar.photos'),
    href: { path: '/', hash: '#photos' },
    current: false,
  },
  {
    name: t('navbar.videos'),
    href: { path: '/', hash: '#videos' },
    current: false,
  },
  {
    name: t('navbar.contact'),
    href: { path: '/', hash: '#contact' },
    current: false,
  },
])
</script>
