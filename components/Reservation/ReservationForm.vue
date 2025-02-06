<template>
  <Modale v-model="showModal" 
           :title="modalTitle"
           @confirm="handleConfirm">
      <p>{{ modalText }}</p>
  </Modale>
  <div class="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-md mb-5">
    <MainTitle label="Formulaire de réservation" black :centered="!isMobile"></MainTitle>
    <form class="mt-5" ref="form" @submit.prevent="handleSubmit">
      <div class="flex flex-col gap-5 mt-8">
        <div class="relative w-full">
          <label class="block text-base mb-3">Établissement *</label>
          <div class="flex flex-col gap-2 md:flex-row md:gap-4">
            <label class="cursor-pointer w-full">
              <input type="radio" name="BAR" value="Lyon 6" v-model="template_param.BAR" required class="hidden" />
              <span
                class="px-6 py-2 w-full rounded-lg border-2 transition-colors duration-200 ease-in-out flex flex-col gap-1 items-center justify-center"
                :class="template_param.BAR === 'Lyon 6'
                  ? 'bg-custom-orange text-white border-custom-orange'
                  : 'border-gray-300 hover:border-custom-orange'">
                Lyon 6
                <span class="text-xs text-gray-500 transition-colors duration-200 ease-in-out" :class="template_param.BAR === 'Lyon 6' && ' !text-gray-200'">
                  47 Rue Garibaldi, 69006 Lyon
                </span>
              </span>
            </label>
            <label class="cursor-pointer w-full">
              <input type="radio" name="BAR" value="Lyon 7" v-model="template_param.BAR" required class="hidden" />
              <span
              class="px-6 py-2 w-full rounded-lg border-2 transition-colors duration-200 ease-in-out flex flex-col gap-1 items-center justify-center"
              :class="template_param.BAR === 'Lyon 7'
                  ? 'bg-custom-orange text-white border-custom-orange'
                  : 'border-gray-300 hover:border-custom-orange'">
                Lyon 7
                <span class="text-xs text-gray-500 transition-colors duration-200 ease-in-out" :class="template_param.BAR === 'Lyon 7' && ' !text-gray-200'">
                  135 Rue Sébastien Gryphe, 69007 Lyon
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-5 md:gap-4 my-12">
        <div class="relative w-full group">
          <input v-model="template_param.NOM" name="NOM" type="text"
            class="w-full h-10 border-b-2 border-gray-200 focus:border-custom-orange outline-none text-lg peer" />
          <label class="absolute left-0 -top-6 text-base transition-all peer-focus:text-custom-orange">
            Prénom *
          </label>
        </div>

        <div class="relative w-full group">
          <input v-model="template_param.PHONE" name="PHONE" type="tel" required
            class="w-full h-10 border-b-2 border-gray-200 focus:border-custom-orange outline-none text-lg peer" />
          <label class="absolute left-0 -top-6 text-base transition-all peer-focus:text-custom-orange">
            Numéro de téléphone *
          </label>
        </div>
      </div>

      <div class="flex flex-col gap-5 my-12">
        <div class="relative w-full">
          <select 
            v-model="template_param.NOMBRE" 
            name="NOMBRE"
            class="w-full h-10 border-b-2 border-gray-200 focus:border-custom-orange outline-none text-lg pb-3"
          >
            <option v-for="n in (template_param.BAR === 'Lyon 6' ? 50 : 40)" 
                    :key="n" 
                    :value="n">
              {{ n }}
            </option>
          </select>
          <label class="absolute left-0 -top-6 text-base mb-2">
            Nombre de personnes *
          </label>
          <small class="text-gray-500 text-xs">De 1 à {{ template_param.BAR === 'Lyon 6' ? '50' : '40'}} personnes.</small>
        </div>

        <div class="relative w-full">
          <VueDatePicker v-model="template_param.JOUR" name="JOUR" locale="fr" model-type="dd/MM/yyyy" :min-date="new Date()"
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
          class="w-full border-b-2 border-gray-200 focus:border-custom-orange outline-none text-lg resize-none peer"></textarea>
        <label class="absolute left-0 -top-6 text-base transition-all peer-focus:text-custom-orange">
          Un message à nous transmettre ?
        </label>
      </div>


      <div class="flex justify-center mb-4">
        <button type="submit"
          class="py-3 w-full bg-gray-900 text-white rounded-md font-medium hover:bg-custom-orange hover:text-black transition-colors duration-300">
          Confirmer
        </button>
      </div>

      <p class="text-sm text-center text-gray-600 font-bold mb-4">
        ⚠ Veuillez noter pendant les mois où la terrasse est ouverte, il n'est pas possible d'y réserver une table.
        Toutes les places sont réservées à l'intérieur. ⚠
      </p>

      <p class="text-xs text-gray-600">
        Conformément au RGPD, toute donnée est acheminée immédiatement vers l'adresse contact@tic-et-tac-bar.fr, sans
        qu'aucune information ne soit conservée.
        <br />
        Toutes les questions marquées d'un astérisque (*) doivent être complétées obligatoirement.
      </p>
    </form>
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
import Modale from '@/components/Modal/Modale.vue';

export default {
  components: { MainTitle, VueDatePicker, Modale },
  mixins: [windowWidthMixin],
  setup() {
    const config = useRuntimeConfig()
    const form = ref(null);
    const inputFieldReset = ref(null);
    const showModal = ref(false)
    const modalTitle = ref()
    const modalText = ref()
    const router = useRouter()
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

    

  const handleConfirm = () => {
    router.push("/")
    showModal.value = false
  }

    const handleSubmit = () => {
      sendMail()
      console.log(typeof template_param.value.JOUR, template_param.value.JOUR)
      if(parseInt(template_param.value.NOMBRE) < 8) {
        modalTitle.value = "Réservation confirmée !"
        modalText.value = `Votre demande de réservation pour ${template_param.value.NOMBRE} ${template_param.value.NOMBRE === 1 ? 'personne' : "personnes"} à bien été prise en compte pour Tic & Tac ${template_param.value.BAR}, le ${template_param.value.JOUR} à ${template_param.value.HEURE}. À bientôt !`
      } else {
        modalTitle.value = "Demande envoyée !"
        modalText.value = "Merci pour votre demande ! Pour les groupes de plus de 8 personnes, un membre de notre équipe vous contactera sous peu pour finaliser la réservation."
      }
      showModal.value = true
    }

    const sendMail = () => {
      emailjs.send(config.public.emailServiceId,template_param.value.BAR === 'Lyon 6' ? config.public.emailTemplateIdLyon6 : config.public.emailTemplateIdLyon7, template_param.value, config.public.emailApiKey)
        .then(() => {
          inputFieldReset.value = " ";
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
      handleConfirm,
      showModal,
      handleSubmit,
      modalTitle,
      modalText,
      sendMail,
      ...toRefs(gifs),
      currentDatePlusOne,
      template_param
    }
  }
}
</script>