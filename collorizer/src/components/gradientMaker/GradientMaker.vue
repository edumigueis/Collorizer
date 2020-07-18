<template>
  <div>
    <my-menu></my-menu>
    <div class="hero-wrapper">
      <div class="wrapper">
        <div class="result">
          <div class="inner-result">
            <div class="gradient-mask" :style="selRadius">
              <div class="gradient" :style="selGradient"></div>
            </div>

            <div class="tool-bar">
              <input
                type="range"
                min="0"
                max="50"
                step="1"
                id="ranger"
                value="0"
                v-on:input="changeRadius"
              />
              <div class="item">
                <i class="fas fa-code"></i>
                <span>Code</span>
              </div>
            </div>
          </div>
        </div>
        <div class="input">
          <div class="inner-input">
            <div class="picker-wrapper">
              <sketch-picker v-model="selColors[index].color"></sketch-picker>
              <swatches v-model="selColors[index].color"></swatches>
            </div>
            <div class="gradient-setup-wrapper">
              <div class="gradient-setup">
                <div class="sub-title">
                  <p>HEX:</p>
                  <p>Stop:</p>
                </div>
                <div
                  class="gradient-config"
                  v-for="(item, index) in selColors"
                  :key="index"
                >
                  <div
                    v-on:click="selNewSet(index)"
                    class="swatch"
                    :style="{
                      'background-color': selColors[index].color.hex,
                    }"
                  ></div>
                  <div class="hex">
                    <input
                      v-model="item.color.hex"
                      type="text"
                      placeholder="#0288D1"
                    />
                  </div>
                  <div class="stop">
                    <input
                      v-model="selColors[index].stop"
                      type="text"
                      value="0"
                    />
                  </div>
                  <div class="x-wrap"><i class="fas fa-times"></i></div>
                </div>
                <div class="bottom-actions">
                  <div class="plus-wrap" v-on:click="addColor()">
                    <i class="fas fa-plus"></i><span>Add Color</span>
                  </div>
                  <div class="plus-wrap" v-on:click="restore()">
                    <i class="fas fa-redo"></i><span>Restore</span>
                  </div>
                </div>
              </div>
              <div class="rotation-controller">
                <div class="arrow-indicator">
                  <i :style="rotation" class="fas fa-arrow-down arrow-prop"></i>
                  <input
                    class="indicator"
                    type="text"
                    maxlength="4"
                    v-model="angle"
                  />
                  <span>deg</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="1"
                  id="rangerDeg"
                  v-model="angle"
                  v-on:input="changeAngle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <my-footer></my-footer>
  </div>
</template>

