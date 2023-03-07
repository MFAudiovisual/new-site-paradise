<template>
  <section
    v-for="(item, i) in sliders"
    :key="i"
    class="parallax"
    :style="{
      height: size,
    }"
  >
    <div
      class="bg"
      :style="{
        height: size,
        backgroundImage: `linear-gradient(${backgroundColor}, ${backgroundColor}), url('${item.image}')`,
      }"
    >
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        :style="{
          backgroundColor: backgroundColor,
        }"
      >
        <div class="flex justify-center items-center h-full">
          <div class="text-center text-white px-6 md:px-12">
            <h2
              class="text-brand text-6xl md:text-7xl font-bold drop-shadow-md tracking-tight mt-10 mb-4"
            >
              {{ item.title }}
            </h2>
            <p
              class="text-2xl md:text-3xl text-gray-200 font-semibold drop-shadow-md mb-16"
            >
              {{ item.description }}
            </p>
            <a
              v-show="item.actionLabel"
              :href="item.actionUrl"
              target="_blank"
              class="inline-flex items-center justify-center m-2 px-7 py-4 text-xl font-semibold leading-6 text-gray-200 whitespace-no-wrap bg-brand rounded shadow-md hover:bg-brand-700 focus:outline-none focus:shadow-none overflow-hidden"
            >
              <div class="mr-2">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <span class="relative text-base"> {{ item.actionLabel }} </span>
              <div class="ml-2">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import imgUrl from '@/assets/images/sitesys/parallax/parallax-01.png'

import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.utils.toArray('.parallax').forEach((section, i) => {
    section.bg = section.querySelector('.bg')

    // Do the parallax effect on each section
    if (i) {
      section.bg.style.backgroundPosition = `50% ${innerHeight / 2}px`

      gsap.to(section.bg, {
        backgroundPosition: `50% ${-innerHeight / 2}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          scrub: true,
        },
      })
    }
  })
})

defineProps({
  size: {
    type: String,
    default: '52vh',
  },
  backgroundColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0.05)',
  },
  sliders: {
    type: Array,
    default() {
      return [
        {
          id: '1',
          title: '',
          description: '',
          actionLabel: '',
          actionUrl: '/',
          image: 'https://source.unsplash.com/random/1920x1080/?music?1',
        },
        {
          id: '2',
          title: 'Title 2',
          description: '',
          actionLabel: '',
          actionUrl: '/',
          image: 'https://source.unsplash.com/random/1920x1080/?music?2',
        },
        {
          id: '3',
          title: 'Title 3',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          actionLabel: '',
          actionUrl: '/',
          image: 'https://source.unsplash.com/random/1920x1080/?music?3',
        },
        {
          id: '4',
          title: 'Title 4',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          actionLabel: 'Get Started',
          actionUrl: '/',
          image: 'https://source.unsplash.com/random/1920x1080/?music?4',
        },
      ]
    },
  },
})
</script>

<style lang="scss" scoped>
section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60vh;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  overflow: hidden;
}

h1 {
  color: white;
  text-shadow: 1px 1px 3px black;
  z-index: 1;
  font-size: 3em;
  font-weight: 400;
}
.parallax--image {
  background-position: center;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  position: relative;
  background-attachment: fixed;
}
.parallax--container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  text-align: center;
  font-weight: 700;
}
</style>
