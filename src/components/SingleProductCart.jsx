import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { CarTaxiFront, Star, Trash } from "lucide-react";
import { seperate_route } from "..";
import { ProductProvider } from "@/context/ContextProvider";
import toast from "react-hot-toast";

const SingleProductCart = ({ data }) => {
  let { cartProduct, setCartProduct } = useContext(ProductProvider);
  let { title, image, price, id } = data;
  let location = useLocation();
  function addToCart(payload) {
    let cartCheck = cartProduct.some((item) => item.id == payload.id);
    if (cartCheck) {
      return toast.error("Already Exist");
    }
    setCartProduct([...cartProduct, payload]);
  }
  function removeCart(payloadId) {
    setCartProduct(cartProduct.filter((item) => item.id != payloadId));
  }
  return (
    <>
      <div className="w-full rounded-xl max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">
        <Link to={`${seperate_route.detail}/${id}`}>
          <img
            className="rounded-base mb-6 h-50 mx-auto"
            src={image}
            alt="product image"
          />
        </Link>
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
              4.8 out of 5
            </span>
          </div>
          <Link to="#">
            <h5 className="text-xl text-heading font-semibold tracking-tight">
              {title.slice(0,60)+".."}
            </h5>
          </Link>
          <div className="flex items-center justify-between mt-6">
            <span className="text-3xl font-extrabold text-heading">
              ${price}
            </span>
            {location.pathname == "/cart" ? (
              <Button
                type="button"
                onClick={() => removeCart(id)}
                variant={"destructive"}
              >
                <Trash />
                Remove Cart
              </Button>
            ) : (
              <Button type="button" onClick={() => addToCart(data)}>
                <CarTaxiFront />
                Add to cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductCart;
