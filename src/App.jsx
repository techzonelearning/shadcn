import React, { useEffect } from "react";
import Router from "./routes/Router";
import Navmenu from "./components/Navmenu";
import { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase";

const App = () => {
  let location = useLocation();
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("/form");
      }
    });
  }, []);

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      {location.pathname == "/form" ? null : <Navmenu />}

      <Router />
    </div>
  );
};

export default App;