<script>
import { Sketch } from "vue-color";
import { Swatches } from "vue-color";
import Footer from "../shared/footer/Footer";
import Menu from "../shared/menu/Menu";
var selColors = [
  {
    color: {
      hsl: {
        h: 201.15942028985503,
        s: 0.981042654028436,
        l: 0.4137254901960784,
        a: 1,
      },
      hex: "#0288D1",
      hex8: "#0288D1FF",
      rgba: { r: 2, g: 136, b: 209, a: 1 },
      hsv: {
        h: 201.15942028985503,
        s: 0.9904306220095694,
        v: 0.8196078431372549,
        a: 1,
      },
      oldHue: 201.15942028985503,
      source: "hex",
      a: 1,
    },
    stop: 0,
  },
  {
    color: {
      hsl: {
        h: 339.60591133004925,
        s: 0.8218623481781375,
        l: 0.5156862745098039,
        a: 1,
      },
      hex: "#E91E63",
      hex8: "#E91E63FF",
      rgba: { r: 233, g: 30, b: 99, a: 1 },
      hsv: {
        h: 339.60591133004925,
        s: 0.871244635193133,
        v: 0.9137254901960784,
        a: 1,
      },
      oldHue: 339.60591133004925,
      source: "hex",
      a: 1,
    },
    stop: 100,
  },
];
var borderRadius = 0;
var type = "linear-gradient";
var angle = "90";
var index = 0;
export default {
  components: {
    "my-footer": Footer,
    "my-menu": Menu,
    "sketch-picker": Sketch,
    swatches: Swatches,
  },
  data() {
    return {
      selColors,
      borderRadius,
      type,
      angle,
      index,
    };
  },
  computed: {
    selGradient() {
      var prototype = "";
      for (var i = 0; i < this.selColors.length; i++) {
        prototype +=
          this.selColors[i].color.hex + " " + this.selColors[i].stop + "%,";
      }

      var corPrototype = prototype.substring(0, prototype.length - 1);

      var res = this.type + "(" + this.angle + "deg ," + corPrototype + ")";

      console.log(res);
      return {
        background: res,
      };
    },
    selRadius() {
      return {
        "border-radius": this.borderRadius + "%",
      };
    },
    color() {
      return {
        "border-radius": this.borderRadius + "%",
      };
    },
    rotation() {
      return {
        transform: "rotate(" + -1 * this.angle + "deg)",
      };
    },
  },
  methods: {
    changeRadius() {
      this.borderRadius = document.getElementById("ranger").value;
    },
    changeAngle() {
      this.angle = document.getElementById("rangerDeg").value;
    },
    selNewSet(index, eve) {
      this.index = index;
      var selected = document.getElementsByClassName("selected");
      if (selected[0] == undefined) {
        event.target.classList.add("selected");
      } else {
        selected[0].classList.remove("selected");
        event.target.classList.add("selected");
      }
    },
    addColor() {
      this.selColors.push({
        color: {
          hsl: {
            h: 339.60591133004925,
            s: 0.8218623481781375,
            l: 0.5156862745098039,
            a: 1,
          },
          hex:
            "#" +
            ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
          hex8:
            "#" +
            ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0") +
            "FF",
          rgba: { r: 233, g: 30, b: 99, a: 1 },
          hsv: {
            h: 339.60591133004925,
            s: 0.871244635193133,
            v: 0.9137254901960784,
            a: 1,
          },
          oldHue: 339.60591133004925,
          source: "hex",
          a: 1,
        },
        stop: 100,
      });
      for (var i = 0; i < this.selColors.length - 1; i++) {
        this.selColors[i].stop = (100 / (this.selColors.length - 1)) * i;
      }
      this.selColors[this.selColors.length].stop = 100;
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-wrapper {
  margin: 0 40px;
}
.wrapper {
  display: flex;
  max-width: 1400px;
  margin: 73px auto;
  padding: 0px;
  background: #2e2e2e;
  .result {
    flex: 1 1 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner-result {
      padding: 30px 30px;
      display: flex;
      position: relative;
      flex-wrap: wrap;
      width: 100%;
    }
  }
  .input {
    flex: 1 1 0px;
    .inner-input {
      padding: 30px 30px;
    }
  }
}
.gradient-mask {
  overflow: hidden;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  .gradient {
    width: 37vw;
    height: 37vw;
    margin: 0 !important;
    max-width: 600px;
    max-height: 600px;
  }
}
.tool-bar {
  height: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  width: fit-content;
  margin-top: 20px;

  .item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    cursor: pointer;
    .fas {
      font-size: 20px;
    }
    span {
      margin-left: 5px;
      font-size: 16px;
      letter-spacing: 0.07rem;
    }
  }
}
.picker-wrapper {
  display: flex;
}
.gradient-config {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  margin-bottom: 15px;
  .swatch {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
  }
  .hex {
    margin-left: 20px;
    margin-right: 10px;
    input {
      background: transparent;
      outline: none;
      border: 1px solid #444;
      border-radius: 4px;
      height: 40px;
      width: 100px;
      text-indent: 10px;
      color: #fefefe;
      font-size: 17px;
    }
  }
  .stop {
    margin-left: 10px;
    margin-right: 20px;

    input {
      border-radius: 4px;
      background: transparent;
      outline: none;
      border: 1px solid #444;
      height: 40px;
      width: 60px;
      text-indent: 10px;
      color: #fefefe;
      font-size: 17px;
    }
  }
  .x-wrap {
    i {
      font-size: 25px;
      cursor: pointer;
    }
  }
}
.swatch.selected {
  border: 2px solid #f9f9f9;
}
.bottom-actions {
  display: flex;
  margin-top: 30px;
  span {
    margin-left: 8px;
  }
  .plus-wrap {
    margin-right: 20px;
    cursor: pointer;
  }
}
.sub-title {
  display: flex;
  width: 90%;
  margin: 20px 0 7px 60px;
  p {
    flex: 1 1 0px;
    letter-spacing: 0.07rem;
    font-weight: 500;
  }
}
.gradient-setup-wrapper {
  display: flex;
}
.rotation-controller {
  flex: 1 1 0px;
}
.arrow-indicator {
  display: flex;
  width: 96%;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  .arrow-prop {
    font-size: 50px;
  }
  .indicator,
  span {
    font-size: 20px;
    margin-left: 10px;
    outline: none;
    border: none;
    width: 40px;
    background: transparent;
    color: #fefefe;
  }
  span {
    margin-left: -4px;
  }
}
#rangerDeg {
  width: 75%;
  margin-left: 10%;
  margin-top: 52px;
}
</style>
