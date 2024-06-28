import { createRouter, createWebHistory } from 'vue-router';
import SafetyDevicePageComponent from "../securityContext/pages/SafetyDevice/SafetyDevice-page.component.vue";
import LoginComponent from "../public/components/Login/login.component.vue";
import PersonalCardPageComponent from "../securityContext/pages/PersonalSafety/PersonalCard-page.component.vue";
import ShoppingDeviceCard from "../securityContext/components/SafetyDeviceCard-component/shoppingdeviceCard.vue";
import OrderListPageComponent from "../securityContext/pages/OrderList/OrderList-page.component.vue";
import TechnicalSupportPageComponent from "../public/pages/TechnicalSupport-page.component.vue";
import RegisterComponent from "../public/components/Register/register.component.vue";
import FormSupport from "../public/pages/FormSupport.vue";
import payment from "../public/components/payment/payment.vue";
import activeservices from "../securityContext/components/services/activeservices.vue"
const routes = [
  { path: '/', component: () => import('../public/pages/home-page.component.vue') },
  { path: '/home', component: () => import('../public/pages/home-page.component.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('../public/pages/NotFound-page.component.vue') },
  { path: '/PersonalCardPage', component: PersonalCardPageComponent },
  { path: '/SafetyDevicePage', component: SafetyDevicePageComponent },
  { path: '/login', component: LoginComponent },
  { path: "/activeservices", component: activeservices},
  { path: '/carrito', component: ShoppingDeviceCard },
  { path: '/orderList', component: OrderListPageComponent },
  { path: '/formSupport', component: TechnicalSupportPageComponent },
  { path: '/register', component: RegisterComponent },
  { path: '/formSupport', component: FormSupport },
  {path: '/payment', component: payment}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
