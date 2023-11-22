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
  }
];

export default routes;
