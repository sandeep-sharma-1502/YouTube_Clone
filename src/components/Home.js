import React from 'react'
import Header from './Header'
import Body from './Body'

import All from './All';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Watchvideo from './Watchvideo';

const approuter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
        {
            path:"/",
            element:<All/>
        },
        {
            path:"/watch",
            element:<Watchvideo/>
        }
    ]
  }
])

const Home = () => {
    return (
        <div className='flex flex-col relative'>
            <Header/>
            <RouterProvider router={approuter}/>
        </div>
    )
}

export default Home