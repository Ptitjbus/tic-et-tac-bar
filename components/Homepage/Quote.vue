<template>
    <div class="my-40 flex flex-col items-center text-white">
        <blockquote>
            <p class="text-2xl lg:text-4xl italic mb-3 text-center" >
                Des cocktails vraiment au top et élaborés, avec un prix vraiment abordable !
            </p>
        </blockquote>
        <p>
            —Camille Labarre, 
            <a href="https://maps.app.goo.gl/E61C2jMyuqbPm8sc6" class="cursor-pointer" target="_blank" referrerpolicy="no-referer" rel="no-referer">
                <cite>Avis Google</cite>
            </a>
        </p>
    </div>
</template>

<script>
import windowWidthMixin from '@/mixins/windowWidthMixin'

export default {
  name: 'Quote',
  mixins: [windowWidthMixin],
  setup() {

    
    return {}
  }
}
</script>

<style lang="scss" scoped>
    blockquote p::before {
        content: '\201C';
    }

    blockquote p::after {
        content: '\201D';
    }

</style>