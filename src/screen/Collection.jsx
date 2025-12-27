import SingleProductCart from "@/components/SingleProductCart";
import { ProductProvider } from "@/context/ContextProvider";
import { Loader2 } from "lucide-react";
import React, { useContext } from "react";
import SEO from "@/components/SEO";

const Collection = () => {
  let { error, productArray, loading, category } = useContext(ProductProvider);
  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin" size={60} />
      </div>
    );
  if (error)
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-2xl font-medium">{error}</p>
      </div>
    );
  return (
    <div className="px-20 py-8">
      <SEO
        title="Collections"
        description="Explore our curated collections of premium products."
      />
      {category.map((item, index) => (
        <div key={index}>
          <h1 className="text-3xl underline font-black uppercase">{item}</h1>

          <div className="flex gap-4 justify-center flex-wrap py-10">
            {productArray.length > 0 &&
              productArray
                .filter((value, index) => value.category == item)
                .map((value, index) => (
                  <SingleProductCart data={value} key={index} />
                ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collection;
