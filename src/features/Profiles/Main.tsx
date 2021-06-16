import React from "react";
import { Typography} from "antd";
import User from "./components/User";
const { Title } = Typography;
const Main = () => {
  return (
    <>
      <Title level={4}>My Profile</Title>
      <User />
    </>
  );
};

export default Main;
