<template>
  <!-- header background image -->
    <div class="backdrop-blur bg-opacity-50 relative bg-cover bg-center" style="height: calc(100vh - 16px);">
      <NuxtImg
        :src="isTouch ? backgroundMobile : background"
        class="absolute inset-0 w-full h-full object-cover"
        alt="Arrière plan du bar"
        :width="isMobile ? 900 : 1272"
        :height="isMobile ? 800 : 868"
        loading="lazy"
      />
      <div class="absolute top-0 right-0 bottom-0 left-0 bg-black/50 z-0"></div>
      <div class="relative d-flex justify-content-center align-items-center z-10" style="height: 100%">
        <!-- header text -->
          <div class="col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <img width="443" height="96" :src="logonomono" class="w-4/5 md:w-2/4 lg:w-1/3 mb-3" id="logonomono" alt="tic&tac logo">
            
            <div class="row mb-4 col text-center">
              <p class="text-white flex flex-col text-lg md:text-xl font-semibold lg:text-xl" ><span class="text-custom-orange">De 17h00 à 01h00</span> Du lundi au samedi </p>
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
import logonomono from "~/assets/img/logo-navbar.png"
import background from "~/assets/img/background.webp"
import backgroundMobile from "~/assets/img/backgroundMobile.webp"

export default {
  name:'Homehead',
  components: { Button },
  mixins: [windowWidthMixin],
  head() {
    return {
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: this.isTouch ? backgroundMobile : background,
          type: 'image/webp'
        }
      ]
    }
  },
  setup(){
    let barEtVerre;
    try{  
      //Check availability
      barEtVerre=reactive({
        background: ref(background),
        backgroundMobile: ref(backgroundMobile),
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
  