import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../views/auth/SignUp.vue';
import SignIn from '../views/auth/SignIn.vue';
import ForgotPassword from '../views/auth/ForgotPassword.vue';
import AccountConfirmed from '../views/auth/AccountConfirmed.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/accounts/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/accounts/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/accounts/password/reset',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    path: '/accounts/confirmed',
    name: 'AccountConfirmed',
    component: AccountConfirmed,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
