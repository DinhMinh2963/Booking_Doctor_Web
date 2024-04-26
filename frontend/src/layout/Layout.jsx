import React from "react";

import Header from "../components/header/Header";
import footer from "../components/footer/Footer";
import Routers from "../routes/Routers";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
