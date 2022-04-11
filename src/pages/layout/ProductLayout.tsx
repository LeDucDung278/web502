import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

type Props = {}

const ProductLayout = (props: Props) => {
  return (
    <div className=''>
            <Header/>
            <main className='grid grid-cols-5 gap-6'>
                <Sidebar/>
                <div className='col-span-4'>
                    <Outlet/>
                </div>
            </main>
            <Footer />
        </div>
  )
}

export default ProductLayout