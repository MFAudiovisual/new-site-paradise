<template>
  <Swiper
    @swiper="onSwiper"
    :slides-per-view="1"
    :space-between="50"
    :effect="'fade'"
    :navigation="true"
    :pagination="{
      clickable: true,
      dynamicBullets: true,
    }"
    :modules="modules"
    :zoom="true"
    :style="{
      height: size,
      '--swiper-navigation-color': '#c2c2c2',
      '--swiper-pagination-color': '#c2c2c2',
      '--swiper-navigation-size': '24px',
    }"
    lazy
    :preload-images="false"
    :initial-slide="current"
  >
    <SwiperSlide
      v-for="item in sliders"
      :key="item.id"
      class="customSlide flex justify-center"
    >
      <iframe
        id="ytplayer"
        type="text/html"
        width="720"
        height="405"
        :src="`https://www.youtube.com/embed/${item.videoId}?loop=1&modestbranding=1`"
        frameborder="0"
        allowfullscreen
        class="swiper-lazy p-16 my-auto w-full h-full"
      />
      <div class="swiper-lazy-preloader"></div>
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import { ref, watch, toRefs } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination, A11y, Lazy, Zoom } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/zoom'

const swiperRef = ref(null)

const { current } = toRefs(props)

watch(current, () => {
  if (swiperRef.value !== null) {
    swiperRef.value.slideTo(props.current)
  }
})

const onSwiper = (swiper) => {
  swiperRef.value = swiper
}

const modules = [Autoplay, Navigation, Pagination, A11y, Lazy, Zoom]

const props = defineProps({
  current: {
    type: Number,
    default: 0,
  },
  size: {
    type: String,
    default: '100vh',
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
          image: 'https://source.unsplash.com/random/1920x1080/?music?1',
        },
        {
          id: '2',
          title: '',
          description: '',
          image: 'https://source.unsplash.com/random/1920x1080/?music?2',
        },
        {
          id: '3',
          title: '',
          description: '',
          image: 'https://source.unsplash.com/random/1920x1080/?music?3',
        },
        {
          id: '4',
          title: '',
          description: '',
          image: 'https://source.unsplash.com/random/1920x1080/?music?4',
        },
      ]
    },
  },
})
</script>
