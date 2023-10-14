import Homepage from "./pages/home/Homepage.jsx";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Shop from "./pages/home/singlePages/shop/Shop.jsx";
import Furniture from "./pages/home/singlePages/furniture/Furniture.jsx";
import Checkout from "./pages/home/singlePages/checkout/Checkout.jsx";

function App() {
  return (
    <div>
       <Router>
        <Routes>
          <Route path="/" exact element={<Homepage/>}/>
          <Route path="/Furniture" element={<Furniture/>} />
          <Route path="/Shop" element={<Shop/>} />
          <Route path="/Checkout" element={<Checkout/>} />
          
        </Routes>
       </Router>
    </div>
  );
}

export default App;
