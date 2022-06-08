import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home-view.vue";
import AboutView from "../views/about-view.vue";
import LoginView from "../views/login-view.vue";
import SignUpView from "../views/sign-up-view.vue";
import OpenProjectView from "../views/open-project-view.vue";
import BuyerPageView from "../views/buyer-page-view.vue";
import BuyerDesignView from "../views/buyer-design-view.vue";
import PostProjectView from "../views/post-project-view.vue";
import ProfileDesignerView from "../views/profile-designer-view.vue";
import ProfileBuyerView from "../views/profile-buyer-view.vue";
import ContactView from "../views/contact-view.vue";
import DesignerWorkspaceView from "../views/designer-workspace-view.vue";
import PostDetailView from "../views/post-detail-view.vue";
import EditProfileView from "../views/edit-profile-view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "",
      component: HomeView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUpView,
    },
    {
      path: "/open-project",
      name: "open-project",
      component: OpenProjectView,
    },
    {
      path: "/buyer-page",
      name: "buyer-page",
      component: BuyerPageView,
    },
    {
      path: "/buyer-design",
      name: "buyer-design",
      component: BuyerDesignView,
    },
    {
      path: "/post-project",
      name: "post-project",
      component: PostProjectView,
    },
    {
      path: "/profile-designer/:id",
      name: "profile-designer",
      component: ProfileDesignerView,
    },
    {
      path: "/profile-buyer/:id",
      name: "profile-buyer",
      component: ProfileBuyerView,
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: ContactView,
    },
    {
      path: "/designer-workspace",
      name: "designer-workspace",
      component: DesignerWorkspaceView,
    },
    {
      path: "/post-detail/:id",
      name: "post-detail",
      component: PostDetailView,
    },
    {
      path: "/edit-profile-view",
      name: "edit-profile",
      component: EditProfileView,
    },
  ],
});

export default router;
