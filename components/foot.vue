<template>


<footer class="bg-black">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-8 md:mb-0">
            <router-link to="/">
                <img :src="logonomono" class="h-8 me-3" id="logonomono" alt="tic&tac logo">
            </router-link>
          </div>
          <div class="flex flex-wrap gap-8 sm:gap-16 sm:grid-cols-3">
                <div class="w-full sm:w-auto">
                    <h2 class="mb-6 text-sm font-semibold uppercase text-white">À propos</h2>
                    <ul class=" text-gray-400 font-medium">
                        <li class="mb-4">
                            <router-link to="/about" class="hover:underline">L'esprit Tic & Tac</router-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold uppercase text-white">Nos établissements</h2>
                    <ul class=" text-gray-400 font-medium">
                        <li class="mb-4">
                            <router-link to="/bars/lyon-6" class="hover:underline">Lyon 6</router-link>
                        </li>
                        <li>
                            <router-link to="/bars/lyon-7" class="hover:underline">Lyon 7</router-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold uppercase text-white">Contact</h2>
                    <ul class=" text-gray-400 font-medium">
                        <li class="mb-4">
                            <router-link to="/reservation" class="hover:underline">Réservations</router-link>
                        </li>
                        <li>
                            <a class="hover:underline" href="mailto:contact@tic-et-tac-bar.fr">Business</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div class="flex justify-center"> 
            <span class="text-sm  sm:text-center text-gray-400"> © {{date}} <a href="" class="hover:underline">
                Tic &amp; Tac Bar</a> - Tous droits réservés.
            </span>
        </div>
    </div>
</footer>
</template>

<script>
import { ref } from 'vue'
import windowWidthMixin from '@/mixins/windowWidthMixin'
import logonomono from "~/assets/img/logo-navbar.png"

export default {
name:'foot',
mixins: [windowWidthMixin],
setup(){
    //Copyright Date
    const date=ref(new Date().getFullYear())
    return{
        date,
        logonomono
    }
}
}
</script>

<style scoped>
@font-face {
    font-family: "Noto Sans";
    src: local("Noto Sans"),
    url(@/assets/fonts/NotoSans-Regular.ttf) format("truetype");
}
</style>
