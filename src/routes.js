import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Login from "./views/Login";
import PondokManagement from "./views/PondokManagement";
import GenerationManagement from "./views/PondokManagement/GenerationManagement";
import BedroomManagement from "./views/PondokManagement/BedroomManagement";
import SantriManagement from "./views/SantriManagement";
import Payment from "./views/Payment";
import BedroomSantri from "./views/BedroomSantri";
import ClassSantri from "./views/ClassSantri";
import NotFound from "./views/NotFound";
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";

const rootUrl = {
  pondokManagement: "/pondok-management"
};

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/login",
    exact: true,
    layout: DefaultLayout,
    layoutProps: {
      noNavbar: true,
      noFooter: true,
      noSidebar: true,
      fullWidth: true
    },
    component: Login
  },
  {
    path: "/santri-management",
    layout: DefaultLayout,
    component: SantriManagement
  },
  {
    path: "/payment",
    layout: DefaultLayout,
    component: Payment
  },
  {
    path: rootUrl.pondokManagement,
    layout: DefaultLayout,
    component: PondokManagement,
    auth: true,
    exact: true
  },
  {
    path: rootUrl.pondokManagement + "/generation-management",
    layout: DefaultLayout,
    component: GenerationManagement,
    auth: true,
    exact: true
  },
  {
    path: rootUrl.pondokManagement + "/bedroom-management",
    layout: DefaultLayout,
    component: BedroomManagement,
    auth: true,
    exact: true
  },
  {
    path: "/bedroom-santri",
    layout: DefaultLayout,
    component: BedroomSantri
  },
  {
    path: "/class-santri",
    layout: DefaultLayout,
    component: ClassSantri
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    auth: true,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/*",
    layout: DefaultLayout,
    component: NotFound
  }
];
