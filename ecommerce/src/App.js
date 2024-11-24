import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Signup } from './components/Signup';
import { Home } from './components/Home';
import { Item } from './components/Item';
import { ViewProduct } from './components/ViewProduct';
import { CartItems } from './components/CartItems';

function App() {
  return (
    <div className="App">

<BrowserRouter>

<Routes>



<Route path='/' element={<Login/>} ></Route>
<Route path='/signup' element={<Signup/>} ></Route>
<Route path='/Home' element={<Home/>} ></Route>
<Route path='/Item' element={<Item/>} ></Route>
<Route path='/ViewProduct' element={<ViewProduct/>} ></Route>
<Route path='/CartItem' element={<CartItems/>} ></Route>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
