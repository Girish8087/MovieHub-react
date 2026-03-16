import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact, { getFormData } from './components/Contact'
import AppLayout from './components/Layouts/AppLayout'
import {Error} from "./components/Error"
import Movies from './components/Movies'
import { GetApiData } from './components/API/GetApiData'
import MovieDetails from './components/MovieDetails'
import { MovieDetailAPI } from './components/API/MovieDetailAPI'
import { Toaster } from 'react-hot-toast'

const App = () => {
    
    const router = createBrowserRouter([
        {
            path: '/',
            element: <AppLayout/>,
            errorElement: <Error />,
            children: [
                {
            path: '/',
            element: <Home />,
            loader: GetApiData
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/contact',
            element: <Contact />,
            action: getFormData
        },
        {
            path:'/movies',
            element: <Movies/>,
            loader: GetApiData
        },
        {
            path:'/movies/:movieId',
            element: <MovieDetails/>,
            loader: MovieDetailAPI
        }
            ]
        }
    ])

  return <>
    <Toaster position="top-right" />
    <RouterProvider router={router} />
  </>
}

export default App
