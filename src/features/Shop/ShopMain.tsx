import React, { useEffect, useState } from "react";
import ProductAPI from "../../services/ProductAPI";
import { Breadcrumb } from "antd";
import { Typography } from "antd";
import ProductList from "./components/ProductList";
import { Modal, Input, Divider } from "antd";
import "./css/style.shop.css";
import { Button, Select } from "antd";
import { FilterOutlined } from "@ant-design/icons";
const { Option } = Select;

const { Search } = Input;
const { Title } = Typography;

const ShopMain = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filter, setFiter] = useState<Object>({
    keyword: "null",
    pricefrom: 0,
    priceto: 0,
    rateto: 0,
    ratefrom: 0,
  });
  const [priceForm, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(0);
  const [rateFrom, setRateFrom] = useState(0);
  const [rateTo, setRateTo] = useState(0);

  const [productList, setProductList] = useState<[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await ProductAPI.getProduct(filter);
        setProductList(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [filter]);
  const onSearch = (value: string) => {
    setFiter({
      ...filter,
      keyword: value,
    });
  };
  const handleOk = () => {
    console.log(priceForm, priceTo,rateFrom,rateTo);
    setFiter({
      ...filter,
      pricefrom: priceForm,
      priceto: priceTo,
      rateto: rateTo,
      ratefrom: rateFrom
    })
    setShowFilter(false);
  };

  const handleCancel = () => {
    setShowFilter(false);
  };
  return (
    <>
      <Title level={4}>Shop</Title>
      <div className="top-bar-content">
        <Breadcrumb>
          <Breadcrumb.Item></Breadcrumb.Item>
          <Breadcrumb.Item></Breadcrumb.Item>
          <Breadcrumb.Item>Shop</Breadcrumb.Item>
        </Breadcrumb>
        <Modal
          title="Filter"
          visible={showFilter}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Price</p>
          <Select
            defaultValue={0}
            style={{ width: "50%" }}
            onChange={(value: any) => setPriceFrom(value)}
          >
            <Option value="1000000">1.000.000 VND</Option>
            <Option value="5000000">5.000.000 VND</Option>
            <Option value="10000000">10.000.000 VND</Option>
            <Option value="15000000">15.000.000 VND</Option>
            <Option value="25000000">25.000.000 VND</Option>
          </Select>
          <Select
            defaultValue={0}
            style={{ width: "50%" }}
            onChange={(value: any) => setPriceTo(value)}
          >
            <Option value="1000000">1.000.000 VND</Option>
            <Option value="5000000">5.000.000 VND</Option>
            <Option value="10000000">10.000.000 VND</Option>
            <Option value="15000000">15.000.000 VND</Option>
            <Option value="25000000">25.000.000 VND</Option>
          </Select>
          <p>Rate</p>
          <Select
            defaultValue={0}
            style={{ width: "50%" }}
            onChange={(value: any) => setRateFrom(value)}
          >
            <Option value="1">1 Rate</Option>
            <Option value="2">2 Rate</Option>
            <Option value="3">3 Rate</Option>
            <Option value="4">4 Rate</Option>
            <Option value="5">5 Rate</Option>
          </Select>
          <Select
            defaultValue={5}
            style={{ width: "50%" }}
            onChange={(value: any) => setRateTo(value)}
          >
            <Option value="1">1 Rate</Option>
            <Option value="2">2 Rate</Option>
            <Option value="3">3 Rate</Option>
            <Option value="4">4 Rate</Option>
            <Option value="5">5 Rate</Option>
          </Select>
        </Modal>
        <div className="filter-shop">
          <Search
            onSearch={onSearch}
            placeholder="Search..."
            style={{ width: 200 }}
          />
          <Button
            icon={<FilterOutlined />}
            onClick={() => setShowFilter(true)}
          />
        </div>
      </div>
      <Divider orientation="left"></Divider>
      <ProductList ProductList={productList} />
    </>
  );
};

export default ShopMain;
