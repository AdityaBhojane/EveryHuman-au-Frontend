import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Layout from "./pages/Layout/Layout";
import ProductDetails from "./pages/Product details/ProductDetails"
import OrderStatus from "./pages/Orders/OrderStatus";
import AdminDashboard from "./pages/Admin/AdminDashboard";

const App = () => {
  // console.log(import.meta.env.VITE_EHS_API);
  // console.log(FetchData())
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/OrderStatus" element={<OrderStatus />} />
          <Route path="/PlaceOrder" element={<PlaceOrder />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
