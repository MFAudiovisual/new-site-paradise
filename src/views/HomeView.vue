<template>
  <main>
    <SectionHome />
    <SectionAbout />
    <ParallaxMulti :sliders="sliderImg" size="52vh" />
    <SectionPhotos />
    <SliderImage
      size="50vh"
      :sliders="sliderImg"
      background-color="#0000001a"
    />
    <SectionVideos />
    <ParallaxStatic :image="imageUrl2" />
    <SectionContact />
  </main>
</template>

<script setup>
import SectionHome from '@/components/Sitesys/Global/Sections/SectionHome.vue'
import SectionAbout from '@/components/Sitesys/Global/Sections/SectionAbout.vue'
import SectionPhotos from '@/components/Sitesys/Global/Sections/SectionPhotos.vue'
import SectionVideos from '@/components/Sitesys/Global/Sections/SectionVideos.vue'
import SectionContact from '@/components/Sitesys/Global/Sections/SectionContact.vue'
import ParallaxStatic from '@/components/Sitesys/Global/Parallax/ParallaxStatic.vue'
import ParallaxMulti from '@/components/Sitesys/Global/Parallax/ParallaxMulti.vue'
import SliderImage from '@/components/Sitesys/Global/Slider/SliderImage.vue'
import { useHead } from '@vueuse/head'

import imgUrl1 from '@/assets/images/sitesys/sliders/image-01.jpg'
import imgUrl2 from '@/assets/images/sitesys/sliders/image-02.jpg'
import imgUrl3 from '@/assets/images/sitesys/sliders/image-03.jpg'
import imgUrl4 from '@/assets/images/sitesys/sliders/image-04.jpg'

import imageUrl1 from '@/assets/images/sitesys/parallax/parallax-01.jpg'
import imageUrl2 from '@/assets/images/sitesys/parallax/parallax-02.jpg'

useHead({
  title: 'SiteSyS WPA - My Home Page',
  meta: [
    {
      name: 'description',
      content: 'My description Home Page',
    },

    /* Social */
    {
      property: 'og:title',
      content: 'SiteSyS WPA - My Home Page',
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
    title: 'Title 2',
    description: '',
    actionLabel: '',
    actionUrl: '/',
    image: imgUrl2,
  },
  {
    id: '3',
    title: 'Title 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    actionLabel: '',
    actionUrl: '/',
    image: imgUrl3,
  },
  {
    id: '4',
    title: 'Title 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    actionLabel: 'Get Started',
    actionUrl: '/',
    image: imgUrl4,
  },
]
</script>
