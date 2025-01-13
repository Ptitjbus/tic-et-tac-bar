<template>
    <div class="flex flex-col my-5 h-128 lg:h-160 relative justify-end text-white">
        <NuxtImg src="/images/test-2.webp" class="absolute w-full h-full top-0 bottom-0 right-0 left-0 z-0 object-cover"/>
        
        <div class="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center z-1 px-3 pb-3 sm:!px-12 lg:!px-40 lg:pb-12">
            <div class="mb-3 lg:!mb-5">
                <div class="flex mb-2 gap-2 font-semibold">
                    <router-link to="/bars">Bars</router-link> | {{ title }}
                </div>
                <h2 class="uppercase text-3xl lg:text-8xl font-bold">
                    Tic & Tac -
                    <span style="color: #ff8000">{{ title }}</span>
                </h2>
                <p>{{ address }}</p>
            </div>
            <Button :to=ctaUrl blank :label=ctaLabel :fullWidth="isMobile" />
        </div>
        <div class="absolute w-full h-72 lg:!h-36 bottom-0 left-0 right-0 bg-gradient-to-t from-black"></div>
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
  props: {
    title: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    ctaUrl: {
        type: String,
        required: true
    },
    ctaLabel: {
        type: String,
        required: true
    },
  }
}
</script>