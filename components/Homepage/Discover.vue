<template>
  <div class="container mb-5 bg-black">
    <div class="row">
      <div class="col-sm-6 d-flex flex-column justify-content-center align-items-center">
        <div style="width: 95%;">
          <MainTitle label="L’esprit Tic & Tac" :centered="!isMobile"></MainTitle>
        </div>

        <div class="discover-text mt-4" style="width: 95%;">
          <p v-for="(text, index) in texts" :key="index" class="text-light qualityParag textJustify text-pretty mb-2" style="font-size: 16px;" >
              {{ text }}
          </p>
        </div>
      </div>

      <div class="col-sm-6 d-flex flex-column justify-content-center align-items-center">
          <img style="width: 80%;" :src="discoverImage" alt="Discover tic&tac bar image">
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import MainTitle from '@/components/UI/Title.vue'
import windowWidthMixin from '@/mixins/windowWidthMixin'
import discoverImg from "~/assets/img/discover.jpg"

export default {
  name: 'Discover',
  components: { MainTitle },
  mixins: [windowWidthMixin],
  setup() {
    let photos = reactive({
      discoverImage: ref(discoverImg)
    })

    const texts = ref([
      "L'histoire du Tic & Tac débute en 2018, lors d'une conversation spontanée entre Théo et Carl, deux amis inséparables rencontrés sur les bancs de la fac. Ce surnom, « Tic & Tac », leur a été donné par leurs proches, tant leur complicité était évidente. Lorsqu'ils ont décidé de lancer leur premier bar, ce nom s'est imposé naturellement comme une évidence.",
      "Initialement, leur rêve était d'ouvrir un bar à Valence, en Espagne. Mais c'est à Lyon qu'ils ont choisi de poser leurs valises. En octobre 2022, ils inaugurent leur premier établissement au cœur du septième arrondissement, sur la place Jules Guesdes. Avec son ambiance chaleureuse, sa déco street art et son esprit de quartier, le Tic & Tac Lyon 7 rencontre un véritable succès.",
      "Au cœur du projet se trouve une véritable passion pour les liqueurs maison. Théo et Carl ont consacré des centaines d'essais à élaborer ces recettes uniques, qui sont aujourd'hui la signature de leurs cocktails.",
      "Fort de cette belle aventure, Théo et Carl décident de franchir une nouvelle étape en s'associant à leur ami Thomas pour ouvrir un deuxième bar. En 2024, ils donnent naissance au Tic & Tac Lyon 6, situé rue Garibaldi. Ce nouvel établissement, tout comme le premier, propose une offre gourmande et locale : cocktails originaux, bières artisanales, vins sélectionnés, spiritueux, et des planches généreuses composées de produits locaux.",
      "Tic & Tac, c'est plus qu'un bar : c'est une histoire d'amitié, de voyages et de passion, un lieu pensé pour partager de bons moments, à l'image de ses fondateurs et de leur quête d'excellence.",
    ])

    
    return {...toRefs(photos), texts}
  }
}
</script>