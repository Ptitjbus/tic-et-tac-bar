<template>
  <div :class="centered ? 'centered' : ''">
    <div class="title">
      <h1 :style="black ? 'color: #000' : 'color: #fff'">{{ label.toUpperCase() }}</h1>
    </div>
    
    <div class="underline"></div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    label: {
      type: String,
      required: true
    },
    centered: {
      type: Boolean,
      required: false,
      default: false
    },
    black: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.title h1{
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 1rem;
    z-index: 3;
}
.underline{
    background: #ff8000;
    height: 2px;
    width: 4rem;
    border-radius: 8px;
}

.centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>