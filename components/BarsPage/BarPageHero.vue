<template>
    <div class="flex flex-col my-5 h-72 sm:h-96 md:h-128 relative justify-end text-white">
        <div class="flex flex-col justify-center z-1 h-full mx-auto">
            <h1 class="uppercase text-3xl md:text-6xl lg:text-8xl font-bold ">
                Tic & Tac -
                <span style="color: #ff8000">{{ title }}</span>
            </h1>
        </div>
        <div v-if="!isTouch" class=" w-full z-1 px-6 z-1 bg-custom-orange">
            <div class="mx-auto max-w-2xl lg:max-w-none">
                <div class="mx-auto max-w-5xl">
                    <dl class="-mx-6 grid grid-cols-1 text-sm text-orange-100 sm:mx-0 sm:grid-cols-3">
                        <div class="border-t border-orange-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                            <dt class="font-semibold">Addresse</dt>
                            <dd>{{ address }}</dd>
                        </div>
                        <div class="border-t border-orange-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                            <dt class="font-semibold">Année d'ouverture</dt>
                            <dd><time datetime="2023">{{ year }}</time></dd>
                        </div>
                        <div class="border-t border-orange-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                            <dt class="font-semibold">Horaires</dt>
                            <dd>{{ horaires}}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
        <NuxtImg :src="imagePath" class="absolute w-full h-full inset-0 object-cover" />
        <div class="absolute inset-0 bg-black/30"></div>
    </div>
</template>

<script>
import MainTitle from '@/components/UI/Title.vue'
import windowWidthMixin from '@/mixins/windowWidthMixin'
import Button from '@/components/UI/Button.vue'

export default {
    name: 'Hero',
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
        year:{
            type: String,
            required: true,
        },
        horaires:{
            type: String,
            required: true,
        },
        imagePath: {
            type: String,
            required: true
        }
    }
}
</script>