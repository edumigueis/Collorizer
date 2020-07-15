<template>
  <div>
    <section>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
      />
      <div id="menu-bar" class="white">
        <div id="bar">
          <div id="menu-bar-container-logo">
            <div class="menu-bar-inner-logo">
              <img src="/src/assets/images/fav-icon.svg" />
            </div>
          </div>
          <div id="nav-bars">
            <a href="/#/home">Create</a>
            <a href="/#/home">Explore</a>
            <a href="/#/">
              About
            </a>
            <a href="/#/home">Blog</a>
          </div>
          <div class="menu-bar-left-bar">
            <div id="menu-bar-search-box"></div>
            <div class="menu-bar-chat-wp menu-bar-wp">
              <div class="menu-bar-chat-inner">
                <!--<img class="menu-bar-chat-pic">--><i class="fas fa-th"></i>
              </div>
            </div>
            <div class="menu-bar-notif-wp menu-bar-wp">
              <div class="menu-bar-notif-inner">
                <i
                  class="fas fa-angle-double-down"
                  v-on:click="scrollToFeatures()"
                ></i>
              </div>
            </div>
            <div class="menu-bar-post-wp menu-bar-wp">
              <div class="menu-bar-post-inner">
                <!--<img class="menu-bar-post-pic">-->
                <i class="fab fa-github"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="overlay-content">
        <div class="text-content">
          <h1 class="main-title">Collorizer</h1>
          <p>
            Everything you need colorwise, palettes creator, color mixin and a
            lot of tools for you.
          </p>
          <a class="call-to-action-btn">Start Now</a>
        </div>
      </div>

      <svg
        class="scene"
        width="100%"
        height="100vh"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
        xmlns:pathdata="http://www.codrops.com/"
      >
        <path
          d="M -84.52,-81.13 C -94.62,-73.4 -88.88,-59.55 -90.33,-48.91 -89.29,27.31 -89.61,103.5 -88.33,179.8 -85.99,416.1 -81.32,888.9 -81.32,888.9 -81.32,888.9 974.5,888.7 1587,891.9 1518,719.9 1487,644 1429,533 1388,437.7 1447,259.7 1400,187 1362,132 1270,90.53 1207,39.93 1161,2.932 1071,-74.45 1071,-74.45 1071,-74.45 914.5,-77.77 848.2,-80.17 537.6,-80.84 227,-81.38 -83.6,-81.6 -83.91,-81.44 -84.21,-81.29 -84.52,-81.13 Z"
          pathdata:id="M -84.52,-81.13 C -94.62,-73.4 -88.88,-59.55 -90.33,-48.91 -89.29,27.31 -89.61,103.5 -88.33,179.8 -85.99,416.1 -81.32,888.9 -81.32,888.9 -81.32,888.9 974.5,888.7 1587,891.9 1576,704.7 1517,625.7 1459,514.7 1418,419.4 1430,288.5 1382,187 1349,116.3 1296,54.47 1240,0.3429 1205,-33.51 1120,-83.59 1120,-83.59 1120,-83.59 914.5,-77.77 848.2,-80.17 537.6,-80.84 227,-81.38 -83.6,-81.6 -83.91,-81.44 -84.21,-81.29 -84.52,-81.13 Z"
        ></path>
        <path
          d="M 665.2,-83.08 C 413.7,-81.89 162.2,-82.43 -89.29,-81.61 -90.35,164.3 -85.06,410.2 -84.09,656.1 -83.37,733.7 -82.64,811.3 -81.92,888.9 442.4,889.8 966.7,890.7 1491,891.6 1253,747.5 1417,429.4 1286,245.4 1227,163.2 1107,142.1 1043,64.54 1009,24.41 973,-76.01 973,-76.01 973,-76.01 706.6,-83.67 665.2,-83.08 Z"
          pathdata:id="M 665.2,-83.08 C 413.7,-81.89 162.2,-82.43 -89.29,-81.61 -90.35,164.3 -85.06,410.2 -84.09,656.1 -83.37,733.7 -82.64,811.3 -81.92,888.9 442.4,889.8 966.7,890.7 1491,891.6 1253,747.5 1349,460.4 1243,260.6 1199,176.6 1145,96.92 1083,24.95 1050,-12.63 973,-76.01 973,-76.01 973,-76.01 706.6,-83.67 665.2,-83.08 Z"
        ></path>
        <path
          d="M -85.01,-74.02 C -92.39,-66.64 -85.37,-55.79 -87.81,-46.91 -86.65,265.1 -84.66,577.2 -83.18,889.2 317.2,888.3 717.5,885.8 1118,890.4 1152,890.6 1187,890.9 1221,890 1219,768.3 1224,643.6 1187,526 1153,417 1091,319.3 1029,224.1 998.8,178.5 968.8,132.6 936.6,88.23 891.7,27.39 772.2,-78.96 772.2,-78.96 772.2,-78.96 222.1,-81.07 -85.01,-74.02 Z"
          pathdata:id="M -85.01,-74.02 C -92.39,-66.64 -85.37,-55.79 -87.81,-46.91 -86.65,265.1 -84.66,577.2 -83.18,889.2 317.2,888.3 717.5,885.8 1118,890.4 1152,890.6 1187,890.9 1221,890 1219,768.3 1175,659.3 1150,544.3 1128,438.4 1143,312.6 1081,227.1 1004,121.1 925.8,114.8 851.3,54.73 762,-17.34 772.2,-78.96 772.2,-78.96 772.2,-78.96 222.1,-81.07 -85.01,-74.02 Z"
        ></path>
        <path
          d="M -92.42,-79.11 C -89.97,243.8 -87.52,566.7 -85.07,889.6 201.8,889.9 488.7,889.9 775.5,895.6 880.4,896.9 985.2,894 1090,892.5 1064,773.3 1037,651.6 976.1,544.8 946.7,495.8 914.6,448.3 882,401.3 820.9,314.4 742.3,252 666.4,177.4 583.2,98.01 496.5,12.18 386.7,-23.38 328.4,-45.64 232.6,-81.38 232.6,-81.38 232.6,-81.38 9.82,-84.94 -92.42,-79.11 Z"
          pathdata:id="M -92.42,-79.11 C -89.97,243.8 -87.52,566.7 -85.07,889.6 201.8,889.9 488.7,889.9 775.5,895.6 880.4,896.9 1063,889.5 1063,889.5 1063,889.5 1081,768.2 997.4,608.7 958.5,534.8 969.9,436.8 918.5,370.8 848.4,280.8 717,260.3 629.9,186.5 552.6,121.2 491.5,38.73 426.3,-38.61 412.9,-54.44 387.9,-87.47 387.9,-87.47 387.9,-87.47 9.82,-84.94 -92.42,-79.11 Z"
        ></path>
        <path
          d="M -88.6,95.54 C -90.38,166.1 -88.23,236.7 -88.68,307.4 L -86.19,890 C 229.7,890.2 939.8,892.4 939.8,892.4 855.2,767 831,639.4 721.4,519.4 634.7,424.5 526.4,360.9 428.8,281.8 332.7,204 251.6,102.3 140.1,48.9 70.75,15.73 -24.82,24.2 -85.28,0.03 Z"
          pathdata:id="M -88.6,95.54 C -90.38,166.1 -88.23,236.7 -88.68,307.4 L -86.19,890 C 229.7,890.2 939.8,892.4 939.8,892.4 906.9,734.7 779.3,676 721.4,519.4 676.8,398.8 566.5,307.1 458.9,236.6 355.2,168.7 220.3,165.7 107.8,113.5 40.05,82.12 -24.82,24.2 -85.28,0.03 Z"
        ></path>
        <path
          d="M -95.69,252.3 -87.65,890.4 698.1,892 C 698.1,892 599.1,687.7 518.9,610.6 348,446.2 131.4,466.5 -95.69,252.3 Z"
          pathdata:id="M -95.69,252.3 -87.65,890.4 698.1,892 C 698.1,892 569.8,587.1 448.9,482.7 299.7,353.9 131.4,466.5 -95.69,252.3 Z"
        ></path>
        <path
          d="M -85.59,444.4 -85.59,890.6 489,895.6 C 489,895.6 436.8,745.3 382.5,690.8 258.1,565.8 57.98,629.2 -85.59,444.4 Z"
          pathdata:id="M -85.59,444.4 -85.59,890.6 546.9,895.6 C 546.9,895.6 517.4,695.4 339.9,593.4 187.7,505.9 57.98,629.2 -85.59,444.4 Z"
        ></path>
      </svg>
    </section>

    <section class="features">
      <div class="grid-features">
        <div class="grid-card">
          <div class="inner-grid-card">
            <div class="icon-wrapper">
              <img src="/src/assets/images/blob.svg" /><i
                class="fas fa-palette"
              ></i>
            </div>
            <h3>Palettes Creator</h3>
            <p>
              Create the perfect palette for your design project. Checkout
              images with that palette and adjust it however you want.
            </p>
            <a class="call-to-sub-action" href="/#/image/palette"
              >Check it Out</a
            >
          </div>
        </div>
        <div class="grid-card">
          <div class="inner-grid-card">
            <div class="icon-wrapper">
              <img src="/src/assets/images/blob.svg" /><i
                class="fas fa-th-large"
              ></i>
            </div>
            <h3>Color Gallery</h3>
            <p>
              Create the perfect palette for your design project. Checkout
              images with that palette and adjust it however you want.
            </p>
            <a class="call-to-sub-action" href="/#/image/palette"
              >Check it Out</a
            >
          </div>
        </div>
        <div class="grid-card">
          <div class="inner-grid-card">
            <div class="icon-wrapper">
              <img src="/src/assets/images/blob.svg" /><i
                class="fas fa-images"
              ></i>
            </div>
            <h3>Amazing</h3>
            <p>
              Create the perfect palette for your design project. Checkout
              images with that palette and adjust it however you want.
            </p>
            <a class="call-to-sub-action" href="/#/image/palette"
              >Check it Out</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="masonry-wrapper">
      <div class="separator-div"></div>
      <h1 class="masonry-title">Creative Colors</h1>
      <div class="masonry">
        <div class="brick">
          <img src="/src/assets/images/masonry-1.jpg" />
          <div style="background-color: #2d8d9f;"></div>
          <div style="background-color: #2a7278;"></div>
          <div style="background-color: #62b4c1;"></div>
          <div style="background-color: #c9d8da;"></div>
          <div style="background-color: #28201c;"></div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-2.jpg" />
          <div style="background-color: #e7c2b3;"></div>
          <div style="background-color: #c49c85;"></div>
          <div style="background-color: #bac5c3;"></div>
          <div style="background-color: #403e43;"></div>
          <div style="background-color: #9ca19d;"></div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-3.jpg" />
          <div style="background-color: #f6ded4;"></div>
          <div style="background-color: #db755c;"></div>
          <div style="background-color: #672d1d;"></div>
          <div style="background-color: #080605;"></div>
          <div style="background-color: #36190e;"></div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-4.jpg" />
          <div style="background-color: #c44b40;"></div>
          <div style="background-color: #914330;"></div>
          <div style="background-color: #272723;"></div>
          <div style="background-color: #97a59f;"></div>
          <div style="background-color: #c3a592;"></div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-5.jpg" />
          <div style="background-color: #4c8499;"></div>
          <div style="background-color: #5f4342;"></div>
          <div style="background-color: #b5b2ba;"></div>
          <div style="background-color: #30333a;"></div>
          <div style="background-color: #6c6e77;"></div>
          <div style="background-color: #b8979e;"></div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-6.jpg" />
          <div style="background-color: #04647d;"></div>
          <div style="background-color: #064a65;"></div>
          <div style="background-color: #1495a4;"></div>
          <div style="background-color: #c6d6da;"></div>
          <div style="background-color: #5bb1b9;"></div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-7.jpg" />
          <div style="background-color: #40b0bb;"></div>
          <div style="background-color: #937347;"></div>
          <div style="background-color: #36342f;"></div>
          <div style="background-color: #724c39;"></div>
          <div style="background-color: #d8d7d6;"></div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-8.jpg" />
          <div style="background-color: #f9c20d;"></div>
          <div style="background-color: #e8c093;"></div>
          <div style="background-color: #8a899a;"></div>
          <div style="background-color: #634526;"></div>
          <div style="background-color: #d7d6e5;"></div>
          <div style="background-color: #594546;"></div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-9.jpg" />
          <div style="background-color: #38d7f9;"></div>
          <div style="background-color: #f61da8;"></div>
          <div style="background-color: #fe5b9a;"></div>
          <div style="background-color: #f7b2c3;"></div>
          <div style="background-color: #093757;"></div>
          <div style="background-color: #62dc34;"></div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-10.jpg" />
          <div style="background-color: #04b7bf;"></div>
          <div style="background-color: #faa96a;"></div>
          <div style="background-color: #c3aba3;"></div>
          <div style="background-color: #8ea39f;"></div>
          <div style="background-color: #f59754;"></div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-11.jpg" />
          <div style="background-color: #adf3fb;"></div>
          <div style="background-color: #a22861;"></div>
          <div style="background-color: #3b818b;"></div>
          <div style="background-color: #cf7694;"></div>
          <div style="background-color: #7b2237;"></div>
        </div>
      </div>
      <div class="last-wrapper">
        <h1 class="title">Like What You See?</h1>
        <p class="sub">Experiment our tools. We hope you like it!</p>
        <a href="/#/create" class="call-to-action-btn">Start Now</a>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Martel:wght@300;400;600;700;800;900&family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
}
.scene {
  background: #282886;
  transition: 2s filter ease;
}

