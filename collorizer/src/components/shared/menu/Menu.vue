<template>
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
            <!--<img class="menu-bar-chat-pic">-->
            <a href="/#/create">
            <i class="fas fa-th"></i>
            </a>
          </div>
        </div>
        <div class="menu-bar-post-wp menu-bar-wp">
          <div class="menu-bar-post-inner">
            <!--<img class="menu-bar-post-pic">-->
            <a href="https://github.com/edumigueis" target="_blank">
              <i class="fab fa-github"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#menu-bar {
  width: 100vw;
  z-index: 20;
  height: fit-content;
  background-color: transparent;
  position: fixed;
  top: 0;
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
</style>
