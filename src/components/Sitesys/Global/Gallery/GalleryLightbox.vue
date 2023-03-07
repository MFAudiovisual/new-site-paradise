<template>
  <div class="grid grid-cols-1 gap-4 p-4 mx-auto sm:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="(item, index) in gallery"
      :key="index"
      class="flex justify-center items-center bg-center bg-cover h-64 rounded-md overflow-hidden hover:scale-105 hover:opacity-80 transition duration-300 ease-in-out cursor-pointer"
      @click="clickImg(index)"
      :style="{
        backgroundImage: `url(${item.src})`,
      }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-14 h-14 text-brand-200"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    </div>
  </div>
  <teleport to="body">
    <div v-show="lightbox" class="lightBox">
      <div class="lightBoxDialog">
        <div class="lightBoxContent">
          <div class="lightBoxHeader">
            <span></span>
            <span @click.stop="lightbox = false" class="lightBoxClose">
              <svg
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
            </span>
          </div>
          <div class="lightBoxBody">
            <GalleryCarousel
              :sliders="gallery"
              :current="slide"
              background-color="#0000001a"
            />
          </div>
          <div class="lightBoxFooter"></div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref } from 'vue'
import GalleryCarousel from './inc/GalleryCarousel.vue'

const lightbox = ref(false)
const slide = ref(0)

const clickImg = (i) => {
  lightbox.value = true
  slide.value = i
}

const props = defineProps({
  gallery: {
    type: Array,
    default() {
      return [
        {
          id: '1',
          title: '',
          description: '',
          src: 'https://source.unsplash.com/random/1920x1080/?music?1',
        },
        {
          id: '2',
          title: '',
          description: '',
          src: 'https://source.unsplash.com/random/1920x1080/?music?2',
        },
        {
          id: '3',
          title: '',
          description: '',
          src: 'https://source.unsplash.com/random/1920x1080/?music?3',
        },
        {
          id: '4',
          title: '',
          description: '',
          src: 'https://source.unsplash.com/random/1920x1080/?music?4',
        },

        {
          id: '5',
          title: '',
          description: '',
          src: 'https://source.unsplash.com/random/1920x1080/?music?5',
        },

        {
          id: '6',
          title: '',
          description: '',
          src: 'https://source.unsplash.com/random/1920x1080/?music?6',
        },
      ]
    },
  },
})
</script>

<style lang="scss" scoped>
.lightBox {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
}
.lightBoxDialog {
  position: relative;
  z-index: 101;
  margin: auto;
  padding: 0;
  width: inherit;
  height: inherit;
}

.lightBoxContent {
  position: relative;
  z-index: 102;
  overflow: auto;
  width: inherit;
  height: inherit;
}

.lightBoxHeader {
  padding: 10px;
  width: calc(100vw - 30px);
  position: absolute;
  z-index: 104;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
}

.lightBoxBody {
  position: relative;
  z-index: 103;
}

.lightBoxFooter {
  padding: 10px;
  width: calc(100vw - 30px);
  position: absolute;
  z-index: 104;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
}

.lightBoxClose {
  color: white;
  cursor: pointer;
  font-weight: bold;
}
</style>
