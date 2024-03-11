<template>
  <div class="container mb-5 bg-black">
    <div class="row">
      <div class="col-sm-6 d-flex flex-column justify-content-center align-items-center">
        <div style="width: 95%;">
          <MainTitle label="Nous découvrir" :centered="!isMobile"></MainTitle>
        </div>

        <div class="discover-text mt-4" style="width: 95%;">
          <p v-for="(text, index) in texts" :key="index" class="text-light qualityParag textJustify" style="font-size: 16px;" >
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
      'Bienvenue au bar Tic & Tac, un établissement incontournable situé au cœur de la place Jules Guesdes, dans le septième arrondissement de Lyon. Notre bar à cocktails et bières vous invite à découvrir ses deux salles au charme unique.',
      "Le bar Tic & Tac vous propose une vaste sélection de cocktails classiques et originaux, préparés avec soin à partir de liqueurs maison. Ne manquez pas l'Élixir de jouvence, un cocktail exclusif créé spécialement pour notre établissement par un talentueux Meilleur Ouvrier de France barman.",
      'En plus de nos délicieux cocktails, nous vous offrons un choix varié de bières artisanales et régionales, disponibles en pression ou en bouteille. Quelles que soient vos préférences, nous avons certainement une bière qui saura ravir vos papilles.',
      'Et si vous avez une petite faim, ne vous inquiétez pas ! Tic & Tac a pensé à tout. Dégustez nos généreuses planches à partager, préparées avec des charcuteries, des fromages et des tartinades locales, pour une expérience culinaire savoureuse.',
      "Dès l'arrivée des beaux jours, ne manquez pas l'occasion de profiter de notre magnifique terrasse, où vous pourrez vous détendre et vous imprégner de l'atmosphère animée de la place Jules Guesdes.",
    ])

    
    return {...toRefs(photos), texts}
  }
}
</script>