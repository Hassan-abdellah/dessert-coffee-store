import { Outlet } from "react-router";
import Cart from "../Finance/Cart";
import Navbar from "./Navbar";
import { Fragment } from "react";
const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="container flex lg:flex-row flex-col justify-between gap-6 mt-12">
        <section className="flex-1">
          <Outlet /> {/* This is where page content will render */}
        </section>
        <aside>
          <Cart />
        </aside>
      </main>
    </Fragment>
  );
};

export default Layout;
