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
  }
];

export default routes;
