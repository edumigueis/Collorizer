<template>
  <div>
    <section>
      <h1>Palette Lab</h1>
    </section>
    <section class="color-wheel">
      <div class="picker-wrap">
        <div class="picker-prop">
          <p>{{ color1.hex }}</p>
          <div class="container">
            <div class="shape" :style="blobStyles"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="palette">
      <div class="palette-wrap">
        <div class="palette-prop">
          <div id="first-color" class="palette-member">
            <div class="hidden-color-picking">
              <chrome-picker v-model="color1"></chrome-picker>
            </div>
          </div>
          <div id="sec-color" class="palette-member">
            <div class="hidden-color-picking">
              <chrome-picker v-model="color2"></chrome-picker>
            </div>
          </div>
          <div id="third-color" class="palette-member">
            <div class="hidden-color-picking">
              <chrome-picker v-model="color3"></chrome-picker>
            </div>
          </div>
          <div id="forth-color" class="palette-member">
            <div class="hidden-color-picking">
              <chrome-picker v-model="color4"></chrome-picker>
            </div>
          </div>
          <div id="sixth-color" class="palette-member">
            <div class="hidden-color-picking">
              <chrome-picker v-model="color5"></chrome-picker>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.picker-prop {
  height: 700px;
  width: 900px;
  position: relative;
}
.palette {
  .palette-wrap {
    margin: 0 auto;
    max-width: 1300px;
    padding: 0 40px;
    .palette-prop {
      display: flex;
      justify-content: space-evenly;
      .palette-member {
        overflow: visible;
        position: relative;
        flex: 1 1;
        background-color: aqua;
        height: 600px;
        &:hover .hidden-color-picking{
            display: block;
        }
        .hidden-color-picking{
            display: none;
        }
        &:nth-child(1){
            background-color: #35567d;
        }
        &:nth-child(2){
            background-color: #6c5b7b;
        }
        &:nth-child(3){
            background-color: #c06c84;
        }
        &:nth-child(4){
            background-color: #f67280;
        }
        &:nth-child(5){
            background-color: #f8b195;
        }
      }
    }
  }
}
.container {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
}

.shape {
  animation: morph 8s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  height: 400px;
  transition: all 1s ease-in-out;
  width: 400px;
  z-index: 5;
}

@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }

  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }

  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}
</style>

<script>
import { Photoshop } from "vue-color";
import { Chrome } from "vue-color";
var color1 = "#35567d"
var color2 = "#6c5b7b"
var color3 = "#c06c84"
var color4 = "#f67280"
var color5 = "#f8b195"
var color6 = {
  hex: "#194d33",
  hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
  hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
  rgba: { r: 25, g: 77, b: 51, a: 1 },
  a: 1,
};
var color7 = {
  hex: "#194d33",
  hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
  hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
  rgba: { r: 25, g: 77, b: 51, a: 1 },
  a: 1,
};
var color8 = {
  hex: "#194d33",
  hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
  hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
  rgba: { r: 25, g: 77, b: 51, a: 1 },
  a: 1,
};
var color9 = {
  hex: "#194d33",
  hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
  hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
  rgba: { r: 25, g: 77, b: 51, a: 1 },
  a: 1,
};
var color10 = {
  hex: "#194d33",
  hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
  hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
  rgba: { r: 25, g: 77, b: 51, a: 1 },
  a: 1,
};
var amount = 5;
export default {
  data() {
    return {
      color1,
      color2,
      color3,
      color4,
      color5,
      color6,
      color7,
      color8,
      color9,
      color10,
      amount,
    };
  },
  methods: {},
  mounted() {},
  components: {
    "photoshop-picker": Photoshop,
    "chrome-picker": Chrome,
  },
  computed: {
    blobStyles() {
      var res;
      switch (amount) {
        case 2: {
          res = `linear-gradient(90deg, ${this.color1.hex},${this.color2.hex})`;
          break;
        }
        case 3: {
          res = `linear-gradient(90deg, ${this.color1.hex},${this.color2.hex},${this.color3.hex})`;
          break;
        }
        case 4: {
          res = `linear-gradient(90deg, ${this.color1.hex},${this.color2.hex},${this.color3.hex},${this.color4.hex})`;
          break;
        }
        case 5: {
          res = `linear-gradient(90deg, ${this.color1.hex},${this.color2.hex},${this.color3.hex},${this.color4.hex},${this.color5.hex})`;
          break;
        }
        case 6: {
          res = `linear-gradient(90deg, ${this.color1.hex},${this.color2.hex},${this.color3.hex},${this.color4.hex},${this.color5.hex},${this.color6.hex})`;
          break;
        }
        case 8: {
          res = `linear-gradient(90deg, ${this.color1.hex},${this.color2.hex},${this.color3.hex},${this.color4.hex},${this.color5.hex},${this.color6.hex},${this.color7.hex})`;
          break;
        }
        case 9: {
          res = `linear-gradient(90deg, ${this.color1.hex},${this.color2.hex},${this.color3.hex},${this.color4.hex},${this.color5.hex},${this.color6.hex},${this.color7.hex},${this.color8.hex},${this.color9.hex})`;
          break;
        }
        case 10: {
          res = `linear-gradient(90deg, ${this.color1.hex},${this.color2.hex},${this.color3.hex},${this.color4.hex},${this.color5.hex},${this.color6.hex},${this.color7.hex},${this.color8.hex},${this.color9.hex},${this.color10.hex})`;
          break;
        }
      }
      return {
        background: res,
      };
    },
  },
};
</script>
