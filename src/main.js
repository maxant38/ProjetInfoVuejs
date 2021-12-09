import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';
import 'jquery/dist/jquery.js';
import XnsSeekBar from 'xns-seek-bar'




createApp(App).use(router, VueAxios, axios, VueSweetalert2,XnsSeekBar).mount('#app')
