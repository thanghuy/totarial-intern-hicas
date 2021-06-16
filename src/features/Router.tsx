import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Login = lazy(() => import("./auth/pages/Login"));
const ShopMain = lazy(() => import("./Shop/ShopMain"));
const ProductMain = lazy(() => import("./Production/ProductMain"));
const Cart = lazy(() => import("./Cart/CartMain"));
const Layout = lazy(() => import("./Layouts/Index"));
const Profile = lazy(() => import("./Profiles/Main"));
const NotFound = lazy(() => import("./Shares/NotFound/NotFound"));
const Test = lazy(() => import('./Layouts/test'));

const Router = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Layout>
          <Switch>
            <Route exact path={["/", "/shop"]} component={ShopMain} />
            <Route exact path="/shop/product/:id" component={ProductMain} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Layout>
        {/* <Route path='/test' exact component={Test} /> */}
      </Switch>
    </Suspense>
  );
};

export default Router;
