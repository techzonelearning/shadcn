import axios from "axios";
import { createContext, useEffect, useState } from "react";
let ProductProvider = createContext();

function ContextProvider({ children }) {
  let [userInfo, setUserInfo] = useState(() => {
    let getInfo = localStorage.getItem("userInfo");
    return getInfo ? JSON.parse(getInfo) : null;
  });
  let [category, setCategory] = useState([]);
  let [search, setSearch] = useState("");
  let [selectCategory, setSelectCategory] = useState("all");
  let [filterProduct, setFilterProduct] = useState([]);
  let [productArray, setProductArray] = useState([]);
  let [productObject, setProductObject] = useState({});
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  let [cartProduct, setCartProduct] = useState(() => {
    let getCart = localStorage.getItem("carts");
    return getCart ? JSON.parse(getCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(cartProduct));
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [cartProduct, userInfo]);

  async function fetchProduct(id = "") {
    try {
      setError(null);
      setLoading(true);
      let resposne = await axios.get(`${import.meta.env.VITE_BASE_URL}/${id}`);
      let resposneCategory = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/categories`
      );
      let data = resposne.data;
      setLoading(false);
      if (id) {
        setProductObject(data);
      } else {
        setProductArray(data);
        setCategory(resposneCategory.data);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (selectCategory === "all") {
      setFilterProduct(productArray);
    } else {
      let filter = productArray.filter(
        (item) => item.category === selectCategory
      );
      setFilterProduct(filter);
    }
    if (search) {
      let filter = productArray.filter((item) =>
        item.title.toLowerCase().trim().includes(search.toLowerCase().trim())
      );
      setFilterProduct(filter);
    }
  }, [selectCategory, productArray, search]);

  useEffect(() => {
    fetchProduct();
  }, []);

  let value = {
    productArray,
    setProductArray,
    setProductObject,
    productObject,
    loading,
    setLoading,
    fetchProduct,
    error,
    cartProduct,
    setCartProduct,
    category,
    selectCategory,
    setSelectCategory,
    filterProduct,
    search,
    setSearch,
    userInfo,
    setUserInfo,
  };

  return (
    <ProductProvider.Provider value={value}>
      {children}
    </ProductProvider.Provider>
  );
}
export { ContextProvider, ProductProvider };
