import "./App.css";
import Products from "./components/products/Products";
import NotFound from "./components/notFound/NotFound";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";

function App() {
  
  

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />

      
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Products />} />
          </Route>
    
          

          <Route exact path="*" element={<NotFound />} />
        
      </Routes>
    </div>
  );
}

export default App;
