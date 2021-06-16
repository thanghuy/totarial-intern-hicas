import React from "react";
import { Breadcrumb } from "antd";
import { Typography } from "antd";
import "../Shop/css/style.shop.css";
import Detail from "./components/Detail";
import { Badge } from "antd";
const { Title } = Typography;
const ProductMain = () => {
  return (
    <>
      <Title level={4}>Shop</Title>
      <div className="top-bar-content">
        <Breadcrumb>
          <Breadcrumb.Item>Shop</Breadcrumb.Item>
          <Breadcrumb.Item>Product</Breadcrumb.Item>
        </Breadcrumb>
        <div className="filter-shop" style={{height : '30px'}}>
          <Badge count={5}>
          </Badge>
        </div>
      </div>
      <Detail />
    </>
  );
};

export default ProductMain;