.scene path:first-child {
  fill: #4f4fea;
}

.scene path:nth-child(2) {
  fill: #0c27cf;
}

.scene path:nth-child(3) {
  fill: #13269c;
}

.scene path:nth-child(4) {
  fill: #242468;
}

.scene path:nth-child(5) {
  fill: #2648e6;
}

.scene path:nth-child(6) {
  fill: #2c31b0;
}

.scene path:nth-child(7) {
  fill: #262689;
}

.main-title {
  font-family: "Martel", serif;
  font-size: 5.53464363vw;
  font-weight: 400;
  width: 100%;
  color: #fff;
}
.text-content {
  position: absolute;
  margin-right: 50px;
  top: 30vh;
  color: #fff;
  text-align: center;
  width: 100%;
  p {
    font-size: 1vw;
  }
  .call-to-action-btn {
    position: relative;
    color: #f9f9f9;
    background: transparent;
    cursor: pointer;
    font-size: 19px;
    padding: 14px 28px;
    margin-top: 40px;
    font-weight: 700;
    border-radius: 50px;
    display: inline-block;
    border: 2px solid #f9f9f9;
    transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
  }
  .call-to-action-btn:hover {
    color: #ffffff;
    border-color: #313742;
    background-color: #313742;
  }
}
#menu-bar {
  width: 100vw;
  z-index: 20;
  height: fit-content;
  background-color: transparent;
  position: fixed;
  /*border-bottom: 1px solid rgb(219, 219, 219);*/
}

