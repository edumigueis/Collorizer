<template>
  <div class="corpo">
    <vue-page-transition name="fade-in-right" mode="out-in">
      <!-- Add name="slide-left" or right for slide transition-->
      <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
import { routes } from "./routes";
export default {
  data() {
    return {
      routes,
    };
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Martel:wght@300;400;600;700;800;900&family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

$font-stack:    "Montserrat", sans-serif;
$primary-color: #fcfcfc;
$primary-bg-color: #1f1f1f;
::-webkit-scrollbar {
  width: 9px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: 0;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(161, 160, 160);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(138, 136, 136);
}
html,
body {
  margin: 0;
  overflow-x: hidden;
  width: 100%;
  font-family: $font-stack;
  font-size: 14px;
  background: $primary-bg-color;
  color: $primary-color;
}
.corpo {
  width: 100%;
  margin: 0;
}
a {
  text-decoration: none;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
.vc-swatches{
  width: 280px !important;
    height: 300px !important;
    overflow-y: scroll;
    background-color: #1f1f1f !important;
}
.vc-sketch-field .vc-input__input {
    color: #fcfcfc;
    background: #1f1f1f !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
}
.vc-sketch-presets {
    border-top: 1px solid #555 !important;
}
.vc-sketch-field .vc-input__label {
    color: #fcfcfc !important;
}
.vc-sketch {
    background: #1f1f1f !important;
}
.vc-sketch-color-wrap .vc-checkerboard {
    border-radius: 3px;
}
</style>
