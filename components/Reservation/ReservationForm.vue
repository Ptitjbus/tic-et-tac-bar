<template>
  <div class="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-md mb-5">
    <MainTitle v-if="!isEmailSent" label="Formulaire de réservation" black :centered="!isMobile"></MainTitle>

    <h5 v-else class="text-lg">
      Votre demande de réservation a bien été prise en compte.<br /><br />
      Cette dernière vous sera confirmée par l'équipe dans les plus brefs délais, merci.
    </h5>

    <form v-if="!isEmailSent" class="mt-5" ref="form" @submit.prevent="sendMail">
      <div class="flex flex-col gap-5 mt-8">

        <div class="relative w-full">
          <label class="block text-base mb-4">Établissement *</label>
          <div class="flex gap-4">
            <label class="cursor-pointer w-full">
              <input type="radio" name="BAR" value="Lyon 6" v-model="template_param.BAR" required class="hidden" />
              <span
                class="px-6 py-2 w-full rounded-lg border-2 transition-colors duration-200 ease-in-out flex items-center justify-center"
                :class="template_param.BAR === 'Lyon 6'
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'border-gray-300 hover:border-orange-500'">
                Lyon 6
              </span>
            </label>
            <label class="cursor-pointer w-full">
              <input type="radio" name="BAR" value="Lyon 7" v-model="template_param.BAR" required class="hidden" />
              <span
                class="px-6 py-2 w-full rounded-lg border-2 transition-colors duration-200 ease-in-out flex items-center justify-center"
                :class="template_param.BAR === 'Lyon 7'
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'border-gray-300 hover:border-orange-500'">
                Lyon 7
              </span>
            </label>
          </div>
        </div>

        <div class="relative w-full group">
          <input v-model="template_param.NOM" name="NOM" type="text"
            class="w-full h-10 border-b-2 border-gray-200 focus:border-orange-500 outline-none text-lg peer" />
          <label class="absolute left-0 -top-6 text-base transition-all peer-focus:text-orange-500">
            Prénom *
          </label>
        </div>

        <div class="relative w-full group">
          <input v-model="template_param.PHONE" name="PHONE" type="tel" required
            class="w-full h-10 border-b-2 border-gray-200 focus:border-orange-500 outline-none text-lg peer" />
          <label class="absolute left-0 -top-6 text-base transition-all peer-focus:text-orange-500">
            Numéro de téléphone *
          </label>
        </div>
      </div>

      <div class="flex flex-col gap-5 my-12">
        <div class="relative w-full">
          <div>
            <input v-model="template_param.NOMBRE" type="number" name="NOMBRE" min="2" :max="template_param.BAR === 'Lyon 6' ? 50 : 40"
              class="w-full h-10 border-b-2 border-gray-200 focus:border-orange-500 outline-none text-lg pb-3" />
            <label class="absolute left-0 -top-6 text-base mb-2">
              Nombre de personnes *
            </label>
            <small class="text-gray-500 text-xs">De 2 à {{ template_param.BAR === 'Lyon 6' ? '50' : '40'}} personnes.</small>
          </div>
        </div>

        <div class="relative w-full">
          <VueDatePicker v-model="template_param.JOUR" name="JOUR" model-type="PPPP" locale="fr" :min-date="new Date()"
            :enable-time-picker="false" :disabled-week-days="[0]" format="dd/MM/yyyy" auto-apply required
            class="w-full " />
          <label class="absolute left-0 -top-6 text-base mb-2">
            Date *
          </label>
          <small class="text-gray-500 text-xs">Sauf les dimanches.</small>
        </div>

        <div class="relative w-full">
          <div>
            <VueDatePicker v-model="template_param.HEURE" time-picker locale="fr" minutes-increment="15"
              minutes-grid-increment="15" :min-time="{ hours: 17, minutes: 0 }" :start-time="{ hours: 17, minutes: 0 }"
              :max-time="{ hours: 21, minutes: 59 }" format="HH:mm" model-type="HH:mm" name="HEURE" required
              class="w-full" />
            <label class="absolute left-0 -top-6 text-base mb-2">
              Heure *
            </label>
            <small class="text-gray-500 text-xs">De 17h jusqu'à 21h45.</small>
          </div>
        </div>
      </div>

      <div class="relative w-full mb-8">
        <textarea v-model="template_param.COMMENTAIRE" name="COMMENTAIRE" rows="2"
          class="w-full border-b-2 border-gray-200 focus:border-orange-500 outline-none text-lg resize-none peer"></textarea>
        <label class="absolute left-0 -top-6 text-base transition-all peer-focus:text-orange-500">
          Un message à nous transmettre ?
        </label>
      </div>


      <div class="flex justify-center mb-4">
        <button type="submit"
          class="py-3 w-full bg-gray-900 text-white rounded-md font-medium hover:bg-orange-500 hover:text-black transition-colors duration-300">
          Confirmer
        </button>
      </div>

      <p class="text-sm text-center text-gray-600 font-bold mb-2">
        ⚠ Veuillez noter que la réservation en terrasse n'est pas disponible pendant les mois où elle est ouverte.
        Toutes les places sont réservées à l'intérieur.
      </p>

      <p class="text-xs text-gray-600 mb-6">
        Conformément au RGPD, toute donnée est acheminée immédiatement vers l'adresse contact@tic-et-tac-bar.fr, sans
        qu'aucune information ne soit conservée.
        <br />
        Toutes les questions marquées d'un astérisque (*) doivent être complétées obligatoirement.
      </p>
    </form>

    <div v-else class="mt-5 flex justify-center items-center w-full">
      <img :src="emailSentGif" class="rounded-lg w-full h-auto" />
    </div>
  </div>
</template>

<script>
import MainTitle from '@/components/UI/Title.vue'
import emailjs from 'emailjs-com'
import { ref, toRefs, reactive } from 'vue'
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
      BAR: '',
      NOM: '',
      PHONE: '',
      NOMBRE: '',
      JOUR: '',
      HEURE: '17:00',
      COMMENTAIRE: '',
    })

    const sendMail = () => {
      emailjs.send(config.public.emailServiceId, config.public.emailTemplateId, template_param.value, config.public.emailApiKey)
        .then(() => {
          inputFieldReset.value = " ";
          isEmailSent.value = true
        }, (error) => {
          alert('Message not sent', error);
        });
    }

    const currentDatePlusOne = ref('');
    const correntDate = new Date();
    const year = correntDate.getFullYear();
    const mounth = String(correntDate.getMonth() + 1).padStart(2, '0');
    const day = String(correntDate.getDate()).padStart(2, '0');
    currentDatePlusOne.value = `${year}/${mounth}/${day}`;

    return {
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