<template>
  <div
    class="parallax--image"
    :style="{
      backgroundImage: `url(${image})`,
      height: size,
    }"
  >
    <div
      :style="{
        width: '100%',
        backgroundColor: color,
        opacity: opacity,
      }"
    />
    <div class="parallax--container">
      <slot />
    </div>
  </div>
</template>

<script setup>
import imgUrl from '@/assets/images/sitesys/parallax/parallax-01.png'

defineProps({
  image: {
    type: String,
    default: imgUrl,
  },
  size: {
    type: String,
    default: '60vh',
  },
  color: {
    type: String,
    default: '#1D1D1D',
  },
  opacity: {
    type: Number,
    default: 0.1,
  },
})
</script>

<style lang="scss" scoped>
.parallax--image {
  background-position: center;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  position: relative;
  background-attachment: fixed;
}
.parallax--container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  text-align: center;
  font-weight: 700;
}
</style>
