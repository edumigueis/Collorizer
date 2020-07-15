<template>
  <div class="main-body">
    <section class="header">
      <div class="header-text">
        <h1>Palette Creator</h1>
        <p>Choose the colors you want in your palette</p>
        <div class="bottom-text-indicators">
          <p>{{ currentColor.hex }}</p>
          <p>{{ currentColor.hsl }}</p>
        </div>
      </div>

      <div class="picker-wrap">
        <div class="picker-prop">
          <div class="container">
            <div class="shape" :style="blobStyles"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="palette">
      <div class="palette-wrap">
        <div class="palette-prop">
          <div id="first-color" class="palette-member" :style="style1">
            <div class="hidden-color-picking">
              <chrome-picker v-model="color1"></chrome-picker>
            </div>
          </div>
          <div id="sec-color" class="palette-member" :style="style2">
            <div class="hidden-color-picking">
              <chrome-picker v-model="color2"></chrome-picker>
            </div>
          </div>
          <div id="third-color" class="palette-member" :style="style3">
            <div class="hidden-color-picking">
              <chrome-picker v-model="color3"></chrome-picker>
            </div>
          </div>
          <div id="forth-color" class="palette-member" :style="style4">
            <div class="hidden-color-picking">
              <chrome-picker v-model="color4"></chrome-picker>
            </div>
          </div>
          <div id="sixth-color" class="palette-member" :style="style5">
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
.main-body {
  background: #1f1f1f;
}
.header {
  width: 100%;
  height: 200px;
  background-color: rgb(46, 46, 46);
  .header-text {
    padding-top: 30px;
    padding-left: 50px;
    position: relative;
    height: 100%;
    .bottom-text-indicators {
      position: absolute;
      bottom: 10px;
      display: flex;
      left: 30px;
      p{
        color: #ffffff;
        text-transform: uppercase;
        margin-left: 20px;
        font-size: 12px;
      }
    }
    h1 {
      font-size: 3rem;
      color: #d8d8d8;
    }
    p {
      font-size: 16px;
      color: #d8d8d8;
    }
  }
}
.picker-prop {
  width: 100%;
  position: relative;
}
.palette {
  .palette-wrap {
    margin: 0px auto;
    max-width: 1900px;
    padding: 40px 40px;
    .palette-prop {
      display: flex;
      justify-content: space-evenly;
      .palette-member {
        overflow: visible;
        position: relative;
        flex: 1 1;
        background-color: aqua;
        height: 600px;
        &:hover .hidden-color-picking {
          display: block;
        }
        .hidden-color-picking {
          display: none;
          position: absolute;
          top: -30px;
          left: -20px;
          z-index: 40;
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
  width: 600px;
  position: absolute;
  top: -230px;
  right: 0;

  .shape {
    animation: morph 8s ease-in-out infinite;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    height: 400px;
    transition: all 1s ease-in-out;
    width: 600px;
    z-index: 5;
  }
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
var color1 = { hex: "#35567dff", hsl: { h: 213, s: 0.4, l: 0.35, a: 1 } };
var color2 = { hex: "#6c5b7bff", hsl: { h: 272, s: 0.15, l: 0.42, a: 1 }  };
var color3 = { hex: "#c06c84ff", hsl: { h: 343, s: 0.4, l: 0.59, a: 1 } };
var color4 = { hex: "#f67280ff", hsl: { h: 354, s: 0.88, l: 0.71, a: 1 } };
var color5 = { hex: "#f8b195ff", hsl: { h: 17, s: 0.88, l: 0.78, a: 1 } };
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
var currentColor = color1;
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
      currentColor,
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
    style1() {
      this.currentColor = color1;
      return {
        "background-color": this.color1.hex,
      };
    },
    style2() {
      this.currentColor = color2;
      return {
        "background-color": this.color2.hex,
      };
    },
    style3() {
      this.currentColor = color3;
      return {
        "background-color": this.color3.hex,
      };
    },
    style4() {
      this.currentColor = color4;
      return {
        "background-color": this.color4.hex,
      };
    },
    style5() {
      this.currentColor = color5;
      return {
        "background-color": this.color5.hex,
      };
    },
  },
};
</script>
