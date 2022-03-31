import { useEffect, useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import { list } from './api/product'
import ProductList from './components/ProductList'
import WebsiteLayout from './pages/layout/WebsiteLayout'
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
      </Routes>
    </div>
  )
}

export default App
