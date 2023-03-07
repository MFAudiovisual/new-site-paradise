<template>
  <section id="not-found">
    <div class="flex items-center justify-center h-screen">
      <div
        class="min-w-fit flex-col px-6 border border-gray-400/50 bg-white dark:bg-dark py-14 shadow-md rounded-[4px]"
      >
        <div class="mb-8 flex justify-center">
          <img class="w-100" :src="imgUrl" alt="" />
        </div>
        <section class="flex items-center h-full dark:text-gray-100">
          <div
            class="container flex flex-col items-center justify-center px-5 mx-auto"
          >
            <div class="max-w-md text-center">
              <h2 class="mb-4 font-extrabold text-4xl dark:text-gray-600">
                <span class="sr-only"> Erro </span>
                404
              </h2>
              <p class="mb-16 text-lg font-semibold md:text-1xl">
                Sorry, we couldn't find this page.
              </p>
              <a
                rel="noopener noreferrer"
                href="/"
                class="px-8 py-4 font-semibold rounded bg-brand text-gray-200"
              >
                Back to homepage
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import imgUrl from '@/assets/images/sitesys/logo/logo-header-dark.png'

const navbarLogo = imgUrl
</script>
