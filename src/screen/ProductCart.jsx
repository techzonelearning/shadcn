import SingleProductCart from "@/components/SingleProductCart";
import { Button } from "@/components/ui/button";
import { ProductProvider } from "@/context/ContextProvider";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ProductCart = () => {
  let { cartProduct, setCartProduct } = useContext(ProductProvider);
  let navigate = useNavigate();
  return (
    <div className="flex gap-4 justify-center flex-wrap py-6">
      {cartProduct?.length > 0 ? (
        cartProduct.map((value, index) => (
          <SingleProductCart data={value} key={index} />
        ))
      ) : (
        <div className="h-screen flex items-center justify-center flex-col">
          <h1 className="text-4xl font-bold italic">No Cart Item</h1>
          <Button onClick={() => navigate("/")} className={"mt-3"}>Back To Home</Button>
        </div>
      )}
    </div>
  );
};

export default ProductCart;
