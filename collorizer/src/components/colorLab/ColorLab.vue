<template>
  <div>
    <section>
      <my-menu></my-menu>
      <div class="section-wrap">
        <div class="inner-wrap">
          <h1 class="main-title">Color Lab</h1>
          <div class="flex-wrap">
            <div class="flex-part">
              <div class="main-color-picker" id="changing-bg" :style="selColor">
                <chrome-picker v-model="color"></chrome-picker>
              </div>
            </div>
            <div class="flex-part">
              <div class="color-combine-wrapper">
                <div class="color-combine">
                  <div class="combination">
                    <div class="prop" :style="selColor"></div>
                    <div class="prop" :style="opColor"></div>
                  </div>
                  <div class="combination">
                    <div class="prop" :style="selColor"></div>
                    <div class="prop" :style="triColor1"></div>
                    <div class="prop" :style="triColor2"></div>
                  </div>
                  <div class="combination">
                    <div class="prop" :style="selColor"></div>
                    <div class="prop" :style="quadColor1"></div>
                    <div class="prop" :style="quadColor2"></div>
                    <div class="prop" :style="quadColor3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-part">
              <div class="color-combine">
                <div class="combination">
                  <div class="prop" :style="selColor"></div>
                  <div class="prop" :style="selColorLight"></div>
                  <div class="prop" :style="opColor"></div>
                  <div class="prop" :style="opColorLight"></div>
                  <div class="prop" :style="neutralOp"></div>
                </div>
                <div class="combination">
                  <div class="prop" :style="selColor"></div>
                  <div class="prop" :style="selColorLight"></div>
                  <div class="prop" :style="triColor1"></div>
                  <div class="prop" :style="triColor1Light"></div>
                  <div class="prop" :style="triColor2"></div>

                  <div class="prop" :style="neutralOp"></div>
                </div>
                <div class="combination pastel">
                  <div class="prop" :style="selColor"></div>
                    <div class="prop" :style="quadColor1"></div>
                    <div class="prop" :style="quadColor2"></div>
                    <div class="prop" :style="quadColor3"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-wrap mega-wrap">
            <div class="flex-half-full">
              <div class="combination">
                <div class="prop" :style="selColor"></div>
                <div class="prop" :style="mono1"></div>
                <div class="prop" :style="mono2"></div>
                <div class="prop" :style="mono3"></div>
                <div class="prop" :style="mono4"></div>
              </div>
              <div class="combination">
                <div class="prop" :style="selColor"></div>
                <div class="prop" :style="mono1Vary"></div>
                <div class="prop" :style="mono2Vary"></div>
                <div class="prop" :style="mono3Vary"></div>
                <div class="prop" :style="mono4Vary"></div>
              </div>
              <div class="combination">
                <div class="prop" :style="selColor"></div>
                <div class="prop" :style="mono1VaryS"></div>
                <div class="prop" :style="mono2VaryS"></div>
                <div class="prop" :style="mono3VaryS"></div>
                <div class="prop" :style="mono4VaryS"></div>
              </div>
            </div>
            <div class="flex-half-full">
              <div class="combination">
                <div class="prop" :style="ana1"></div>
                <div class="prop" :style="ana2"></div>
                <div class="prop" :style="selColor"></div>
                <div class="prop" :style="ana3"></div>
                <div class="prop" :style="ana4"></div>
              </div>
              <div class="combination">
                <div class="prop" :style="ana1M"></div>
                <div class="prop" :style="ana2M"></div>
                <div class="prop" :style="selColor"></div>
                <div class="prop" :style="ana3M"></div>
                <div class="prop" :style="ana4M"></div>
              </div>
              <div class="combination">
                <div class="prop" :style="ana1S"></div>
                <div class="prop" :style="ana2S"></div>
                <div class="prop" :style="selColor"></div>
                <div class="prop" :style="ana3S"></div>
                <div class="prop" :style="ana4S"></div>
              </div>
            </div>
          </div>
          <div class="flex-wrap mega-wrap">
            <div class="flex-full">
              <div class="combination full">
                <div class="prop" :style="fullSpec(-5)"></div>
                <div class="prop" :style="fullSpec(-4)"></div>
                <div class="prop" :style="fullSpec(-3)"></div>
                <div class="prop" :style="fullSpec(-2)"></div>
                <div class="prop" :style="fullSpec(-1)"></div>
                <div class="prop" :style="selColor"></div>
                <div class="prop" :style="fullSpec(1)"></div>
                <div class="prop" :style="fullSpec(2)"></div>
                <div class="prop" :style="fullSpec(3)"></div>
                <div class="prop" :style="fullSpec(4)"></div>
                <div class="prop" :style="fullSpec(5)"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <my-footer></my-footer>
    </section>
    <!--<section class="color-wheel">
      <div class="picker-wrap">
        <div class="picker-prop">
          <canvas
            width="300"
            height="300"
            class="wheel"
            id="example"
            v-on:click="showColor"
          ></canvas>
        </div>
      </div>
    </section>-->
  </div>
