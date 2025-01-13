<template>
    <Homehead />
    <Section />
</template>

<script>
import Homehead from '~/components/homehead.vue';
import Section from '~/components/section.vue';
    export default {
        name:'Home',
        components:{
          Homehead,
          Section
        },
        setup(){
          
        }
    }
</script>

<style lang="scss" scoped>

</style>