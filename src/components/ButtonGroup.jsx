import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { ProductProvider } from "@/context/ContextProvider";
import { useContext } from "react";

export function ButtonGroups() {
  let { category, setSelectCategory } = useContext(ProductProvider);
  return (
    <div className="flex flex-col items-start gap-8 mt-6">
      <ButtonGroup>
        <Button onClick={()=>setSelectCategory("all")} variant="outline" className={"capitalize"}>
          All
        </Button>
        {category.map((item, index) => (
          <Button onClick={()=>setSelectCategory(item)} key={index} variant="outline" className={"capitalize"}>
            {item}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
