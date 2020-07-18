import Welcome from './components/welcome/Welcome.vue';
import NotFound from './components/notFound/NotFound.vue';
import ColorLab from './components/colorLab/ColorLab.vue';
import Palettes from './components/paletteCreator/PaletteCreator.vue';
import ImagePalette from './components/imagePalette/ImagePalette.vue';
import ColorConvert from './components/colorConversor/ColorConversor.vue';
import Gradients from './components/gradientMaker/GradientMaker.vue';
import Main from './components/main/Main.vue';

export const routes = [
    { path: '/', component: Welcome, titulo: 'Eduardo Migueis'},
    { path: '/lab', component: ColorLab, titulo: 'Color Lab'},
    { path: '/lab/convert', component: ColorConvert, titulo: 'Color Conversor'},
    { path: '/create/palette', component: Palettes, titulo: 'Create Pallettes'},
    { path: '/create/gradient', component: Gradients, titulo: 'Create Gradients'},
    { path: '/image/palette', component: ImagePalette, titulo: 'Image Palette'},
    { path: '/create', component: Main, titulo: 'Create'},
    { path: '*', component: NotFound, titulo: 'N O T  F O U N D', meta: { transition: 'zoom' }  },
]


