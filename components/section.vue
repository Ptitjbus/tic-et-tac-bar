<template >
  <div class="bg-black">
      <svg class="svg-down" width="192" height="61" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 160.7 61.5" enable-background="new 0 0 160.7 61.5" xml:space="preserve"><path fill="#000" d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"></path></svg>
      <div class="arrow-down"></div>

      <div>
          <!-- Offer -->
          <Offer />

          <!-- Discover -->
          <Discover v-if="!isTouch" style="margin-top: -12rem;"/>

          <!-- Illustrations -->
          <Illustrations v-if="!isTouch"/>

          <!-- About -->
          <About />

          <!-- Cocktails -->
          <Cocktails />

          <!-- reviews -->
          <Reviews />
      </div>
  </div>

  <!-- Google maps -->
  <div class="container-fluid bg-black pt-global mapBar">
          <div class="container pb-3">
              <iframe class="h-100 w-100 rounded shadow" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11136.715939471307!2d4.8387141!3d45.7475576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb7d9e819e2b%3A0xcf8fb327d3b9188a!2sTIC%20%26%20TAC%20BAR!5e0!3m2!1sen!2sfr!4v1682035826407!5m2!1sen!2sfr"    allowfullscreen="" loading="lazy"></iframe>
          </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import Offer from '@/components/Homepage/Offer.vue'
import Discover from '@/components/Homepage/Discover.vue'
import About from '@/components/Homepage/About.vue'
import Cocktails from '@/components/Homepage/Cocktails.vue'
import Reviews from '@/components/Homepage/Reviews.vue'
import Illustrations from '@/components/Homepage/Illustrations.vue'
import windowWidthMixin from '@/mixins/windowWidthMixin'


export default {
  name:'Section',
  components: { Offer, Discover, About, Cocktails, Illustrations, Reviews },
  mixins: [windowWidthMixin],
  setup(){}
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Noto Sans";
  src: local("Noto Sans"),
  url(@/assets/fonts/NotoSans-Regular.ttf) format("truetype");
}
ul li{
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
.svg-down {
  z-index: 5;
  margin-left: calc(50% - 96px);
  margin-top: -68px;
  color: #fff;
}
.arrow-down{
  width: 48px;
  position: relative;
  height: 32px;
  left: 50%;
  bottom: 56px;
  transform: translate(-50%, 0);
  z-index: 10;
  background: url("../assets/icons/arrowDownWhite.svg") no-repeat center;
  background-size: contain;
}

/* For Mobile Portrait View */
@media screen and (max-device-width: 480px)
and (orientation: portrait) {

  html{
      margin:0;
      padding:0;
      overflow: hidden;
  }
}

</style>
