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
$font-stack:    Helvetica, sans-serif;
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
