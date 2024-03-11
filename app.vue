<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
#app {
  background-color: #000;
}
html{
  background-color: #000;
}
html, body{
  overflow-x: hidden;
}
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
  url(./assets/fonts/Roboto-Regular.ttf) format("truetype");
}
*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: #ebedef;
  background: #000;
  // background: #cccccc;
}

*::-webkit-scrollbar-thumb {
  // background-color: #797579;
  background-color: #ff8000;
  border-radius: 20px;
}
</style>
