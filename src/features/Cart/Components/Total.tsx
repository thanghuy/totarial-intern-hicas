import React from "react";
import { Row, Col, Card } from "antd";
import { useAppSelector } from "../../../app/hooks";

const Total = () => {
  const cart = useAppSelector(state => state.cart);
  return (
    <Row>
      <Col span={24}>
        <Card bordered={false}>
          <div className="box-bottom-cart">
            <div className="title-cp">
                <h4>Sub total</h4>
                <h4>Tax</h4>
                <h4>Total</h4>
            </div>
            <div className="total-price">
                <h4>{cart.subTotal} VND</h4>
                <h4>{cart.tax} VND</h4>
                <h4>{cart.total} VND</h4>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Total;
