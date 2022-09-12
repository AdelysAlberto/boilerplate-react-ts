import { Suspense, lazy } from "react";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";


import { TFCLazy } from "../interfaces/common";
import AuthGuard from "./guards/AuthGuard";
import BaseLoading from "../components/BaseLoading";

import { PrivateRoutes, PublicRoutes } from "./routes.path";

const Login: TFCLazy = lazy(() => import("../pages/public/Login/Login"));
const Home: TFCLazy = lazy(() => import("../pages/public/Home/Home"));
const Dashboard: TFCLazy = lazy(() => import("../pages/private/Dashboard/Dashboard"));

const RouteApp = () => {
  return (
    <Suspense fallback={<BaseLoading />}>
      <BrowserRouter>

        <Routes>
          <Route path={PublicRoutes.HOME} element={<Home />} />

          <Route path={PublicRoutes.LOGIN} element={<Login />} />

          <Route element={<AuthGuard />}>
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default RouteApp;
