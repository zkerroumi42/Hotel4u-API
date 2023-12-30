import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// authentification
import LoginView from "../views/Auth/LoginView.vue";
import RegisterView from "../views/Auth/RegisterView.vue";

// dashbord
import DashbordView from "../views/AdminDashbord/DashbordView.vue";

// client
import ClientsView from "../views/AdminDashbord/client/ClientsView.vue";

// categorie
import CategoriesView from "../views/AdminDashbord/categorie/CategoriesView.vue";

// ville
import VillesView from "../views/AdminDashbord/ville/VillesView.vue";
import AjouterVilleView from "../views/AdminDashbord/ville/AjouterVilleView.vue";
import UpdateVilleView from "../views/AdminDashbord/ville/UpdateVilleView.vue";
import DeleteVilleView from "../views/AdminDashbord/ville/DeleteVilleView.vue";

// hotel
import HotelsView from "../views/AdminDashbord/hotel/HotelsView.vue";
import AjouterHotelView from "../views/AdminDashbord/hotel/AjouterHotelView.vue";
import UpdateHotelView from "../views/AdminDashbord/hotel/UpdateHotelView.vue";
import DeleteHotelView from "../views/AdminDashbord/hotel/DeleteHotelView.vue";

// profile
import ProfileView from "../views/AdminDashbord/profile/ProfileView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/Admin/dashbord",
    name: "dashbord",
    component: DashbordView,
  },
  //clients
  {
    path: "/Admin/clients",
    name: "clients",
    component: ClientsView,
  },
  //villes
  {
    path: "/Admin/villes",
    name: "villes",
    component: VillesView,
  },
  {
    path: "/Admin/villes/add",
    name: "ajouter_ville",
    component: AjouterVilleView,
  },
  {
    path: "/Admin/villes/update",
    name: "update_ville",
    component: UpdateVilleView,
  },
  {
    path: "/Admin/villes/delete",
    name: "delete_ville",
    component: DeleteVilleView,
  },
  //categorie
  {
    path: "/Admin/categories",
    name: "categories",
    component: CategoriesView,
  },
  //hotels
  {
    path: "/Admin/hotels",
    name: "hotels",
    component: HotelsView,
  },
  {
    path: "/Admin/hotels/add",
    name: "ajouter_hotel",
    component: AjouterHotelView,
  },
  {
    path: "/Admin/hotels/update",
    name: "update_hotel",
    component: UpdateHotelView,
  },
  {
    path: "/Admin/hotels/delete",
    name: "delete_hotel",
    component: DeleteHotelView,
  },
  //categorie
  {
    path: "/Admin/categories",
    name: "categories",
    component: CategoriesView,
  },
  //profile

  {
    path: "/Admin/profile",
    name: "profile",
    component: ProfileView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
