import { BrowserRouter,
  Route,
  Routes,
 } from "react-router-dom";


import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductId from "./pages/ProductId";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:slug" element={<Product />} />
      <Route path="/product/:slug/:id" element={<ProductId />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
