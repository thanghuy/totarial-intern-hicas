import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { Spin } from "antd";

const Login = lazy(() => import("./auth/pages/Login"));
const ShopMain = lazy(() => import("./Shop/ShopMain"));
const ProductMain = lazy(() => import("./Production/ProductMain"));
const Cart = lazy(() => import("./Cart/CartMain"));
const Layout = lazy(() => import("./Layouts/Index"));
const Profile = lazy(() => import("./Profiles/Main"));
// const NotFound = lazy(() => import("./Shares/NotFound/NotFound"));
const NotifiNoLogin = lazy(() => import("./Shares/Notification/NotLogin"));
const Register = lazy(() => import("./auth/pages/Register"));
const Router = () => {
  const isLogin = useAppSelector((state) => state.auth.isLogin);
  return (
    <Suspense
      fallback={
        <div className="lazy-loading">
          <Spin size="large" tip="Loading..." />
        </div>
      }
    >
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Layout>
          <Route exact path={["/", "/shop"]} component={ShopMain} />
          <Route exact path="/shop/product/:id" component={ProductMain} />
          <Route exact path="/cart">
            {isLogin ? <Cart /> : <NotifiNoLogin />}
          </Route>
          <Route exact path="/profile">
            {isLogin ? <Profile /> : <NotifiNoLogin />}
          </Route>
        </Layout>
      </Switch>
    </Suspense>
  );
};

export default Router;
