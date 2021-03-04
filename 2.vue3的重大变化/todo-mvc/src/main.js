// import Vue from "vue";
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';


//vue2
//const app = new Vue(options);
//app.$mount("#app");


//vue3
//不存在构造函数Vue
//console.log(Vue);//会报错

const app = createApp(App);
app.mount("#app");

// createApp(App).mount('#app');
