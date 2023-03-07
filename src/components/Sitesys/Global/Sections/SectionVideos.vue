<template>
  <section id="videos" class="videos">
    <div class="container py-24 mx-auto px-4">
      <div class="anim4-scroll">
        <h2 class="trigger4-scroll text-7xl md:text-5xl mb-10 text-center">
          Videos
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
import GalleryLightbox from '@/components/Sitesys/Global/GalleryVideo/GalleryLightbox.vue'
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
  gsap.from('.anim4-scroll', {
    // y: 100,
    opacity: 0,
    duration: 0.5,
    ease: 'power3.inOut',
    scrollTrigger: {
      trigger: '.trigger4-scroll',
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
    videoId: 'JQlNFEbX5YQ',
  },
  {
    id: '2',
    title: '',
    description: '',
    videoId: 'JQlNFEbX5YQ',
  },
  {
    id: '3',
    title: '',
    description: '',
    videoId: 'JQlNFEbX5YQ',
  },
  {
    id: '4',
    title: '',
    description: '',
    videoId: 'JQlNFEbX5YQ',
  },
  {
    id: '5',
    title: '',
    description: '',
    videoId: 'JQlNFEbX5YQ',
  },
  {
    id: '6',
    title: '',
    description: '',
    videoId: 'JQlNFEbX5YQ',
  },
]
</script>
