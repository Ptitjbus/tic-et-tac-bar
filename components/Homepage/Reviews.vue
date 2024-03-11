<template>
  <div class="container-fluid pt-global mb-5" style="max-height: 500px; overflow: scroll; background-color: black;" >
    <div class="container sk-ww-google-reviews" data-embed-id='235478'>
      <component is="script" src="https://widgets.sociablekit.com/google-reviews/widget.js" async defer></component>
    </div>
  </div>

  <!-- <div class="container-fluid pt-global mb-5" style="background-color: rgba(255, 255, 255, 0.9)">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center py-4" style="height: fit-content">
        <div v-for="(review, index) in reviews" :key="index" class="col-sm text-white">
          <div 
            class="shadow heightAvis text-white bg-black d-flex flex-column justify-content-around align-items-start py-3 px-4" 
            style="border-radius: 30px;"
            :class="isMobile ? 'mb-3' : ''"
          >
            <div class="d-flex align-items-center justify-content-center fw-bold text-white">
              {{ review.name }}
            </div>

            <h2 class="rounded-circle badge fs-6" style="margin-left: -0.7rem; color: #ff8000">
              <Icon name="mdi:star" color="#ff8000" />
              <Icon name="mdi:star" color="#ff8000" />
              <Icon name="mdi:star" color="#ff8000" />
              <Icon name="mdi:star" color="#ff8000" />
              <Icon name="mdi:star" color="#ff8000" />
            </h2>

            <p class="text-white" style="font-size: 0.85rem">{{ review.text }}</p>
          </div>
        </div>

        <div class="container">
          <div class="d-flex justify-content-center">
            <div class="pt-4 text-center">
              <h3 class="text-black fw-bold">Du lundi au samedi de 16h30 à 00h30</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { ref } from 'vue'
import windowWidthMixin from '@/mixins/windowWidthMixin'
export default {
  name: 'Reviews',
  mixins: [windowWidthMixin],
  setup() {
    const reviews = ref([
      {
        name: 'Maxime M',
        text: "Bar super sympas avec des barmans au top, très accueillant. Des très bons cocktails et bières pour des prix tout à fait abordables."
      },
      {
        name: 'Robin B',
        text: "J’ai découvert ce bar par hasard et je peux que le conseiller !! J’ai vraiment passé un super moment ! Et les cocktails sont excellents."
      },
      {
        name: 'Anais T',
        text: "Des cocktails qui sortent de l'ordinaire, des barmans passionnés et soucieux de leur clientèle. Je reviendrai sans hésiter !"
      }
    ])
    return {reviews}
  }
}
</script>