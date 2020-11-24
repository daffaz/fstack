import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// Pages from route
import Test from "./components/pages/Test.vue";
import Yes from "./components/pages/Yes.vue";

const routes = [
    {
        path: "/first",
        component: Test
    },
    {
        path: "/second",
        component: Yes
    }
];

export default new Router({
    mode: 'history',
    routes 
});
