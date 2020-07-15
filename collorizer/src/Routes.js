import Welcome from './components/welcome/Welcome.vue';
import NotFound from './components/notFound/NotFound.vue';
import ColorLab from './components/colorLab/ColorLab.vue';
import Palettes from './components/paletteCreator/PaletteCreator.vue';
import ImagePalette from './components/imagePalette/ImagePalette.vue';
import Main from './components/main/Main.vue';

export const routes = [
    { path: '/', component: Welcome, titulo: 'Eduardo Migueis'},
    { path: '/lab', component: ColorLab, titulo: 'Color Lab'},
    { path: '/create/palette', component: Palettes, titulo: 'Create Pallettes'},
    { path: '/image/palette', component: ImagePalette, titulo: 'Image Palette'},
    { path: '/create', component: Main, titulo: 'Create'},
    { path: '*', component: NotFound, titulo: 'N O T  F O U N D', meta: { transition: 'zoom' }  },
]


