import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
// import Message from "../components/Message";
import Loader from "../components/Loader";
// import Paginate from "../components/Paginate";
// import ProductCarousel from "../components/ProductCarousel";
// import Meta from "../components/Meta";
// import { listProducts } from "../actions/productActions";
import axios from "axios";
import { useGetProductsQuery } from "../slices/productsApiSlice";

const HomeScreen = () => {
  //   const keyword = match.params.keyword;

  //   const pageNumber = match.params.pageNumber || 1;

  //   const dispatch = useDispatch();

  //   const productList = useSelector((state) => state.productList);
  //   const { loading, error, products, page, pages } = productList;

  //   useEffect(() => {
  //     dispatch(listProducts(keyword, pageNumber));
  //   }, [dispatch, keyword, pageNumber]);

  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
          <h1>Latest Products</h1>

          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
                {/* <h3>{product.name}</h3> */}
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
