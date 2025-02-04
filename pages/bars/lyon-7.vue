<template>
  <article class="bg-black" :style="isMobile ? 'padding-top: 5rem;' : 'padding-top: 2rem;'">
    <BarPageHero :title="pageData.shortTitle" :address="pageData.address" :year="pageData.creationYear" :horaires="pageData.openingHours" :image-path="pageData.image" />
    <div class="flex flex-col lg:flex-row max-w-screen-xl pb-24 md:px-12 relative container">
      <div class="flex flex-col gap-5 basis-2/3 lg:pr-8 lg:mr-8 sm:mb-8">
        <section class="flex flex-col gap-3 text-gray-200">
          <p v-for="(text, index) in pageData.intro" :key="index" class="text-pretty text-lg *:text-orange-400">
            {{ text }}
          </p>
        </section>
        <section v-for="(text, index) in pageData.texts" :key="index" class="flex flex-col gap-2 text-gray-200 font-light">
          <h2 v-if="text.title" class="text-2xl font-semibold mb-2 text-white">{{ text.title }}</h2>
          <p v-if="text.sentences" v-for="(sentence, index) in text.sentences" :key="index" class="text-pretty text-lg">
            {{ sentence }}
          </p>
          <NuxtImg v-if="text.imagePath" :src="text.imagePath" class="h-96 object-cover rounded-md" />
        </section>
      </div>
      <div class="flex flex-col gap-12 basis-1/3">
        <div class="flex flex-col gap-3 bg-white/10 w-full p-4 text-white">
          <h3 class="text-2xl font-semibold border-b-2 border-orange-400 w-fit">Carte</h3>
          <Button :to="pageData.menuLink" label="Voir la carte" />
        </div>
        <div class="flex flex-col gap-3 bg-white/10 w-full p-4 text-white">
          <h3 class="text-2xl font-semibold border-b-2 border-orange-400 w-fit">Localisation</h3>
          <iframe
            :src="pageData.maplink"
            width="600" height="450" class="w-full h-128  overflow-clip" allowfullscreen></iframe>
        </div>
        <div class="flex flex-col gap-3 bg-white/10 w-full p-4 text-white">
          <h3 class="text-2xl font-semibold border-b-2 border-orange-400 w-fit">Suivez nous</h3>
          <div v-for="social in pageData.socials" class="flex items-center justify-between border-b pb-2 border-white/10 group cursor-pointer" :key="social.name">
            <div class="flex gap-3">
              <div class="rounded-full w-9 h-9 flex justify-center items-center  bg-white/10">
                <component :is="social.icon" class="w-4 h-4 fill-white group-hover:fill-orange-400 transition-all duration-300 ease-in-out" />
              </div>
              <a :href="social.link" target="_blank" rel="no-referer" class="flex items-center text-base font-semibold group-hover:text-orange-400 transition-all duration-300 ease-in-out">{{ social.name}}</a>
            </div>
            <Arrow class="h-5 w-5 fill-orange-400 group-hover:translate-x-1 transition-all duration-300 ease-in-out"/>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import BarPageHero from '~/components/BarsPage/BarPageHero.vue';
import InstagramSvg from '~/public/svg/instagram.vue'
import FacebookSvg from '~/public/svg/facebook.vue'
import Arrow from '~/public/svg/arrow.vue';
import Button from '~/components/UI/Button.vue';

export default {
  name: 'BarsPage',
  components: { BarPageHero, InstagramSvg, FacebookSvg, Arrow, Button },
  setup() {
    const pageData = ref({
      title: 'Tic & Tac Lyon 7',
      shortTitle: 'Lyon 7',
      address: '35 Rue Sébastien Gryphe, 69007 Lyon',
      creationYear: '2022',
      openingHours: '17h00 à 01h00',
      description: 'Bienvenue au Tic & Tac Lyon 7, votre adresse incontournable située au cœur de la place Jules Guesdes, dans le septième arrondissement de Lyon',
      image: '/images/lyon7.webp',
      maplink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.1789863103027!2d4.83613917736641!3d45.74755757107988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb7d9e819e2b%3A0xcf8fb327d3b9188a!2sTic%20%26%20Tac%20-%20Lyon%207!5e0!3m2!1sfr!2sfr!4v1736792434018!5m2!1sfr!2sfr&mode=night",
      menuLink: "/carte.pdf",
      socials: [
        {
          name: 'Facebook',
          link: "https://www.facebook.com/people/Tic-Tac-Bar/100083151612004/",
          icon: FacebookSvg,
        },
        {
          name: 'Instagram',
          link: "https://www.instagram.com/tic.et.tac.lyon7?igsh=M2w1YzJudWFjbGJw",
          icon: InstagramSvg,
        }
      ],
      intro: [
        "Bienvenue au Tic & Tac Lyon 7, votre adresse incontournable située au cœur de la place Jules Guesdes, dans le septième arrondissement de Lyon. Plus qu'un simple bar, nous sommes un véritable lieu de vie de quartier, où proximité, convivialité et authenticité sont au rendez-vous.",
        "Dans une ambiance chaleureuse, notre petite équipe passionnée vous accueille comme à la maison, avec le sourire et une attention particulière pour chacun de nos clients."
      ],
      texts: [
        {
          title: "Une ambiance unique et artistique",
          sentences: [
            "Notre bar à cocktails et bières vous ouvre les portes d'un univers vibrant et artistique, avec deux salles au charme unique, sublimées par des œuvres street art réalisées par quatre artistes talentueux.",
            "Dans l'une de ces salles, laissez libre cours à votre créativité : chacun est invité à écrire ou dessiner sur les tables, les murs et même le plafond, transformant cet espace en une œuvre collective en constante évolution.",
            "Un cadre parfait pour partager des moments entre amis ou se retrouver autour d'un verre dans une atmosphère conviviale et pleine d'expression artistique.",
          ],
        },
        {
          title: "Une carte qui séduira tous les palais",
          sentences: [
            "Chez Tic & Tac Lyon 7, nous vous proposons une vaste sélection de cocktails, classiques ou originaux, élaborés avec soin à partir de nos liqueurs maison. ",
            "Les amateurs de bière ne sont pas en reste, avec une large gamme de bières artisanales et régionales, disponibles en pression ou en bouteille.",
            "Et pour varier les plaisirs, découvrez également nos vins sélectionnés, nos spiritueux de qualité, ou encore nos boissons sans alcool, idéales pour tous les goûts.",
          ],
        },
        {
          title: "Une offre gourmande et locale",
          sentences: [
            "Côté gourmandise, nous mettons à l'honneur les produits locaux : saucissons artisanaux, terrines de la maison Sibilia, et planches généreuses composées de charcuteries, fromages et tartinades soigneusement sélectionnés. Des produits authentiques pour accompagner vos moments de partage."
          ],
        },
        {
          title: "Une terrasse abritée et conviviale",
          sentences: [
            "Dès les premiers rayons de soleil, installez-vous sur notre terrasse abritée, un espace agréable pour profiter de l’ambiance animée et chaleureuse de la place Jules Guesdes.",
          ],
        }
      ],

    })

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

    return { pageData }
  }
}
</script>
  