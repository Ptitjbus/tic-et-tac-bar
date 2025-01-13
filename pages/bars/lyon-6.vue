<template>
    <div class="bg-black" :style="isMobile ? 'padding-top: 5rem;' : 'padding-top: 2rem;'">
        <BarPageHero title="Lyon 6" address="47 Rue Garibaldi, 69006 Lyon" cta-label="Voir carte" cta-url="/cartelyon6.pdf" />
        <div class="flex flex-col lg:flex-row text-white px-3 sm:!px-12 lg:!px-40 h-screen relative">
            <!-- <p class="text-pretty *:text-orange-400 uppercase">
              Bienvenue au <b>Tic & Tac Lyon 7</b>, votre adresse incontournable située au cœur de la place Jules Guesdes, dans le septième arrondissement de Lyon.
              <br><br>
              Plus qu'un simple bar, nous sommes un véritable lieu de <b>vie de quartier</b>, où proximité, convivialité et authenticité sont au rendez-vous.
              <br><br>
              Dans une ambiance chaleureuse, notre <b>petite équipe passionnée</b>  vous accueille comme à la maison, avec le sourire et une attention particulière pour chacun de nos clients.
            </p> -->
            <h2 class="text-9xl font-bold uppercase text-orange-200">Tic </h2>
            <div class="overflow-clip rounded-md w-160 h-72 absolute top-32 right-40 rotate-3 z-10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.1789863103027!2d4.83613917736641!3d45.74755757107988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb7d9e819e2b%3A0xcf8fb327d3b9188a!2sTic%20%26%20Tac%20-%20Lyon%207!5e0!3m2!1sfr!2sfr!4v1736792434018!5m2!1sfr!2sfr&mode=night" 
                width="600" height="450"
                class="w-full h-full"
                style="border:0;" 
                allowfullscreen ></iframe>
            </div>
        </div>
    </div>
</template>

<script>
import BarPageHero from '~/components/BarsPage/BarPageHero.vue';
export default {
  name:'BarsPage',
  components: { BarPageHero },
}
</script>
  