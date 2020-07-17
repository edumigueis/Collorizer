<template>
  <div>
    <my-menu></my-menu>
    <div class="wrapper">
      <div class="input">
        <div class="inner-input">
          <img
            src="/src/assets/images/ilus-4.svg"
            alt="Woman Painting"
            id="illustration"
          />
          <div class="form-group">
            <label for="inputcolor">Put a color here in any format:</label>
            <input
              type="text"
              name="input-color"
              id="input-color"
              placeholder="HEX, HSL, RGB..."
              autofocus
              autocomplete="off"
            />
          </div>
          <div class="bottom-wrapper">
            <button class="convert-btn" v-on:click="convertColors">
              Convert
            </button>
            <div
              class="color-repr"
              :style="selColor"
              v-on:click="copyColor"
              title="Copy to clipboard"
            ></div>
          </div>
          <p id="warn"></p>
        </div>
      </div>
      <div class="output">
        <div class="inner-output">
          <div class="form-group">
            <label for="hex">HEX:</label>
            <input type="text" name="hex" id="hex" disabled />
          </div>
          <div class="form-group">
            <label for="rgba">RGB:</label>
            <input type="text" name="rgba" id="rgba" disabled />
          </div>
          <div class="form-group">
            <label for="cmky">CMYK:</label>
            <input type="text" name="cmyk" id="cmyk" disabled />
          </div>
          <div class="form-group">
            <label for="hsl">HSL:</label>
            <input type="text" name="hsl" id="hsl" disabled />
          </div>
          <div class="form-group">
            <label for="hsv">HWB:</label>
            <input type="text" name="hwb" id="hwb" disabled />
          </div>
          <div class="form-group">
            <label for="ansi">ANSI16:</label>
            <input type="text" name="ansi" id="ansi" disabled />
          </div>
          <div class="form-group">
            <label for="css-key">CSS Key:</label>
            <input type="text" name="css-key" id="css-key" disabled />
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import convert from "color-convert";
import Footer from "../shared/footer/Footer";
import Menu from "../shared/menu/Menu";
var selColorVal = "#5B4FA8";
export default {
  components: {
    "my-footer": Footer,
    "my-menu": Menu,
  },
  data() {
    return {
      selColorVal,
    };
  },
  methods: {
    convertColors() {
      document.getElementById("warn").innerText = "";
      var current = document.getElementById("input-color").value;
      this.selColorVal = current;
      if (/^[A-Za-z]+$/.test(current)) {
        try {
          document.getElementById("hex").value =
            "#" + convert.keyword.hex(current);
          document.getElementById("rgba").value =
            "rgb(" + convert.keyword.rgb(current) + ")";
          document.getElementById("cmyk").value =
            "cmyk(" + convert.keyword.cmyk(current) + ")";
          document.getElementById("hsl").value =
            "hsl(" + convert.keyword.hsl(current) + ")";
          document.getElementById("hwb").value =
            "hwb(" + convert.keyword.hwb(current) + ")";
          document.getElementById("ansi").value = convert.keyword.ansi16(
            current
          );
          document.getElementById("css-key").value = current;
          return;
        } catch (e) {
          document.getElementById("warn").innerText =
            "Make sure you are using the corect identifiers. E.g. rgb(255, 255, 255) or lightgreen or #fff.";
        }
      }
      if (current.includes("#")) {
        current = current.replace(/[#]/g, "");

        document.getElementById("hex").value = "#" + current;
        document.getElementById("rgba").value =
          "rgb(" + convert.hex.rgb(current) + ")";
        document.getElementById("cmyk").value =
          "cmyk(" + convert.hex.cmyk(current) + ")";
        document.getElementById("hsl").value =
          "hsl(" + convert.hex.hsl(current) + ")";
        document.getElementById("hwb").value =
          "hwb(" + convert.hex.hwb(current) + ")";
        document.getElementById("ansi").value = convert.hex.ansi16(current);
        document.getElementById("css-key").value = convert.hex.keyword(current);
      } else if (current.includes("rgb") && !current.includes("rgba")) {
        current = current.replace(/[#rgb()]/g, "");

        document.getElementById("hex").value =
          "#" + convert.rgb.hex(current.split(","));
        document.getElementById("rgba").value = "rgb(" + current + ")";
        document.getElementById("cmyk").value =
          "cmyk(" + convert.rgb.cmyk(current.split(",")) + ")";
        document.getElementById("hsl").value =
          "hsl(" + convert.rgb.hsl(current.split(",")) + ")";
        document.getElementById("hwb").value =
          "hwb(" + convert.rgb.hwb(current.split(",")) + ")";
        document.getElementById("ansi").value = convert.rgb.ansi16(
          current.split(",")
        );
        document.getElementById("css-key").value = convert.rgb.keyword(
          current.split(",")
        );
      } else if (current.includes("cmyk")) {
        current = current.replace(/[#cmyk%()]/g, "");

        document.getElementById("hex").value =
          "#" + convert.cmyk.hex(current.split(","));
        document.getElementById("rgba").value =
          "rgb(" + convert.cmyk.rgb(current.split(",")) + ")";
        document.getElementById("cmyk").value = "cmyk(" + current + ")";
        document.getElementById("hsl").value =
          "hsl(" + convert.cmyk.hsl(current.split(",")) + ")";
        document.getElementById("hwb").value =
          "hwb(" + convert.cmyk.hwb(current.split(",")) + ")";
        document.getElementById("ansi").value = convert.cmyk.ansi16(
          current.split(",")
        );
        document.getElementById("css-key").value = convert.cmyk.keyword(
          current.split(",")
        );
      } else if (current.includes("hsl")) {
        current = current.replace(/[#hsl%()]/g, "");

        document.getElementById("hex").value =
          "#" + convert.hsl.hex(current.split(","));
        document.getElementById("rgba").value =
          "rgb(" + convert.hsl.rgb(current.split(",")) + ")";
        document.getElementById("cmyk").value =
          "cmyk(" + convert.hsl.cmyk(current.split(",")) + ")";
        document.getElementById("hsl").value = "hsl(" + current + ")";
        document.getElementById("hwb").value =
          "hwb(" + convert.hsl.hwb(current.split(",")) + ")";
        document.getElementById("ansi").value = convert.hsl.ansi16(
          current.split(",")
        );
        document.getElementById("css-key").value = convert.hsl.keyword(
          current.split(",")
        );
      } else if (current.includes("hwb")) {
        current = current.replace(/[#hwb%()]/g, "");

        document.getElementById("hex").value =
          "#" + convert.hwb.hex(current.split(","));
        document.getElementById("rgba").value =
          "rgb(" + convert.hwb.rgb(current.split(",")) + ")";
        document.getElementById("cmyk").value =
          "cmyk(" + convert.hwb.cmyk(current.split(",")) + ")";
        document.getElementById("hsl").value =
          "hsl(" + convert.hwb.hsl(current.split(",")) + ")";
        document.getElementById("hwb").value = "hwb(" + current + ")";
        document.getElementById("ansi").value = convert.hwb.ansi16(
          current.split(",")
        );
        document.getElementById("css-key").value = convert.hwb.keyword(
          current.split(",")
        );
      } else if (/^\d+$/.test(current)) {
        current = parseInt(current);

        document.getElementById("hex").value =
          "#" + convert.ansi16.hex(current);
        document.getElementById("rgba").value =
          "rgb(" + convert.ansi16.rgb(current) + ")";
        document.getElementById("cmyk").value =
          "cmyk(" + convert.ansi16.cmyk(current) + ")";
        document.getElementById("hsl").value =
          "hsl(" + convert.ansi16.hsl(current) + ")";
        document.getElementById("hwb").value =
          "hwb(" + convert.ansi16.hwb(current) + ")";
        document.getElementById("ansi").value = current;
        document.getElementById("css-key").value = convert.ansi16.keyword(
          current
        );
      }
    },
    copyColor(eve) {
      var parent = eve.target;

      var copyText = parent.style.backgroundColor;
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val(copyText).select();
      document.execCommand("copy");
      $temp.remove();
      $("#warn").text("Copied!");
      $("#warn").css("text-indent", "0px");
      setTimeout(function () {
        $("#warn").fadeOut();
        setTimeout(function () {
          $("#warn").text("");
          $("#warn").fadeIn();
          $("#warn").css("text-indent", "20px");
        }, 300);
      }, 600);
    },
  },
  computed: {
    selColor() {
      return {
        "background-color": this.selColorVal,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.form-group {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  letter-spacing: 0.06rem;
  label {
    margin-bottom: 5px;
  }
}
input {
  width: 100%;
  height: 35px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 16px;
  text-indent: 10px;
  background: #444444;
}
input:disabled {
  background: #45454545;
}
.wrapper {
  display: flex;
  max-width: 1000px;
  margin: 73px auto;
  padding: 0px 40px;
  background: #2e2e2e;
  .input {
    flex: 1 1 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner-input {
      padding: 0 40px;
    }
  }
  .output {
    flex: 1 1 0px;
    .inner-output {
      padding: 20px 40px;
    }
  }
}
.convert-btn {
  position: relative;
  color: #f9f9f9;
  background: transparent;
  cursor: pointer;
  font-size: 19px;
  padding: 7px 18px;
  font-weight: 700;
  border-radius: 50px;
  display: inline-block;
  background: rgb(9, 125, 241);
  border: none;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
}
#illustration {
  width: 100%;
  margin-bottom: 40px;
}
#warn {
  margin-top: 20px;
  text-indent: 20px;
  color: rgb(230, 31, 97);
  font-weight: 600;
}
button {
  outline: none;
  border: none;
}
.bottom-wrapper {
  display: flex;
}
.color-repr {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  &:hover{
      transform: scale(1.04);
  }
}
</style>
