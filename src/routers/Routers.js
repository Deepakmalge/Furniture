import { Routes, Route } from 'react-router-dom'


import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Singup from '../pages/Singup'
import ProductDetails from '../pages/ProductDetails'


const Routers = () => {
    return <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='singup' element={<Singup/>}/>
        <Route path='productDetails' element={<ProductDetails/>}/>
        </Routes>
};

export default Routers;