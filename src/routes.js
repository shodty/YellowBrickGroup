import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import OurStreet from './components/cases/OurStreet.vue'
import AllCityRiders from './components/cases/AllCityRiders.vue'
import Jump from './components/cases/Jump.vue'
import MasTaco from './components/cases/MasTaco.vue'
import Bottomless from './components/cases/Bottomless.vue'
import ShangriLa from './components/cases/ShangriLa.vue'
import TheCabin from './components/cases/TheCabin.vue'
import ArtLifeTour from './components/cases/ArtLifeTour.vue'
import BardisMiry from './components/cases/BardisMiry.vue'
import Tester from './components/Tester.vue'

export default [
    { path: '/', component: Home },
    { path: '/contact', component: Contact},
    { path: '/os', component: OurStreet},
    { path: '/acr', component: AllCityRiders},
    { path: '/jump', component: Jump},
    { path: '/mas', component: MasTaco},
    { path: '/btm', component: Bottomless},
    { path: '/shang', component: ShangriLa},
    { path: '/cabin', component: TheCabin},
    { path: '/alt', component: ArtLifeTour},
    { path: '/bm', component: BardisMiry},
    { path: '/tester', component: Tester},
]