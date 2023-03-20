import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import NavBar from './components/NavBar'
import Home from './vistas/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './vistas/Cart';
import Login from './vistas/Login';
import Register from './vistas/Register';
import Principal from './vistas/Principal';
import Ordersscreen from './vistas/Order';
function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/cart' exact Component={Cart} />
          <Route path='/login' exact Component={Login} />
          <Route path='/register' exact Component={Register} />
          <Route path='/principal' exact Component={Principal} />
          <Route path='/order' exact Component={Ordersscreen} />\
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;