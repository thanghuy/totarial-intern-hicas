import React, { useEffect, useState } from "react";
import ListItem from "./Components/ListItem";
import Total from "./Components/Total";
import { Typography, Row, Col } from "antd";
import "./css/style.cart.css";
import CartAPI from "../../services/CartAPI";
const { Title } = Typography;

const CartMain = () => {
  const [listCart, setListCart] = useState<[]>([]);
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const id: any = localStorage.getItem("@idUser");
        const resp = await CartAPI.getCart(id);
        setListCart(resp.data);
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
          <div className="total-item-cart">2 item in bag</div>
        </Col>
      </Row>
      {listCart.length === 0 ? null : <ListItem ListCart={listCart} />}
      <Total />
    </>
  );
};

export default CartMain;
