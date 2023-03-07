<template>
  <section id="contact" class="contact">
    <div class="container py-24 mx-auto px-4">
      <div class="anim2-scroll">
        <h2 class="trigger2-scroll text-7xl md:text-5xl mb-10 text-center">
          {{ $t('contact.title') }}
        </h2>
        <div
          class="lg:w-full mx-auto flex flex-wrap justify-center items-center"
        >
          <div class="w-full lg:py-6 mt-6 lg:mt-0">
            <p class="text-base text-center">
              {{ $t('contact.description') }}
            </p>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="px-4 w-full md:w-8/12 xl:w-5/12">
            <div class="relative rounded-lg py-8">
              <FormContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FormContact from '@/components/Sitesys/Global/Form/FormContact.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.anim2-scroll', {
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: 'power3.inOut',
    scrollTrigger: {
      trigger: '.trigger2-scroll',
      start: 'top 80%',
      end: 'center 10%',
      toggleActions: 'play none resume complete',
      markers: false,
    },
  })
})
</script>
