<template>
    <div class="flex flex-col lg:flex-row max-w-screen-xl pb-24 md:px-12 relative container">
        <div class="flex flex-col gap-5 basis-2/3 lg:pr-8 lg:mr-8 mb-8">
            <section class="flex flex-col gap-3 text-gray-200">
                <p v-for="(text, index) in intro" :key="index" class="text-pretty text-justify text-lg *:text-custom-orange">
                    {{ text }}
                </p>
            </section>
            <section v-for="(text, index) in texts" :key="index" class="flex flex-col gap-2 text-gray-200 font-light">
                <h2 v-if="text.title" class="text-2xl font-semibold mb-2 text-white">{{ text.title }}</h2>
                <p v-if="text.sentences" v-for="(sentence, index) in text.sentences" :key="index"
                    class="text-pretty text-justify text-lg">
                    {{ sentence }}
                </p>
                <NuxtImg v-if="text.imagePath" :src="text.imagePath" class="h-96 object-cover rounded-md" />
            </section>
        </div>
        <div class="flex flex-col gap-12 basis-1/3">
            <div class="flex flex-col gap-3 bg-white/10 w-full p-4 text-white">
                <h3 class="text-2xl font-semibold border-b-2 border-custom-orange w-fit">Carte</h3>
                <Button :to="menuLink" label="Voir la carte" />
            </div>
            <div class="flex flex-col gap-3 bg-white/10 w-full p-4 text-white">
                <h3 class="text-2xl font-semibold border-b-2 border-custom-orange w-fit">Localisation</h3>
                <iframe :src="maplink" width="600" height="450" class="w-full h-128  overflow-clip"
                    allowfullscreen></iframe>
            </div>
            <div class="flex flex-col gap-3 bg-white/10 w-full p-4 text-white">
                <h3 class="text-2xl font-semibold border-b-2 border-custom-orange w-fit">Suivez-nous</h3>
                <div v-for="social in socials"
                    class="flex items-center justify-between border-b pb-2 border-white/10 group cursor-pointer"
                    :key="social.name">
                    <div class="flex gap-3">
                        <div class="rounded-full w-9 h-9 flex justify-center items-center  bg-white/10">
                            <component :is="social.icon"
                                class="w-4 h-4 fill-white group-hover:fill-custom-orange transition-all duration-300 ease-in-out" />
                        </div>
                        <a :href="social.link" target="_blank" rel="no-referer"
                            class="flex items-center text-base font-semibold group-hover:text-custom-orange transition-all duration-300 ease-in-out">{{
                            social.name}}</a>
                    </div>
                    <Arrow
                        class="h-5 w-5 fill-custom-orange group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BarPageHero from '~/components/BarsPage/BarPageHero.vue';
import InstagramSvg from '~/public/svg/instagram.vue'
import FacebookSvg from '~/public/svg/facebook.vue'
import Arrow from '~/public/svg/arrow.vue';
import Button from '~/components/UI/Button.vue';
import windowWidthMixin from '~/mixins/windowWidthMixin';

export default {
    name: 'BarsPageBody',
    components: { BarPageHero, InstagramSvg, FacebookSvg, Arrow, Button },
    mixins: [windowWidthMixin],
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        maplink: {
            type: String,
            required: true
        },
        menuLink: {
            type: String,
            required: true
        },
        socials: {
            type: Array,
            required: true
        },
        intro: {
            type: Array,
            required: true
        },
        texts: {
            type: Array,
            required: true
        }
    }
}
</script>