<template>
  <section id="home" class="home">
    <SliderHero size="76vh" :sliders="sliderImg" />
  </section>
</template>

<script setup>
import SliderHero from '@/components/Sitesys/Global/Slider/SliderHero.vue'

import imgUrl1 from '@/assets/images/sitesys/sliders/hero-01.jpg'
import imgUrl2 from '@/assets/images/sitesys/sliders/hero-02.jpg'
import imgUrl3 from '@/assets/images/sitesys/sliders/hero-03.jpg'
import imgUrl4 from '@/assets/images/sitesys/sliders/hero-04.jpg'

const sliderImg = [
  {
    id: '1',
    title: 'Title 1',
    description: 'Lorem ipsum dolor sit amet adipisicing elit.',
    actionLabel: 'Get Started',
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
    title: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    actionLabel: '',
    actionUrl: '/',
    image: imgUrl3,
  },
  {
    id: '4',
    title: '',
    description: '',
    actionLabel: '',
    actionUrl: '',
    image: imgUrl4,
  },
]
</script>
