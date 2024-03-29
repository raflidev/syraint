import { BrowserRouter,
  Navigate,
  Route,
  Routes,
 } from "react-router-dom";


import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import ProductId from "./pages/ProductId";
import Service from "./pages/Service";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:slug" element={<Product />} />
      <Route path="/product/" element={ <Navigate to="/product/agriculture" replace /> } />
      <Route path="/product/:slug/:id" element={<ProductId />} />
      <Route path="/service/:slug" element={ <Service /> } />
      <Route path="/service/" element={ <Navigate to="/service/air-feight" replace /> } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
