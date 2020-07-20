<template>
  <div>
    <section>
      <div id="menu-bar" class="white">
        <div id="bar">
          <div id="menu-bar-container-logo">
            <div class="menu-bar-inner-logo">
              <img src="/src/assets/images/logo.svg" />
            </div>
          </div>
          <div id="nav-bars">
            <a href="/#/create">Create</a>
            <a href="/#/explore">Explore</a>
            <a href="/#/about">
              About
            </a>
            <a href="/#/blog">Blog</a>
          </div>
          <div class="menu-bar-left-bar">
            <div id="menu-bar-search-box"></div>
            <div class="menu-bar-chat-wp menu-bar-wp">
              <div class="menu-bar-chat-inner">
                <a href="/#/create">
                  <i class="fas fa-th"></i>
                </a>
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
          <h1 class="main-title">
            <svg
              viewBox="0 0 743.861 139.974"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="svgGroup"
                stroke-linecap="round"
                fill-rule="evenodd"
                font-size="9pt"
                stroke="none"
                stroke-width="0"
                fill="#fefefe"
                style="stroke: none; stroke-width: 0; fill: #fefefe;"
              >
                <path
                  d="M 80.873 110.67 L 88.71 131.177 A 23.369 23.369 0 0 1 82.887 134.693 A 51.26 51.26 0 0 1 74.61 137.476 A 80.831 80.831 0 0 1 64.393 139.307 A 99.71 99.71 0 0 1 52.674 139.967 A 56.134 56.134 0 0 1 30.702 135.865 Q 20.96 131.763 14.149 123.853 Q 7.337 115.943 3.675 104.371 Q 0.013 92.799 0.013 77.857 A 89.076 89.076 0 0 1 3.639 51.124 A 52.147 52.147 0 0 1 14.076 31.934 Q 20.887 24.244 30.628 20.399 A 59.432 59.432 0 0 1 52.601 16.553 A 107.089 107.089 0 0 1 61.61 16.956 A 71.302 71.302 0 0 1 71.131 18.421 A 66.26 66.26 0 0 1 80.47 21.241 A 39.36 39.36 0 0 1 88.929 25.709 L 80.946 46.217 A 78.975 78.975 0 0 0 73.695 42.042 A 43.601 43.601 0 0 0 67.14 39.368 Q 63.954 38.38 60.914 37.94 A 43.199 43.199 0 0 0 54.725 37.501 A 26.286 26.286 0 0 0 43.299 39.808 Q 38.465 42.115 35.279 47.095 A 36.895 36.895 0 0 0 30.555 59.876 A 98.663 98.663 0 0 0 29.017 78.663 A 55.419 55.419 0 0 0 35.646 108.985 Q 42.274 118.946 55.458 118.946 Q 61.903 118.946 68.128 117.078 Q 74.354 115.211 80.873 110.67 Z M 551.234 68.629 L 515.345 68.629 L 515.345 50.098 L 580.384 50.098 L 580.384 68.043 L 545.008 119.532 L 581.263 119.532 L 581.263 137.916 L 514.613 137.916 L 514.613 119.825 L 551.234 68.629 Z M 663.587 114.405 L 668.641 132.862 Q 661.39 136.451 654.212 138.172 Q 647.035 139.893 639.051 139.893 A 59.968 59.968 0 0 1 620.008 137.037 Q 611.439 134.18 605.36 128.687 Q 599.281 123.194 595.912 115.174 Q 592.543 107.154 592.543 96.9 Q 592.543 84.962 595.436 75.696 A 41.439 41.439 0 0 1 603.932 60.169 Q 609.535 53.907 617.738 50.648 Q 625.941 47.388 636.634 47.388 A 38.262 38.262 0 0 1 652.272 50.391 Q 659.046 53.394 663.661 58.741 A 36.227 36.227 0 0 1 670.655 71.485 Q 673.036 78.883 673.036 87.672 L 673.036 94.007 Q 673.036 97.193 673.109 100.416 L 621.034 100.416 Q 621.18 105.03 622.608 108.875 A 19.16 19.16 0 0 0 626.637 115.467 A 18.141 18.141 0 0 0 632.936 119.752 A 21.466 21.466 0 0 0 641.249 121.29 A 40.71 40.71 0 0 0 653.297 119.605 Q 658.753 117.921 663.587 114.405 Z M 229.115 6.519 L 229.115 137.916 L 201.356 137.916 L 201.356 10.255 L 229.115 6.519 Z M 281.483 6.519 L 281.483 137.916 L 253.724 137.916 L 253.724 10.255 L 281.483 6.519 Z M 426.869 50.172 L 429.945 64.088 A 19.59 19.59 0 0 1 434.193 57.166 Q 436.83 54.493 440.235 52.991 A 28.515 28.515 0 0 1 447.633 50.904 A 64.779 64.779 0 0 1 455.946 50.245 L 455.946 73.829 Q 453.822 73.096 451.734 72.73 A 25.634 25.634 0 0 0 447.303 72.364 A 26.572 26.572 0 0 0 438.99 73.719 Q 434.852 75.074 430.677 78.223 L 430.677 137.916 L 402.992 137.916 L 402.992 50.172 L 426.869 50.172 Z M 714.784 50.172 L 717.86 64.088 A 19.59 19.59 0 0 1 722.108 57.166 Q 724.745 54.493 728.15 52.991 A 28.515 28.515 0 0 1 735.548 50.904 A 64.779 64.779 0 0 1 743.861 50.245 L 743.861 73.829 Q 741.737 73.096 739.649 72.73 A 25.634 25.634 0 0 0 735.218 72.364 A 26.572 26.572 0 0 0 726.905 73.719 Q 722.767 75.074 718.592 78.223 L 718.592 137.916 L 690.907 137.916 L 690.907 50.172 L 714.784 50.172 Z M 183.192 93.824 Q 183.192 104.957 180.299 113.526 Q 177.406 122.095 171.839 127.918 Q 166.273 133.741 158.253 136.744 Q 150.233 139.747 139.906 139.747 Q 129.652 139.747 121.595 136.744 Q 113.539 133.741 107.972 127.918 A 38.51 38.51 0 0 1 99.476 113.526 A 60.819 60.819 0 0 1 96.546 93.824 Q 96.546 82.545 99.513 73.865 Q 102.479 65.186 108.045 59.29 A 35.811 35.811 0 0 1 121.668 50.355 A 51.162 51.162 0 0 1 139.833 47.315 A 50.86 50.86 0 0 1 157.96 50.355 A 36.19 36.19 0 0 1 171.583 59.29 A 39.621 39.621 0 0 1 180.189 73.865 A 60.938 60.938 0 0 1 183.192 93.824 Z M 385.267 93.824 Q 385.267 104.957 382.374 113.526 Q 379.481 122.095 373.915 127.918 Q 368.348 133.741 360.328 136.744 Q 352.308 139.747 341.981 139.747 Q 331.727 139.747 323.67 136.744 Q 315.614 133.741 310.047 127.918 A 38.51 38.51 0 0 1 301.551 113.526 A 60.819 60.819 0 0 1 298.622 93.824 Q 298.622 82.545 301.588 73.865 Q 304.554 65.186 310.121 59.29 A 35.811 35.811 0 0 1 323.744 50.355 A 51.162 51.162 0 0 1 341.908 47.315 A 50.86 50.86 0 0 1 360.035 50.355 A 36.19 36.19 0 0 1 373.658 59.29 A 39.621 39.621 0 0 1 382.264 73.865 A 60.938 60.938 0 0 1 385.267 93.824 Z M 495.79 137.916 L 468.177 137.916 L 468.177 50.172 L 495.79 50.172 L 495.79 137.916 Z M 139.906 121.143 Q 143.788 121.143 146.717 119.642 A 12.307 12.307 0 0 0 151.625 114.844 A 26.533 26.533 0 0 0 154.627 106.312 Q 155.653 101.075 155.653 93.604 Q 155.653 86.207 154.627 80.897 A 27.49 27.49 0 0 0 151.625 72.217 Q 149.647 68.848 146.717 67.274 Q 143.788 65.699 139.906 65.699 Q 136.024 65.699 133.094 67.274 A 12.488 12.488 0 0 0 128.224 72.217 A 27.525 27.525 0 0 0 125.294 80.86 Q 124.305 86.134 124.305 93.604 A 138.76 138.76 0 0 0 124.452 99.903 Q 124.598 103.126 125.147 106.165 A 31.623 31.623 0 0 0 126.722 111.878 Q 127.748 114.551 129.469 116.602 A 12.422 12.422 0 0 0 133.753 119.862 A 15.064 15.064 0 0 0 139.906 121.143 Z M 341.981 121.143 Q 345.863 121.143 348.793 119.642 A 12.307 12.307 0 0 0 353.7 114.844 A 26.533 26.533 0 0 0 356.703 106.312 Q 357.728 101.075 357.728 93.604 Q 357.728 86.207 356.703 80.897 A 27.49 27.49 0 0 0 353.7 72.217 Q 351.722 68.848 348.793 67.274 Q 345.863 65.699 341.981 65.699 Q 338.099 65.699 335.169 67.274 A 12.488 12.488 0 0 0 330.299 72.217 A 27.525 27.525 0 0 0 327.369 80.86 Q 326.38 86.134 326.38 93.604 A 138.76 138.76 0 0 0 326.527 99.903 Q 326.673 103.126 327.223 106.165 A 31.623 31.623 0 0 0 328.797 111.878 Q 329.823 114.551 331.544 116.602 A 12.422 12.422 0 0 0 335.829 119.862 A 15.064 15.064 0 0 0 341.981 121.143 Z M 466.712 15.308 Q 466.712 12.086 467.884 9.302 A 15.104 15.104 0 0 1 471.144 4.432 Q 473.231 2.344 475.978 1.173 Q 478.724 0.001 481.947 0.001 Q 485.096 0.001 487.879 1.173 A 15.853 15.853 0 0 1 492.787 4.395 Q 494.911 6.446 496.156 9.266 A 14.791 14.791 0 0 1 497.401 15.308 A 14.716 14.716 0 0 1 496.156 21.387 A 15.085 15.085 0 0 1 492.75 26.221 A 15.765 15.765 0 0 1 487.806 29.407 A 15.365 15.365 0 0 1 481.947 30.543 Q 478.651 30.543 475.831 29.371 A 14.468 14.468 0 0 1 470.997 26.148 A 14.788 14.788 0 0 1 467.848 21.314 A 15.748 15.748 0 0 1 466.712 15.308 Z M 650.697 86.866 L 650.697 87.086 A 28.198 28.198 0 0 0 647.145 71.119 A 13.383 13.383 0 0 0 635.975 65.772 Q 632.02 66.065 629.164 67.823 A 14.724 14.724 0 0 0 624.476 72.401 A 20.003 20.003 0 0 0 621.803 78.956 A 35.882 35.882 0 0 0 620.96 86.866 L 650.697 86.866 Z"
                  vector-effect="non-scaling-stroke"
                />
              </g>
            </svg>
          </h1>
          <p>
            Everything you need when it comes to color, palettes creator, color
            manipulation, <br class="line-break" />image palette colection and
            so many more tools for you.
          </p>
          <a href="/#/create" class="call-to-action-btn">Start Now</a>
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
              palette ideas and adjust it however you want.
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
            <h3>Image Colors</h3>
            <p>
              Extract the color palette of whatever image you want. Copy the
              colors you want, so you can use in your own designs.
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
                class="fas fa-paint-roller"
              ></i>
            </div>
            <h3>Gradient Maker</h3>
            <p>
              Create the perfect gradient for your project. Change its
              configurations and styles to make it just how you want it.
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
          <div style="background-color: #2d8d9f;">
            <p class="esp-color">#2d8d9f</p>
          </div>
          <div style="background-color: #2a7278;">
            <p class="esp-color">#2a7278</p>
          </div>
          <div style="background-color: #62b4c1;">
            <p class="esp-color">#62b4c1</p>
          </div>
          <div style="background-color: #c9d8da;">
            <p class="esp-color">#c9d8da</p>
          </div>
          <div style="background-color: #28201c;">
            <p class="esp-color">#28201c</p>
          </div>
          <div style="background-color: #d0bdb4;">
            <p class="esp-color">#D0BDB4</p>
          </div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-2.jpg" />
          <div style="background-color: #e7c2b3;">
            <p class="esp-color">#e7c2b3</p>
          </div>
          <div style="background-color: #c49c85;">
            <p class="esp-color">#c49c85</p>
          </div>
          <div style="background-color: #bac5c3;">
            <p class="esp-color">#bac5c3</p>
          </div>
          <div style="background-color: #403e43;">
            <p class="esp-color">#403e43</p>
          </div>
          <div style="background-color: #9ca19d;">
            <p class="esp-color">#9ca19d</p>
          </div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-3.jpg" />
          <div style="background-color: #f6ded4;">
            <p class="esp-color">#f6ded4</p>
          </div>
          <div style="background-color: #db755c;">
            <p class="esp-color">#db755c</p>
          </div>
          <div style="background-color: #672d1d;">
            <p class="esp-color">#672d1d</p>
          </div>
          <div style="background-color: #080605;">
            <p class="esp-color">#080605</p>
          </div>
          <div style="background-color: #36190e;">
            <p class="esp-color">#36190e</p>
          </div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-4.jpg" />
          <div style="background-color: #c44b40;">
            <p class="esp-color">#c44b40</p>
          </div>
          <div style="background-color: #914330;">
            <p class="esp-color">#914330</p>
          </div>
          <div style="background-color: #272723;">
            <p class="esp-color">#272723</p>
          </div>
          <div style="background-color: #97a59f;">
            <p class="esp-color">#97a59f</p>
          </div>
          <div style="background-color: #c3a592;">
            <p class="esp-color">#c3a592</p>
          </div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-5.jpg" />
          <div style="background-color: #4c8499;">
            <p class="esp-color">#4c8499</p>
          </div>
          <div style="background-color: #5f4342;">
            <p class="esp-color">#5f4342</p>
          </div>
          <div style="background-color: #b5b2ba;">
            <p class="esp-color">#b5b2ba</p>
          </div>
          <div style="background-color: #30333a;">
            <p class="esp-color">#30333a</p>
          </div>
          <div style="background-color: #6c6e77;">
            <p class="esp-color">#6c6e77</p>
          </div>
          <div style="background-color: #b8979e;">
            <p class="esp-color">#b8979e</p>
          </div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-6.jpg" />
          <div style="background-color: #04647d;">
            <p class="esp-color">#04647d</p>
          </div>
          <div style="background-color: #064a65;">
            <p class="esp-color">#064a65</p>
          </div>
          <div style="background-color: #1495a4;">
            <p class="esp-color">#1495a4</p>
          </div>
          <div style="background-color: #c6d6da;">
            <p class="esp-color">#c6d6da</p>
          </div>
          <div style="background-color: #5bb1b9;">
            <p class="esp-color">#5bb1b9</p>
          </div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-7.jpg" />
          <div style="background-color: #40b0bb;">
            <p class="esp-color">#40b0bb</p>
          </div>
          <div style="background-color: #937347;">
            <p class="esp-color">#937347</p>
          </div>
          <div style="background-color: #36342f;">
            <p class="esp-color">#36342f</p>
          </div>
          <div style="background-color: #724c39;">
            <p class="esp-color">#724c39</p>
          </div>
          <div style="background-color: #d8d7d6;">
            <p class="esp-color">#d8d7d6</p>
          </div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-8.jpg" />
          <div style="background-color: #f9c20d;">
            <p class="esp-color">#f9c20d</p>
          </div>
          <div style="background-color: #e8c093;">
            <p class="esp-color">#e8c093</p>
          </div>
          <div style="background-color: #8a899a;">
            <p class="esp-color">#8a899a</p>
          </div>
          <div style="background-color: #634526;">
            <p class="esp-color">#634526</p>
          </div>
          <div style="background-color: #d7d6e5;">
            <p class="esp-color">#d7d6e5</p>
          </div>
          <div style="background-color: #594546;">
            <p class="esp-color">#594546</p>
          </div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-9.jpg" />
          <div style="background-color: #38d7f9;">
            <p class="esp-color">#38d7f9</p>
          </div>
          <div style="background-color: #f61da8;">
            <p class="esp-color">#f61da8</p>
          </div>
          <div style="background-color: #fe5b9a;">
            <p class="esp-color">#fe5b9a</p>
          </div>
          <div style="background-color: #f7b2c3;">
            <p class="esp-color">#f7b2c3</p>
          </div>
          <div style="background-color: #093757;">
            <p class="esp-color">#093757</p>
          </div>
          <div style="background-color: #62dc34;">
            <p class="esp-color">#62dc34</p>
          </div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-10.jpg" />
          <div style="background-color: #04b7bf;">
            <p class="esp-color">#04b7bf</p>
          </div>
          <div style="background-color: #faa96a;">
            <p class="esp-color">#faa96a</p>
          </div>
          <div style="background-color: #c3aba3;">
            <p class="esp-color">#c3aba3</p>
          </div>
          <div style="background-color: #8ea39f;">
            <p class="esp-color">#8ea39f</p>
          </div>
          <div style="background-color: #f59754;">
            <p class="esp-color">#f59754</p>
          </div>
        </div>
        <div class="brick">
          <img src="/src/assets/images/masonry-11.jpg" />
          <div style="background-color: #adf3fb;">
            <p class="esp-color">#adf3fb</p>
          </div>
          <div style="background-color: #a22861;">
            <p class="esp-color">#a22861</p>
          </div>
          <div style="background-color: #3b818b;">
            <p class="esp-color">#3b818b</p>
          </div>
          <div style="background-color: #cf7694;">
            <p class="esp-color">#cf7694</p>
          </div>
          <div style="background-color: #7b2237;">
            <p class="esp-color">#7b2237</p>
          </div>
        </div>
      </div>
      <div class="last-wrapper">
        <h1 class="title">Like What You See?</h1>
        <p class="sub">Experiment our tools. We hope you like it!</p>
        <a href="/#/create" class="call-to-action-btn">Start Now</a>
      </div>
    </section>
    <my-footer></my-footer>
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
  width: 36%;
  margin: 20px auto;
  @media screen and (max-width: 1350px) {
    width: 50%;
  }
  @media screen and (min-width: 2050px) {
    width: 30%;
  }
  @media screen and (max-width: 700px) {
    width: 70%;
  }
}
.text-content {
  position: absolute;
  margin-right: 50px;
  top: 30vh;
  color: #fff;
  text-align: center;
  width: 100%;
  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    @media screen and (min-width: 1650px) {
      font-size: 26px;
      line-height: 33px;
    }
    @media screen and (min-width: 1450px) {
      font-size: 20px;
      line-height: 25px;
    }
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
  width: 80px;
  padding-top: 8px;
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
    @media screen and (min-width: 701px) and (max-width: 1050px) {
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 50px;
    }
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 40px;
      padding: 0 30px;
    }
    .grid-card {
      background: #2e2e2e;
      text-align: center;
      .inner-grid-card {
        padding: 32px;
        h3 {
          font-size: 1.7rem;
          margin-top: 20px;
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
  @media screen and (min-width: 701px) and (max-width: 1050px) {
    column-count: 2;
  }
  @media screen and (max-width: 700px) {
    column-count: 1;
    padding: 0 30px;
  }
  .brick {
    break-inside: avoid;
    padding: 5px;
    div {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      &:hover {
        .esp-color {
          opacity: 1;
        }
      }
    }
    img {
      width: 100%;
      margin-bottom: -4px;
    }
  }
}
.masonry-title {
  font-size: 2.5rem;
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
}
.separator-div {
  width: 50vw;
  height: 120px;
  border-right: 1px solid gray;
  margin-bottom: 20px;
}
.last-wrapper {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 40px;
  .title {
    width: 100%;
    text-align: center;
    letter-spacing: 0.1rem;
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  .sub {
    width: 100%;
    text-align: center;
    letter-spacing: 0.2rem;
    font-size: 16px;
    @media screen and (max-width: 540px) {
      width: 85%;
      margin: 0 auto;
    }
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
.line-break {
  @media screen and (max-width: 700px) {
    display: none;
  }
}
.esp-color {
  opacity: 0;
  transition: 0.25s all;
  text-transform: uppercase;
  width: 100%;
  font-weight: bold;
  padding-left: 10px;
  font-size: 15px;
}
</style>

<script>
import Footer from "../shared/footer/Footer";
export default {
  components: {
    "my-footer": Footer,
  },
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
