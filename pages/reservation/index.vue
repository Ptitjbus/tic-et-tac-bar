<template>
  <div class="container bg-black pb-5" :style="isMobile ? 'padding-top: 5rem;' : 'padding-top: 6rem;'">
    <div class="row text-white justify-content-center">
      <div class="col-sm-7" :style="isMobile ? 'width: 95%' : ''">
        <MainTitle label="Réservation" :centered="!isMobile" />
        <p class="mt-4">
          Que ce soit simplement pour venir boire un verre entre amis, mais aussi pour organiser un événement chez nous (afterwork, anniversaire, séminaire, etc.), n'hésite pas à réserver via le formulaire ci-dessous.
          <br /><br />
          Nous nous efforcerons de te recontacter pour te confirmer la réservation 😊
          <br /><br />
          Nous acceptons les réservations de 2 à 40 personnes, le tout sans frais.
        </p>
      </div>
    </div>
  </div>

  <ReservationForm></ReservationForm>
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
    text-align: justify;
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