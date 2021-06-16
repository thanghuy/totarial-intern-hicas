import React from "react";
import { Row, Col, Card, Input } from "antd";
const ListItem = () => {
  return (
    <Row style={{ position : 'relative', borderBottom: "1px solid #ADADAD"}}>
      <span className="delete-cart">X</span>
      <Col span={24}>
        <Card bordered={false}>
          <Row>
            <Col span={6}>
              <img
                width={100}
                src="https://cdn.tgdd.vn/Products/Images/42/236085/samsung-galaxy-a52-8gb-256gb-thumb-white-600x600-600x600.jpg"
                alt="..."
              />
            </Col>
            <Col span={12}>
              <p>Samsung Galgaxy A31</p>
              <p>
                Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020
                của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời
                trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên
                pin khủng lên đến 5000 mAh.
              </p>
              <h3>6 940 000 VND</h3>
            </Col>
            <Col span={6}>
              <div className="cart-number">
                <span>+</span>
                <Input value={1} />
                <span>-</span>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default ListItem;
