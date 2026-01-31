import { Outlet } from "react-router";
import Cart from "../Finance/Cart";

const Layout = () => {
  return (
    <main className="container flex lg:flex-row flex-col justify-between gap-6 mt-12">
      <section className="flex-1">
        <Outlet /> {/* This is where page content will render */}
      </section>
      <aside>
        <Cart />
      </aside>
    </main>
  );
};

export default Layout;
