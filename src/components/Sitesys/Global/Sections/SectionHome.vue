<template>
  <section id="home" class="home">
    <SliderHero size="100vh" :sliders="sliderImg" />
  </section>
</template>

<script setup>
import SliderHero from '@/components/Sitesys/Global/Slider/SliderHero.vue'

import imgUrl1 from '@/assets/images/sitesys/sliders/hero-01.jpg'
import imgUrl2 from '@/assets/images/sitesys/sliders/hero-02.jpg'
import imgUrl3 from '@/assets/images/sitesys/sliders/hero-03.jpg'
import imgUrl4 from '@/assets/images/sitesys/sliders/hero-04.jpg'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const sliderImg = [
  {
    id: '1',
    title: t('sliderHero.title1'),
    description: '',
    actionLabel: '',
    actionUrl: '/',
    image: imgUrl1,
  },
  {
    id: '2',
    title: t('sliderHero.title2'),
    description: '',
    actionLabel: '',
    actionUrl: '/',
    image: imgUrl2,
  },
  {
    id: '3',
    title: t('sliderHero.title3'),
    description: '',
    actionLabel: '',
    actionUrl: '/',
    image: imgUrl3,
  },
  {
    id: '4',
    title: t('sliderHero.title4'),
    description: '',
    actionLabel: '',
    actionUrl: '',
    image: imgUrl4,
  },
]
</script>
