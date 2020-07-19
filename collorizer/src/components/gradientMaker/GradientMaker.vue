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
              <div class="item" v-on:click="showEmbedModal">
                <i class="fas fa-code"></i>
                <span>Code</span>
              </div>
              <div class="item">
                <label class="radio">
                  <input
                    type="radio"
                    name="r"
                    value="linear-gradient"
                    v-model="type"
                    checked
                  />
                  <span>Linear</span>
                </label>
                <label class="radio">
                  <input
                    type="radio"
                    name="r"
                    value="radial-gradient"
                    v-model="type"
                  />
                  <span>Radial</span>
                </label>
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
                  <div class="x-wrap"><i v-on:click="deleteColor" class="fas fa-times"><span class="hidden">{{index}}</span></i></div>
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
              <div class="left-control-wrapper">
                <div
                  class="rotation-controller"
                  v-if="this.type === 'linear-gradient'"
                >
                  <div class="arrow-indicator">
                    <i
                      :style="rotation"
                      class="fas fa-arrow-down arrow-prop"
                    ></i>
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
                <div class="radial-controller" v-else>
                  <div class="item">
                    <label class="radio">
                      <input
                        type="radio"
                        name="r1"
                        value=""
                        v-model="typeRadial"
                        checked
                      />
                      <span>Auto</span>
                    </label>
                    <label class="radio">
                      <input
                        type="radio"
                        name="r2"
                        value="circle"
                        v-model="typeRadial"
                      />
                      <span
                        >Circle
                        <input
                          type="text"
                          maxlength="3"
                          value="002"
                          v-model="circleSize"
                          id="number-of-pixels-circle"
                        /><b>px</b></span
                      >
                    </label>
                    <label class="radio">
                      <input
                        type="radio"
                        name="r2"
                        value="circle farthest-side"
                        v-model="typeRadial"
                      />
                      <span>Circle Farthest</span>
                    </label>
                    <label class="radio">
                      <input
                        type="radio"
                        name="r2"
                        value="circle closest-side"
                        v-model="typeRadial"
                      />
                      <span>Circle Closest</span>
                    </label>
                  </div>
                  <div class="item second"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="embed-modal-wrapper"
      id="embed-modal-wrapper"
      v-on:click="hideEmbedModal"
    >
      <div class="embed-modal">
        <header>
          <h2>CSS</h2>
          <i class="far fa-copy" v-on:click="copyToClipboard" title="Copy To Clipboard"></i>
        </header>
        <div class="code-wrapper">
          <p>
            .gradient {<br /><span class="code-prop" id="code-to-copy">{{ finalCode }}</span
            ><br />}
          </p>
        </div>
        <div class="res" :style="selGradient"></div>
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
var finalCode = "";
var typeRadial = "";
var atRadius = "";
var circleSize = 150;
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
      finalCode,
      typeRadial,
      atRadius,
      circleSize,
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

      if (this.type === "radial-gradient") {
        if (this.typeRadial != "") {
          var res =
            this.type + "(" + this.typeRadial + "," + corPrototype + ")";
          if (this.typeRadial === "circle") {
            var res =
              this.type +
              "(" +
              this.typeRadial +
              " " +
              this.circleSize +
              "px," +
              corPrototype +
              ")";
          }
        } else {
          var res = this.type + "(" + corPrototype + ")";
        }
      } else {
        var res = this.type + "(" + this.angle + "deg, " + corPrototype + ")";
      }

      this.finalCode = res;
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
    showEmbedModal() {
      document.getElementById("embed-modal-wrapper").style.display = "flex";
    },
    hideEmbedModal(eve) {
      if (event.target.id == "embed-modal-wrapper") {
        document.getElementById("embed-modal-wrapper").style.display = "none";
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
      this.selColors[this.selColors.length - 1].stop = 100;
    },
    deleteColor(e){
        var target = e.target;
        
        var index = $(target).find("span").text();
        selColors.splice(index, index)
    },
    copyToClipboard(){

      /* Get the text field */
      var copyText = $("#code-to-copy").text();
      alert(copyText);
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val(copyText).select();
      document.execCommand("copy");
      $temp.remove();
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
  @media screen and (max-width: 1120px){
        flex-wrap: wrap;
    }
  .result {
    flex: 1 1 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1120px){
        flex: 100%;
    }
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
      @media screen and (max-width: 1120px){
        display: flex;
    }
    @media screen and (max-width: 925px){
        flex-wrap: wrap;
    }
    }
  }
}
.gradient-mask {
  overflow: hidden;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1120px){
        width: 100%;
    }
  .gradient {
    width: 37vw;
    height: 37vw;
    margin: 0 !important;
    max-width: 600px;
    max-height: 600px;
    @media screen and (max-width: 1120px){
        width: 100%;
        max-width: 1000px;
    }
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
  @media screen and (max-width: 925px){
        flex: 100%;
        justify-content: center;
    }
    @media screen and (max-width: 630px){
        flex-wrap: wrap-reverse;
    }
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
  @media screen and (max-width: 1120px){
        margin-left: 10px;
    }
    @media screen and (min-width: 758px) and (max-width: 925px){
        width: 70%;
        margin-left: 13vw !important;
    }
    @media screen and (max-width: 758px){
        width: 70%;
        margin-left: 6vw !important;
    }
    @media screen and (max-width: 758px){
        width: 80%;
        margin-left: 6vw !important;
    }
    @media screen and (max-width: 1085px){
        margin-left: 20px;
        flex-wrap: wrap;
    }
    .gradient-setup{
        @media screen and (min-width: 926px) and (max-width: 1085px){
        flex: 100%;
    }
    @media screen and (min-width: 620px) and (max-width: 650px){
        width: 70%;
    }
    @media screen and (max-width: 620px){
        width: 100%;
    }
        
    }
}
.left-control-wrapper {
  flex: 1 1 0px;
  @media screen and (max-width: 650px){
        flex: 100%;
    }
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
.embed-modal {
  width: 40vw;
  margin: 20px auto;
  max-width: 1000px;
  header {
    width: 100%;
    height: 40px;
    background-color: #2e2e2e;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      margin-left: 20px;
      font-size: 27px;
      letter-spacing: 0.07rem;
      width: 100%;
    }
    i {
      font-size: 25px;
      margin-right: 20px;
      cursor: pointer;
    }
  }
  .code-wrapper {
    width: 100%;
    background-color: #1f1f1f;
    height: fit-content;
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 400px;
    padding: 15px 20px;
    p {
      font-size: 16px;
      width: 100%;
      .code-prop {
        margin-left: 20px;
        width: calc(100% - 20px);
      }
    }
  }
  .res {
    width: 100%;
    height: 200px;
  }
}
.embed-modal-wrapper {
  width: 100vw;
  position: fixed;
  background: #000000aa;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  display: none;
}
$radioSize: 22px;
$radioBorder: #d1d7e3;
$radioActive: #5d9bfb;

