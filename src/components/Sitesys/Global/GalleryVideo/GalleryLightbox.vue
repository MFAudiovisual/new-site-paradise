<template>
  <div class="grid grid-cols-1 gap-4 p-4 mx-auto sm:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="(item, index) in gallery"
      :key="index"
      class="flex justify-center items-center bg-center bg-cover h-64 rounded-md overflow-hidden hover:scale-105 hover:opacity-80 transition duration-300 ease-in-out cursor-pointer"
      @click="clickImg(index)"
      :style="{
        backgroundImage: `url(https://img.youtube.com/vi/${item.videoId}/sddefault.jpg)`,
      }"
    >
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xml:space="preserve"
        fill="#000000"
        class="w-14 h-14"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            style="fill: #d7143a"
            d="M492.044,106.769c-18.482-21.97-52.604-30.931-117.77-30.931H137.721 c-66.657,0-101.358,9.54-119.77,32.93C0,131.572,0,165.174,0,211.681v88.64c0,90.097,21.299,135.842,137.721,135.842h236.554 c56.512,0,87.826-7.908,108.085-27.296C503.136,388.985,512,356.522,512,300.321v-88.64 C512,162.636,510.611,128.836,492.044,106.769z M328.706,268.238l-107.418,56.14c-2.401,1.255-5.028,1.878-7.65,1.878 c-2.97,0-5.933-0.799-8.557-2.388c-4.942-2.994-7.959-8.351-7.959-14.128V197.82c0-5.767,3.009-11.119,7.941-14.115 c4.933-2.996,11.069-3.201,16.187-0.542l107.418,55.778c5.465,2.837,8.897,8.479,8.905,14.635 C337.58,259.738,334.163,265.388,328.706,268.238z"
          ></path>
        </g>
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
              v-if="lightbox"
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
