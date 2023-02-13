import MainMenu from './components/MainMenu.vue'
import Company from './components/Company.vue'
import Reki from './components/Reki.vue'
import Rafstilling from './components/Rafstilling.vue'
import Search from './components/Search.vue'

export const routes = [
    {path: '/', component: MainMenu},
    {path: '/company', component: Company},
    {path: '/reki', component: Reki},
    {path: '/rafstilling', component: Rafstilling},
    {path: '/search', component: Search},
]