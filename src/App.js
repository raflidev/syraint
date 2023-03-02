import { BrowserRouter,
  Route,
  Routes,
 } from "react-router-dom";


import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductId from "./pages/ProductId";
import Service from "./pages/Service";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:slug" element={<Product />} />
      <Route path="/product/:slug/:id" element={<ProductId />} />
      <Route path="/service/:slug" element={<Service />} />
      <Route path="*" element={<Service />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
