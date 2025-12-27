import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  let navigate = useNavigate();
  return (
    <>
      <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold">404</p>
          <h1 className="mt-4 text-5xl tracking-tight text-balance font-bold sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty  sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button onClick={() => navigate("/")}>Go To Home</Button>
            <Button variant={"link"} onClick={() => navigate("/")}>Contact support <span aria-hidden="true">&rarr;</span></Button>
          </div>
        </div>
      </main>
    </>
  );
}
