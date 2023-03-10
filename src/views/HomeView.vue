<template>
  <main>
    <SectionHome />
    <BannerImage :image="bgUrl1">
      <div
        class="text-dark text-lg font-bold font-amatic order-first md:order-last"
      >
        <h2
          class="text-4xl text-light text-center font-normal font-amatic tracking-wide drop-shadow-lg"
        >
          {{ $t('banner.title1') }}
        </h2>
      </div>
    </BannerImage>
    <SectionAbout />
    <ParallaxMulti :sliders="sliderImg" size="82vh" />
    <SectionArtists />
    <SliderImage
      size="60vh"
      :sliders="sliderImg"
      background-color="#0000001a"
    />
    <BannerImage :image="bgUrl2">
      <div
        class="text-dark text-lg font-bold font-amatic order-first md:order-last"
      >
        <h2
          class="text-4xl text-light text-center font-normal font-amatic tracking-wide drop-shadow-lg"
        >
          {{ $t('banner.title2') }}
        </h2>
      </div>
    </BannerImage>

    <SectionSport />
    <BannerImage :image="bgUrl3">
      <div
        class="text-dark text-lg font-bold font-amatic order-first md:order-last"
      >
        <h2
          class="text-4xl text-light text-center font-normal font-amatic tracking-wide drop-shadow-lg"
        >
          {{ $t('banner.title3') }}
        </h2>
      </div>
    </BannerImage>
    <SectionContact />
  </main>
</template>

<script setup>
import SectionHome from '@/components/Sitesys/Global/Sections/SectionHome.vue'
import BannerImage from '@/components/Sitesys/Global/Banner/BannerImage.vue'
import SectionAbout from '@/components/Sitesys/Global/Sections/SectionAbout.vue'
import SectionArtists from '@/components/Sitesys/Global/Sections/SectionArtists.vue'
import SectionSport from '@/components/Sitesys/Global/Sections/SectionSport.vue'
import SectionContact from '@/components/Sitesys/Global/Sections/SectionContact.vue'
import ParallaxStatic from '@/components/Sitesys/Global/Parallax/ParallaxStatic.vue'
import ParallaxMulti from '@/components/Sitesys/Global/Parallax/ParallaxMulti.vue'
import SliderImage from '@/components/Sitesys/Global/Slider/SliderImage.vue'
import { useHead } from '@vueuse/head'

import bgUrl1 from '@/assets/images/sitesys/bg/bg-18.jpg'
import bgUrl2 from '@/assets/images/sitesys/bg/bg-novidades-02.jpg'
import bgUrl3 from '@/assets/images/sitesys/bg/bg-04.jpg'

import imgUrl1 from '@/assets/images/sitesys/gallery/image-01.jpg'
import imgUrl2 from '@/assets/images/sitesys/gallery/image-07.jpg'
import imgUrl3 from '@/assets/images/sitesys/gallery/image-08.jpg'
import imgUrl4 from '@/assets/images/sitesys/gallery/image-09.jpg'

import imageUrl1 from '@/assets/images/sitesys/parallax/parallax-01.jpg'
import imageUrl2 from '@/assets/images/sitesys/parallax/parallax-02.jpg'

useHead({
  title: 'Paradise Entretenimento',
  meta: [
    {
      name: 'description',
      content: 'My description Home Page',
    },

    /* Social */
    {
      property: 'og:title',
      content: 'Paradise Entretenimento',
    },
    {
      property: 'og:description',
      content: 'SiteSyS WPA - My description Home Page',
    },
    {
      property: 'og:image',
      content: '/src/assets/images/sitesys/icons/favicon.ico',
    },
  ],
})

const sliderImg = [
  {
    id: '1',
    title: '',
    description: '',
    actionLabel: '',
    actionUrl: '/',
    image: imgUrl1,
  },
  {
    id: '2',
    title: '',
    description: '',
    actionLabel: '',
    actionUrl: '/',
    image: imgUrl2,
  },
  {
    id: '3',
    title: '',
    description: '',
    actionLabel: '',
    actionUrl: '/',
    image: imgUrl3,
  },
  {
    id: '4',
    title: '',
    description: '',
    actionLabel: '',
    actionUrl: '/',
    image: imgUrl4,
  },
]
</script>
