import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './screens/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup';
import Admintable from './admin/Admintable'

import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
import Addmenu from './admin/Addmenu';

function App() {
  return (
    <CartProvider>
    <Router>
         
      <div>
        <Routes>
          
   
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/myorders" element={<MyOrder />} />
          <Route exact path="/admin" element={< Admintable/>} />
          <Route exact path="/addmenu" element={< Addmenu/>} />

          

        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}
export default App;

