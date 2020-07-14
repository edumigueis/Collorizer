<template>
  <div>
    <section>
      <h1>Palette Lab</h1>
      <nav>
        <a href="">{{ color }}</a>
      </nav>
    </section>
    <section class="color-wheel">
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
    </section>
    <section class="palette">
      <div class="palette-wrap">
        <div class="palette-prop">
          <div id="first-color" class="palette-member"></div>
          <div id="sec-color" class="palette-member"></div>
          <div id="third-color" class="palette-member"></div>
          <div id="forth-color" class="palette-member"></div>
          <div id="sixth-color" class="palette-member"></div>
        </div>
      </div>
    </section>
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
</style>

<script>
export default {
  data() {
    return {
      color: "#A463BF",
    };
  },
  methods: {
    showColor: function (event) {
      alert("uuu");
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
  },
};
</script>
