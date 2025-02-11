<template>
  <div class="bg-black" :style="isMobile ? 'padding-top: 5rem;' : 'padding-top: 6rem;'">
    <Discover />
  </div>
</template>

<script>
import Discover from '~/components/Homepage/Discover.vue';
export default {
  name:'DiscoverPage',
  components: { Discover },
  setup() {
    const baseUrl = window.location.origin
    useHead({
        title: "À propos - Tic & Tac",
        meta: [
            {
                name: 'description',
                content : "Tic & Tac, c'est l'histoire de Théo et Carl, deux amis passionnés qui ont créé des bars à leur image : conviviaux, audacieux et chaleureux. Entre cocktails signature, produits locaux et esprit de quartier, découvrez leur aventure à Lyon dans les 6ᵉ et 7ᵉ arrondissements."
            },
            {
                property: 'og:title',
                content: "À propos - Tic & Tac"
            },
            {
                property: 'og:description',
                content : "Tic & Tac, c'est l'histoire de Théo et Carl, deux amis passionnés qui ont créé des bars à leur image : conviviaux, audacieux et chaleureux. Entre cocktails signature, produits locaux et esprit de quartier, découvrez leur aventure à Lyon dans les 6ᵉ et 7ᵉ arrondissements."
            },
            {
                property: 'og:image',
                content: `${baseUrl}/images/friends.webp`
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                name: 'twitter:image',
                content: `${baseUrl}/images/friends.webp`
            }
        ]
    })
  }
}
</script>
