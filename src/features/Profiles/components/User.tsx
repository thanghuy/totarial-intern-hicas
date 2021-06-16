import React from "react";
import { Row, Col, Card } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useAppSelector } from "../../../app/hooks";
const User = () => {
  const user: any = useAppSelector(state => state.auth.infoUser);
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
                <h2>{user.name}</h2>
                <h3>Email : {user.email}</h3>
              </div>
              <h4>{user.birthDate}</h4>
              <h4>{user.sex}</h4>
              <h4>
                <u>{user.addressCompany}</u>
              </h4>
              <h4>
                <u>{user.addressHome}</u>
              </h4>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default User;
