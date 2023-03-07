<template>
  <section id="photos" class="photos">
    <div class="container py-24 mx-auto px-4">
      <div class="anim3-scroll">
        <h2 class="trigger3-scroll text-7xl md:text-5xl mb-10 text-center">
          Photos
        </h2>
        <div
          class="lg:w-full mx-auto flex flex-wrap justify-center items-center"
        >
          <div class="w-full lg:py-6 mt-6 lg:mt-0">
            <GalleryLightbox :gallery="GalleryImgs" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import GalleryLightbox from '@/components/Sitesys/Global/Gallery/GalleryLightbox.vue'
import imgUrl1 from '@/assets/images/sitesys/gallery/image-01.jpg'
import imgUrl2 from '@/assets/images/sitesys/gallery/image-02.jpg'
import imgUrl3 from '@/assets/images/sitesys/gallery/image-03.jpg'
import imgUrl4 from '@/assets/images/sitesys/gallery/image-04.jpg'
import imgUrl5 from '@/assets/images/sitesys/gallery/image-05.jpg'
import imgUrl6 from '@/assets/images/sitesys/gallery/image-06.jpg'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.anim3-scroll', {
    // y: 100,
    opacity: 0,
    duration: 0.5,
    ease: 'power3.inOut',
    scrollTrigger: {
      trigger: '.trigger3-scroll',
      start: 'top 80%',
      end: 'center 10%',
      toggleActions: 'play none resume complete',
      markers: false,
    },
  })
})

const GalleryImgs = [
  {
    id: '1',
    title: '',
    description: '',
    src: imgUrl1,
  },
  {
    id: '2',
    title: '',
    description: '',
    src: imgUrl2,
  },
  {
    id: '3',
    title: '',
    description: '',
    src: imgUrl3,
  },
  {
    id: '4',
    title: '',
    description: '',
    src: imgUrl4,
  },
  {
    id: '5',
    title: '',
    description: '',
    src: imgUrl5,
  },
  {
    id: '6',
    title: '',
    description: '',
    src: imgUrl6,
  },
]
</script>
