import Detail from "@/screen/Detail";
import Home from "@/screen/Home";
import About from "@/screen/About";
import Contact from "@/screen/Contact";
import Collection from "@/screen/Collection";
import ProductCart from "@/screen/ProductCart";
import React from "react";
import { navigate_route, seperate_route } from "..";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "@/screen/PageNotFound";
import Form from "@/screen/Form";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path={navigate_route[0].path} element={<Home />} />
        <Route path={navigate_route[1].path} element={<About />} />
        <Route path={navigate_route[2].path} element={<Collection />} />
        <Route path={navigate_route[3].path} element={<Contact />} />
        <Route path={seperate_route.cart} element={<ProductCart />} />
        <Route path={`${seperate_route.detail}/:id`} element={<Detail />} />
        <Route path={seperate_route.PageNotFound} element={<PageNotFound />} />
        <Route path={seperate_route.form} element={<Form />} />
      </Routes>
    </>
  );
};

export default Router;
