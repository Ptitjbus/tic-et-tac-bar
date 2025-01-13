<template>
    <div class="bg-black" :style="isMobile ? 'padding-top: 5rem;' : 'padding-top: 2rem;'">
        <Hero />
    </div>
</template>

<script>
import Hero from '~/components/BarsPage/Hero.vue';
export default {
  name:'BarsPage',
  components: { Hero },
}
</script>
  