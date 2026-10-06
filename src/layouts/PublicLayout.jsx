import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import Header from '../components/layout/Header'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { UserContext } from '../context/UserContext'

const PublicLayout = () => {
  const { user } = useContext(UserContext)

  if (user) {
    if (user.role === "ADMIN_LOCAL") {
      return <Navigate to="/admin/local/mon-organisation-locale" replace />
    }

    if (user.role === "ADMIN_E_COMMERCE") {
      return <Navigate to="/admin/e-commerce/boutique" replace />
    }

    return <Navigate to="/admin" replace />
  }

  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default PublicLayout