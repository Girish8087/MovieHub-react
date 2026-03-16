import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigate, useNavigation } from 'react-router'
import LoadingScreen from '../LoadingScreen'

const AppLayout = () => {

  const navigation = useNavigation()
  if(navigation.state === "loading") return <LoadingScreen/>
  
  return (
    <div className="flex flex-col min-h-screen">
  <Header />
  <main className="flex-grow md:px-20 2xl:px-32 py-10 bg-black">
    <Outlet/>
  </main>
  <Footer />
</div>
  )
}

export default AppLayout
