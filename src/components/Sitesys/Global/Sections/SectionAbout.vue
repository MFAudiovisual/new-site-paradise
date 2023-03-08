<template>
  <section id="about" class="about">
    <div
      class="bg-[url('/src/assets/images/sitesys/bg/bg-14.jpg')] bg-no-repeat bg-cover"
    >
      <div class="backdrop-opacity-50 bg-light/80">
        <div class="container py-24 mx-auto px-4">
          <div class="anim1-scroll">
            <div class="container grid grid-cols-1 md:grid-cols-2 gap-4">
              <h2
                class="trigger1-scroll text-5xl text-green-600/80 font-normal font-montserrat tracking-wide drop-shadow-text-sm break-words"
              >
                {{ $t('about.title') }}
              </h2>
              <div class="text-dark text-lg md:text-xl font-bold font-amatic">
                <p class="mb-16">
                  {{ $t('about.description') }}
                </p>
                <h2
                  class="text-2xl font-semibold font-amatic tracking-wide drop-shadow-text-md"
                >
                  {{ $t('about.mission') }}
                </h2>
                <p class="mb-16">
                  {{ $t('about.textMission') }}
                </p>
                <h2
                  class="text-2xl font-semibold font-amatic tracking-wide drop-shadow-text-md"
                >
                  {{ $t('about.vision') }}
                </h2>
                <p class="mb-16">
                  {{ $t('about.textVision') }}
                </p>
                <h2
                  class="text-2xl font-semibold font-amatic tracking-wide drop-shadow-text-md"
                >
                  {{ $t('about.values') }}
                </h2>
                <p class="mb-16 inline-block">
                  {{ $t('about.textValues') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import imageUrl1 from '@/assets/images/sitesys/about/about-01.jpg'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { RouterLink } from 'vue-router'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.anim1-scroll', {
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: 'power3.inOut',
    scrollTrigger: {
      trigger: '.trigger1-scroll',
      start: 'top 80%',
      end: 'center 10%',
      toggleActions: 'play none resume complete',
      markers: false,
    },
  })
})
</script>
