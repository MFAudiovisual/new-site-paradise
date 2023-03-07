<template>
  <section id="artists" class="artists">
    <div
      class="bg-[url('/src/assets/images/sitesys/bg/bg-cast.jpg')] bg-no-repeat bg-cover"
    >
      <div class="container py-24 mx-auto px-4">
        <div class="anim3-scroll">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="text-dark text-lg font-bold font-amatic">
              <p class="mb-16">
                A Paradise Entretenimento gerencia a carreira de artistas de
                Reggae, pois entende que o ritmo criado na Jamaica sintetiza
                suas intenções de gerar mensagens e ações de paz e consciência
                através do entretenimento. Dentre nosso casting podemos destacar
                os seguintes artistas:
              </p>
            </div>
            <div
              class="text-dark text-lg font-bold font-amatic order-first md:order-last"
            >
              <h2
                class="trigger3-scroll text-4xl text-green-500/60 font-normal font-montserrat tracking-wide drop-shadow-text-sm"
              >
                ARTISTAS
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-24 mx-auto px-4">
      <!-- Artist 1 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-32">
        <div>
          <h2
            class="text-4xl text-green-500/60 font-normal font-amatic mb-4 tracking-wide drop-shadow-text-sm"
          >
            GrooVI
          </h2>

          <p class="mb-16 text-lg font-bold font-amatic">
            A GrooVI surgiu em Porto Alegre, inspirada nas “backing bands” das
            Ilhas Virgens. A sigla “VI” representa o “New Roots”, música com
            fundamentos espirituais africanos. A banda faz um resgate ancestral
            à espiritualidade através do Reggae, com letras que buscam despertar
            a consciência. <a href="#" class="text-blue-500">Saiba Mais...</a>
          </p>
        </div>

        <div
          class="text-dark text-lg font-bold font-amatic order-first md:order-first mb-4"
        >
          <a href="#">
            <img
              src="../../../../assets/images/sitesys/artist/artista-02.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="mx-auto bg-white rounded-md py-16 mt-16 mb-32">
        <div class="flex justify-center">
          <a href="#">
            <img
              src="../../../../assets/images/sitesys/logo/logo-grooVI-p.jpg"
              alt=""
            />
          </a>
        </div>
        <div
          class="lg:w-full mx-auto flex flex-wrap justify-center items-center"
        >
          <div class="w-full py-16">
            <iframe
              class="mb-4"
              style="border-radius: 12px"
              src="https://open.spotify.com/embed/artist/3PC6g5aPShT6fF0eUuYPAH?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="1"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div
          class="lg:w-full mx-auto flex flex-wrap justify-center items-center"
        >
          <iframe
            id="ytplayer"
            type="text/html"
            width="720"
            height="405"
            :src="`https://www.youtube.com/embed/qlmwIVmsn3Y?loop=1&modestbranding=1`"
            frameborder="0"
            allowfullscreen
            class="m-16 my-auto"
          />
        </div>
      </div>
      <!-- Artist 2 -->
      <div class="container grid grid-cols-1 lg:grid-cols-2 gap-4 pt-32">
        <div>
          <h2
            class="text-4xl text-green-500/60 font-normal font-amatic mb-4 tracking-wide drop-shadow-text-sm"
          >
            Skafolia
          </h2>

          <p class="mb-16 text-lg font-bold font-amatic">
            O Skafolia faz a fusão de marchinhas tradicionais de Carnaval com o
            SKA, ritmo jamaicano criado na década de 60, que deu origem ao
            Reggae. Surgido em Porto Alegre em 2011, é o primeiro bloco SKA do
            Brasil e se caracteriza pela irreverência dos vocais, somado ao
            balanço da cozinha e ao peso dos metais, formando uma mistura de
            ritmos que só acontece no Skafolia.
            <a href="#" class="text-blue-500">Saiba Mais...</a>
          </p>
        </div>

        <div
          class="text-dark text-lg font-bold font-amatic order-first md:order-first"
        >
          <a href="#">
            <img
              src="../../../../assets/images/sitesys/artist/artista-03.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="container mx-auto bg-white rounded-md py-16 mt-16 mb-32">
        <div class="flex justify-center">
          <a href="#">
            <img
              src="../../../../assets/images/sitesys/logo/logo-skafolia.jpg"
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
            :src="`https://www.youtube.com/embed/kCNuJj9hXrg?loop=1&modestbranding=1`"
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
import imgUrl1 from '@/assets/images/sitesys/gallery/image-01.jpg'
import imgUrl2 from '@/assets/images/sitesys/gallery/image-02.jpg'
import imgUrl3 from '@/assets/images/sitesys/gallery/image-03.jpg'
import imgUrl4 from '@/assets/images/sitesys/gallery/image-04.jpg'
import imgUrl5 from '@/assets/images/sitesys/gallery/image-05.jpg'
import imgUrl6 from '@/assets/images/sitesys/gallery/image-06.jpg'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.anim3-scroll', {
    // y: 100,
    opacity: 0,
    duration: 0.5,
    ease: 'power3.inOut',
    scrollTrigger: {
      trigger: '.trigger3-scroll',
      start: 'top 80%',
      end: 'center 10%',
      toggleActions: 'play none resume complete',
      markers: false,
    },
  })
})

const GalleryImgs = [
  {
    id: '1',
    title: '',
    description: '',
    src: imgUrl1,
  },
  {
    id: '2',
    title: '',
    description: '',
    src: imgUrl2,
  },
  {
    id: '3',
    title: '',
    description: '',
    src: imgUrl3,
  },
  {
    id: '4',
    title: '',
    description: '',
    src: imgUrl4,
  },
  {
    id: '5',
    title: '',
    description: '',
    src: imgUrl5,
  },
  {
    id: '6',
    title: '',
    description: '',
    src: imgUrl6,
  },
]
</script>
