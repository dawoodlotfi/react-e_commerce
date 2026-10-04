
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Home'
import Product from './comp2/Product'
import Catagery from './catagery/Catagery'
import SiginIn from './Sigiin in/SiginIn'
import Login from './Login/Login'
import { Toaster } from 'react-hot-toast';
import { TokenContextProvider } from './context/contextToken'
import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Cart from './Cart/Cart'
import SingleProd from './comp2/SingleProd';
import WishList from './wishList/WishList'
import CheckOut from './CheckOut/CheckOut'
import Orders from './AllOrders.tsx/Orders'
  


export const query = new QueryClient()
const rou =createBrowserRouter([{
  path:'/' , element:<Layout/>, children:[
    {    index:true , element:<Home />},
    {    path:'/products' , element:<Product />},
    {    path:'/catagery/:id' , element:<Catagery />},
    {    path:'/singup' , element:<SiginIn />},
    {    path:'/login' , element:<Login />},
    {    path:'/productdetalis/:id' , element:<SingleProd />},
    {    path:'/cart' , element:<Cart />},
    {    path:'/wishlist' , element:<WishList />},
    {    path:'/checkOut/:idcart' , element:<CheckOut />},
    {    path:'/allorders' , element:<Orders />},




  ]
},
]
)
function App() {



  return (<>
  <QueryClientProvider client={query} >
<TokenContextProvider>

<RouterProvider router={rou}/>
<Toaster />
</TokenContextProvider>
  </QueryClientProvider>
  </>
   
  )
}

export default App
