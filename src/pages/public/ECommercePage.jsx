import React from 'react'
import StoreImg from '../../images/store.webp';
import { useRef, useCallback } from 'react';
import TeeImg from '../../images/E-commerce/tee.png';
import CapeImg from '../../images/E-commerce/casquette.png';
import SacImg from '../../images/E-commerce/sac.png';
import MugImg from '../../images/E-commerce/mug.png';
import SenateurImg from '../../images/E-commerce/pins.png';
import PoloImg from '../../images/E-commerce/polo.png';
import { itemAPI } from './../../services/api';
import { useState, useEffect } from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from '@/components/ui/Reveal';
import SEO from "../../components/common/SEO";


const shopItems = [
    {
        id: 1,
        name: "Tee-Shirt JCI Madagascar",
        image: TeeImg,
        description: "Tee-Shirt blanc JCI Madagascar",
    },
    {
        id: 2,
        name: "Casquette JCI Madagascar",
        image: CapeImg,
        description: "Casquette officielle JCI Madagascar",
    },
    {
        id: 3,
        name: "Sac JCI Madagascar",
        image: SacImg,
        description: "Sac JCI Madagascar",
    },
    {
        id: 4,
        name: "Mug JCI Madagascar",
        image: MugImg,
        description: "Mug officiel JCI Madagascar",
    },
    {
        id: 5,
        name: "Pin's JCI Madagascar",
        image: SenateurImg,
        description: "Pin's JCI Madagascar",
    },
    {
        id: 6,
        name: "Polo JCI Madagascar",
        image: PoloImg,
        description: "Polo officiel JCI Madagascar",
    },
];


