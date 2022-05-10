import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/app.css"
import { createRouter, createWebHistory } from 'vue-router';
import home from './views/home.vue'
import pokemon from './views/pokemon.vue';
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from "primevue/column";
import Button from "primevue/button";
import Paginator from "primevue/paginator";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";

const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/pokemon', name: 'pokemon', component: pokemon }
]

const router = new createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const app = createApp(App)
app.use(router);
app.use(PrimeVue);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Button', Button);
app.component('Paginator', Paginator);
app.component('Dropdown', Dropdown);
app.component('InputText', InputText);
app.mount("#app");