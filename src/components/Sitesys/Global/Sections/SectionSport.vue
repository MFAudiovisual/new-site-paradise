<template>
  <section id="sport" class="sport">
    <div
      class="bg-[url('/src/assets/images/sitesys/bg/bg-esporte-ofinal.jpg')] bg-no-repeat bg-cover"
    >
      <div class="backdrop-opacity-50 bg-light/30">
        <div class="container py-24 mx-auto px-4">
          <div class="anim4-scroll">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="text-dark text-lg md:text-xl font-bold font-amatic">
                <p class="mb-16">
                  {{ $t('sport.description') }}
                </p>
              </div>
              <div
                class="text-dark text-lg font-bold font-amatic order-first md:order-last"
              >
                <h2
                  class="trigger4-scroll text-5xl text-green-600/80 font-normal font-montserrat tracking-wide drop-shadow-text-sm break-words"
                >
                  {{ $t('sport.title') }}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-24 mx-auto px-4">
      <!-- Artist 1 -->
      <div class="container grid grid-cols-1 lg:grid-cols-2 gap-4 pt-32">
        <div>
          <h2
            class="text-4xl text-green-500/60 font-normal font-amatic mb-4 tracking-wide drop-shadow-text-sm"
          >
            {{ $t('sport.artist1') }}
          </h2>

          <p class="mb-16 text-lg font-bold font-amatic">
            {{ $t('sport.artist1Description') }}
            <RouterLink to="/freeslack" class="text-blue-500">{{
              $t('sport.more')
            }}</RouterLink>
          </p>
        </div>

        <div
          class="text-dark text-lg font-bold font-amatic order-first md:order-first"
        >
          <RouterLink to="/freeslack">
            <img :src="imgUrlLogo" alt="" />
          </RouterLink>
        </div>
      </div>
      <div class="container mx-auto bg-white rounded-md py-16 mt-16 mb-32">
        <div class="flex justify-center">
          <RouterLink to="/freeslack">
            <img :src="imgUrlLogo1" alt="" class="mb-16" />
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
            :src="`https://www.youtube.com/embed/IWUPkbu18H8?loop=1&modestbranding=1`"
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
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import imgUrlLogo from '@/assets/images/sitesys/artist/artista-04.jpg'
import imgUrlLogo1 from '@/assets/images/sitesys/logo/logo-free-slack.jpg'

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
</script>

<style scoped></style>
