import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// Pages from route
import Test from "./components/pages/Test.vue";
import Yes from "./components/pages/Yes.vue";
import BasicHook from "./components/pages/basic/BasicHook.vue";

const routes = [
    {
        path: "/first",
        component: Test,
        name: 'Houme'
    },
    {
        path: "/second",
        component: Yes
    },
    // From ./basic/BasicHook.vue
    {
        path: "/hooks",
        component: BasicHook
    }
];

export default new Router({
    mode: 'history',
    routes 
});
