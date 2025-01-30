<template>
  <nav class="navbar z-20 d-flex justify-content-between navbar-expand-sm fixed-top navbar-light bg-black py-4"
    v-bind:class="{ 'navbarOpen': show }" :class="{
      'navbarOpen': show,
      'navbar-hidden': !isVisible
    }">

    <router-link class="ml-8 w-32" to="/">
      <NuxtImg src="/images/logo-navbar.png" alt="tic&tac logo" />
    </router-link>

    <div class="divToPush">
      <div class="text-center">
        <ul class="navbar-nav text-center gap-8 mr-8">
          <li class="active text-align-center">
            <router-link to="/">
              <span class="text-sm font-semibold text-white ">
                Accueil
                <div class="underline" :style="$route.path == '/' ? 'width: 100%' : ''"></div>
              </span>
            </router-link>
          </li>

          <li>
            <router-link class="text-align-center" to="/bars">
              <span class="text-sm font-semibold text-white">
                Nos établissements
                <div class="underline" :style="$route.path == '/bars' ? 'width: 100%' : ''"></div>
              </span>
            </router-link>
          </li>

          <li>
            <router-link class="text-align-center" to="/about">
              <span class="text-sm font-semibold text-white">
                L’esprit Tic & Tac
                <div class="underline" :style="$route.path == '/about' ? 'width: 100%' : ''"></div>
              </span>
            </router-link>
          </li>

          <li>
            <router-link class="text-align-center" to="/reservation">
              <span class="text-sm font-semibold text-white">
                Réserver une table
                <div class="underline" :style="$route.path == '/reservation' ? 'width: 100%' : ''"></div>
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
  name: 'navbar',
  mixins: [windowWidthMixin],
  props: {
    msg: String
  },
  setup() {
    const lastScrollPosition = ref(0);
    const isVisible = ref(true);
    const show = ref(false);

    const SCROLL_THRESHOLD = 70; // Seuil de défilement avant de cacher la navbar

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      // Détermine si on scrolle vers le haut ou le bas
      if (Math.abs(currentScrollPosition - lastScrollPosition.value) < SCROLL_THRESHOLD) {
        return;
      }

      isVisible.value = currentScrollPosition < lastScrollPosition.value || currentScrollPosition < 50;
      lastScrollPosition.value = currentScrollPosition;
    };

    // Calcul du style de transformation
    const navbarTransform = computed(() => ({
      transform: isVisible.value ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform 0.3s ease-in-out'
    }));

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isVisible,
      show,
      whitelogo: ref(whitelogo),
      usedlogo: ref(usedlogo),
      blacklogo: ref(blacklogo),
      monogram: ref(monogram),
      navbarTransform
    };
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show
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

.navbar {
  transition: transform 0.3s ease-in-out;
}

.navbar-hidden {
  transform: translateY(-100%);
}

ul a:hover {
  color: #ff8000;
  transition: 0.5s;
}

ul a:hover .underline {
  width: 100%;
}

ul a:focus {
  color: white;
}

.nav-item {
  font-size: 1.5em;
  margin-right: 0;
}

.underline {
  background: #ff8000;
  height: 2px;
  width: 0;
  border-radius: 8px;
  transition: 0.3s;
}
</style>
