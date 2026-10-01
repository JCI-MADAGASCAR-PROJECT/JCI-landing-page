import React, { useContext } from 'react'
import { Navigate ,Outlet} from 'react-router'
import Footer from '../components/layout/Footer'
import { UserContext } from '../context/UserContext';
import Loader from '@/components/ui/Loader';
import ButtonFull from '@/components/ui/ButtonFull';
import {  House } from 'lucide-react';
import { Link } from 'react-router'


const Header = () => {

  return (
    <div className='px-3 py-3 gap-2 border border-gray-600/20 bg-jci-black/40 backdrop-blur-xl rounded-xl lg:flex flex-row fixed absolute top-4 right-10 z-50 font-semibold'>
        <Link to="/" 
            className={` text-jci-white rounded font-bold text-[10px]  flex flex-row gap-2 items-center w-fit
            hover:bg-transparent   hover:text-white`} title="Accueuil">
            <House size={20} />
        </Link>
    </div>
  )
}
const Ecommercelayout = () => {
    const {user, loading} = useContext(UserContext);
    if (loading) {
      return (
          <div className='bg-jci-blue flex flex-col justify-center items-center h-screen text-[20px] text-jci-white gap-3 font-poppins'>
              <Loader />
          </div>
        )
    }
    if(user){
      if(user.role == "ADMIN_LOCAL"){
        return <Navigate to ="/admin/local/mon-organisation-locale" replace/>
      }
      else if(user.role == "ADMIN_E_COMMERCE"){
        return <Navigate to ="/admin/e-commerce/boutique" replace/>
      }
      else {
        return <Navigate to ="/admin" replace/>
      }
    }

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Ecommercelayout