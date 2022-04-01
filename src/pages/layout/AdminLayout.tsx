import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div className="container mx-auto min-h-screen flex flex-col border border-gray-300">
      {/*Header Section Starts Here*/}
      <header className="bg-black">
        <div className="flex justify-between">
          <div className="p-1 mx-5 inline-flex items-center">
            <h1 className="text-white p-2">Vina Watch</h1>
          </div>
          <div className="inline-block mx-5 p-2">
            <div id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2">
              Đức Dũng
              <svg className="ml-1 w-4 h-4 md:hover:text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
                </path>
              </svg>
            </div>
            {/* Dropdown menu */}
            <div id="dropdownNavbar" className="hidden z-2 w-32 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul className="text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownBottomButton">
                <div>
                  <li>
                    <a href="/" className="block py-2 pl-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Trang chủ</a>
                  </li>
                  <div className="py-1">
                    <a href="#" className="block py-2 pl-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/*/Header*/}
      <div className="flex flex-1">
        {/*Sidebar*/}
        <aside id="sidebar" className="p-0 bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block">
          <ul className="list-reset flex flex-col p-0">
            <li className=" w-full h-full py-3 px-2 border-b border-light-border bg-white hover:bg-orange-300 dark:hover:bg-gray-600">
              <a href="/admin/dashboard" className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                <i className="fas fa-tachometer-alt float-left m-2" />
                Dashboard
                <span><i className="fas fa-angle-right float-right" /></span>
              </a>
            </li>
            <li className="w-full h-full py-3 px-2 border-b border-light-border bg-white hover:bg-orange-300 dark:hover:bg-gray-600">
              <a href="/admin/product" className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                <i className="fab fa-wpforms float-left m-2" />
                Products
                <span><i className="fa fa-angle-right float-right" /></span>
              </a>
            </li>
            <li className="w-full h-full py-3 px-2 border-b border-light-border bg-white hover:bg-orange-300 dark:hover:bg-gray-600">
              <a href="/" className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                <i className="fa fa-user float-left m-2" />
                Users
                <span><i className="fa fa-angle-right float-right" /></span>
              </a>
            </li>
            <li className="w-full h-full py-3 px-2 border-b border-light-border bg-white hover:bg-orange-300 dark:hover:bg-gray-600">
              <a href="/" className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                <i className="fas fa-table float-left m-2" />
                Posts
                <span><i className="fa fa-angle-right float-right" /></span>
              </a>
            </li>
            <li className="w-full h-full py-3 px-2 border-b border-light-border bg-white hover:bg-orange-300 dark:hover:bg-gray-600">
              <a href="ui.html" className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                <i className="fab fa-uikit float-left mx-2" />
                Ui components
                <span><i className="fa fa-angle-right float-right" /></span>
              </a>
            </li>
          </ul>
        </aside>
        {/*/Sidebar*/}
        {/*Main*/}
        <main className="bg-white-300 flex-1 p-3 overflow-hidden">
          <div className="flex flex-col">
            <Outlet/>
          </div>
        </main>
      </div>
    </div>

  )
}

export default AdminLayout