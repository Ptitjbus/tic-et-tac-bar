<template>
  <div class="container mb-5">  
    <MainTitle v-if="!isEmailSent" label="Formulaire de réservation" black :centered="!isMobile"></MainTitle>

    <h5 v-else>Votre demande de réservation a bien été prise en compte.<br /><br /> Cette dernière vous sera confirmée par l’équipe dans les plus brefs délais, merci.</h5>

    <form v-if="!isEmailSent" class="form" ref="form" @submit.prevent="sendMail">
      <div class="form-row mt-5">
        <div class="input-data">
          <input v-model="template_param.PRENOM" name="PRENOM" type="text" required />
          <div class="underline_time"></div>
          <label class="label-time">Prénom *</label>
        </div>
        
        <div class="input-data">
          <input v-model="template_param.NOM" name="NOM" type="text" />
          <div class="underline_time"></div>
          <label class="label-time">Nom</label>
        </div>
      </div>

      <div class="form-row">
        <div class="input-data">
          <input v-model="template_param.EMAIL" name="EMAIL" type="email" />
          <div class="underline-time"></div>
          <label class="label-time">Adresse Email</label>
        </div>

        <div class="input-data">
          <input
          v-model="template_param.PHONE"
          name="PHONE"
          type="tel"
          required
          />
          <div class="underline-time"></div>
          <label class="label-time">Numéro de téléphone *</label>
        </div>        
      </div>

      <div class="form-row" style="margin-bottom: 3rem;">
        <div class="input-data">
          <div>
            <input v-model="template_param.NOMBRE" type="number" name="NOMBRE" min="2" max="40" style="padding-bottom: .85rem" />
            
            <div class="underline-time"></div>

            <label class="label-time" style="margin-bottom: .5rem;">Nombre de personnes *</label>

            <small class="form-text text-muted" >De 2 à 40 personnes.</small>
          </div>
        </div>

        <div class="input-data">
          <div :style="isMobile ? 'margin-top: 3rem' : ''">
            <VueDatePicker
              v-model="template_param.JOUR"
              name="JOUR"
              model-type="PPPP"
              locale="fr"
              :min-date="new Date()"
              :enable-time-picker="false"
              :disabled-week-days="[0]"
              format="dd/MM/yyyy"
              auto-apply
              required
            >
            </VueDatePicker>

            <div class="underline-time"></div>

            <label class="label-time" style="margin-bottom: .5rem;">Date *</label>
            
            <small class="form-text text-muted" >Sauf les dimanches.</small>
          </div>
        </div>
        
        <div class="input-data">
          <div :style="isMobile ? 'margin-top: 3rem' : ''">
            <VueDatePicker
              v-model="template_param.HEURE"
              time-picker
              locale="fr"
              minutes-increment="15"
              minutes-grid-increment="15"
              :min-time="{ hours: 17, minutes: 0 }" 
              :start-time="{ hours: 17, minutes: 0 }" 
              :max-time="{hours: 21, minutes: 59 }"
              format="HH:mm"
              model-type="HH:mm"
              name="HEURE"
              required
            >
            </VueDatePicker>

            <div class="underline-time"></div>
            
            <label class="label-time" style="margin-bottom: .5rem;">Heure *</label>
            
            <small class="form-text text-muted">De 17h jusqu'à 21h45.</small>
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="input-data textarea">
          <input v-model="template_param.COMMENTAIRE" name="COMMENTAIRE" type="textarea" />
          <div class="underline-time"></div>
          <label class="label-time">Un message à nous transmettre ?</label>
        </div>
      </div>

      <p style="font-size: 1rem; color: rgb(74, 74, 74); font-weight: bold;">
        ⚠ Veuillez noter que la réservation en terrasse n’est pas disponible pendant les mois où elle est ouverte. Toutes les places sont réservées à l’intérieur.
      </p>

      <p style="font-size: 0.65rem; color: rgb(74, 74, 74)">
        Conformément au RGPD, toute donnée est acheminée immédiatement vers l'adresse contact@tic-et-tac-bar.fr, sans qu'aucune information ne soit conservée.
        <br />
        Toutes les questions marquées d'un astérisque (*) doivent être complétées obligatoirement.
      </p>

      <div class="input-data d-flex justify-content-center align-items-center">
        <input class="submit" type="submit" name="send" value="Envoyer" />
      </div>
    </form>


    <div v-else class="mt-5 d-flex justify-content-center align-items-center" style="width: 100%; height: auto;">
      <img :src="emailSentGif" style="border-radius: .5rem; width: 100%; height: auto" />
    </div>
  </div>
</template>

<script>
import MainTitle from '@/components/UI/Title.vue'
import emailjs from 'emailjs-com'
import {ref, toRefs, reactive} from 'vue'
import windowWidthMixin from '@/mixins/windowWidthMixin'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import emailSentGif from "~//assets/gifs/emailsent.gif"


