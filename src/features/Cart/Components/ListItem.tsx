import React from "react";
import { Popconfirm, message, Row, Col, Card, Input } from "antd";
import CartApi from "../../../services/CartAPI";
import { useAppDispatch } from "../../../app/hooks";
interface Cart {
  ListCart: Array<any>;
}
const ListItem = ({ ListCart }: Cart) => {
  const text = "Are you sure to delete this cart ?";
  const idUser: any = localStorage.getItem("@idUser");
  const dispatch = useAppDispatch();
  const confirmDeleteCart = async (idCart: any) => {
    try {
      const resp = await CartApi.deleteCartItem(idCart, idUser);
      if (resp.status) {
        dispatch({ type: "UPDATE_CART_SAGA" });
        message.success("Delete success.");
      }
    } catch (error) {
      message.error("Delete failed.");
      console.log(error);
    }
  };

  const updateItemCartIn = async (
    idCart: string,
    idProduct: string,
    amount: string
  ) => {
    let newAmount = parseInt(amount) + 1;
    let data = {
      idCart: idCart,
      idUser: idUser,
      idProduct: idProduct,
      amount: newAmount,
    };
    try {
      const resp = await CartApi.updateCartItem(data, idCart);
      if (resp.status) {
        dispatch({ type: "UPDATE_CART_SAGA" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateItemCartRe = async (
    idCart: string,
    idProduct: string,
    amount: string
  ) => {
    let newAmount = parseInt(amount) - 1;
    if(newAmount === 0){
      confirmDeleteCart(idCart);
    }
    else{
      let data = {
        idCart: idCart,
        idUser: idUser,
        idProduct: idProduct,
        amount: newAmount,
      };
      const resp = await CartApi.updateCartItem(data, idCart);
      if (resp.status) {
        dispatch({ type: "UPDATE_CART_SAGA" });
      }
    }
  };
  const result = ListCart.map((item) => {
    return (
      <Row
        key={item.idProduct}
        style={{ position: "relative", borderBottom: "1px solid #ADADAD" }}
      >
        <Popconfirm
          placement="left"
          title={text}
          onConfirm={() => confirmDeleteCart(item.idCart)}
          okText="Yes"
          cancelText="No"
        >
          <span className="delete-cart">X</span>
        </Popconfirm>
        <Col span={24}>
          <Card bordered={false}>
            <Row>
              <Col span={6}>
                <img width={100} src={item.image} alt="..." />
              </Col>
              <Col span={12}>
                <p>{item.name}</p>
                <p>{item.content}</p>
                <h3>{item.price_item} VND</h3>
              </Col>
              <Col span={6}>
                <div className="cart-number">
                  <span
                    onClick={() =>
                      updateItemCartIn(item.idCart, item.idProduct, item.amount)
                    }
                  >
                    +
                  </span>
                  <Input value={item.amount} />
                  <span
                    onClick={() =>
                      updateItemCartRe(item.idCart, item.idProduct, item.amount)
                    }
                  >
                    -
                  </span>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  });
  return <>{result}</>;
};

export default ListItem;
