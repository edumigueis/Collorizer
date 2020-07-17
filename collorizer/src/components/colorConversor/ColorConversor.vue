<template>
  <div>
      <div>
          <div class="input">
              <div class="form-group">
                  <label for="inputcolor">Put a color here in any format:</label>
                  <input type="text" name="input-color" id="input-color" disabled placeholder="HEX, HSL, ANSI...">
              </div>
              <button>Convert</button>
          </div>
          <div class="output">
              <div class="inner-output">
                  <div class="form-group">
                  <label for="hex">HEX:</label>
                  <input type="text" name="hex" disabled>
              </div>
              <div class="form-group">
                  <label for="rgba">RGBA:</label>
                  <input type="text" name="rgba" disabled>
              </div>
              <div class="form-group">
                  <label for="cmky">CMYK:</label>
                  <input type="text" name="cmky" disabled>
              </div>
              <div class="form-group">
                  <label for="hsl">HSL:</label>
                  <input type="text" name="hsl" disabled>
              </div>
              <div class="form-group">
                  <label for="hsv">HSV:</label>
                  <input type="text" name="hsv" disabled>
              </div>
              <div class="form-group">
                  <label for="ansi">ANSI</label>
                  <input type="text" name="ansi" disabled>
              </div>
              </div>
              

          </div>
      </div>
  </div>

</template>

<script>
import convert from "color-convert";
export default {
    mounted(){
        var c = convert.rgb.hsl(140, 200, 100);
        alert(c);
    }
}
</script>
<style lang="scss" scoped>
    .form-group{
        display: flex;
        flex-wrap: wrap;
    }
    input{
        width: 100%;
    }
</style>