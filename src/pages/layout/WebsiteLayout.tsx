import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Sidebar from '../../components/Sidebar'

type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div className='container mx-auto'>
            <Header />
            <Nav />
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

export default WebsiteLayout