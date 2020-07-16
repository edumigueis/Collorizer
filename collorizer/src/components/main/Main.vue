<template>
  <div class="main">
    <div class="header-pag">
      <h1>Collorize Tools</h1>
      <h2>Select the tool that fits your needs.</h2>
    </div>

    <section class="main-grid-wrapper">
      <div class="main-grid">
        <div class="block">
          <a href="">
            <div class="inner-block">
              <img
                src="/src/assets/images/ilus-3.svg"
                alt=""
              />
              <div class="bottom-block">
                <h3 class="block-title">Color Palette Creator</h3>
                <p class="block-desc">
                  The ultimate inspiration for stunning color combinations.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="block">
          <a href="">
            <div class="inner-block">
              <img
                src="/src/assets/images/ilus-1.svg"
                alt=""
              />
              <div class="bottom-block">
                <h3 class="block-title">Image Colors</h3>
                <p class="block-desc">
                  The ultimate inspiration for stunning color combinations.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="block">
          <a href="">
            <div class="inner-block">
              <img src="/src/assets/images/color-wheel.png" alt="" />
              <div class="bottom-block">
                <h3 class="block-title">Color Lab</h3>
                <p class="block-desc">
                  The ultimate inspiration for stunning color combinations.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="block">
          <a href="">
            <div class="inner-block">
              <img src="/src/assets/images/color-wheel.png" alt="" />
              <div class="bottom-block">
                <h3 class="block-title">Color Conversor</h3>
                <p class="block-desc">
                  The ultimate inspiration for stunning color combinations.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="block">
          <a href="">
            <div class="inner-block">
              <img
                src="/src/assets/images/ilus-5.svg"
                alt=""
              />
              <div class="bottom-block">
                <h3 class="block-title">Web Design</h3>
                <p class="block-desc">
                  The ultimate inspiration for stunning color combinations.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="block">
          <a href="">
            <div class="inner-block">
              <img
                src="/src/assets/images/ilus-6.svg"
                alt=""
              />
              <div class="bottom-block">
                <h3 class="block-title">Social Media</h3>
                <p class="block-desc">
                  The ultimate inspiration for stunning color combinations.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="block">
          <a href="">
            <div class="inner-block">
              <img
                src="/src/assets/images/ilus-5.svg"
                alt=""
              />
              <div class="bottom-block">
                <h3 class="block-title">Color Gallery</h3>
                <p class="block-desc">
                  The ultimate inspiration for stunning color combinations.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="block">
          <a href="">
            <div class="inner-block">
              <img
                src="/src/assets/images/ilus-5.svg"
                alt=""
              />
              <div class="bottom-block">
                <h3 class="block-title">My Palettes</h3>
                <p class="block-desc">
                  The ultimate inspiration for stunning color combinations.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    <my-footer></my-footer>
  </div>
</template>

<style lang="scss" scoped>
.main-grid {
  margin-top: 40px;
  display: grid;
  max-width: 1400px;
  padding: 0 40px;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  width: 100%;
  .block {
    background: #2e2e2e;
    margin-bottom: 20px;
    .inner-block {
      padding: 20px 20px;
      text-align: center;
      img {
        height: 130px;
      }
    }
    &:hover {
      box-shadow: 0 8px 24px rgba(148, 148, 148, 0.07);
    }
  }
}
.block-title {
  margin: 20px 0;
  font-size: 1.7rem;
  line-height: 1.3;
  color: #fafafa;
  letter-spacing: -0.01rem;
}
.block-desc {
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.4;
  color: #fafafa;
}

.main {
  .header-pag {
    margin-top: 96px;
    h1 {
      font-size: 2.3rem;
      letter-spacing: 0.05rem;
      text-align: center;
    }
    h2 {
      font-size: 1.5rem;
      text-align: center;
      font-weight: 400;
      margin: 20px 0 0;
    }

  }
}
</style>

<script>
import Footer from "../shared/footer/Footer";
export default {
  components: {
    "my-footer": Footer,
  }
};
</script>
