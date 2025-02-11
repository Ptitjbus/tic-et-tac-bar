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
        
        const baseUrl = window.location.origin
        useHead({
            title: "Accueil - Tic & Tac",
            meta: [
                {
                    name: 'description',
                    content: "Découvrez Tic & Tac, bars incontournables de Lyon aux ambiances street art et conviviales, où cocktails signature, bières artisanales et produits locaux se mêlent pour des soirées inoubliables. Installés dans les 6ᵉ et 7ᵉ arrondissements, ces bars sont le fruit d'une passion commune pour la mixologie et le partage."
                },
                {
                    property: 'og:title',
                    content: "Accueil - Tic & Tac"
                },
                {
                    property: 'og:description',
                    content: "Découvrez Tic & Tac, bars incontournables de Lyon aux ambiances street art et conviviales, où cocktails signature, bières artisanales et produits locaux se mêlent pour des soirées inoubliables. Installés dans les 6ᵉ et 7ᵉ arrondissements, ces bars sont le fruit d'une passion commune pour la mixologie et le partage."
                },
                {
                    property: 'og:image',
                    content: `${baseUrl}/images/cocktail.webp`
                },
                {
                    name: 'twitter:card',
                    content: 'summary_large_image'
                },
                {
                    name: 'twitter:image',
                    content: `${baseUrl}/images/cocktail.webp`
                }
            ]
        })
    }
}
</script>

<style lang="scss" scoped>

</style>