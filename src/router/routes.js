const routes = [
  {
    path: "/",
    component: () => import("layouts/padrao.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/home.vue")
      }
    ]
  },
  {
    path: "/produtos",
    component: () => import("layouts/padrao.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/produtos.vue")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("layouts/padrao.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/login.vue")
      },
      {
        path: "/login/perfil",
        component: () => import("pages/deslogar.vue")
      }
    ]
  },
  {
    path: "/registro",
    component: () => import("layouts/padrao.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/registro.vue")
      }
    ]
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/error404.vue")
  }
];

export default routes;
