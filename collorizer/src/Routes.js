import Welcome from './components/welcome/Welcome.vue';
import NotFound from './components/notFound/NotFound.vue';
import ColorLab from './components/colorLab/ColorLab.vue';
import Palettes from './components/paletteCreator/PaletteCreator.vue';

export const routes = [
    { path: '/', component: Welcome, titulo: 'Eduardo Migueis'},
    { path: '/lab', component: ColorLab, titulo: 'Color Lab'},
    { path: '/create/palette', component: Palettes, titulo: 'Create Pallettes'},
    { path: '*', component: NotFound, titulo: 'N O T  F O U N D', meta: { transition: 'zoom' }  },
]