#bar {
  display: inline-flex;
  flex-wrap: nowrap;
  width: calc(100vw - 64px);
  margin: 10px 32px;
  height: 45px;
}

.menu-bar-prof-pic {
  width: 35px;
  height: 35px;
}

.menu-bar-prof-mask {
  border-radius: 50%;
  overflow: hidden;
  width: 35px;
  height: 35px;
  margin-bottom: -4px;
}

.menu-bar-inner-logo {
  width: 40px;
}

.menu-bar-inner-logo img {
  width: 100%;
}

.fab {
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
}
.fas.fa-th {
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
}
.fas.fa-angle-double-down {
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
}
.far {
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
}

.menu-bar-wp {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 9px;
}

#nav-bars a {
  color: #fff;
  padding: 0px 10px;
  text-decoration: none;
  height: 24px;
  font-size: 16px;
  font-weight: 500;
}

#nav-bars {
  max-height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}

.menu-bar-left-bar {
  position: absolute;
  right: 32px;
  width: fit-content;
  display: inline-flex;
  top: 10px;
}

#search-menu-bar {
  background-color: #f3f4f4;
  border-radius: 12px;
  color: #232323;
  padding: 0px 8px 0px 35px;
  height: 40px;
  border: none !important;
  outline: none;
}

.menu-bar-search-wp {
  position: relative;
  float: right;
}

