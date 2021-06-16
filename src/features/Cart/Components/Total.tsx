import React from "react";
import { Row, Col, Card } from "antd";
const Total = () => {
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
                <h4>13 880 000 VND</h4>
                <h4>1 388 000 VND</h4>
                <h4>15 168 000 VND</h4>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Total;
