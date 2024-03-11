<template>
  <div class="bg-black" :style="isMobile ? 'padding-top: 5rem;' : 'padding-top: 6rem;'">
    <Discover />
  </div>
</template>

<script>
import Discover from '~/components/Homepage/Discover.vue';
export default {
  name:'DiscoverPage',
  components: { Discover },
}
</script>
