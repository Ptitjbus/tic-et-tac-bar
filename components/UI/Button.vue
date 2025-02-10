<template>
  <router-link v-if="routerLink" :class="{ 'w-full': fullWidth }" class="flex items-center justify-center gap-2 bg-transparent border border-white backdrop-blur text-white font-semibold min-w-40 h-14 rounded-sm text-center text-lg hover:!text-black hover:!bg-white transition ease-in-out hover:duration-100 place-content-center" :to="to">
    <component :is="icon" /> {{ label }}
  </router-link>

  <a v-else :class="{ 'w-full': fullWidth }" class="flex items-center justify-center gap-2 bg-transparent border border-white backdrop-blur text-white font-semibold min-w-40 h-14 rounded-sm text-center text-lg hover:!text-black hover:!bg-white transition ease-in-out hover:duration-100 place-content-center " :href="to" :target="blank ? '_blank': ''">
    <component :is="icon" /> {{ label }}
  </a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    to: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    blank:{
      type: Boolean,
      required: false,
      default: false
    },
    routerLink: {
      type: Boolean,
      required: false,
      default: false
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false
    },
    icon: {
      type: [Object, Function],
      required: false
    }
  }
}
</script>