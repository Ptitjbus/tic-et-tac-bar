<template>
    <div class="flex flex-col my-5 px-7 md:px-24 xl:px-52">
        <MainTitle label="Nos établissements"></MainTitle>
        
        <div class="flex flex-col xl:flex-row h-screen pt-12 pb-24 gap-10 text-white">
            <router-link to="/bars/lyon-6" class="relative w-full h-full flex flex-col justify-end px-4 pb-6 overflow-clip group">
                <NuxtImg src="/images/image00018.jpeg" class="absolute w-full h-full top-0 bottom-0 right-0 left-0 z-0 group-hover:scale-105 transition-all ease-out duration-500 object-cover"/>
                <div class="z-1 w-full flex flex-col md:flex-row md:justify-between md:items-center">
                    <div class="mb-3 md:mb-0">
                        <h2 class="uppercase text-4xl">Lyon 6</h2>
                        <p>47 Rue Garibaldi, 69006 Lyon</p>
                    </div>
                    <Button to="/bars/lyon-6" label="Découvrir" class="z-10" :fullWidth="isMobile" />
                </div>
            </router-link>
            <router-link to="/bars/lyon-7" class="relative w-full h-full flex flex-col justify-end px-4 pb-6 overflow-clip group">
                <NuxtImg src="/images/inspiration_picture.jpg" class="absolute w-full h-full top-0 bottom-0 right-0 left-0 z-0 group-hover:scale-105 transition-all ease-out duration-500 object-cover"/>
                <div class="z-1 w-full flex flex-col md:flex-row md:justify-between md:items-center">
                    <div class="mb-3 md:mb-0">
                        <h2 class="uppercase text-4xl">Lyon 7</h2>
                        <p>135 Rue Sébastien Gryphe, 69007 Lyon</p>
                    </div>
                    <Button to="/bars/lyon-7" label="Découvrir" class="z-10" :fullWidth="isMobile" />
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import MainTitle from '@/components/UI/Title.vue'
import windowWidthMixin from '@/mixins/windowWidthMixin'
import Button from '@/components/UI/Button.vue'

export default {
  name: 'About',
  components: { MainTitle, Button },
  mixins: [windowWidthMixin],
}
</script>