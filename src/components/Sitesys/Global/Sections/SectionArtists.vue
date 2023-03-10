<template>
  <section id="artists" class="artists">
    <div
      class="bg-[url('/src/assets/images/sitesys/bg/bg-cast.jpg')] bg-no-repeat bg-cover"
    >
      <div class="container py-24 mx-auto px-4">
        <div class="anim3-scroll">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="text-dark text-lg md:text-xl font-bold font-amatic">
              <p class="mb-16">
                {{ $t('artists.description') }}
              </p>
            </div>
            <div
              class="text-dark text-lg font-bold font-amatic order-first md:order-last"
            >
              <h2
                class="trigger3-scroll text-5xl text-green-600/80 font-normal font-montserrat tracking-wide drop-shadow-text-sm break-words"
              >
                {{ $t('artists.title') }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-24 mx-auto px-4">
      <!-- Artist 1 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-32">
        <div>
          <h2
            class="text-4xl text-green-500/60 font-normal font-amatic mb-4 tracking-wide drop-shadow-text-sm"
          >
            {{ $t('artists.artist1') }}
          </h2>

          <p class="mb-16 text-lg font-bold font-amatic">
            {{ $t('artists.artist1Description') }}
            <RouterLink to="/groovi" class="text-blue-500">{{
              $t('artists.more')
            }}</RouterLink>
          </p>
        </div>

        <div
          class="text-dark text-lg font-bold font-amatic order-first md:order-first mb-4"
        >
          <RouterLink to="/groovi">
            <img :src="imgUrlLogo" alt="" />
          </RouterLink>
        </div>
      </div>
      <div
        class="mx-auto bg-white dark:bg-extra-dark/80 rounded-md py-16 mt-16 mb-32"
      >
        <div class="flex justify-center">
          <RouterLink to="/groovi">
            <img :src="logoGroovi" alt="" />
          </RouterLink>
        </div>
        <div
          class="lg:w-full mx-auto flex flex-wrap justify-center items-center"
        >
          <div class="w-full py-16 px-16">
            <iframe
              class="mb-4"
              style="border-radius: 12px"
              src="https://open.spotify.com/embed/artist/3PC6g5aPShT6fF0eUuYPAH?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="1"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div
          class="lg:w-full mx-auto flex flex-wrap justify-center items-center"
        >
          <iframe
            id="ytplayer"
            type="text/html"
            width="720"
            height="405"
            :src="`https://www.youtube.com/embed/qlmwIVmsn3Y?loop=1&modestbranding=1`"
            frameborder="0"
            allowfullscreen
            class="m-16 my-auto w-full"
          />
        </div>
      </div>
      <!-- Artist 2 -->
      <div class="container grid grid-cols-1 lg:grid-cols-2 gap-4 pt-32">
        <div>
          <h2
            class="text-4xl text-green-500/60 font-normal font-amatic mb-4 tracking-wide drop-shadow-text-sm"
          >
            {{ $t('artists.artist2') }}
          </h2>

          <p class="mb-16 text-lg font-bold font-amatic">
            {{ $t('artists.artist2Description') }}
            <RouterLink to="/skafolia" class="text-blue-500">{{
              $t('artists.more')
            }}</RouterLink>
          </p>
        </div>

        <div
          class="text-dark text-lg font-bold font-amatic order-first md:order-first"
        >
          <RouterLink to="/skafolia">
            <img :src="imgUrlLogo1" alt="" />
          </RouterLink>
        </div>
      </div>
      <div class="container mx-auto bg-white rounded-md py-16 mt-16 mb-32">
        <div class="flex justify-center">
          <RouterLink to="/skafolia">
            <img :src="logoSka" alt="" class="mb-16" />
          </RouterLink>
        </div>
        <div
          class="lg:w-full mx-auto flex flex-wrap justify-center items-center"
        >
          <iframe
            id="ytplayer"
            type="text/html"
            width="720"
            height="405"
            :src="`https://www.youtube.com/embed/kCNuJj9hXrg?loop=1&modestbranding=1`"
            frameborder="0"
            allowfullscreen
            class="m-16 my-auto w-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

import logoGroovi from '@/assets/images/sitesys/logo/logo-groovi.png'
import logoSka from '@/assets/images/sitesys/logo/logo-skafolia.jpg'
import imgUrlLogo from '@/assets/images/sitesys/artist/artista-02.jpg'
import imgUrlLogo1 from '@/assets/images/sitesys/artist/artista-03.jpg'

import imgUrl1 from '@/assets/images/sitesys/gallery/image-01.jpg'
import imgUrl2 from '@/assets/images/sitesys/gallery/image-02.jpg'
import imgUrl3 from '@/assets/images/sitesys/gallery/image-03.jpg'
import imgUrl4 from '@/assets/images/sitesys/gallery/image-04.jpg'
import imgUrl5 from '@/assets/images/sitesys/gallery/image-05.jpg'
import imgUrl6 from '@/assets/images/sitesys/gallery/image-06.jpg'
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
