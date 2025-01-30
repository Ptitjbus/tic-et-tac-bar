<template>
  <div class="container mt-4 mb-32">

    <div  class="flex flex-col justify-content-center align-items-center text-white my-16">
        <MainTitle label="Nos offres" centered />
        <p class="text-center mt-3 lg:text-lg font-light">
          Offrez vous les meilleurs produits locaux, et savourez les créations et liqueurs maison faîtes avec soin.
        </p>
    </div>

    <div class="row gap-3 md:!gap-0 no-gutters">
      <div v-for="(offer, index) in offers" :key="index" class="col-sm-3 relative ">
        <p class="text-white offer-text d-flex flex-column justify-content-center align-items-center text-3xl md:text-lg lg:text-2xl xl:text-3xl font-semibold">
            <span class="text-[#ff8000]">
              {{offer.orangeLabel}}
            </span>
            {{ offer.whiteLabel }}
        </p>
        <div class="offer-filter"></div>
        <img :src="offer.src" :alt="offer.label" class="offer-image"/>
      </div>
    </div>
  </div>

</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import windowWidthMixin from '@/mixins/windowWidthMixin'
import MainTitle from '../UI/Title.vue'
import offerCocktails from "~/assets/img/offer-cocktails.jpg"
import offerLiquors from "~/assets/img/offer-liquors.jpg"
import offerBeers from "~/assets/img/offer-beers.jpg"
import offerBoards from "~/assets/img/offer-boards.jpg"

export default {
  name: 'Offer',
  components: { MainTitle },
  mixins: [windowWidthMixin],
  setup() {
    let photos=reactive({
      offerCocktails: ref(offerCocktails),
      offerLiquors: ref(offerLiquors),
      offerBeers: ref(offerBeers),
      offerBoards: ref(offerBoards),
    })

    const offers = ref([
      {
        orangeLabel: 'Cocktails',
        whiteLabel: 'création',
        src: photos.offerCocktails
      },
      {
        orangeLabel: 'Liqueurs',
        whiteLabel: 'maison',
        src: photos.offerLiquors
      },
      {
        orangeLabel: 'Bières',
        whiteLabel: 'locales',
        src: photos.offerBeers
      },
      {
        orangeLabel: 'Planches',
        whiteLabel: 'régionales',
        src: photos.offerBoards
      }
    ])

    return {...toRefs(photos), offers}
  }
}

</script>

<style lang="scss" scoped>
@font-face {
    font-family: "Noto Sans";
    src: local("Noto Sans"),
    url(@/assets/fonts/NotoSans-Regular.ttf) format("truetype");
}
.no-gutters {
    margin-right: 0;
    margin-left: 0;

    > .col,
    > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
    }
}
.offer-image{
    position: relative;
    width:100%;
    aspect-ratio: 1/1;
    object-fit: cover;
}
.offer-filter{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
}
.offer-text {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
}
.offer-title-container{
  width: 100%;
  aspect-ratio: 4/1;
  // z-index: 3;
  // border: 1px solid red;
}
.offer-title{
  width: 20%;
  aspect-ratio: 1/1;
  background-color: #000;
  transform: rotate(45deg);
  margin-top: -25%;
  z-index: 3;
  // border: 1px solid red;
}
.offer-title-text{
  width: 100%;
  height: 60%;
  transform: rotate(-45deg);
  // border: 1px solid green;
}
.offer-title-text p{
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-top: 1rem;
  z-index: 3;
}

</style>