import React, { useEffect, useState } from 'react';
import ProductAPI from '../../services/ProductAPI'
import { Breadcrumb } from "antd";
import { Typography } from "antd";
import ProductList from "./components/ProductList";
import { Input,Divider } from "antd";
import "./css/style.shop.css";
import { Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Title } = Typography;

const ShopMain = () => {
  const [productList, setProductList] = useState<[]>([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const resp = await ProductAPI.getProduct({});
                setProductList(resp.data); 
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[])
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
      <Divider orientation="left"></Divider>
      <ProductList ProductList={productList} />
    </>
  );
};

export default ShopMain;
