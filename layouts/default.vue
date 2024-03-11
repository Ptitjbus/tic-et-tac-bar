<template>
<div style="background-color: black;">
    <div> 
        <!-- navbar -->
        <navbarMobile v-if="isMobile"/>
        <navbar v-else/>
    </div>  

    <div>
        <!-- body -->
        <slot />
    </div>

    <div>
        <!-- footer -->
        <foot />
    </div>
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