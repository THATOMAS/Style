import Homepage from "./pages/home/Homepage.jsx";
import Store from "./pages/store/Store.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div>
       <Router>
        <Routes>
          <Route path="/" exact element={<Homepage/>} />
          <Route path="/store"element={<Store/>} />
          <Route path="/checkout"element={<Checkout/>} />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
