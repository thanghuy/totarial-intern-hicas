import React, { useEffect, useState } from "react";
import ListItem from "./Components/ListItem";
import Total from "./Components/Total";
import { Typography, Row, Col } from "antd";
import "./css/style.cart.css";
import CartAPI from "../../services/CartAPI";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { updateItemCart } from "./cartSlice";
const { Title } = Typography;

const CartMain = () => {
  const [listCart, setListCart] = useState<[]>([]);
  const amountItem = useAppSelector(state => state.cart.amount);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchCart = async () => {
      let result = {};
      try {
        const id: any = localStorage.getItem("@idUser");
        const resp:any = await CartAPI.getCart(id);
        if (resp.status) {
          setListCart(resp.data);
          result = {
            amount: resp.amount,
            total: resp.subTotal,
            subTotal: resp.total,
            tax: resp.tax,
          };
          dispatch(updateItemCart(result));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCart();
  }, []);
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
