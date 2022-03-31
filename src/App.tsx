import { useEffect, useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import { list } from './api/product'
import ProductList from './components/ProductList'
import Dashboard from './pages/Dashboard'
import AdminLayout from './pages/layout/AdminLayout'
import WebsiteLayout from './pages/layout/WebsiteLayout'
import ProductDetail from './pages/ProductDetail'
import ProductManager from './components/ProductManager'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { ProductType } from './type/Product'

function App() {

  const [products, setProducts] = useState<ProductType[]>([])
    useEffect(() =>{
      const getProducts = async () => {
        const { data } = await list();
        console.log(data);
        
        setProducts(data)
      }
      getProducts()
    },[])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<ProductList products={products}/>}/>
        </Route>
        
        <Route path='product/:id' element={<ProductDetail/>}/>

        <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='product' element={<ProductManager products={products}/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