.radio {
  margin: 16px 0;
  display: block;
  cursor: pointer;
  &:nth-child(2) {
    margin-left: 20px;
  }
  input[type="radio"] {
    display: none;
    & + span {
      line-height: $radioSize;
      height: $radioSize;
      padding-left: $radioSize;
      display: block;
      position: relative;
      &:not(:empty) {
        padding-left: $radioSize + 8;
      }
      &:before,
      &:after {
        content: "";
        width: $radioSize;
        height: $radioSize;
        display: block;
        border-radius: 50%;
        left: 0;
        top: 0;
        position: absolute;
      }
      &:before {
        background: $radioBorder;
        transition: background 0.2s ease,
          transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);
      }
      &:after {
        background: #fff;
        transform: scale(0.78);
        transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
      }
    }
    &:checked + span {
      &:before {
        transform: scale(1.04);
        background: $radioActive;
      }
      &:after {
        transform: scale(0.4);
        transition: transform 0.3s ease;
      }
    }
  }
  &:hover {
    input {
      & + span {
        &:before {
          transform: scale(0.92);
        }
        &:after {
          transform: scale(0.74);
        }
      }
      &:checked + span {
        &:after {
          transform: scale(0.4);
        }
      }
    }
  }
}
.radial-controller {
  margin-top: 16px;
  .item {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 30px;

    label {
      width: 100%;
      margin: 7px 0px;
    }
  }
}

.item.second {
  margin-top: 20px;
}
#number-of-pixels-circle {
  outline: none;
  border: none;
  background: transparent;
  width: 30px;
  font-size: 16px;
  color: #fefefe;
  margin-left: 10px;
  &::after {
    content: "px";
  }
}
i{
    .hidden{
        display: none;
    }
}
</style>