.nav-search-icon {
  position: absolute;
  height: 16px;
  width: 16px;
  color: #9e9ea7;
  top: 12px;
  margin-left: 10px;
  z-index: 2;
}

.fill-current {
  fill: currentColor;
}

.menu-bar-search-wp {
  position: relative;
  width: calc(100% - 520px);
  display: flex;
  flex-flow: row-reverse;
  margin-right: 40px;
  height: fit-content;
}
.menu-bar-search-wp > div {
  height: fit-content;
}
.features {
  width: 100%;
  .grid-features {
    display: grid;
    max-width: 1400px;
    margin: 60px auto;
    padding: 0 40px;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 50px;
    .grid-card {
      background: #2e2e2e;
      text-align: center;
      .inner-grid-card {
        padding: 32px;
        h3 {
          font-size: 1.7rem;
          margin-top: 20px;
          font-family: "Martel", sans-serif;
          font-weight: 700;
          letter-spacing: 0.1rem;
        }
        p {
          width: 80%;
          margin: 20px 10%;
          letter-spacing: 0.05rem;
        }
        .icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            position: relative;
            width: 75px;
            z-index: 1;
          }
          i {
            position: absolute;
            font-size: 40px !important;
            z-index: 3;
            top: 15px;
          }
        }
      }
    }
  }
}
.call-to-sub-action {
  position: relative;
  color: #f9f9f9;
  background: transparent;
  cursor: pointer;
  font-size: 17px;
  padding: 10px 20px;
  margin-top: 30px;
  font-weight: 600;
  border-radius: 50px;
  display: inline-block;
  border: 2px solid #f9f9f9;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  &:hover {
    color: #ffffff;
    border-color: #313742;
    background-color: #313742;
  }
}
.masonry {
  column-count: 3;
  column-gap: 0;
  max-width: 1400px;
  padding: 0 40px;
  margin: 0 auto;
  .brick {
    break-inside: avoid;
    padding: 5px;
    div {
      width: 100%;
      height: 40px;
    }
    img {
      width: 100%;
      margin-bottom: -4px;
    }
  }
}
.masonry-title{
  font-size: 2.5rem;
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
}
.separator-div{
  width: 50vw;
  height: 120px;
  border-right: 1px solid gray;
  margin-bottom: 20px;
}
.last-wrapper{
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 300px;
  .title{
    width: 100%;
    text-align: center;
    font-family: 'Martel', serif;
    letter-spacing: 0.2rem;
    font-size: 2.5rem;
  }
  .sub{
    width: 100%;
    text-align: center;
    letter-spacing: 0.2rem;
    font-size: 16px;
  }
  .call-to-action-btn {
    position: relative;
    color: #f9f9f9;
    background: transparent;
    cursor: pointer;
    font-size: 19px;
    padding: 14px 28px;
    margin-top: 40px;
    font-weight: 700;
    border-radius: 50px;
    display: inline-block;
    border: 2px solid #f9f9f9;
    transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
  }
  .call-to-action-btn:hover {
    color: #ffffff;
    border-color: #313742;
    background-color: #313742;
  }
}
</style>

<script>
export default {
  mounted() {
    this.animate();
    this.colorAnimate();
  },
  methods: {
    animate() {
      var el = document.querySelector("svg.scene");
      var paths = Array.from(el.querySelectorAll("path"));

      paths.forEach((path) => {
        setTimeout(() => {
          anime({
            targets: path,
            duration: anime.random(3000, 5000),
            easing: [0.5, 0, 0.5, 1],
            d: path.getAttribute("pathdata:id"),
            loop: true,
            direction: "alternate",
          });
        }, anime.random(0, 1000));
      });
    },
    colorAnimate() {
      var counter = 0;
      setInterval(function () {
        if (counter < 51) counter = counter + 10;
        else {
          counter = counter - 10;
        }
        document.querySelector("svg.scene").style.filter =
          "hue-rotate(" + counter + "deg)";
      }, 6000);
    },

    scrollToFeatures() {
      $("html, body").animate({ scrollTop: $(".features").offset().top }, 800);
    },
  },
};
</script>
