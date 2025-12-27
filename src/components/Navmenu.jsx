import React, { useContext } from "react";
import { navigate_route, seperate_route } from "../index";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, ShoppingCart } from "lucide-react";
import { DropdownMenuDemo } from "./DropdownMenuDemo";
import { ProductProvider } from "@/context/ContextProvider";

const Navmenu = () => {
  let { cartProduct, search, setSearch } =
    useContext(ProductProvider);
  let navigate = useNavigate();
  return (
    <div className="flex items-center justify-between px-20 h-20 border-b sticky top-0 bg-white">
      <Link to="/">
        <h1 className="text-4xl font-bold">
          SHADCN <b className="font-black underline text-red-600">UI</b>
        </h1>
      </Link>
      <div className="text-lg flex items-center gap-4 font-medium">
        {navigate_route.map(({ name, path }, index) => (
          <NavLink
            to={path}
            key={index}
            className={({ isActive }) =>
              isActive ? "text-red-600 underline" : "text-black"
            }
          >
            {name}
          </NavLink>
        ))}
      </div>

      <div className="flex gap-6">
        <form className="flex items-center gap-2">
          <Input
            type={"text"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search.."
            className={"w-80"}
          />
          <Button variant="outline" size="icon">
            <Search />
          </Button>
        </form>
        <Button
          onClick={() => navigate(seperate_route.cart)}
          variant="outline"
          size="icon"
          className={"relative"}
        >
          <p className="absolute -top-2 -right-1 bg-red-600 px-1.5 text-white py-0.5 text-sm rounded-full">
            {cartProduct?.length}
          </p>
          <ShoppingCart />
        </Button>
         <DropdownMenuDemo /> 
       
      </div>
    </div>
  );
};

export default Navmenu;
