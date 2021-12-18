import './styles/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createI18nWithLocale } from './locale';
import store from './store';
import { GetterTypes } from './store/types';
import router from './router';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';

const i18n = createI18nWithLocale(store.getters[GetterTypes.APP.LANGUAGE]);

const app = createApp(App);
app.use(store);
app.use(i18n);
app.use(router);
// app.use(ElementPlus);

app.mount('#app');
