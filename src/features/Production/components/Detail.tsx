import React from "react";
import { Row, Col, Card,Rate } from "antd";
const Detail = () => {
  return (
    <Row style={{marginTop : "20px"}}>
      <Col span={24}>
        <Card bordered={false}>
          <Row>
            <Col span={8}>
              <img
                width={300}
                src="https://cdn.tgdd.vn/Products/Images/42/236085/samsung-galaxy-a52-8gb-256gb-thumb-white-600x600-600x600.jpg"
                alt="..."
              />
            </Col>
            <Col span={16}>
              <h2>Samsung Galgaxy A31</h2>
              <p>
                Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020
                của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời
                trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên
                pin khủng lên đến 5000 mAh.
              </p>
              <h2>6 940 000 VND</h2>
              <Rate disabled defaultValue={5} />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Detail;
