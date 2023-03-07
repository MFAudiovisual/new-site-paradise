<template>
  <section id="sport" class="sport">
    <div
      class="bg-[url('/src/assets/images/sitesys/bg/bg-esporte-ofinal.jpg')] bg-no-repeat bg-cover"
    >
      <div class="backdrop-opacity-50 bg-light/20">
        <div class="container py-24 mx-auto px-4">
          <div class="anim4-scroll">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="text-dark text-lg font-bold font-amatic">
                <p class="mb-16">
                  A Paradise Entretenimento cultua, entre outros esportes de
                  aventura, o slackline, um esporte de equilíbrio, que coloca as
                  pessoas em contato com outras e consigo mesmas, destacando-se
                  também pelo contato direto com a natureza. Conheça nossa
                  parceira Free Slack:
                </p>
              </div>
              <div
                class="text-dark text-lg font-bold font-amatic order-first md:order-last"
              >
                <h2
                  class="trigger4-scroll text-4xl text-green-500/60 font-normal font-montserrat tracking-wide drop-shadow-text-sm"
                >
                  ESPORTE
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-24 mx-auto px-4">
      <!-- Artist 1 -->
      <div class="container grid grid-cols-1 lg:grid-cols-2 gap-4 pt-32">
        <div>
          <h2
            class="text-4xl text-green-500/60 font-normal font-amatic mb-4 tracking-wide drop-shadow-text-sm"
          >
            Free Slack
          </h2>

          <p class="mb-16 text-lg font-bold font-amatic">
            A Paradise Entretenimento tem uma parceria com a Free Slack, uma
            organização voltada para a prática e divulgação do Slackline, um
            esporte que tem como base o equilíbrio físico e mental, condições
            fundamentais para uma vida saudável. Além de ser uma prática que
            agrega e desenvolve a consciência e valores de união, o slackline
            contribui para uma sociedade mais pacífica e integrada com o meio em
            que vivemos. A Free Slack realiza diversos eventos desenvolvendo
            oficinas, apresentações e atividades sociais, objetivando
            oportunizar a vivência e experiência através do esporte.
            <a href="#" class="text-blue-500">Saiba Mais...</a>
          </p>
        </div>

        <div
          class="text-dark text-lg font-bold font-amatic order-first md:order-first"
        >
          <a href="#">
            <img
              src="../../../../assets/images/sitesys/artist/artista-04.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="container mx-auto bg-white rounded-md py-16 mt-16 mb-32">
        <div class="flex justify-center">
          <a href="#">
            <img
              src="../../../../assets/images/sitesys/logo/logo-free-slack.jpg"
              alt=""
              class="mb-16"
            />
          </a>
        </div>
        <div
          class="lg:w-full mx-auto flex flex-wrap justify-center items-center"
        >
          <iframe
            id="ytplayer"
            type="text/html"
            width="720"
            height="405"
            :src="`https://www.youtube.com/embed/IWUPkbu18H8?loop=1&modestbranding=1`"
            frameborder="0"
            allowfullscreen
            class="m-16 my-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.anim4-scroll', {
    // y: 100,
    opacity: 0,
    duration: 0.5,
    ease: 'power3.inOut',
    scrollTrigger: {
      trigger: '.trigger4-scroll',
      start: 'top 80%',
      end: 'center 10%',
      toggleActions: 'play none resume complete',
      markers: false,
    },
  })
})
</script>

<style scoped></style>
