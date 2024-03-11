<template>
  <router-link v-if="routerLink" class="main-button" :to="to">
      {{ label }}<img src="../../assets/icons/hover-icon.svg" alt="icon" class="hover-icon" />
  </router-link>

  <a v-else class="main-button" :href="to" :target="blank ? '_blank': ''">
    {{ label }}<img src="../../assets/icons/hover-icon.svg" alt="icon" class="hover-icon" />
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
    }
  }
}
</script>

<style lang="scss" scoped>
.main-button{
  width: fit-content;
  height: fit-content;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  text-decoration: none;
  font-weight: 500;
  color: black;
  font-size: 1rem;
  letter-spacing: 0.05em;
  transition: all 200ms ease-in-out;
  box-shadow: 0 0 40px 40px #fff inset, 0 0 0 0 #fff;
  font-family: 'Montserrat', sans-serif;
}
.main-button span{
  text-align: center;
}
.hover-icon{
  width: 0;
  height: auto;
  margin-left: 0px;
  margin-right: 0px;
  transition: 0.2s;
}
.main-button:hover .hover-icon{
  width: 22px;
  margin-left: 8px;
  margin-right: -8px;
}
// .main-button:hover{
//   box-shadow: 0 0 0px 0 #fff inset, 0 0 0px 0px #fff;
//   color: #fff!important;
//   background-color: transparent!important;
// }
</style>