export default {
  components: { MainTitle, VueDatePicker },
  mixins: [windowWidthMixin],
  setup() {
    const config = useRuntimeConfig()
    const form = ref(null);
    const inputFieldReset = ref(null);
    let isEmailSent = ref(false)
    let gifs = reactive({
      emailSentGif: ref(emailSentGif)
    })

    let template_param = ref({
      PRENOM: '',
      NOM: '',
      EMAIL: '',
      PHONE: '',
      NOMBRE: '',
      JOUR: '',
      HEURE: '17:00',
      COMMENTAIRE: '',
    })

    const sendMail = () => {
        // emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form.value, 'USER_ID')
        emailjs.send(config.public.emailServiceId, config.public.emailTemplateId, template_param.value, config.public.emailApiKey)
        .then(() => {
          inputFieldReset.value = " ";
          isEmailSent.value = true
        }, (error) => {
          alert('Message not sent', error);
        }); 
      }

    const currentDatePlusOne = ref('');

    // Obtenez la date du jour
    const correntDate = new Date();

    // Obtenez l'année, le mois et le jour
    const year = correntDate.getFullYear();
    const mounth = String(correntDate.getMonth() + 1).padStart(2, '0');
    const day = String(correntDate.getDate()).padStart(2, '0');

    // Créez la chaîne de date au format AAAA/MM/JJ
    currentDatePlusOne.value = `${year}/${mounth}/${day}`;

    return{
      form,
      inputFieldReset,
      sendMail,
      isEmailSent,
      ...toRefs(gifs),
      currentDatePlusOne,
      template_param
    }
  }
}
</script>

<style scoped>
.container{
  max-width: 800px;
  background: #fff;
  border-radius: .5rem;
  width: 800px;
  padding: 32px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}
.container .text{
  text-align: center;
  font-size: 41px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  background: -webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.container form .form-row{
  display: flex;
  margin: 32px 0;
}
form .form-row .input-data{
  width: 100%;
  height: 40px;
  margin: 0 20px;
  position: relative;
}
input, select, textarea {
  outline: none;
  /* border: none; */
}
input, textarea {
  border: none;
}
select:focus {
  box-shadow: none;
  box-shadow: 0px 0px 5px 0px #ff8000;
  border: 1px solid #ff8000;
}
.input-data:focus {
  outline: none;
  border: none;
}
form .form-row .textarea{
  height: 70px;
}
.input-data input, .textarea input{
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
  border-bottom: 2px solid rgba(0,0,0, 0.12);
}
.input-data input:focus ~ label, .textarea input:focus ~ label, .input-data select:focus ~ label,
.input-data input:valid ~ label{
  transform: translateY(-24px);
  font-size: 15px;
  color: #ff8000;
}
.input-data .label-time{
  transform: translateY(-24px);
  font-size: 15px;
}
.input-data input:valid ~ .label-time{
  color: #000000;
}
.input-data input:focus ~ .label-time{
  color: #ff8000;
}
.input-data label, .textarea label {
  position: absolute;
  pointer-events: none;
  bottom: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
}
.textarea label{
  width: 100%;
  bottom: 30px;
  background: #fff;
}
.input-data .underline{
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
}
.input-data .underline-time{
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
}
.input-data .underline:before, .input-data .underline-time:before{
  position: absolute;
  content: "";
  height: 2px;
  width: 100%;
  background: #ff8000;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}
.input-data input:focus ~ .underline:before,
.input-data input:focus ~ .underline-time:before,
.input-data input:valid ~ .underline:before,
.input-data textarea:focus ~ .underline:before,
.input-data textarea:valid ~ .underline:before{
  transform: scale(1);
}
.submit-btn .input-data{
  overflow: hidden;
  height: 45px!important;
  width: 25%!important;
}
.submit-btn .input-data .inner{
  height: 100%;
  width: 300%;
  position: absolute;
  left: -100%;
  background: -webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea);
  transition: all 0.4s;
}
.submit-btn .input-data:hover .inner{
  left: 0;
}

.submit{
  background-color: #2a3040;
  color: white;
  padding: 4px 16px;
  border-radius: 8px;
  font-weight: 500;
  width: fit-content!important;
  transition: 0.3s;
}
.submit:hover{
  background-color: #ff8000;
  color: black;
  transition: 0.3s;
}
.submit-btn .input-data input{
  background: none;
  border: none;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  z-index: 2;
}
@media screen and (max-width: 768px) {
  .submit{
    width: 100%!important;
    padding: 8px 16px;
  }
  .container{
    width: 90%;
  }
  .container .text{
    font-size: 30px;
  }
  .container form{
    padding: 10px 0 0 0;
  }
  .container form .form-row{
    display: block;
  }
  form .form-row .input-data{
    margin: 35px 0!important;
  }
  .submit-btn .input-data{
    width: 40%!important;
  }
}
</style>

<style>
.dp__theme_light{
  /* --dp-border-color: transparent;
  --dp-border-color-hover: transparent; */
}
</style>