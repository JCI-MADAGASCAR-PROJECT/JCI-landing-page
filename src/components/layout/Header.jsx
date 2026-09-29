import { useState } from 'react'
import ButtonFull from './../ui/ButtonFull';
import { ShoppingCart } from 'lucide-react';
import France from "../../images/flags/Flag_of_France.svg";
import Us from "../../images/flags/Flag_of_the_United_States.svg";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";

const Header = () => {
    const location = useLocation();
    const { i18n } = useTranslation();
    const [flag, setFlag] = useState(localStorage.getItem("language") || "fr");
    
    const handleLanguageChange = (e) => {
        const selectedFlag = e.target.value;
        setFlag(selectedFlag);
        i18n.changeLanguage(selectedFlag === "fr" ? "fr" : "en");
        localStorage.setItem("language", selectedFlag === "fr" ? "fr" : "en");
    };

  return (
    <div className='hidden  px-3 py-3 gap-2 border border-gray-600/20 bg-jci-black/40 backdrop-blur-xl rounded-xl lg:flex flex-row fixed absolute top-4 right-10 z-50 font-semibold'>
        {location.pathname == "/" && (
        <div className='flex flex-row items-center gap-1'>
            <img src={flag == "fr"? France : Us}  alt="Country Flag" className="h-4 w-6"/>
            <select className='text-[10px] text-jci-white outline-none'
                value={flag}
                onChange={handleLanguageChange}
            >
                <option className='bg-jci-black text-jci-white`' value="fr" >FRANÇAIS</option>
                <option className='bg-jci-black text-jci-white`' value="en" >US</option>
            </select>
        </div>
        )}
        <ButtonFull path="/boutique" TextColorHover="hover:text-white">Boutique en ligne <ShoppingCart size={20} /></ButtonFull>
    </div>
  )
}

export default Header