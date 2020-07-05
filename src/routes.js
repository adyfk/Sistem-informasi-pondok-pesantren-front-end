// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Login from "./views/Login";
import PondokManagement from "./views/PondokManagement";
import GenerationManagement from "./views/PondokManagement/GenerationManagement";
import BedroomManagement from "./views/PondokManagement/BedroomManagement";
import ClassManagement from "./views/PondokManagement/ClassManagement";
import SantriManagement from "./views/SantriManagement";
import DetailSantriManagement from "./views/FormDetailSantri";
import TambahSantriManagement from "./views/FormTambahSantri";
import Payment from "./views/Payment";
import BedroomStudent from "./views/BedroomSantri";
import ClassStudent from "./views/ClassSantri";
import NotFound from "./views/NotFound";
import Dashboard from "./views/Dashboard";

const rootUrl = {
  pondokManagement: "/pondok-management"
};

export default [
  {
    auth: true,
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Dashboard
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
    auth: true,
    path: "/santri-management",
    layout: DefaultLayout,
    exact: true,
    component: SantriManagement
  },
  {
    path: "/santri-management/tambah",
    exact: true,
    layout: DefaultLayout,
    auth: true,
    component: TambahSantriManagement
  },
  {
    path: "/santri-management/detail",
    exact: true,
    layout: DefaultLayout,
    auth: true,
    component: DetailSantriManagement
  },
  {
    path: "/payment",
    layout: DefaultLayout,
    auth: true,
    exact: true,
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
    path: rootUrl.pondokManagement + "/bedroom-management/santri",
    layout: DefaultLayout,
    component: BedroomStudent,
    auth: true,
    exact: true
  },
  {
    path: rootUrl.pondokManagement + "/class-management/santri",
    layout: DefaultLayout,
    component: ClassStudent,
    auth: true,
    exact: true
  },
  {
    path: rootUrl.pondokManagement + "/class-management",
    layout: DefaultLayout,
    component: ClassManagement,
    auth: true,
    exact: true
  },
  {
    path: "/*",
    layout: DefaultLayout,
    component: NotFound
  }
];
