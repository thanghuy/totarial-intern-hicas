import React from "react";
import { Row, Col, Card,Rate } from "antd";

interface Product{
  idProduct: string;
  Name: string;
  rate: string;
  Price: string;
  Content: Text;
  Image: string;
}
const Detail = ({idProduct,Name,rate,Price,Content,Image}: Product) => {
  return (
    <Row style={{marginTop : "20px"}}>
      <Col span={24}>
        <Card bordered={false}>
          <Row>
            <Col span={8}>
              <img
                width={300}
                src={Image}
                alt="..."
              />
            </Col>
            <Col span={16}>
              <h2>{Name}</h2>
              <p>{Content}</p>
              <h2>{Price} VND</h2>
              <Rate disabled defaultValue={parseInt(rate)} />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Detail;
