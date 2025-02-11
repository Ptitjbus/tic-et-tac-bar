<template>
    <div class="bg-black" :style="isMobile ? 'padding-top: 5rem;' : 'padding-top: 2rem;'">
        <Hero />
    </div>
</template>

<script>
import Hero from '~/components/BarsPage/Hero.vue';
export default {
  name:'BarsPage',
  components: { Hero },
  setup() {
    const baseUrl = window.location.origin
    useHead({
        title: "Établissements - Tic & Tac",
        meta: [
            {
                name: 'description',
                content : "Découvrez les bars Tic & Tac à Lyon, des lieux uniques aux ambiances street art et conviviales, installés dans les 6ᵉ et 7ᵉ arrondissements. Retrouvez nos adresses et plongez dans l'univers de nos cocktails signature, bières artisanales et planches gourmandes."
            },
            {
                property: 'og:title',
                content: "Établissements - Tic & Tac"
            },
            {
                property: 'og:description',
                content : "Découvrez les bars Tic & Tac à Lyon, des lieux uniques aux ambiances street art et conviviales, installés dans les 6ᵉ et 7ᵉ arrondissements. Retrouvez nos adresses et plongez dans l'univers de nos cocktails signature, bières artisanales et planches gourmandes."
            },
            {
                property: 'og:image',
                content: `${baseUrl}/images/cocktail2.webp`
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                name: 'twitter:image',
                content: `${baseUrl}/images/cocktail2.webp`
            }
        ]
    })
  }
}
</script>
  