</template>
<style lang="scss" scoped>
.picker-prop {
  height: 700px;
  width: 700px;
  position: relative;
  .wheel {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    border-radius: 100%;
    background: radial-gradient(
        circle at 50% 0,
        red,
        rgba(242, 13, 13, 0.8) 10%,
        rgba(230, 26, 26, 0.6) 20%,
        rgba(204, 51, 51, 0.4) 30%,
        rgba(166, 89, 89, 0.2) 40%,
        hsla(0, 0%, 50%, 0) 50%
      ),
      radial-gradient(
        circle at 85.35533905932738% 14.644660940672622%,
        #ffbf00,
        rgba(242, 185, 13, 0.8) 10%,
        rgba(230, 179, 26, 0.6) 20%,
        rgba(204, 166, 51, 0.4) 30%,
        rgba(166, 147, 89, 0.2) 40%,
        hsla(45, 0%, 50%, 0) 50%
      ),
      radial-gradient(
        circle at 100% 50%,
        #80ff00,
        rgba(128, 242, 13, 0.8) 10%,
        rgba(128, 230, 26, 0.6) 20%,
        rgba(128, 204, 51, 0.4) 30%,
        rgba(128, 166, 89, 0.2) 40%,
        hsla(90, 0%, 50%, 0) 50%
      ),
      radial-gradient(
        circle at 85.35533905932738% 85.35533905932738%,
        #00ff40,
        rgba(13, 242, 70, 0.8) 10%,
        rgba(26, 230, 77, 0.6) 20%,
        rgba(51, 204, 89, 0.4) 30%,
        rgba(89, 166, 108, 0.2) 40%,
        hsla(135, 0%, 50%, 0) 50%
      ),
      radial-gradient(
        circle at 50.00000000000001% 100%,
        #0ff,
        rgba(13, 242, 242, 0.8) 10%,
        rgba(26, 230, 230, 0.6) 20%,
        rgba(51, 204, 204, 0.4) 30%,
        rgba(89, 166, 166, 0.2) 40%,
        hsla(180, 0%, 50%, 0) 50%
      ),
      radial-gradient(
        circle at 14.64466094067263% 85.35533905932738%,
        #0040ff,
        rgba(13, 70, 242, 0.8) 10%,
        rgba(26, 77, 230, 0.6) 20%,
        rgba(51, 89, 204, 0.4) 30%,
        rgba(89, 108, 166, 0.2) 40%,
        hsla(225, 0%, 50%, 0) 50%
      ),
      radial-gradient(
        circle at 0 50.00000000000001%,
        #7f00ff,
        rgba(128, 13, 242, 0.8) 10%,
        rgba(128, 26, 230, 0.6) 20%,
        rgba(128, 51, 204, 0.4) 30%,
        rgba(128, 89, 166, 0.2) 40%,
        hsla(270, 0%, 50%, 0) 50%
      ),
      radial-gradient(
        circle at 14.644660940672615% 14.64466094067263%,
        #ff00bf,
        rgba(242, 13, 185, 0.8) 10%,
        rgba(230, 26, 179, 0.6) 20%,
        rgba(204, 51, 166, 0.4) 30%,
        rgba(166, 89, 147, 0.2) 40%,
        hsla(315, 0%, 50%, 0) 50%
      );
  }
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
        padding: 0 10px;
        position: relative;
        flex: 1 1;
      }
    }
  }
}
.section-wrap {
  max-width: 1400px;
  padding: 0 40px;
  margin: 70px auto;
  .inner-wrap {
    background: #2e2e2e;
    padding: 30px;
  }
}
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  .flex-part {
    flex: 1 1 0px;
  }
}
.main-color-picker {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: morph 8s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  height: 400px;
  transition: all 1s ease-in-out;
  transition: background-color 0.2s ease-in-out !important;
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
.combination {
  display: flex;
  border-radius: 10px;
  height: 60px;
  margin: 20px auto;
  width: 60%;
  display: flex;
  overflow: hidden;
  .prop {
    flex: 1 1 0px;
  }
}
.flex-wrap.mega-wrap {
  flex-wrap: wrap;
  .flex-half-full {
    width: 48%;
    &:nth-child(1) {
      margin-right: 4%;
    }
    display: flex;
    .combination:nth-child(2) {
      margin: 20px 20px;
    }
  }
}
.flex-full {
  width: 48%;
  display: flex;
}
.full {
  width: 100% !important;
}
.main-title {
  font-size: 2.3rem;
  letter-spacing: 0.05rem;
  text-align: center;
  margin-bottom: 50px;
}
.pastel{
  filter: brightness(190%) saturate(71%);
}
</style>

<script>
import { Chrome } from "vue-color";
import Footer from "../shared/footer/Footer";
import Menu from "../shared/menu/Menu";
export default {
  components: {
    "chrome-picker": Chrome,
    "my-footer": Footer,
    "my-menu": Menu,
  },
  data() {
    return {
      color: {
        hex: "#00A8FF",
        hsl: { h: 200, s: 1, l: 0.5, a: 1 },
        hsv: { h: 0.5569, s: 1, v: 1, a: 1 },
        rgba: { r: 0, g: 168, b: 255, a: 1 },
        a: 1,
      },
    };
  },
  computed: {
    selColor() {
      return {
        "background-color": this.color.hex,
      };
    },
    opColor() {
      var manip = this.color.hsl;
      manip = Math.round(manip.h) + 180;
      var op =
        "hsl(" +
        manip +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        this.color.hsl.l * 100 +
        "%)";
      console.log(op);
      return {
        "background-color": op,
      };
    },
    triColor1() {
      var manip = this.color.hsl;
      manip = Math.round(manip.h) + 120;
      var op =
        "hsl(" +
        manip +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        this.color.hsl.l * 100 +
        "%)";
      return {
        "background-color": op,
      };
    },
    triColor2() {
      var manip = this.color.hsl;
      manip = Math.round(manip.h) + 240;
      var op =
        "hsl(" +
        manip +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        this.color.hsl.l * 100 +
        "%)";
      return {
        "background-color": op,
      };
    },
    quadColor1() {
      var manip = this.color.hsl;
      manip = Math.round(manip.h) + 90;
      var op =
        "hsl(" +
        manip +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        this.color.hsl.l * 100 +
        "%)";
      return {
        "background-color": op,
      };
    },
    quadColor2() {
      var manip = this.color.hsl;
      manip = Math.round(manip.h) + 180;
      var op =
        "hsl(" +
        manip +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        this.color.hsl.l * 100 +
        "%)";
      return {
        "background-color": op,
      };
    },
    quadColor3() {
      var manip = this.color.hsl;
      manip = Math.round(manip.h) + 270;
      var op =
        "hsl(" +
        manip +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        this.color.hsl.l * 100 +
        "%)";
      return {
        "background-color": op,
      };
    },
    mono1() {
      var manip = this.color.hsl;
      manip = Math.round(manip.l * 100) + 20;
      var manips = this.color.hsl;
      manips = Math.round(manips.s * 100) - 20;
      var op = "hsl(" + this.color.hsl.h + "," + manips + "%," + manip + "%)";
      return {
        "background-color": op,
      };
    },
    mono2() {
      var manip = this.color.hsl;
      manip = Math.round(manip.l * 100) - 20;
      var manips = this.color.hsl;
      manips = Math.round(manips.s * 100) + 20;
      var op = "hsl(" + this.color.hsl.h + "," + manips + "%," + manip + "%)";
      return {
        "background-color": op,
      };
    },
    mono3() {
      var manip = this.color.hsl;
      manip = Math.round(manip.l * 100) - 10;
      var manips = this.color.hsl;
      manips = Math.round(manips.s * 100) + 20;
      var op = "hsl(" + this.color.hsl.h + "," + manips + "%," + manip + "%)";
      return {
        "background-color": op,
      };
    },
    mono4() {
      var manip = this.color.hsl;
      manip = Math.round(manip.l * 100) + 10;
      var manips = this.color.hsl;
      manips = Math.round(manips.s * 100) + 20;
      var op = "hsl(" + this.color.hsl.h + "," + manips + "%," + manip + "%)";
      return {
        "background-color": op,
      };
    },
    mono1Vary() {
      var manip = this.color.hsl;
      if (manip.l * 100 < 50) {
        manip = Math.round(manip.l * 100) + 10;
      } else {
        manip = Math.round(manip.l * 100) - 10;
      }
      var op =
        "hsl(" +
        this.color.hsl.h +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        manip +
        "%)";
      return {
        "background-color": op,
      };
    },
    mono2Vary() {
      var manip = this.color.hsl;
      if (manip.l * 100 < 50) {
        manip = Math.round(manip.l * 100) + 20;
      } else {
        manip = Math.round(manip.l * 100) - 20;
      }
      var op =
        "hsl(" +
        this.color.hsl.h +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        manip +
        "%)";
      return {
        "background-color": op,
      };
    },
    mono3Vary() {
      var manip = this.color.hsl;
      if (manip.l * 100 < 50) {
        manip = Math.round(manip.l * 100) + 30;
      } else {
        manip = Math.round(manip.l * 100) - 30;
      }
      var op =
        "hsl(" +
        this.color.hsl.h +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        manip +
        "%)";
      return {
        "background-color": op,
      };
    },
    mono4Vary() {
      var manip = this.color.hsl;
      if (manip.l * 100 < 50) {
        manip = Math.round(manip.l * 100) + 40;
      } else {
        manip = Math.round(manip.l * 100) - 40;
      }
      var op =
        "hsl(" +
        this.color.hsl.h +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        manip +
        "%)";
      return {
        "background-color": op,
      };
    },
    mono1VaryS() {
      var manip = this.color.hsl;
      manip = 47;
      var manips = this.color.hsl;
      manips = 71;
      var op = "hsl(" + this.color.hsl.h + "," + manips + "%," + manip + "%)";
      return {
        "background-color": op,
      };
    },
    mono2VaryS() {
      var manip = this.color.hsl;
      manip = 44;
      var manips = this.color.hsl;
      manips = 36;
      var op = "hsl(" + this.color.hsl.h + "," + manips + "%," + manip + "%)";
      return {
        "background-color": op,
      };
    },
    mono3VaryS() {
      var manip = this.color.hsl;
      manip = 30;
      var manips = this.color.hsl;
      manips = 71;
      var op = "hsl(" + this.color.hsl.h + "," + manips + "%," + manip + "%)";
      return {
        "background-color": op,
      };
    },
    mono4VaryS() {
      var manip = this.color.hsl;
      manip = 72;
      var manips = this.color.hsl;
      manips = 37;
      var op = "hsl(" + this.color.hsl.h + "," + manips + "%," + manip + "%)";
      return {
        "background-color": op,
      };
    },
    ana1() {
      var manip = this.color.hsl.h;
      manip = manip - 40;
      var op =
        "hsl(" +
        manip +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        this.color.hsl.l * 100 +
        "%)";
      return {
        "background-color": op,
      };
    },
    ana2() {
      var manip = this.color.hsl.h;
      manip = manip - 20;
      var op =
        "hsl(" +
        manip +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        this.color.hsl.l * 100 +
        "%)";
      return {
        "background-color": op,
      };
    },
    ana3() {
      var manip = this.color.hsl.h;
      manip = manip + 20;
      var op =
        "hsl(" +
        manip +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        this.color.hsl.l * 100 +
        "%)";
      return {
        "background-color": op,
      };
    },
    ana4() {
      var manip = this.color.hsl.h;
      manip = manip + 40;
      var op =
        "hsl(" +
        manip +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        this.color.hsl.l * 100 +
        "%)";
      return {
        "background-color": op,
      };
    },
    ana1S() {
      var manip = this.color.hsl.h;
      manip = manip - 65;
      var op =
        "hsl(" +
        manip +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        this.color.hsl.l * 100 +
        "%)";
      return {
        "background-color": op,
      };
    },
    ana2S() {
      var manip = this.color.hsl.h;
      manip = manip - 45;
      var op =
        "hsl(" +
        manip +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        this.color.hsl.l * 100 +
        "%)";
      return {
        "background-color": op,
      };
    },
    ana3S() {
      var manip = this.color.hsl.h;
      manip = manip + 45;
      var op =
        "hsl(" +
        manip +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        this.color.hsl.l * 100 +
        "%)";
      return {
        "background-color": op,
      };
    },
    ana4S() {
      var manip = this.color.hsl.h;
      manip = manip + 65;
      var op =
        "hsl(" +
        manip +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        this.color.hsl.l * 100 +
        "%)";
      return {
        "background-color": op,
      };
    },
    ana1M() {
      var manip = this.color.hsl.h;
      manip = manip - 55;
      var op =
        "hsl(" +
        manip +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        this.color.hsl.l * 100 +
        "%)";
      return {
        "background-color": op,
      };
    },
    ana2M() {
      var manip = this.color.hsl.h;
      manip = manip - 35;
      var op =
        "hsl(" +
        manip +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        this.color.hsl.l * 100 +
        "%)";
      return {
        "background-color": op,
      };
    },
    ana3M() {
      var manip = this.color.hsl.h;
      manip = manip + 35;
      var op =
        "hsl(" +
        manip +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        this.color.hsl.l * 100 +
        "%)";
      return {
        "background-color": op,
      };
    },
    ana4M() {
      var manip = this.color.hsl.h;
      manip = manip + 55;
      var op =
        "hsl(" +
        manip +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        this.color.hsl.l * 100 +
        "%)";
      return {
        "background-color": op,
      };
    },
    selColorLight() {
      var manip = this.color.hsl.l * 100;
      manip = manip + 20;
      var op =
        "hsl(" +
        this.color.hsl.h +
        "," +
        (this.color.hsl.s * 100 + 10) +
        "%," +
        manip +
        "%)";
      return {
        "background-color": op,
      };
    },
    triColor1Light() {
      var manip = this.color.hsl.l * 100;
      manip = manip + 20;
      var op =
        "hsl(" +
        (this.color.hsl.h + 120) +
        "," +
        (this.color.hsl.s * 100 + 10) +
        "%," +
        manip +
        "%)";
      return {
        "background-color": op,
      };
    },
    opColorLight() {
      var hueInvert = this.color.hsl.h + 180;
      var manip = this.color.hsl.l * 100;
      manip = manip + 25;
      var op =
        "hsl(" +
        hueInvert +
        "," +
        (this.color.hsl.s * 100 + 10) +
        "%," +
        manip +
        "%)";
      return {
        "background-color": op,
      };
    },
    neutralOp() {
      var hueInvert = this.color.hsl.h + 90;
      var manip = this.color.hsl.l * 100;
      if (manip < 50) manip = 120 - manip;
      else {
        manip = 1.9 * manip;
      }
      var op =
        "hsl(" +
        hueInvert +
        "," +
        (this.color.hsl.s * 100 + 10) +
        "%," +
        manip +
        "%)";
      return {
        "background-color": op,
      };
    },
  },
  methods: {
    showColor: function (event) {
      var canvas = document.querySelector("#example");
      var ctx = document.querySelector("#example").getContext("2d");
      var xpag = event.pageX;
      var ypag = event.pageY;
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      var radius = 200;
      var counterClockwise = false;
      alert(y);
      for (var angle = 0; angle <= 360; angle += 1) {
        var startAngle = ((angle - 2) * Math.PI) / 180;
        var endAngle = (angle * Math.PI) / 180;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
        ctx.closePath();
        var gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, "hsl(" + angle + ", 10%, 60%)");
        gradient.addColorStop(1, "hsl(" + angle + ", 100%, 50%)");
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      let pixel = ctx.getImageData(xpag, ypag, 1, 1).data;
      console.log(pixel);
    },
    fullSpec: function (ranger) {
      var manip = this.color.hsl;
      manip = Math.round(manip.l * 100) + 5 * ranger;
      var op =
        "hsl(" +
        this.color.hsl.h +
        "," +
        this.color.hsl.s * 100 +
        "%," +
        manip +
        "%)";
      return {
        "background-color": op,
      };
    },
  },
};
</script>
