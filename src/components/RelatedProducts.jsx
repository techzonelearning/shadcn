import React, { useEffect, useState } from "react";
import SingleProductCart from "./SingleProductCart";

const RelatedProducts = ({ products, category }) => {
  let [related, setRelated] = useState([]);
  useEffect(() => {
    let filter = products.filter((item, index) => item.category == category);
    setRelated(filter);
  }, [category]);

  return (
    <>
      <h1 className="text-3xl font-bold pl-12">Related Products</h1>
      <div className="flex gap-4 justify-center flex-wrap py-6">
        {related.length > 0 &&
          related.slice(0,3).map((value, index) => (
            <SingleProductCart data={value} key={index} />
          ))}
      </div>
    </>
  );
};

export default RelatedProducts;
