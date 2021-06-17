import React, { useEffect } from "react";
import ListItem from "./Components/ListItem";
import Total from "./Components/Total";
import { Typography, Row, Col } from "antd";
import "./css/style.cart.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
const { Title } = Typography;

const CartMain = () => {
  const listCart = useAppSelector(state => state.cart.data);
  const amountItem = useAppSelector(state => state.cart.amount);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({type : "UPDATE_CART_SAGA"});
  }, [dispatch]);
  return (
    <>
      <Title level={4}>Cart</Title>
      <Row>
        <Col span={24}>
          <div className="total-item-cart">{amountItem} item in bag</div>
        </Col>
      </Row>
      {listCart.length === 0 ? null : <ListItem ListCart={listCart} />}
      <Total />
    </>
  );
};

export default CartMain;
