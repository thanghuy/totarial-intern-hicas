import React from "react";
import { Row, Col, Card, Input } from "antd";
import CartApi from '../../../services/CartAPI';
interface Cart {
  ListCart: Array<any>;
}
const ListItem = ({ ListCart }: Cart) => {
  
  const result = ListCart.map((item) => {
    return (
      <Row
        key={item.idProduct}
        style={{ position: "relative", borderBottom: "1px solid #ADADAD" }}
      >
        <span className="delete-cart">X</span>
        <Col span={24}>
          <Card bordered={false}>
            <Row>
              <Col span={6}>
                <img width={100} src={item.image} alt="..." />
              </Col>
              <Col span={12}>
                <p>{item.name}</p>
                <p>{item.content}</p>
                <h3>{item.price_item} VND</h3>
              </Col>
              <Col span={6}>
                <div className="cart-number">
                  <span>+</span>
                  <Input value={item.amount} />
                  <span>-</span>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  });
  return <>{result}</>;
};

export default ListItem;
