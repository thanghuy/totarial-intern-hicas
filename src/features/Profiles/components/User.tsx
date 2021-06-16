import React from "react";
import { Row, Col, Card } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const User = () => {
  return (
    <Row>
      <Col span={24}>
        <Card bordered={false} style={{ padding: "30px" }}>
          <Row>
            <Col span={6}>
              <Avatar
                size={100}
                icon={<UserOutlined />}
                style={{ marginBottom: "50px" }}
              />
              <h4>Date of birth :</h4>
              <h4>Sex :</h4>
              <h4>Address Company :</h4>
              <h4>Address Home :</h4>
            </Col>
            <Col span={10}>
              <div
                style={{
                  height: "100px",
                  marginBottom: "50px",
                  paddingTop: "15px",
                }}
              >
                <h2>MR.USER</h2>
                <h3>Email : user@gmail.com</h3>
              </div>
              <h4>01/01/2018</h4>
              <h4>Male</h4>
              <h4>
                <u>15, Duy Tan, Dich Vong Hau, Cau Giay, Ha Noi</u>
              </h4>
              <h4>
                <u>15, Duy Tan, Dich Vong Hau, Cau Giay, Ha Noi</u>
              </h4>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default User;
