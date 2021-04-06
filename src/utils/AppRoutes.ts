export const APP_ROUTES = {
  welcomePage: "/",
  hotelsPage: "/hotels",
  loginPage: "/login",
  registerPage: "/register",
  pageNotFound: "/pageNotFound",
};

export const COMPONENT_PAGES = {
  welcomePage: "WelcomePage",
  hotelsPage: "HotelsPage",
  loginPage: "LoginPage",
  registerPage: "RegisterPage",
  pageNotFound: "PageNotFound",
};

export const ROUTE_COMPONENTS = [
  {
    path: APP_ROUTES.welcomePage,
    component: COMPONENT_PAGES.welcomePage,
    title: "Home",
  },
  {
    path: APP_ROUTES.hotelsPage,
    component: COMPONENT_PAGES.hotelsPage,
    title: "Dashboard",
  },
  {
    path: APP_ROUTES.loginPage,
    component: COMPONENT_PAGES.loginPage,
    title: "Login",
  },
  {
    path: APP_ROUTES.registerPage,
    component: COMPONENT_PAGES.registerPage,
    title: "Register",
  },
  {
    path: APP_ROUTES.pageNotFound,
    component: COMPONENT_PAGES.pageNotFound,
    title: "Page not found",
  },
];
