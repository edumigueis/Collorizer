<template>
  <div id="app" class="app-wrapper">
    <template>
      <div class="imagePalette">
        <div class="left-wrapper">
          <div class="links">
            <label
              class="image__upload--label"
              for="upload"
              title="Upload an image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11 3v2h-4v-2h4zm3 6l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm-7.5 1c.828 0 1.5-.671 1.5-1.5 0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5c0 .829.672 1.5 1.5 1.5zm10.5 9h-4v2h4v-2zm-6 2v-2h-4v2h4zm2-18v2h4v-2h-4zm6 0v2h3v3h2v-5h-5zm-17 2h3v-2h-5v5h2v-3zm20 14h-3v2h5v-5h-2v3zm0-5h2v-4h-2v4zm-20-4h-2v4h2v-4zm3 9h-3v-3h-2v5h5v-2z"
                />
              </svg>
              <input
                id="upload"
                class="image__upload"
                type="file"
                name="img"
                @change="uploadFile"
              />
            </label>
            <button
              @click="randomImage"
              class="image__new"
              title="Generate a new image"
              :disabled="isLoading"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 12c0-.552.448-1 1.001-1s.999.448.999 1-.446 1-.999 1-1.001-.448-1.001-1zm6.2 0l-1.7 2.6-1.3-1.6-3.2 4h10l-3.8-5zm8.8-5v14h-20v-3h-4v-15h21v4h3zm-20 9v-9h15v-2h-17v11h2zm18-7h-16v10h16v-10z"
                />
              </svg>
            </button>
          </div>
          <div
            class="image__main"
            :style="{ backgroundImage: 'url(' + imageSrc + ')' }"
            :class="{ isLoading: isLoading }"
          >
            <span :class="{ active: isLoading }" class="loading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14 22c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm-2-22c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 10c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2zm-22 2c0 1.105.896 2 2 2s2-.895 2-2c0-1.104-.896-2-2-2s-2 .896-2 2zm19-9c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2zm0 14c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2zm-14-14c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2zm0 14c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div class="right-wrapper">
          <div class="imagePalette__container">
            <h1>COLORS</h1>
            <ul class="swatch__container">
              <li v-for="color in palette" class="swatch__wrapper">
                <div :style="{ backgroundColor: color.hex }" class="swatch">
                  <div
                    :style="{ color: color.typeTextColor }"
                    class="swatch__type"
                  >
                    № {{ color.number }}. {{ color.type }}
                  </div>
                  <div
                    :style="{ color: color.hexTextColor }"
                    class="swatch__hex"
                  >
                    {{ color.hex }}
                  </div>
                  <div
                    :style="{ color: color.nameTextColor }"
                    class="swatch__name"
                  >
                    {{ color.name }}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Vibrant from "node-vibrant";
export default {
  data() {
    return {
      palette: [],
      imageSrc: "",
      isLoading: false,
    };
  },
  created() {
    this.randomImage();
  },
  methods: {
    getPalette(imageSrc) {
      this.imageSrc = imageSrc;
      Vibrant.from(imageSrc)
        .maxColorCount(200)
        .getPalette()
        .then((palette) => {
          const colors = [];
          var number = 0;
          for (let color in palette) {
            number = number + 1;
            const type = color;
            const typeTextColor = palette[color].getTitleTextColor();
            const hex = palette[color].getHex();
            const hexTextColor = palette[color].getBodyTextColor();
            const nameTextColor = palette[color].getBodyTextColor();
            colors.push({
              number,
              type,
              typeTextColor,
              hex,
              hexTextColor,
              name,
              nameTextColor,
            });
          }
          this.palette = colors;
        });
    },
    randomImage() {
      const randomNumber = Math.floor(Math.random() * 633);
      this.isLoading = true;
      fetch(
        `https://source.unsplash.com/collection/490175/500x250/?sig=${randomNumber}`
      ).then((response) => {
        this.getPalette(response.url);
        this.isLoading = false;
      });
    },
    uploadFile(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => {
          this.getPalette(reader.result);
        },
        false
      );
      if (file) {
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  appearance: none;
  background: none;
  border: none;
  outline: none;
}

button,
label {
  cursor: pointer;
}

.app-wrapper {
  display: flex;
  justify-content: center;
}

.imagePalette {
  position: relative;
  margin: 20px auto;
  display: flex;
  width: 100%;
  max-width: 1400px;
  padding: 0 40px;
  background: #2e2e2e;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(black, 0.25);
}
.right-wrapper{
  flex: 1 1 0px;
}
.left-wrapper{
  flex: 1 1 0px;
}
.imagePalette__container {
  padding: 0 1.6rem;
}

.image__main {
  position: relative;
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  &.isLoading {
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      background: rgba(white, 0.8);
    }
  }
}
.links {
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  padding: 10px 15px 5px;
  border-radius: 0 0 0 4px;
  z-index: 10;
  svg {
    transition: opacity 0.3s ease;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
}
.image__new {
  padding: 0;
  margin-left: 7px;
  &[disabled],
  &[disabled]:hover {
    svg {
      opacity: 0.2;
    }
  }
}
.image__upload {
  position: absolute;
  opacity: 0;
  z-index: -1;
  width: 1px;
  height: 1px;
}

h1 {
  margin: 1.4em 0;
  font-size: 1.4em;
  letter-spacing: 2px;
  font-weight: 700;
  color: #333;
}

.swatch__container {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.swatch {
  display: inline-block;
  width: 100%;
  height: 100px;
  border-radius: 4px;
  margin-bottom: 1em;
  transition: background 0.3s ease;
}
.swatch__wrapper {
  display: inline-block;
  width: 30%;
  list-style: none;
  margin-bottom: 1.4em;
}
.swatch__hex {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.5px;
  padding: 0.3em 0 0.2em 0.3em;
}
.swatch__name {
  font-size: 11px;
  color: #aaa;
  padding-left: 0.5em;
}
.swatch__type {
  font-size: 13px;
  color: #aaa;
  padding: 1em 0 0.5em 0.5em;
}
.loading {
  display: none;
  width: 50px;
  height: 50px;
  position: relative;
  &.active {
    display: block;
  }
  svg {
    position: absolute;
    animation: spin 4s linear infinite;
    width: 50px;
    height: 50px;
  }
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
