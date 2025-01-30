<template>
    <div class="bg-black" :style="isMobile ? 'padding-top: 5rem;' : 'padding-top: 2rem;'">
        <BarPageHero title="Lyon 7" address="135 Rue Sébastien Gryphe, 69007 Lyon" cta-label="Notre carte" cta-url="/carte.pdf" />
    </div>
</template>

<script>
import BarPageHero from '~/components/BarsPage/BarPageHero.vue';
export default {
  name:'BarsPage',
  components: { BarPageHero },
}
</script>
  