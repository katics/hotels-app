export const APP_ROUTES = {
  loginPage: "/",
  dashboard: "/dashboard",
  hotelDetails: "/dashboard/:hotelId",
  registerPage: "/register",
  pageNotFound: "/pageNotFound",
  favHotelsPage: "/favourites",
};

export const COMPONENT_PAGES = {
  loginPage: "LoginPage",
  dashboard: "Dashboard",
  hotelDetails: "HotelDetails",
  registerPage: "RegisterPage",
  pageNotFound: "PageNotFound",
  favHotelsPage: "FavHotelsPage",
};

export const ROUTE_COMPONENTS = [
  {
    path: APP_ROUTES.dashboard,
    component: COMPONENT_PAGES.dashboard,
    title: "Dashboard",
    protected: true,
  },
  {
    path: APP_ROUTES.hotelDetails,
    component: COMPONENT_PAGES.hotelDetails,
    title: "Hotel Details",
    protected: true,
  },
  {
    path: APP_ROUTES.loginPage,
    component: COMPONENT_PAGES.loginPage,
    title: "Login",
    protected: false,
  },
  {
    path: APP_ROUTES.registerPage,
    component: COMPONENT_PAGES.registerPage,
    title: "Register",
    protected: false,
  },
  {
    path: APP_ROUTES.favHotelsPage,
    component: COMPONENT_PAGES.favHotelsPage,
    title: "Favourite Hotels",
    protected: false,
  },
  {
    path: APP_ROUTES.pageNotFound,
    component: COMPONENT_PAGES.pageNotFound,
    title: "Page not found",
    protected: false,
  },
];
