<template>
  <!-- header background image -->
    <div :style="isTouch ? `backgroundImage: url(${barmobile})` : `backgroundImage: url(${bar})` " class="backdrop-blur bg-opacity-50 relative bg-cover bg-center" style="height: calc(100vh - 16px);">
      <div class="absolute top-0 right-0 bottom-0 left-0 bg-black/50 z-0"></div>
      <div class="relative d-flex justify-content-center align-items-center z-10" style="height: 100%">
        <!-- header text -->
          <div class="col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <img :src="logonomono" class="w-4/5 md:w-2/4 lg:w-1/3 mb-3" id="logonomono" alt="tic&tac logo">
            
            <div class="row mb-4 col text-center">
              <p class="text-white text-lg md:text-xl font-semibold lg:text-xl" ><span class="text-custom-orange">De 17h00 à 01h00</span> - Du lundi au samedi </p>
            </div>
  
            <div class="flex flex-col my-2 gap-3 w-full md:w-96 p-3">
              <Button to="/bars" label="Nos établissements" routerLink />
              <Button to="/reservation" label="Réserver une table" routerLink />
            </div>
          </div>
        </div>
    </div>
</template>
  
<script>
import { reactive,ref, toRefs } from 'vue'
import windowWidthMixin from '@/mixins/windowWidthMixin'
import Button from './UI/Button.vue'
import bar from "~/public/images/background.webp"
import barmobile from "~/assets/img/header-mobile.jpg"
import monogram from "~/assets/img/monogram.png"
import logonomono from "~/assets/img/logo-navbar.png"

export default {
  name:'Homehead',
  components: { Button },
  mixins: [windowWidthMixin],
  setup(){
    let barEtVerre;
    try{  
      //Check availability
      barEtVerre=reactive({
        bar: ref(bar),
        barmobile: ref(barmobile),
        monogram:ref(monogram),
        logonomono: ref(logonomono)
      });
    }
    catch(error){
      console.error(error);
    }

    return{
      ...toRefs(barEtVerre),
    }
    }
  }
</script>
  
<style lang="scss" scoped>
  @font-face {
      font-family: "Noto Sans";
      src: local("Noto Sans"),
      url(@/assets/fonts/NotoSans-Regular.ttf) format("truetype");
  }  
</style>
  