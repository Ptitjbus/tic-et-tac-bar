<template>
  <div class="d-flex flex-direction-columns justify-content-between align-items-center"  style="max-width: calc(100vw - 8px); overflow:hidden">
    <div class=" d-flex justify-content-center align-items-center" style="max-width: 30vw" >
      <img :src="Illustration1" alt="Illustration" style="max-height: 40vw" />
    </div>
    <div class=" d-flex justify-content-center align-items-center" style="max-width: 40vw" >
      <img :src="Illustration2" alt="Illustration" style="max-height: 40vw" />
    </div>
    <div class="d-flex justify-content-center align-items-center" style="max-width: 30vw" >
      <img :src="Illustration3" alt="Illustration" style="max-height: 40vw" />
    </div>
  </div>
  
  
</template>

<script>
import { reactive, toRefs } from 'vue'
import windowWidthMixin from '@/mixins/windowWidthMixin'
import illustration1 from "~/assets/img/illustration1.png"
import illustration2 from "~/assets/img/illustration2.png"
import illustration3 from "~/assets/img/illustration3.png"

export default {
  name: 'Illustrations',
  mixins: [windowWidthMixin],
  setup() {
    let photos = reactive({
      Illustration1: ref(illustration1),
      Illustration2: ref(illustration2),
      Illustration3: ref(illustration3),
    })

    return {...toRefs(photos)}
  }
}
</script>