const ECommercePage = () => {
    const carouselRefMobile = useRef(null);
    const carouselRefDesktop = useRef(null);
    const indexRef = useRef(0);
    const [paused, setPaused] = useState(false);

    const goTo = useCallback((index) => {
        const el = carouselRefDesktop.current;
        if (!el) return;
        const total = shopItems.length;
        const next = (index + total) % total; // boucle dans les deux sens
        indexRef.current = next;
        el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
    }, [shopItems.length]);

    // Auto-play toutes les 5 secondes
    useEffect(() => {
        if (paused || shopItems.length <= 1) return;
        const timer = setInterval(() => {
            goTo(indexRef.current + 1);
        }, 5000);
        return () => clearInterval(timer);
    }, [paused, goTo, shopItems.length]);

    // Garde l'index synchronisé si l'utilisateur swipe manuellement
    const handleScroll = () => {
        const el = carouselRefDesktop.current;
        if (!el) return;
        indexRef.current = Math.round(el.scrollLeft / el.clientWidth);
    };

    const scrollByItemMobile = (direction) => {
        const el = carouselRefMobile.current;
        if (!el) return;
        el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
        };
    const scrollByItemDesktop = (direction) => {
        const el = carouselRefDesktop.current;
        if (!el) return;
        el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
        };
    const [itemsList, setItemsList] = useState([]);
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await itemAPI.getAll();
                setItemsList(response.data);
            } catch (error) {
                console.error("Failed to fetch items:", error);
            }
        };
        fetchItems();
    }, []);
  return (
    <>
    <SEO
        title="Boutique Officielle| JCI Madagascar"
        description="Boutique officielle de la JCI Madagascar : polos, casquettes, pin's, mugs et accessoires aux couleurs de l'organisation."
        canonical="https://jcimadagascar.org/boutique"
        indexable={true}
    />
    <div className="min-h-screen w-full max-w-full overflow-x-hidden font-poppins flex flex-col items-start pt-5 md:pt-15 pb-10 px-2 md:px-6   bg-[#f1f1f1] gap-5 md:gap-10">
        <Reveal from="bottom" duration={1000} threshold={0.05}>
        <div className="group flex flex-col md:flex-row gap-10 w-full min-w-0 ">
            <div className="md:flex-4 flex-1  h-full rounded-2xl md:rounded-4xl overflow-hidden ">
                <img
                    src={StoreImg}
                    alt="E-Commerce"
                    className="w-full h-fit md:h-130 object-contain  md:object-cover aspect-[1920/1080]"
                    loading="eager"
                />
            </div>

            <div className="md:flex flex-2 hidden min-w-0 bg-jci-white h-full rounded-4xl overflow-hidden py-5 px-5">
                <div className="relative w-full h-full">

                    {/* Bouton précédent */}
                    <button
                        type="button"
                        onClick={() => scrollByItemDesktop(-1)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                                w-10 h-10 rounded-full bg-jci-black/70 text-jci-white
                                flex items-center justify-center shadow-lg cursor-pointer hover:bg-jci-black transition-all duration-300"
                    >
                        &lt;
                    </button>

                    {/* Carousel */}
                   <div
                    ref={carouselRefDesktop}
                    onScroll={handleScroll}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth
                            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {shopItems.map((item) => (
                        <div
                            key={item.id}
                            className="shrink-0 basis-full w-full snap-start snap-always p-1"
                        >
                            <div className="h-full shadow-lg p-5 rounded-2xl bg-jci-white flex flex-col gap-2">
                                <div className="rounded-xl bg-gray-200 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-90 object-contain hover:scale-105 transition-all duration-300"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="text-lg font-semibold text-center flex flex-col gap-0">
                                    <h1>{item.name}</h1>
                                    <span className="text-gray-500 font-bold text-[10px]">
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                    {/* Bouton suivant */}
                    <button
                        type="button"
                        onClick={() => scrollByItemDesktop(1)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                                w-10 h-10 rounded-full bg-jci-black/70 text-jci-white
                                flex items-center justify-center shadow-lg cursor-pointer hover:bg-jci-black transition-all duration-300"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div> 
        </Reveal>
        {/*
            Additional products can be added here in a similar structure as above.
        */}
        <div className='flex flex-col items-center gap-10 rounded-4xl bg-jci-white p-5 w-full'>
            
            <Reveal from="bottom" duration={1000} threshold={0.05}>
                <div className=" self-center flex flex-col items-center">
                <h1 className='  text-jci-black font-poppins font-bold md:text-[40px] text-[20px] uppercase self-center text-center'>Decouvrez nos produits !</h1>
                <p className='text-gray-500 text-center text-[12px]'>*En attente de la finalisation de notre boutique</p>
                <div className='bg-gray-200  text-jci-black flex flex-row items-center gap-3 px-4 py-2 lg:text-[20px] md:text-[16px] text-[12px] rounded-full mt-4 group'>
                    Passez votre commande ici
                    <a href="https://tally.so/r/Y5NlV0" className=" rounded-full bg-jci-black text-jci-white p-3 flex flex-row items-center gap-2 group-hover:scale-105 group-hover:-translate-y-0.5 cursor-pointer hover:bg-jci-blue transition-all duration-300">
                    <FiArrowUpRight size={16} />
                    </a>
                </div>
                </div>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full min-w-0">
                {itemsList?.map((item) => (
                    <Reveal from="bottom" duration={1000} threshold={0.05}>
                    <div key={item.id} className='shadow-lg p-2 md:p-5 rounded-2xl shadow-gray-300 bg-jci-white flex flex-col gap-2 '>
                        <div className='rounded-xl bg-gray-200'>
                            <img src={`${import.meta.env.VITE_BACKEND_APP_API_URL_IMAGE}${item.imgUrl}`}
                            alt={item.name} className="w-full md:h-90 h-40 object-contain hover:scale-105  transition-transform duration-300" loading='eager' />
                        </div>
                        <div className=' font-semibold text-center flex flex-col gap-0'>
                            <h1 className='text-center text-[12px] md:text-[16px]'>{item.name}</h1>
                            <span className='text-gray-500 font-bold text-[10px] '>{item.description}</span>
                            <span className='text-gray-500 font-bold text-[10px]'>Prix: {Number(item.price)
                                .toLocaleString('fr-FR')
                                .replace(/\u202f/g, '.')} Ar
                            </span>
                        </div>
                    </div>
                    </Reveal>
                ))}
            </div> 
            <div className='md:hidden flex min-w-0 bg-jci-white h-full rounded-4xl overflow-hidden p-0 w-full'>

            
            
            </div>
        </div>
    </div>
    </>
  )
}

export default ECommercePage