<template>
<div style="background-color: black;">
    <navbarMobile v-if="isMobile"/>
    <navbar v-else/>
    <slot />
    <foot />
</div>
</template>

<script>
import navbar from '../components/navbar.vue'
import navbarMobile from '../components/navbarMobile.vue'
import foot from '../components/foot.vue'
import windowWidthMixin from '@/mixins/windowWidthMixin'

export default {
    name:'index',
    mixins: [ windowWidthMixin ],
    setup(){
        return{
        }
    },
    components:{
        navbar,
        foot,
        navbarMobile
    }
}
</script>