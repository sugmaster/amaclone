import React, { Component } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71UPhOgl2sL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="The lean startup"
            price={39.9}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={4}
          />
          <Product
            id="1"
            title="The lean startup"
            price={39.9}
            image="https://images-eu.ssl-images-amazon.com/images/I/51k4KZAuFfL._AC_UL430_SR430,344_.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            id="1"
            title="The lean startup"
            price={39.9}
            image="https://images-eu.ssl-images-amazon.com/images/I/41Y80w8343L._AC_SX184_.jpg"
            rating={2}
          />
          <Product
            id="1"
            title="The lean startup"
            price={39.9}
            image="https://m.media-amazon.com/images/I/71CEKbNm79L._AC_UL320_.jpg"
            rating={2}
          />
          <Product
            id="1"
            title="The lean startup"
            price={39.9}
            image="https://images-eu.ssl-images-amazon.com/images/I/71qg9nW7CFL._AC_UL430_SR430,344_.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="The lean startup"
            price={39.9}
            image="https://images-eu.ssl-images-amazon.com/images/I/912JmMQNCCL._AC_UL430_SR430,344_.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
