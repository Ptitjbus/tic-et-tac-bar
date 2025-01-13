<template>
    <div class="bg-black" :style="isMobile ? 'padding-top: 5rem;' : 'padding-top: 2rem;'">
        <BarPageHero title="Lyon 6" address="47 Rue Garibaldi, 69006 Lyon" cta-label="Voir carte" cta-url="/cartelyon6.pdf" />
    </div>
</template>

<script>
import BarPageHero from '~/components/BarsPage/BarPageHero.vue';
export default {
  name:'BarsPage',
  components: { BarPageHero },
}
</script>
  