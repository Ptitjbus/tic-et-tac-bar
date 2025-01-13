<template>
    <div class="flex flex-col lg:flex-row my-5">
      <div class="flex flex-column justify-content-center align-items-center">
        <MainTitle label="Nous concernant" centered></MainTitle>
        
        <div class="about-text mt-4" style="width: 75%;">
          <p v-for="(text, index) in texts" :key="index" class="fs-6 text-light qualityParag text-center lg:!text-justify  mb-2 text-pretty" >
            {{ text }}
          </p>
        </div>
      </div>

      <div v-if="!isTouch" class="col-sm-4 flex flex-col justify-content-center align-items-center">
          <img style="width: 80%;" :src="barmensImage" alt="About tic&tac barmens image" />
      </div>
    </div>
    
    <div class="col-sm flex flex-col justify-content-center align-items-center my-3">
      <Button to="/about" label="En savoir plus" blank router-link />   
    </div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import MainTitle from '@/components/UI/Title.vue'
import windowWidthMixin from '@/mixins/windowWidthMixin'
import Button from '@/components/UI/Button.vue'
import barmensImg from "~/assets/img/barmens.jpg"

export default {
  name: 'About',
  components: { MainTitle, Button },
  mixins: [windowWidthMixin],
  setup() {
    let photos = reactive({
      barmensImage: ref(barmensImg)
    })

    const texts = ref([
      "L'histoire du bar Tic & Tac prend sa source lors d'une conversation spontanée en 2018. C'est là que Théo et Carl, deux amis inséparables rencontrés sur les bancs de la fac, ont donné naissance à ce projet.",
      'Littéralement indissociables, tout le monde nous appelait « Tic & Tac ». Nous avons donc naturellement choisi par la suite de nommer notre bar ainsi.',
      "Bien que notre intention initiale était d'ouvrir le bar à Valence, en Espagne, nous avons finalement choisi Lyon comme lieu d'implantation pour notre tout premier établissement.",
      'Nous avons mis dans ce dernier les ingrédients résultant de tous les moments que nous avons partagés à deux comme nos nombreux voyages. C’est un bar à notre image, à celle de Tic & Tac.'
    ])

    
    return {...toRefs(photos), texts}
  }
}
</script>