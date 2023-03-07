<template>
  <div
    class="parallax--image"
    :style="{
      backgroundImage: `url(${image})`,
      height: size,
    }"
  >
    <div
      class="backdrop-opacity-50 bg-dark/40"
      :style="{
        width: '100%',
      }"
    />
    <div class="parallax--container">
      <slot />
    </div>
  </div>
</template>

<script setup>
import imgUrl from '@/assets/images/sitesys/bg/bg-05.jpg'

defineProps({
  image: {
    type: String,
    default: imgUrl,
  },
  size: {
    type: String,
    default: '46vh',
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
