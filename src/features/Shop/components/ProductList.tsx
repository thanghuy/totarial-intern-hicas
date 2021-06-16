import { Row, Col, Divider } from "antd";
import { Card } from "antd";
import { Rate } from "antd";
import { Link } from "react-router-dom";
const dataTest = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ProductList = () => {
  const List = dataTest.map((item) => {
    return (
      <Col key={item} span={12}>
        <Link to="/shop/product/1">
          <Card bordered={false}>
            <Row>
              <Col span={8}>
                <img
                  width={100}
                  src="https://cdn.tgdd.vn/Products/Images/42/236085/samsung-galaxy-a52-8gb-256gb-thumb-white-600x600-600x600.jpg"
                  alt="..."
                />
              </Col>
              <Col span={16}>
                <p>Samsung Galgaxy A31</p>
                <h3>6 940 000 VND</h3>
                <Rate disabled defaultValue={5} />
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
