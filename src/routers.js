import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import About from "./components/About.vue";
import Login from "./components/Login.vue";
import { createRouter, createWebHistory } from "vue-router";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";


const routes = [
    {
        name: "Home",
        component: Home,
        path: "/",
    },
    {
        name: "About",
        component: About,
        path: "/about",
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up",
    },
    {
        name: "Login",
        component: Login,
        path: "/login",
    },
    {
        name: "Add",
        component: Add,
        path: "/add",
    },
    {
        name: "Update",
        component: Update,
        path: "/update/:id",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;