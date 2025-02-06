<template>
  <article class="bg-black" :style="isMobile ? 'padding-top: 5rem;' : 'padding-top: 2rem;'">
    <BarPageHero :title="pageData.shortTitle" :address="pageData.address" :year="pageData.creationYear"
      :horaires="pageData.openingHours" :image-path="pageData.image" />
    <BarPageBody :title="pageData.title" :description="pageData.description" :maplink="pageData.maplink"
      :menuLink="pageData.menuLink" :socials="pageData.socials" :intro="pageData.intro" :texts="pageData.texts" />
  </article>
</template>

<script>
import BarPageHero from '~/components/BarsPage/BarPageHero.vue';
import InstagramSvg from '~/public/svg/instagram.vue'
import BarPageBody from '~/components/BarsPage/BarPageBody.vue';
import windowWidthMixin from '~/mixins/windowWidthMixin';

export default {
  name: 'BarsPage',
  components: { BarPageHero, BarPageBody },
  mixins: [windowWidthMixin],
  setup() {

    const pageData = shallowRef({
      title: 'Tic & Tac Lyon 6',
      shortTitle: 'Lyon 6',
      address: '47 Rue Garibaldi - 69006 Lyon',
      creationYear: '2024',
      openingHours: '17h00 à 01h00',
      description: 'Bienvenue au Tic & Tac Lyon 6, votre nouveau lieu incontournable situé au 47 Rue Garibaldi, dans le sixième arrondissement de Lyon',
      image: '/images/lyon6-4.webp',
      maplink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310.8444707109082!2d4.8503109724886215!3d45.76999817927811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eaf3193f1803%3A0x4cd050ddcb80680d!2s47%20Rue%20Garibaldi%2C%2069006%20Lyon!5e1!3m2!1sfr!2sfr!4v1738792000293!5m2!1sfr!2sfr",
      menuLink: "/cartelyon6.pdf",
      socials: [
        {
          name: 'Instagram',
          link: "https://www.instagram.com/tic.et.tac.lyon6?igsh=MWpvNmE1bWh4YmMwbA==",
          icon: InstagramSvg,
        }
      ],
      intro: [
        "Bienvenue au Tic & Tac Lyon 6, votre nouveau lieu incontournable situé au 47 Rue Garibaldi, dans le sixième arrondissement de Lyon",
        "Après le succès de notre premier établissement dans le septième, nous sommes ravis de vous accueillir dans ce deuxième bar, où authenticité et convivialité continuent d'être au cœur de notre démarche.",
        "Avec sa décoration street art, réalisée par quatre artistes talentueux, Tic & Tac Lyon 6 mêle ambiance urbaine et esprit chaleureux."
      ],
      texts: [
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