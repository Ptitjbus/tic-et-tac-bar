<template>
  <section class="absolute top-0 left-0 right-0 w-full z-20" style="position: absolute; top:0; left:0; background-color: rgba(0,0,0,0.95);">
    <div class="nav-container d-flex justify-content-between align-items-center p-4" >
      <router-link class="logo" to="/">
        <img :src="usedlogo" alt="tic&tac logo" style="width:100px">
      </router-link>
      
      <div v-if="isMobile" class="burger-menu d-flex justify-content-center align-items-center">
        <img v-if="isNavbarMobileOpen" :src="cross" alt="croix de fermeture du burger menu" @click="isNavbarMobileOpen = !isNavbarMobileOpen">
        <img v-else :src="burgerMenu" alt="burger menu" @click="isNavbarMobileOpen = !isNavbarMobileOpen">
      </div>
    </div>


    <div v-if="isMobile" class="d-flex flex-column justify-content-center align-items-center" :class="isNavbarMobileOpen ? 'nav-mobile-on p-4' : 'nav-mobile-off'">
      <transition>
        <div v-if="isNavbarMobileOpen">
          <router-link v-if="isNavbarMobileOpen" to="/" class="link mb-3" @click="isNavbarMobileOpen = !isNavbarMobileOpen">Accueil</router-link>
          <router-link v-if="isNavbarMobileOpen" to="/bars" class="link mb-3" @click="isNavbarMobileOpen = !isNavbarMobileOpen">Nos établissements</router-link>
          <router-link v-if="isNavbarMobileOpen" to="/about" class="link mb-3" @click="isNavbarMobileOpen = !isNavbarMobileOpen">L’esprit Tic & Tac</router-link>
          <router-link v-if="isNavbarMobileOpen" to="/reservation" class="link mb-3" @click="isNavbarMobileOpen = !isNavbarMobileOpen">Réserver une table</router-link>
        </div>
        
      </transition>
    </div>
  </section>
</template>

<script>
import windowWidthMixin from '@/mixins/windowWidthMixin'
import whitelogo from '~/assets/img/logo-navbar-white.png'
import usedlogo from '~/assets/img/logo-navbar.png'
import blacklogo from '~/assets/img/logo-navbar.png'
import burgerMenu from '~/assets/icons/burgerMenu.svg'
import cross from '~/assets/icons/cross.svg'

export default {
  name:'navbarMobile',
  mixins: [ windowWidthMixin ],
  data() {
    return {
      show: false,
      show: false,
      whitelogo: ref(whitelogo),
      usedlogo : ref(usedlogo),
      blacklogo: ref(blacklogo),
      burgerMenu: ref(burgerMenu),
      cross: ref(cross),
      isNavbarMobileOpen: false,
    }
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show
    }
  },
}
</script>

<style lang="scss" scoped>
@font-face {
    font-family: "Noto Sans";
    src: local("Noto Sans"),
    url(@/assets/fonts/NotoSans-Regular.ttf) format("truetype");
}
.link {
  color: white;
  text-decoration: none;
  width: fit-content;
  white-space: nowrap;
  border-radius: 8px;
  padding: 8px 16px;
  transition: 1s;
  display: block;
  text-align: center;
  font-size: 1.25rem;
}
@media screen and (max-width: 768px){
  .link {
    margin-right: 0;
    width: 200px;
  }
}

.v-enter-active, .v-leave-active {
  transition: opacity 2s;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
  transition: 0.25s;
}
.nav-mobile-off{
  height: 0;
  transition: 1s;
}
.nav-mobile-on{
  height: 300px;
  transition: 0.8s;
}
</style>


