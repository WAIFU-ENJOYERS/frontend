import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import axios from 'axios'
import VueAxios from 'vue-axios'


// import "./assets/main.css";
import '@mdi/font/css/materialdesignicons.css'
const app = createApp(App);

const vuetify = createVuetify({
    components,
    directives,
  })

app.use(createPinia())
    .use(router)
    .use(vuetify)
    .use(VueAxios, axios);


app.mount("#app");
