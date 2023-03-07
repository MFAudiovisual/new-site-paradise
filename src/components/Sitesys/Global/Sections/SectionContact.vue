<template>
  <section id="contact" class="contact">
    <div class="container py-24 mx-auto px-4">
      <div class="anim2-scroll">
        <h2
          class="trigger2-scroll text-center text-4xl text-green-500/60 font-normal font-montserrat tracking-wide drop-shadow-text-sm"
        >
          {{ $t('contact.title') }}
        </h2>
        <div
          class="lg:w-full mx-auto flex flex-wrap justify-center items-center"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 break-words">
            <div class="w-full lg:py-6 mt-6 lg:mt-0">
              <div class="flex justify-center">
                <svg
                  class="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  ></path>
                </svg>
              </div>
              <p class="text-base text-center">PORTO ALEGRE - RS BRASIL</p>
            </div>
            <div class="w-full lg:py-6 mt-6 lg:mt-0">
              <div class="flex justify-center flex-wrap">
                <svg
                  class="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  ></path>
                </svg>
              </div>
              <p class="text-base text-center">
                CONTATO@PARADISEENTRETENIMENTO.COM.BR
              </p>
            </div>
            <div class="w-full lg:py-6 mt-6 lg:mt-0">
              <div class="flex justify-center">
                <svg
                  class="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  ></path>
                </svg>
              </div>
              <p class="text-base text-center">FONE +55 (51) 99101 2803</p>
            </div>
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

const company = defineProps({
  company: {
    type: String,
    default: 'SiteSys',
  },
  logo: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: 'Brief description of the company.',
  },
  email1: {
    type: String,
    default: 'contactsitesys@sitesys.com',
  },
  email2: {
    type: String,
    default: 'supportsitesys@sitesys.com',
  },
  address: {
    type: String,
    default: 'Company Address, 0000 - Company District',
  },
  phone1: {
    type: String,
    default: '99 99999-9999',
  },
  phone2: {
    type: String,
    default: '88 88888-8888',
  },
  facebook: {
    type: String,
    default: 'https://www.facebook.com/',
  },
  instagram: {
    type: String,
    default: 'https://www.instagram.com/',
  },
  youtube: {
    type: String,
    default: 'https://www.youtube.com/',
  },
})
</script>
