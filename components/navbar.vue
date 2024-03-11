<template>
  <nav class="navbar d-flex justify-content-between navbar-expand-sm fixed-top navbar-light transparent" v-bind:class=" { 'navbarOpen': show }" :style="$route.path === '/reservation' ? 'background-color: black' : 'background-color: transparent'">

    <!-- logo desktop -->
    <router-link class="router-link-active router-link-exact-active nav-link nav-logo nav-item showOnPC logoOnPC" to="/">
      <img :src="monogram" class="nav-logo" alt="tic&tac monogram">
    </router-link>

    <div class="divToPush" v-bind:class="{ 'show': show }">

      <!-- nav bar items -->
      <div class="collapse navbar-collapse rightchildText text-align-center" id="navbarSupportedContent" v-bind:class="{ 'show': show }">
        <ul class="navbar-nav hidden-menu myUl text-center" >
          <li class="nav-item active text-align-center">
            <router-link class="router-link-active router-link-exact-active nav-link myItems" :class="!isMobile ? 'd-flex align-items-center' : ''" to="/">
              <span class="mobile-nav-style nav-style">
                Accueil
                <div class="underline" :style="$route.path=='/' ? 'width: 100%' : ''"></div>
              </span>
            </router-link>

            <hr class="showOnPhone myHr">
          </li>
          
          <li class="nav-item" >
            <a class="nav-link text-align-center myItems" :class="!isMobile ? 'd-flex align-items-center' : ''" target="_blank" href="/carte.pdf">
              <span class="mobile-nav-style nav-style">
                Notre carte
                <div class="underline"></div>
              </span>
            </a>
            <hr class="showOnPhone myHr">
          </li>
          
          <li class="nav-item">
            <router-link class="nav-link text-align-center myItems" :class="!isMobile ? 'd-flex align-items-center' : ''" to="/reservation">
              <span class="mobile-nav-style nav-style">
                Réservation
                <div class="underline" :style="$route.path=='/reservation' ? 'width: 100%' : ''"></div>
              </span>
            </router-link>
            <hr class="showOnPhone myHr">
          </li>

          <li v-if="isMobile" class="nav-item">
            <router-link class="nav-link text-align-center aProposLink myItems" :class="!isMobile ? 'd-flex align-items-center' : ''" to="/about">
              <span class="mobile-nav-style nav-style">
                Nous découvrir
                <div class="underline" :style="$route.path=='/about' ? 'width: 100%' : ''"></div>
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
</template>

<script>
import windowWidthMixin from '@/mixins/windowWidthMixin'
import whitelogo from "~/assets/img/logo-navbar-white.png"
import usedlogo from "~/assets/img/logo-navbar.png"
import blacklogo from "~/assets/img/logo-navbar.png"
import monogram from "~/assets/img/monogram.png"

    export default {
      name:'navbar',
      mixins: [ windowWidthMixin ],
      props: {
        msg: String
      },
      data() {
        return {
          show: false,
          whitelogo: ref(whitelogo),
          usedlogo : ref(usedlogo),
          blacklogo: ref(blacklogo),
          monogram: ref(monogram)
        }
      },
      methods: {
        toggleNavbar() {
          this.show = !this.show
        }
      },
      setup(){
            
        }
    }
</script>

<style lang="scss" scoped>
@font-face {
    font-family: "Noto Sans";
    src: local("Noto Sans"),
    url(@/assets/fonts/NotoSans-Regular.ttf) format("truetype");
}

ul a.router-link-exact-active,ul a {
    color: #fff
}

ul a:hover {
    color: #ff8000;
    transition: 0.5s;
}

ul a:hover .underline{
    width: 100%;
}
ul a:focus{
    color: white;
}

.bg-ttblack {
    background-color: #fff
}

.nav-style{
  font-size: 1rem;
  font-weight: 500;
}

.nav-logo {
    width: 5rem;
    display: inline-block;
    margin-right: 150px;
    margin-left: 8px;
}

.nav-item {
    font-size: 1.5em;
    margin-right:0;
}

.underline{
    background: #ff8000;
    height: 2px;
    width: 0;
    border-radius: 8px;
    transition: 0.3s;
}


.nav-item.nav-computer {
    margin-right: 2em
}

#parent {
    position: relative;
    white-space: nowrap
}

.rightchild .rightchildText {
    top: 0;
    right: 0;
    bottom: 0;
    position: absolute;
}

.button-burger {
    padding: .5em;
    height: 2.1em;
    margin-top: 5px;
    margin-right: -5px;
}

#navbarSupportedContent {
    width: fit-content
}

.nav-item {
    padding-right: 20px
}

.aProposLink {
    display: none
}

.showOnPhone {
    display: none!important
}

.logoOnPC{
  margin-right: 5%!important;
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
        display:block;
        display: inline-block
    }

    .showOnPC {
        display: none
    }

    .buttonBurgerMobile {
        display: inline-block;
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 0px;
        background-color: #000
    }

    .nav-logo {
        margin: 0;
        margin-left: 5px
    }

    .navbar-style {
        margin-top: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-link {
        text-align: center;
    }

    .aProposLink {
        display: block
    }

    .mobile-nav-style {
        font-size: 1.2em;
        text-shadow: 0 0 15px rgba(0,0,0,.62);
        color: #f6a424!important;
        margin-top: 250px;
        text-align: center
    }


    .showOnPhone {
        display: block!important;
        display: inline-block!important;
        padding-right: 50px
    }

    .myUl {
        background-color: #000;
        color: #f6a424!important;
        width: 80%;
        padding-top: 35%;
        padding-bottom: 70%
    }

    .navbarOpen {
        background-color: #000
    }

    .myHr {
        color: #fff!important;
        width: 20%;
        border: 2px SOLID #fff!important;
        opacity: 100%;
        text-align: center
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


