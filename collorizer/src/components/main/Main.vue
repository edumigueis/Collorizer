<template>
  <div>
    <h1>Collorize Tools</h1>
    <h2>Select the tool that fits your needs.</h2>
    <section class="main-grid-wrapper">
      <div class="main-grid">
        <div class="block">
          <a href="">
            <div class="inner-block">
              <img
                src="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Paint_Brush_Flat_Icon_Vector.svg/1024px-Paint_Brush_Flat_Icon_Vector.svg.png"
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
                src="/src/assets/images/color-wheel.png"
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
                src="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.main-grid {
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
        width: 100%;
      }
    }
    &:hover{
        box-shadow: 0 8px 24px rgba(148, 148, 148, 0.07);
    }
  }
}
.block-title {
  margin: 20px 0;
  font-size: 1.7rem;
  line-height: 1.3;
  color: #fafafa;
  letter-spacing: -.01rem;
}
.block-desc {
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.4;
  color: #fafafa;
}
</style>

<script>
export default {};
</script>
