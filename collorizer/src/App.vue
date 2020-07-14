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
$primary-color: #343434;
$primary-bg-color: #fefefe;

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

li {
  display: inline-block;
}
</style>
