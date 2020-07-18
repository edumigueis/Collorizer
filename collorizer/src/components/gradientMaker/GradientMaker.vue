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
                <div >
                  <div class="gradient-config" v-for="(item, index) in selColors" :key="index">
                    <div
                      v-on:click="selNewSet(index)"
                      class="swatch"
                      :style="{ 'background-color': selColors[index].color.hex }"
                    ></div>
                    <div class="hex">
                      <input
                        v-model="item.color.hex"
                        type="text"
                        placeholder="#0288D1"
                      />
                    </div>
                    <div class="stop">
                      <input v-model="selStops[index]" type="text" value="0" />
                    </div>
                    <div class="x-wrap"><i class="fas fa-times"></i></div>
                  </div>
                  <!--<div class="gradient-config">
                    <div
                      v-on:click="selNewSet(1)"
                      class="swatch"
                      v-bind:style="{
                        background: this.selColors[1],
                      }"
                    ></div>
                    <div class="hex">
                      <input
                        type="text"
                        v-model="selColors[1].hex"
                        placeholder="#E91E63"
                      />
                    </div>
                    <div class="stop">
                      <input type="text" v-model="selStops[1]" value="100" />
                    </div>
                    <div class="x-wrap"><i class="fas fa-times"></i></div>
                  </div>-->
                </div>
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
  { color: "#0288D1", stop: 0 },
  { color: "#E91E63", stop: 0 },
];
var selStops = [0, 100];
var borderRadius = 0;
var type = "linear-gradient";
var angle = "90deg";
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
      selStops,
    };
  },
  computed: {
    selGradient() {
      var colorsWithStop = "#0288D1, #E91E63";

      var res = this.type + "(" + this.angle + "," + colorsWithStop + ")";

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
  },
  methods: {
    changeRadius() {
      this.borderRadius = document.getElementById("ranger").value;
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
      padding: 40px 40px;
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
  }
}
.tool-bar {
  height: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  margin-top: 20px;
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
</style>
