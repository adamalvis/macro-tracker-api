import Home from "../pages/Home";
import Register from "../pages/Register";

export const PAGE_NAMES = {
  HOME: 'home',
  REGISTER: 'register',
};

export const PAGES = {
  [PAGE_NAMES.HOME]: {
    title: 'Home',
    component: Home,
    path: '/',
  },
  [PAGE_NAMES.REGISTER]: {
    title: 'Register',
    component: Register,
    path: '/register',
  },
};
