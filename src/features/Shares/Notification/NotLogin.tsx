import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
const NotLogin = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <>
          <Link to="/login">
            <Button type="primary">Login</Button>
          </Link>
          <Link to="/register">
            <Button type="primary">Register</Button>
          </Link>
        </>
      }
    />
  );
};

export default NotLogin;
