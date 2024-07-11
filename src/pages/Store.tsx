import { ReactElement } from "react";
import storeData from "../data/items.json";
import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";

type Props = {};

const Store = (props: Props) => {
  return (
    <div>
      <h1>Store</h1>
      <Row lg={3} md={2} sm={1} className="g-3">
        {storeData.map((item: any) => {
          return (
            <Col>
              <StoreItem {...item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Store;
