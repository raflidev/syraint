import { BrowserRouter,
  Route,
  Routes,
 } from "react-router-dom";


import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:slug" element={<Product />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
