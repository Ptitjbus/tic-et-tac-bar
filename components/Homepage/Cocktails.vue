<template>

  <div class="container my-5">
    <MainTitle label="Galerie de cocktails" :centered="isMobile" />

    <div class="row">
      <div v-for="(cocktail, index) in cocktails" :key="index" class="col-md-4 col-6 g-4">
        <div class="cardCarrou">
          <img width="400" height="500" :src="cocktail.src"  class="card-img-top" :alt="cocktail.alt" loading="eager" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import MainTitle from '@/components/UI/Title.vue'
import windowWidthMixin from '@/mixins/windowWidthMixin'
import cocktail1 from "~/assets/img/cocktail7.png"
import cocktail2 from "~/assets/img/cocktail2.png"
import cocktail3 from "~/assets/img/cocktail3.png"
import cocktail4 from "~/assets/img/cocktail4.png"
import cocktail5 from "~/assets/img/cocktail5.png"
import cocktail6 from "~/assets/img/cocktail6.png"

export default {
  name: 'Cocktails',
  components: { MainTitle },
  mixins: [windowWidthMixin],
  setup() {
    let photos = reactive({
      Cocktail1: ref(cocktail1),
      Cocktail2: ref(cocktail2),
      Cocktail3: ref(cocktail3),
      Cocktail4: ref(cocktail4),
      Cocktail5: ref(cocktail5),
      Cocktail6: ref(cocktail6),
    })

    const cocktails = ref([
      
      {
        src: photos.Cocktail2,
        alt: 'cocktail image'
      },
      {
        src: photos.Cocktail3,
        alt: 'cocktail image'
      },
      {
        src: photos.Cocktail4,
        alt: 'cocktail image'
      },
      {
        src: photos.Cocktail5,
        alt: 'cocktail image'
      },
      {
        src: photos.Cocktail6,
        alt: 'cocktail image'
      },
      {
        src: photos.Cocktail1,
        alt: 'cocktail image'
      },
    ])

    
    return {...toRefs(photos), cocktails}
  }
}
</script>