require("./bootstrap");
// Setting up Vue.js
window.Vue = require("vue");
// Import router
import router from "./routes";

Vue.component('main-component', require('./components/Main.vue').default);
const app = new Vue({
    el: "#app",
    router
});