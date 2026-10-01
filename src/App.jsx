import { BrowserRouter as Router } from 'react-router';
import { UserContext } from './context/UserContext';
import { useState, useEffect } from 'react';
import { authAPI } from './services/api';
import { Toaster } from "sonner";
import ScrollToTop from './ScrollToTop';
import Loader from './components/ui/Loader';

import AppRoutes from './routes/index';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

useEffect(()=>{
  const fetchUser = async () =>{
    try {
      const res = await authAPI.me();
      setUser(res.data);
      console.log(res.data)
    } catch
    {
      setUser(null);
    }
    finally{
      setLoading(false);
    }
  } ;
  fetchUser();

},[])
if (loading) return (
<div className='bg-jci-blue flex flex-col justify-center items-center h-screen text-[20px] text-jci-white gap-3 font-poppins'>
  <Loader />
</div>
)

  return (
    <UserContext value={{user, setUser, loading}}>
      <Router>
        <Toaster position="bottom-right" richColors />       
        <ScrollToTop />
        <AppRoutes />
      </Router>
    </UserContext>
  )
}

export default App
