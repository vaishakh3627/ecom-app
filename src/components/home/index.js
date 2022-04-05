import React from "react";

import Banner from "./components/Banner";
import CardComponent from "./components/CardComponent";
import Deal from "./components/Deal";
import DealHeader from "./components/DealHeader";
import DealOfTheDay from "./components/DealOfTheDay";
import DealOfTheDayHeader from "./components/DealOfTheDayHeader";
import ProductCard from "./components/ProductCard";
import ProductHeader from "./components/ProductsHeader";

import "./home.scss";

const HomeComponent = () => {
  return (
    <div>
      <Banner />
      <CardComponent />
      <ProductHeader />
      <ProductCard />
      <DealHeader />
      <Deal />
      <DealOfTheDayHeader />
      <DealOfTheDay />
    </div>
  );
};
export default HomeComponent;
