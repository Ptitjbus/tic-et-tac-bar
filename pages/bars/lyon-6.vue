<template>
  <article class="bg-black" :style="isMobile ? 'padding-top: 5rem;' : 'padding-top: 2rem;'">
    <BarPageHero title="Lyon 6" address="47 Rue Garibaldi, 69006 Lyon" year="2023" horaires="17h00 à 01h00" :image-path="pageData.image" />
    <div class="flex flex-col lg:flex-row px-3 sm:!px-12 lg:!px-40 min-h-screen pb-24 relative">
      <div class="flex flex-col gap-5 basis-2/3 lg:pr-8 lg:mr-8 ">
        <section class="flex flex-col gap-3 text-gray-200">
          <p v-for="(text, index) in intro" :key="index" class="text-pretty text-base *:text-orange-400">
            {{ text }}
          </p>
        </section>
        <section v-for="(text, index) in texts" :key="index" class="flex flex-col gap-2 text-gray-200 font-light">
          <h2 v-if="text.title" class="text-2xl font-semibold mb-2 text-white">{{ text.title }}</h2>
          <p v-if="text.sentences" v-for="(sentence, index) in text.sentences" :key="index" class="text-pretty text-base">
            {{ sentence }}
          </p>
          <NuxtImg v-if="text.imagePath" :src="text.imagePath" class="h-96 object-cover rounded-md" />
        </section>
      </div>
      <div class="flex flex-col basis-1/3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.1789863103027!2d4.83613917736641!3d45.74755757107988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb7d9e819e2b%3A0xcf8fb327d3b9188a!2sTic%20%26%20Tac%20-%20Lyon%207!5e0!3m2!1sfr!2sfr!4v1736792434018!5m2!1sfr!2sfr&mode=night"
          width="600" height="450" class="w-full h-128 rounded-md overflow-clip" allowfullscreen></iframe>
      </div>
    </div>
  </article>
</template>

<script>
import BarPageHero from '~/components/BarsPage/BarPageHero.vue';
export default {
  name: 'BarsPage',
  components: { BarPageHero },
  setup() {
    const pageData = ref({
      title: 'Tic & Tac Lyon 6',
      description: 'Bienvenue au Tic & Tac Lyon 6, votre nouveau lieu incontournable situé au 47 Rue Garibaldi, dans le sixième arrondissement de Lyon',
      image: '/images/test-2.webp'
    })

    

    const intro = ref([
      "Bienvenue au Tic & Tac Lyon 6, votre nouveau lieu incontournable situé au 47 Rue Garibaldi, dans le sixième arrondissement de Lyon",
      "Après le succès de notre premier établissement dans le septième, nous sommes ravis de vous accueillir dans ce deuxième bar, où authenticité et convivialité continuent d'être au cœur de notre démarche.",
      "Avec sa décoration street art, réalisée par quatre artistes talentueux, Tic & Tac Lyon 6 mêle ambiance urbaine et esprit chaleureux."
    ])

    const texts = ref([
      {
        title: "Une ambiance unique et un espace modulable",
        sentences: [
          "Notre bar à cocktails et bières vous ouvre les portes d'un univers vibrant et artistique, avec une salle principale surplombée d'une mezzanine entièrement privatisable au charme unique. Ces deux espaces sont sublimés par des œuvres street art réalisées par quatre artistes talentueux.",
          "Sur la mezzanine, laissez libre cours à votre créativité : chacun peut écrire ou dessiner sur les tables, les murs et même le plafond, ajoutant une touche d'art participatif à l'atmosphère. Un cadre parfait pour partager des moments entre amis ou pour se retrouver autour d'un verre dans une ambiance conviviale et inspirante."
        ],
      },
      {
        title: "Une carte qui séduira tous les palais",
        sentences: [
          "Dans la continuité de notre premier bar, Tic & Tac Lyon 6 vous propose une vaste sélection de cocktails, classiques ou originaux, élaborés avec passion à partir de nos liqueurs maison. Les amateurs de bière pourront savourer nos 6 bières et cidre artisanaux à la pression, ainsi qu'une sélection de bières en bouteille.",
          "Pour varier les plaisirs, nous proposons également des vins sélectionnés, des spiritueux de qualité et des boissons sans alcool."
        ],
      },
      {
        imagePath: "/images/offer-boards.jpg"
      },
      {
        title: "Une offre gourmande et locale",
        sentences: [
          "Pour accompagner vos boissons, laissez-vous séduire par nos saucissons artisanaux, nos terrines de la maison Sibilia et nos planches généreuses, composées de charcuteries, fromages et tartinades locales. Une expérience savoureuse et authentique à partager entre amis ou en famille."
        ],
      },
      {
        title: "Une terrasse en plein cœur de Lyon",
        sentences: [
          "nstallez-vous sur notre terrasse et laissez-vous porter par l’atmosphère vivante de la rue Garibaldi. Entre la terrasse principale de 20 places, accessible toute l’année, et la placette voisine offrant 20 places supplémentaires en saison, chaque espace vous invite à savourer un verre dans une ambiance conviviale et décontractée.",
        ],
      }
    ])

    watch(pageData, (newData) => {
      useHead({
        title: newData.title,
        meta: [
          {
            name: 'description',
            content: newData.description
          },
          {
            property: 'og:title',
            content: newData.title
          },
          {
            property: 'og:description',
            content: newData.description
          },
          {
            property: 'og:image',
            content: newData.image
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image'
          },
          {
            name: 'twitter:image',
            content: newData.image
          }
        ]
      })
    }, { immediate: true })

    return { intro, texts, pageData }
  }
}
</script>