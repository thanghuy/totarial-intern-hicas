import React from "react";
import Logo from "../../../assets/icons/logo.svg";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
const HeaderMain = () => {
  return (
    <div style={{ display: "flex", position: "relative", height: "100%" }}>
      <Link to="/">
        <div className="logo" style={{ marginRight: "10px" }}>
          <img width="50" src={Logo} alt="..." />
        </div>
      </Link>
      <h2>Mobile Shopping</h2>
      <div style={{ position: "absolute", right: 0 }}>
        <Link to="/profile">
          <Avatar size={40} icon={<UserOutlined />} />
        </Link>
      </div>
    </div>
  );
};

export default HeaderMain;
