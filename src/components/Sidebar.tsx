import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <aside className="z-20 hidden w-full bg-white dark:bg-gray-800 md:block flex-shrink-0">
            <div className="pb-4 text-gray-500 dark:text-gray-400 bg-gray-800 mt-5">
                <ul className="bg-gray-200">
                    <li className="relative px-6 py-3">
                        <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="">
                            <span className="ml-4">Danh Mục</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className="relative px-6 py-3">
                        <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="">
                            <span className="ml-4">Danh Mục 1</span>
                        </a>
                    </li>
                    <li className="relative px-6 py-3">
                        <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="">
                            <span className="ml-4">Danh Mục 2</span>
                        </a>
                    </li>
                    <li className="relative px-6 py-3">
                        <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="">
                            <span className="ml-4">Danh Mục 3</span>
                        </a>
                    </li>
                    <li className="relative px-6 py-3">
                        <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="">
                            <span className="ml-4">Danh Mục 4</span>
                        </a>
                    </li>
                    <li className="relative px-6 py-3">
                        <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="">
                            <span className="ml-4">Danh Mục 5</span>
                        </a>
                    </li>
                    <li className="relative px-6 py-3">
                        <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="">
                            <span className="ml-4">Danh Mục 6</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside> 
    )
}

export default Sidebar