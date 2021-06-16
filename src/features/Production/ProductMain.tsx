import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { Typography } from "antd";
import "../Shop/css/style.shop.css";
import Detail from "./components/Detail";
import { Badge } from "antd";
import ProductAPI from "../../services/ProductAPI";
import { RouteProps } from "react-router-dom";
const { Title } = Typography;
interface RouteInfo extends RouteProps {
  params: {
    id: string;
  };
}
const ProductMain = ({ match }: { match: RouteInfo }) => {
  const { params }: { params: { id: string } } = match;
  const { id }: { id: string } = params;
  const [product, setProduct] = useState<any>(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const resp = await ProductAPI.getDetail(id);
        setProduct(resp.data);
        console.log(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);
  return (
    <>
      <Title level={4}>Shop</Title>
      <div className="top-bar-content">
        <Breadcrumb>
          <Breadcrumb.Item>Shop</Breadcrumb.Item>
          <Breadcrumb.Item>Product</Breadcrumb.Item>
        </Breadcrumb>
        <div className="filter-shop" style={{ height: "30px" }}>
          <Badge count={5}></Badge>
        </div>
      </div>
      {product === null ? null : (
        <Detail
          idProduct={product.idProduct}
          Name={product.name}
          rate={product.rate}
          Price={product.price}
          Content={product.content}
          Image={product.image}
        />
      )}
    </>
  );
};

export default ProductMain;
