import { ButtonGroups } from "@/components/ButtonGroup";
import SingleProductCart from "@/components/SingleProductCart";
import { Button } from "@/components/ui/button";
import { ProductProvider } from "@/context/ContextProvider";
import { Loader2, X } from "lucide-react";
import React, { useContext } from "react";
import SEO from "@/components/SEO";

const Home = () => {
  let { error, filterProduct, loading, setSearch } =
    useContext(ProductProvider);

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
    <div className="px-20">
      <SEO
        title="Home"
        description="Browse our wide collection of premium products. Best prices and quality guaranteed."
        keywords="shopping, ecommerce, buy online, best products"
      />
      <ButtonGroups />
      <div className="flex gap-4 justify-center flex-wrap py-6">
        {filterProduct.length > 0 ? (
          filterProduct.map((value, index) => (
            <SingleProductCart data={value} key={index} />
          ))
        ) : (
          <div className="flex items-center justify-center h-[60vh] flex-col gap-3">
            <h1 className="text-4xl font-bold">Product Not Found</h1>
            <Button
              className="gap-2"
              variant="destructive"
              onClick={() => setSearch("")}
            >
              <X size={"4"} />
              Button
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
