import { useEffect, useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import { list } from './api/product'
import ProductList from './components/ProductList'
import WebsiteLayout from './pages/layout/WebsiteLayout'
import ProductDetail from './pages/ProductDetail'
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

        
      </Routes>
    </div>
  )
}

export default App
