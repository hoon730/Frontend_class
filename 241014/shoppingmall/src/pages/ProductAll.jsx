import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { productAction } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    dispatch(productAction.getProduct(searchQuery));
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container>
      <Row>
        {productList.map((menu, idx) => (
          <Col key={idx} lg={3}>
            <ProductCard key={idx} item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;

// https://my-json-server.typicode.com/hoon730/musinsamall
