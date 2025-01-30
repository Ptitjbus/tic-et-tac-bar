<template>
  <!-- header background image -->
    <div :style="isTouch ? `backgroundImage: url(${barmobile})` : `backgroundImage: url(${bar})` " class="backdrop-blur bg-opacity-50 relative bg-cover" style="height: calc(100vh - 16px);">
      <div class="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-20 z-0"></div>
      <div class="relative d-flex justify-content-center align-items-center z-10" style="height: 100%">
        <!-- header text -->
          <div class="col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <img :src="logonomono" class="myMonoLogo mb-3" id="logonomono" alt="tic&tac logo">
            
            <div class="row mb-4 col text-center myText">
              <p class="horairesAdresses text-xl font-semibold lg:text-2xl lg:font-normal" style="color: #ff8000;">De 17h00 à 01h00</p>
              <p class="text-lg lg:text-xl text-white">Du lundi au samedi</p>
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
import bar from "~/assets/img/header-img.jpg"
import barmobile from "~/assets/img/header-mobile.jpg"
import monogram from "~/assets/img/monogram.png"
import logonomono from "~/assets/img/logo-navbar.png"

export default {
  name:'Homehead',
  components: { Button },
  mixins: [windowWidthMixin],
  setup(){
    let barEtVerre;
    //Button default class
    const githubstarover=ref('myButtonMenu btn btn-transparent  fs-7 border border-2 btn-hover  py-2 px-4 menuButton');
    //Button mouseover class
    const mouseover='myButtonMenu btn btn-transparent  fs-7 border border-2 btn-hover  py-2 px-4 menuButton textWhite';
    //Button mouseleave class
    const mouseleave='myButtonMenu btn btn-transparent  fs-7 border border-2 btn-hover  py-2 px-4 menuButton';
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
      githubstarover,
      mouseover,
      mouseleave
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
  .demo{
    background-size: cover;
    background:#000;
    background-repeat: no-repeat;
    background-size: 100%;
  }
  
  .main-button{
    width: fit-content;
    height: fit-content;
    background-color: #fff;
    border-radius: 8px;
    padding: 0.6rem 1.2rem;
    text-decoration: none;
    color: black;
    font-size: 1rem;
    letter-spacing: 0.05em;
  }
  .menuButton{
    font-size: 50px;
    margin-left:5%;
    color: #F6A424; 
    border-color: #F6A424;
  }
  .letter{
    letter-spacing: 5px;
  }
  .btn-hover:hover{
    background-color: #F6A424; 
  }
  
  .pointer{
    cursor: pointer;
    margin-top: 20%;
  }
  .pointer:hover{
   animation-name: caffee-image;
   animation-duration: 4s;
   animation-iteration-count: infinite;
  }
  @keyframes caffee-image {
    0%   {margin-top:20%;}
    25%  {margin-top:17%;}
    50%  {margin-top:23%;}
    75%  {margin-top:17%;}
    100% {margin-top:20%;}
  }
  .text-yellow{
    color: #F6A424;
  }
  
  #logonomono{
    margin:0;
    padding:0;
    width:30%;
    display: inline-block;
  }
  
  #description{
    margin-left:5%;
    margin-top:5%;
    font-size:12em;
  }
  
  
  /* For Desktop View */
  @media screen and (min-width: 1024px) {
  
  }
  
  /* For Tablet View */
  @media screen and (min-device-width: 768px)
  and (max-device-width: 1024px) {
  
  }
  
  /* For Mobile Portrait View */
  @media screen and (max-device-width: 480px)
  and (orientation: portrait) {
    .showOnPhone {
          display:block!important
      }
  
      .showOnPC {
          display: none!important
      }
  
      #logonomono,.myMonoLogo {
          width: 80%;
      }
  
      .demo {
          background-size: cover;
          background-position: center;
      }
  
      .myButtonMenu {
          display: block;
          margin-left: auto;
          margin-right: auto
      }
  
      .test {
          margin-top: 20px
      }
  
      .horairesAdresses {
          font-size: 1.25em
      }
  
      .myText2 {
          width: 300px;
          font-size: 1.5em
      }
  
      .myRow2 {
          width: 100%!important
      }
  
      .myIcon {
          width: 50px;
          margin-top: 16px;
          font-size: 1.3em
      }
  
      .myText {
          width: 250px;
          color: #fff
      }
  
      .myRow {
          width: 100%!important;
          margin: 0!important;
          padding: 0!important;
          margin-left:.6em!important;
      }
  
      .myText2 {
          width: 250px;
          color: #fff
      }
  
      .myRow2 {
          width: 500px!important;
          margin: 0!important;
          padding: 0!important
      }
  
      .myIcon2 {
          font-size: 2em
      }
  
      .myDiv2 {
          width: 50px;
          margin-top: 16px;
          color: #fff
      }
  
      .horairesAdresses2 {
          font-size: .9em!important
      }
  }
  
  @media screen and (min-device-width: 720px) {
      .myText {
          color:#fff;
          width: 45%
      }
  
      .myIcon {
          width: 5%;
          font-size: 3em
      }
  
      .myText2 {
          color: #fff;
          width: 45%
      }
  
      .myDiv2 {
          width: 5%;
          font-size: 3em
      }
  }
  /* For Mobile Landscape View */
  @media screen and (max-device-width: 640px)
  and (orientation: landscape) {
  }
  
  /* For Mobile Phones Portrait or Landscape View */
  @media screen and (max-device-width: 640px) {
  }
  
  /* For iPhone 4 Portrait or Landscape View */
  @media screen and (min-device-width: 320px)
  and (-webkit-min-device-pixel-ratio: 2) {
  }
  
  /* For iPhone 5 Portrait or Landscape View */
  @media (device-height: 568px) and (device-width: 320px)
  and (-webkit-min-device-pixel-ratio: 2) {
  }
  
  /* For iPhone 6 and 6 plus Portrait or Landscape View */
  @media (min-device-height: 667px) and (min-device-width: 375px)
  and (-webkit-min-device-pixel-ratio: 3) {
  }
</style>
  