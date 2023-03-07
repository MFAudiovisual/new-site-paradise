<template>
  <swiper
    :autoplay="{
      delay: 6000,
      disableOnInteraction: false,
    }"
    :effect="'fade'"
    :loop="true"
    :navigation="true"
    :pagination="{
      dynamicBullets: true,
      clickable: true,
    }"
    :modules="modules"
    :style="{
      height: size,
      '--swiper-navigation-color': '#c2c2c2',
      '--swiper-pagination-color': '#c2c2c2',
      '--swiper-navigation-size': '24px',
    }"
  >
    <swiper-slide
      v-for="item in sliders"
      :key="item.id"
      :style="{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.01)), url('${item.image}')`,
      }"
      class="relative overflow-hidden bg-no-repeat bg-cover bg-center"
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
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Autoplay, EffectFade, Navigation, Pagination]

defineProps({
  size: {
    type: String,
    default: '67vh',
  },
  backgroundColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0.1)',
  },
  opacity: {
    type: Number,
    default: 0.1,
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

<style lang="scss" scoped></style>
