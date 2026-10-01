import { NavLink, useLocation } from 'react-router';
import ButtonVoid from "../ui/ButtonVoid";
import SocialIconsRow from "../ui/SocialIconsRow";
import { LogIn, Menu, X } from "lucide-react";
import { useState } from "react";
import ButtonFull from './../ui/ButtonFull';
import { ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import France from "../../images/flags/Flag_of_France.svg";
import Us from "../../images/flags/Flag_of_the_United_States.svg";

import JCILogo from "../../images/JCI/JCI Madagascar/JCI_Madagascar_background_marine_blue_name_blue_logo-removebg-preview.webp";
import BuildLegacyLogo from "../../images/Charte Build Legacy Together/BLT Blanc/BLT-07.webp";

const navActiveClass = ({ isActive }) => isActive ? "text-jci-yellow scale-105 " : "text-jci-white hover:scale-105 transition-transform duration-300 hover:text-jci-yellow";


import { useRef, useEffect } from 'react';

const languages = [
    { code: 'fr', flag: France, label: 'Français' },
    { code: 'en', flag: Us, label: 'English' },
];

function LanguageSelect({ flag, onChange }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const current = languages.find(l => l.code === flag);

    // Ferme le menu au clic extérieur
    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                onClick={() => setOpen(o => !o)}
                className="flex items-center gap-1 outline-none"
            >
                <img src={current.flag} alt={current.label} className="h-4 w-6" />
                <span className="text-[10px] text-jci-white">▾</span>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 flex flex-col gap-1 w-13 rounded-xl border border-gray-600/20 bg-jci-black/40 backdrop-blur p-2 z-50">
                    {languages.map(l => (
                        <button
                            key={l.code}
                            type="button"
                            onClick={() => {
                                onChange({ target: { value: l.code } });
                                setOpen(false);
                            }}
                            className="flex items-center gap-2 rounded-md px-1 py-1 hover:bg-white/10"
                        >
                            <img src={l.flag} alt={l.label} className="h-4 w-8 object-cover" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

const Navbar = () => {
  const [flag, setFlag] = useState(localStorage.getItem("language") || "fr");

   const handleLanguageChange = (e) => {
        const selectedFlag = e.target.value;
        setFlag(selectedFlag);
        i18n.changeLanguage(selectedFlag === "fr" ? "fr" : "en");
        localStorage.setItem("language", selectedFlag === "fr" ? "fr" : "en");
    };
  const [isOpen, setIsOpen] = useState(false)

  const location = useLocation()
  const { t } = useTranslation()

  const isHomePage = location.pathname === "/"
  
    const navLinks = [
        {
        to: "/",
        label: isHomePage ? t("navbar.home") : "Accueil",
        end: true
        },
        {
        to: "/jci-madagascar",
        label: isHomePage ? t("navbar.jciMadagascar") : "JCI Madagascar"
        },
        {
        to: "/organisations-locales",
        label: isHomePage ? t("navbar.localOrganizations") : "Organisations Locales"
        },
        {
        to: "/blog",
        label: isHomePage ? t("navbar.blog") : "Blog"
        },
        {
        to: "/partenaires",
        label: isHomePage ? t("navbar.partners") : "Partenaires"
        },
        {
        to: "/contact",
        label: isHomePage ? t("navbar.contact") : "Contact"
        },
    ]

  return (
    <>
    <div className='hidden lg:flex fixed top-4 left-8 h-screen w-fit  px-1  rounded flex-col gap-2 z-50 justify-start '> 
        <NavLink to="/" className="bg-jci-black/50 backdrop-blur rounded-xl py-1 px-7 flex justify-center items-center border border-gray-600/20"> 
            <img src={JCILogo} alt="JCI Madagascar Logo" className='h-10 w-auto hover:scale-105 transition-transform duration-300'/> 
        </NavLink>
        <div className='border border-gray-600/20 flex flex-col h-screen bg-jci-black/50 backdrop-blur rounded-xl py-7 px-2  mb-5 text-jci-white text-[12px] font-roboto font-bold items-center justify-between '> 
            
            <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                    <NavLink key={link.to} to={link.to} className={navActiveClass} end={link.end} onClick={() => console.log("CLICK", performance.now())}>{link.label}</NavLink>
                ))}
            </div>
            <div className="flex flex-col gap-4 items-center">
                <SocialIconsRow />
                <ButtonVoid
                    TextColor="text-jci-yellow"
                    SizeText="12px"
                    path="/blog"
                >{t("navbar.project")}</ButtonVoid>
            </div>
        </div> 
    </div>

    {/* Navbar mobile : barre du haut avec logo + bouton menu, visible en dessous de lg */}
    <div className={`lg:hidden fixed top-4 left-4 right-4 z-50 flex items-center justify-between rounded-xl px-4 py-2 border  ${isOpen ? "bg-transparent border-transparent" : "bg-jci-black/40 border-gray-600/20 backdrop-blur"}  `}>
       <div className="flex flex-row gap-1">
            <img src={JCILogo} alt="JCI Madagascar Logo" className='h-8 w-auto'/>
            <img src={BuildLegacyLogo} alt="Build Legacy Together Logo" className='h-8 w-auto ml-2'/>
       </div>
        <div className="flex flex-row gap-1">
            {location.pathname == "/" && (
                <LanguageSelect flag={flag} onChange={handleLanguageChange} />
            )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                className="text-jci-white transition-transform duration-200 active:scale-90"
            >
                <span
                    className={`block transition-transform duration-300 ${
                        isOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
                    }`}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </span>
            </button>
        </div>
        
    </div>

    {/* Menu mobile plein écran, affiché quand isOpen est vrai */}
    {isOpen && (
        <div className='lg:hidden fixed inset-0 z-40 bg-jci-black/40 backdrop-blur flex flex-col items-center justify-center gap-8 text-jci-white text-[16px] font-roboto font-bold'>
            <div className="flex flex-col items-start gap-6">
                {navLinks.map((link) => (
                    <NavLink key={link.to} to={link.to} className={navActiveClass} end={link.end} onClick={() => setIsOpen(false)}>{link.label}</NavLink>
                ))}
                <ButtonFull path="/boutique" TextColorHover="hover:text-white ">Boutique en ligne <ShoppingCart size={20} /></ButtonFull>
                <ButtonVoid
                    TextColor="text-jci-yellow"
                    SizeText="12px"
                >
                    {t("navbar.project")} <LogIn size={20}/>
                </ButtonVoid>
                {/* <SocialIconsRow /> */}
            </div>
           
        </div>
    )}
    </>
  )
}

export default Navbar