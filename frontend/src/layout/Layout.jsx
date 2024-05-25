import React, { useContext } from "react";

import Header from "../components/header/Header";
import footer from "../components/footer/Footer";
import Routers from "../routes/Routers";
import Footer from "../components/footer/Footer";
import { authContext } from "../context/authContext";



const Layout = () => {
  const { user, role, token } = useContext(authContext);
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      {role === "admin" ? "" : <Footer />}
      
    </>
  );
};

export default Layout;
