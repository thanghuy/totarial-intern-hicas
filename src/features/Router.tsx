import React, {Suspense,lazy} from 'react';
import {Route, Switch } from 'react-router-dom';

const Login = lazy(()=> import('./auth/pages/Login'));
const ShopMain = lazy(()=> import('./Shop/ShopMain'));
const ProductMain = lazy(()=> import('./Production/ProductMain'));
const Cart = lazy(()=> import('./Cart/CartMain'));

const Router = () => {
    return (
        <Suspense fallback={<div>Loading</div>}> 
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/shop" component={ShopMain} />
                <Route exact path="/product" component={ProductMain} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
        </Suspense>
    );
};

export default Router;