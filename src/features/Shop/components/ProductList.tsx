import { Row, Col, Divider } from "antd";
import { Card } from "antd";
import { Rate,Button } from "antd";
import { Link } from "react-router-dom";

interface Props{
  ProductList: Array<any>;
}
const ProductList = ({ProductList}: Props) => {
  const List = ProductList.map((item) => {
    return (
      <Col key={item.idProduct} span={12}>
        <Link to={`/shop/product/${item.idProduct}`}>
          <Card bordered={false}>
            <Row>
              <Col span={8}>
                <img
                  width={100}
                  src={item.image}
                  alt="..."
                />
              </Col>
              <Col span={16}>
                <p>{item.name}</p>
                <h3>{item.price} VND</h3>
                <Rate disabled defaultValue={item.rate} />
                <Button type="primary">Primary Button</Button>
              </Col>
            </Row>
          </Card>
        </Link>
      </Col>
    );
  });
  return (
    <>
      <Divider orientation="left"></Divider>
      <Row>{List}</Row>
    </>
  );
};
export default ProductList;
