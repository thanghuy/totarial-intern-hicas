import React from "react";
import { Breadcrumb } from "antd";
import { Typography } from "antd";
import ProductList from "./components/ProductList";
import { Input } from "antd";
import "./css/style.shop.css";
import { Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Title } = Typography;
const ShopMain = () => {
  return (
    <>
      <Title level={4}>Shop</Title>
      <div className="top-bar-content">
        <Breadcrumb>
          <Breadcrumb.Item></Breadcrumb.Item>
          <Breadcrumb.Item></Breadcrumb.Item>
          <Breadcrumb.Item>Shop</Breadcrumb.Item>
        </Breadcrumb>
        <div className="filter-shop">
          <Search placeholder="Search..." style={{ width: 200 }} />
          <Button icon={<FilterOutlined />} />
        </div>
      </div>
      <ProductList />
    </>
  );
};

export default ShopMain;
