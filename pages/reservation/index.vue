<template>
  <div class="container min-h-svh flex items-center" :style="isMobile ? 'padding-top: 5rem;' : 'padding-top: 6rem;'">
      <ReservationForm></ReservationForm>
  </div>

</template>


<script>
import MainTitle from '@/components/UI/Title.vue'
import emailjs from 'emailjs-com'
import {ref} from 'vue'
import ReservationForm from '@/components/Reservation/ReservationForm.vue'
import windowWidthMixin from '@/mixins/windowWidthMixin'

export default {
  components: { MainTitle, ReservationForm },
  mixins: [windowWidthMixin],
  setup() {
    const form = ref(null);
    const inputFieldReset = ref(null);

    const baseUrl = window.location.origin
    useHead({
        title: "Réservation - Tic & Tac",
        meta: [
            {
                name: 'description',
                content : "Réservez votre table au Tic & Tac Lyon et profitez d'une ambiance conviviale autour de cocktails signature, bières artisanales et produits locaux. Que ce soit pour un apéro entre amis ou une soirée spéciale, assurez votre place dès maintenant dans nos bars des 6ᵉ et 7ᵉ arrondissements !"
            },
            {
                property: 'og:title',
                content: "Réservation - Tic & Tac"
            },
            {
                property: 'og:description',
                content : "Réservez votre table au Tic & Tac Lyon et profitez d'une ambiance conviviale autour de cocktails signature, bières artisanales et produits locaux. Que ce soit pour un apéro entre amis ou une soirée spéciale, assurez votre place dès maintenant dans nos bars des 6ᵉ et 7ᵉ arrondissements !"
            },
            {
                property: 'og:image',
                content: `${baseUrl}/images/tchin.webp`
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                name: 'twitter:image',
                content: `${baseUrl}/images/tchin.webp`
            }
        ]
    })

    return{
      form,
      inputFieldReset
    }
  }
}
</script>

<style scoped>
.textYellowNoDeco{
  color: #F6A424;
  text-decoration: none;
}
.textJustify{
    text-justify: inter-word;
}
.email{
    margin-left: 15%;
}

.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  height: 70vh;
  width: 60%;
  margin: 10px auto;
  padding: 10%;
  color: black;
}
.field {
  margin: 10px 0;
}
input,
textarea {
  height: 50px;
  width: 100%;
  margin: 20px;
  border-top: none;
  border-right: none;
  border-left: none;
  outline: none;
}
.submitbutton button {
  height: 50px;
  width: 200px;;
  margin: 0 auto;
  text-align: center;
  font-weight: 300;
  border-radius: 30px;
  border: 2px solid rgb(133,133,133);
  display: flex;
  justify-content: center;
}
.contact-title {
  text-align: center;
}
</style>