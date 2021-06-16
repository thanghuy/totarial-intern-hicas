import React, { useState } from "react";
import { Menu, Button } from "antd";
import { Link } from "react-router-dom";
import {
  BankOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
const Main = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <Button
        type="default"
        onClick={toggleCollapsed}
        style={{
          float: "right",
          marginRight: "25px",
          marginBottom: "25px",
          marginTop: "25px",
        }}
      >
      Menu  <MenuOutlined />
      </Button>

      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineCollapsed={true}
      >
        <Menu.Item key="1" icon={<BankOutlined />}>
          <Link to={"/shop"}>Shop</Link>
        </Menu.Item>

        <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
          <Link to={"/cart"}>Cart</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to={"/profile"}>My profile</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Main;
