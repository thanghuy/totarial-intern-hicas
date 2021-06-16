import React from "react";
import ListItem from "./Components/ListItem";
import Total from "./Components/Total";
import { Breadcrumb } from "antd";
import { Typography,Row,Col } from "antd";
import './css/style.cart.css';
const { Title } = Typography;

const CartMain = () => {
  return (
    <>
      <Title level={4}>Cart</Title>
      <Row>
        <Col span={24}>
          <div className="total-item-cart">
              2 item in bag
          </div>
        </Col>
      </Row>
      <ListItem />
      <ListItem />
      <ListItem />
      <Total />
    </>
  );
};

export default CartMain;
