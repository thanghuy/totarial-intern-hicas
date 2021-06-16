import React, { useState } from "react";
import { Row, Col, Card, Rate, Button,message } from "antd";
import CartApi from "../../../services/CartAPI";
import { useAppDispatch } from "../../../app/hooks";
interface Product {
  idProduct: string;
  Name: string;
  rate: string;
  Price: string;
  Content: Text;
  Image: string;
}
const Detail = ({ idProduct, Name, rate, Price, Content, Image }: Product) => {
  const dispatch = useAppDispatch();
  const [isShowALert,setShowAlert] = useState<boolean>(false);
  const addToCart = async (
    idProduct: string
  ) => {
    const idUser = localStorage.getItem("@idUser");
    let data = {
      idUser: idUser,
      idProduct: idProduct,
      amount: 1,
    };
    try {
      const resp = await CartApi.addCart(data);
      if(resp.status){
        dispatch({type : "UPDATE_CART"});
        message.success('Add cart success', 4);
      }
      console.log(resp);
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <Row style={{ marginTop: "20px" }}>
      <Col span={24}>
        <Card bordered={false}>
          <Row>
            <Col span={8}>
              <img width={300} src={Image} alt="..." />
            </Col>
            <Col span={16}>
              <h2>{Name}</h2>
              <p>{Content}</p>
              <h2>{Price} VND</h2>
              <Rate disabled defaultValue={parseInt(rate)} />
              <Row style={{ marginTop: "20px" }}>
                <Col span={16}>
                  <Button type="primary" style={{ marginRight: "30px" }} onClick={()=>addToCart(idProduct)}>
                    Mua hàng ngay
                  </Button>
                  <Button type="primary" onClick={()=>addToCart(idProduct)}>Thêm vào giỏ hàng</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Detail;
