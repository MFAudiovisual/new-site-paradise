<template>
  <section id="about" class="about">
    <div
      class="bg-[url('/src/assets/images/sitesys/bg/bg-04.jpg')] bg-no-repeat bg-cover"
    >
      <div class="backdrop-opacity-50 bg-light/50">
        <div class="container py-24 mx-auto px-4">
          <div class="anim1-scroll">
            <div class="container grid grid-cols-1 md:grid-cols-2 gap-4">
              <h2
                class="trigger1-scroll text-4xl text-green-500/60 font-normal font-montserrat tracking-wide drop-shadow-text-sm"
              >
                SOBRE
              </h2>
              <div class="text-dark text-lg font-bold font-amatic">
                <p class="mb-16">
                  Todo mundo quer se divertir, mas mais do que isso quer fazer
                  disso uma experiência inesquecível. Entretanto, o jovem de
                  hoje quer fazer isso com responsabilidade. Nesse contexto, a
                  Paradise Entretenimento busca realizar eventos sustentáveis em
                  lugares paradisíacos, em completa interação com a natureza,
                  utilizando como parâmetros a música e o esporte.
                </p>
                <h2
                  class="text-2xl font-semibold font-amatic tracking-wide drop-shadow-text-md"
                >
                  MISSÃO
                </h2>
                <p class="mb-16">
                  Proporcionar experiências de entretenimento através da música
                  e do esporte, de maneira sustentável e em equilíbrio com a
                  natureza.
                </p>
                <h2
                  class="text-2xl font-semibold font-amatic tracking-wide drop-shadow-text-md"
                >
                  VISÃO
                </h2>
                <p class="mb-16">
                  Ser referência como canal de entretenimento agregando conteúdo
                  audiovisual sobre a Música Reggae, Esportes de Aventura e
                  lugares paradisíacos.
                </p>
                <h2
                  class="text-2xl font-semibold font-amatic tracking-wide drop-shadow-text-md"
                >
                  VALORES
                </h2>
                <p class="mb-16">
                  Cultura <br />
                  Sustentabilidade <br />
                  Aventura <br />
                  Colaborativismo <br />
                  União <br />
                  Viagem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import imageUrl1 from '@/assets/images/sitesys/about/about-01.jpg'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { RouterLink } from 'vue-router'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.anim1-scroll', {
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: 'power3.inOut',
    scrollTrigger: {
      trigger: '.trigger1-scroll',
      start: 'top 80%',
      end: 'center 10%',
      toggleActions: 'play none resume complete',
      markers: false,
    },
  })
})
</script>
