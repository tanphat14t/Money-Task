// import vue router
import { createRouter, createWebHistory } from "vue-router";

// import file page
import homePage from "./pages/homePage";
import transactionsPage from "./pages/transactionsPage";
import transactionDetails from "./pages/transactionDetails";
import errorPage from "./pages/errorPage";

// create route array
const routes = [
  {
    path: "/",
    name: "overview",
    component: homePage,
  },
  {
    path: "/transactions",
    name: "transaction-route",
    component: transactionsPage,
  },
  {
    path: "/transactions/:id",
    name: "transaction-details-route",
    component: transactionDetails,
  },
  {
    path: "/:pathMatch(.*)*", // The page does not exist
    component: errorPage,
  },
];

// create router
const router = new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
