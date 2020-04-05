import Home from "../pages/Home";

export const PAGE_NAMES = {
  HOME: 'home',
};

export const PAGES = {
  [PAGE_NAMES.HOME]: {
    title: 'Home',
    component: Home,
    path: '/',
  },
};
