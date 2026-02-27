import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/Layouts/Layout";
import CoffeeProducts from "./pages/CoffeeProducts";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/coffee" element={<CoffeeProducts />} />
      </Route>
    </Routes>
  );
};

export default App;
