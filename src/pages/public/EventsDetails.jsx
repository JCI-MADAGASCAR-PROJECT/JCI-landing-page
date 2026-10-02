import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { eventAPI, eventFileAPI, eventImageAPI } from '../../services/api';
import { IoClose, IoDocumentText } from "react-icons/io5";
import LabelTraitSimple from '@/components/ui/LabelTraitSimple'
import Reveal from "../../components/ui/Reveal"
import { createPortal } from 'react-dom';


const EventsDetails = () => {
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState(null);
  const [eventFiles, setEventFiles] = useState([]);
  const [eventImages, setEventImages] = useState([]);
  const date = eventDetails ? new Date(eventDetails.date) : null;
  const day = date ? date.getDate() : '';
  const month = date ? date.toLocaleString('default', { month: 'short' }) : '';
  const year = date ? date.getFullYear() : '';
  const [selectedImage, setSelectedImage] = useState(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleCarouselScroll = (e) => {
    const el = e.currentTarget;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;

    if (!hasScrolled && el.scrollLeft > 10) setHasScrolled(true);

    const index = Math.round((el.scrollLeft / maxScroll) * (eventImages.length - 1));
    setActiveIndex(index);
  };

  const getFileExtension = (url) => {
    if (!url) return 'FICHIER';
    const clean = url.split('?')[0];
    const ext = clean.split('.').pop();
    return ext ? ext.toUpperCase() : 'FICHIER';
  };

  useEffect(() => {
    // Lock background scroll while the lightbox is open
    document.body.style.overflow = selectedImage ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedImage]);

  useEffect(() => {
    // Fetch event details by eventId here
    const fetchEventDetails = async () => {
        try {
            const response = await eventAPI.getById(eventId);
            setEventDetails(response.data);
        } catch (error) {
            console.error("Error fetching event details:", error);
        }
    };
    fetchEventDetails();
}, [eventId]);

  useEffect(() => {
    const fetchEventFiles = async () => {
        if (!eventId) return;

            try {
            const response = await eventFileAPI.getById(eventId);
            setEventFiles(response.data);
            } catch (error) {
            console.error("Error fetching event files:", error);
            }
        };
        const fetchEventImages = async () => {
        try {
            const response = await eventImageAPI.getAllById(eventId);
            setEventImages(response.data);
        } catch (error) {
            console.error(error);
        }
        };

        fetchEventFiles();
        fetchEventImages(); 
    }, [eventId]);

  return (
    <div className='flex flex-col w-full min-h-screen bg-jci-black'>
      
      {/* Actualités & évènements */}
      <section className='relative bg-jci-blue px-2 md:px-8 lg:px-1 pt-20 lg:py-0 flex flex-col items-center gap-10 lg:pl-70   '>
        {/*Fonds blanc */}
        <div className='flex flex-col items-start py-3 md:py-15 px-2 lg:px-7 gap-4 lg:gap-1 text-left lg:text-center bg-jci-white  w-full h-auto min-h-screen mr-0 md:-mr-2 '>          
          <Reveal from="left" duration={1000} threshold={0.05}>
            <div className="flex flex-col items-start">
              <LabelTraitSimple Label="Actualités JCI" H1Text="NE MANQUEZ RIEN" LabelColor="text-jci-blue" H1Color="text-jci-black" H1TextSize="lg:text-2xl md:text-[16px] text-[14px]" />
              <p className='text-[12px] mt-0 font-poppins font-medium  text-jci-black/80'>Retrouvez les temps forts de la JCI et les prochains rendez-vous à ne pas manquer.</p>
            </div>
          </Reveal>
          <div
            className="group flex flex-col gap-2 items-start w-full md:h-[50vh] h-[20vh]  p-5 bg-cover bg-center uppercase "
            style={{
                backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0), #111111), url(${`${import.meta.env.VITE_BACKEND_APP_API_URL_IMAGE}${eventDetails?.imgUrl}`})`
            }}
          > 
            <Reveal from="left" duration={1000} threshold={0.05}>
              <p className='  p-1 bg-jci-yellow w-fit text-jci-black font-bold text-[10px] md:text-[12px] lg:text-[15px] '>{eventDetails?.type}</p>
            </Reveal>
            <Reveal from="left" duration={1000} threshold={0.05}>
              <p className=' bg-jci-blue text-white px-1.5 py-1 md:px-2 font-roboto font-bold flex flex-row justify-center items-center gap-1 text-[10px] md:text-[12px] lg:text-[15px] '>
                <span className='text-[10px] md:text-[12px] lg:text-[15px]  font-bold'>{day}</span> {month} {year}
              </p>
            </Reveal>
            <Reveal from="left" duration={1000} threshold={0.05}>
              <h2 className=' text-[10px] md:text-[12px] lg:text-2xl   font-poppins font-semibold text-white '>{eventDetails?.title} </h2>
            </Reveal>


          </div>
          <Reveal from="left" duration={1000} threshold={0.05}>
          <div className='flex flex-col gap-2 items-start lg:mt-10 mt-2 w-full' >
              <h1 className='text-jci-black font-bold font-poppins lg:text-[20px] md:text-[18px] text-[16px]'>Ce qu'il faut savoir</h1>
              <div className='flex flex-row gap-4 text-justify'>
                <div className='w-1 shrink-0 bg-jci-yellow' />
                <p className='text-jci-black/80 text-[12px] lg:text-[14px]  leading-relaxed font-poppins text-left '>{eventDetails?.content}</p>
              </div>
          </div>
          </Reveal>
          <Reveal from="left" duration={1000} threshold={0.05}>
          <div className="flex flex-col gap-3 items-start lg:mt-10 mt-6 w-full">
            <h1 className='text-jci-black font-bold font-poppins lg:text-[20px] md:text-[18px] text-[16px]'>Ressources de l'événement</h1>

            {eventFiles && eventFiles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                {eventFiles.map((file) => (
                  <a
                    key={file.id}
                    href={`${import.meta.env.VITE_BACKEND_APP_API_URL_IMAGE}${file.fileUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-3 pl-4 pr-3 py-3 bg-[#F9F9F9] border-l-4 border-jci-blue hover:border-jci-yellow transition-colors duration-300 text-left"
                  >
                    <IoDocumentText size={22} className="shrink-0 text-jci-blue group-hover:text-jci-yellow transition-colors duration-300" />
                    <div className="flex flex-col min-w-0 gap-0.5">
                      {/* Remplace `file.name` par le champ réel de ton API (ex: file.fileName) si différent */}
                      <p className="text-[13px] font-semibold text-jci-black truncate">
                        Document {eventDetails?.title}
                      </p>
                      <p className="text-[10px] font-roboto font-bold tracking-wide text-jci-black/40">
                        {getFileExtension(file.fileUrl)}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-[13px] text-jci-black/50 italic">Aucun fichier fourni pour cet événement.</p>
            )}
          </div>
          </Reveal>
          <Reveal from="left" duration={1000} threshold={0.05}>
          <div className="flex flex-col gap-3 items-start lg:mt-10 mt-6 w-full ">
            <div className="flex flex-row items-baseline gap-2">
              <h1 className='text-jci-black font-bold font-poppins lg:text-[20px] md:text-[18px] text-[16px]'>Retour en images</h1>
              {eventImages && eventImages.length > 0 && (
                <span className="text-[12px] font-roboto text-jci-black/40">({eventImages.length})</span>
              )}
            </div>

            {eventImages && eventImages.length > 0 ? (
              <>
              <div className=" hidden md:flex md:flex-wrap gap-0 w-full  ">
                {eventImages.map((image) => (
                  <div
                    key={image.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedImage(image)}
                    onKeyDown={(e) => { if (e.key === 'Enter') setSelectedImage(image); }}
                    className="relative group overflow-hidden border border-black/10  transition-colors duration-300"
                  >
                    <img
                      src={`${import.meta.env.VITE_BACKEND_APP_API_URL_IMAGE}${image.imgUrl}`}
                      alt="Image événement"
                      className="h-70 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-jci-black/0 group-hover:bg-jci-black/20 transition-colors duration-300" />
                  </div>
                ))}
              </div>
              <div className="relative md:hidden">
                <div
                  onScroll={handleCarouselScroll}
                  className="flex flex-row gap-0 w-full overflow-x-auto snap-x snap-mandatory
                    [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {eventImages.map((image) => (
                    <div
                      key={image.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedImage(image)}
                      onKeyDown={(e) => { if (e.key === 'Enter') setSelectedImage(image); }}
                      className="relative group overflow-hidden border border-black/10 hover:border-jci-yellow transition-colors duration-300 h-70 w-full shrink-0 snap-start"
                    >
                      <img
                        src={`${import.meta.env.VITE_BACKEND_APP_API_URL_IMAGE}${image.imgUrl}`}
                        alt="Image événement"
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-jci-black/0 group-hover:bg-jci-black/20 transition-colors duration-300" />
                    </div>
                  ))}
                </div>

                {/* Compteur */}
                <span className="absolute top-2 right-2 rounded-full bg-jci-black/60 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm pointer-events-none">
                  {activeIndex + 1} / {eventImages.length}
                </span>

                {/* Flèche animée, disparaît après le premier scroll */}
                <div
                  className={`absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300
                    ${hasScrolled ? "opacity-0" : "opacity-100"}`}
                >
                  <div className="mada-swipe-hint flex h-9 w-9 items-center justify-center rounded-full bg-jci-black/60 text-white backdrop-blur-sm">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Points de pagination */}
                <div className="mt-3 flex justify-center gap-1.5" aria-hidden="true">
                  {eventImages.map((image, i) => (
                    <span
                      key={image.id}
                      className={`h-1.5 rounded-full transition-all duration-300
                        ${i === activeIndex ? "w-5 bg-jci-yellow" : "w-1.5 bg-black/25"}`}
                    />
                  ))}
                </div>
              </div>
              </>
            ) : (
              <p className="text-[13px] text-jci-black/50 italic">Aucune photo fournie pour cet événement.</p>
            )}
            {selectedImage && createPortal(
              <div
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 md:p-10"
                onClick={() => setSelectedImage(null)}
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Fermer"
                  className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center justify-center h-10 w-10 text-jci-white hover:text-jci-yellow transition-colors duration-300"
                >
                  <IoClose size={28} />
                </button>
                <img
                  src={`${import.meta.env.VITE_BACKEND_APP_API_URL_IMAGE}${selectedImage.imgUrl}`}
                  alt="Image événement en plein écran"
                  onClick={(e) => e.stopPropagation()}
                  className="max-h-[90vh] max-w-[90vw] object-contain"
                />
              </div>,
              document.body
            )}
                      </div>
          </Reveal>
        </div>
        <div className='relative lg:absolute lg:top-35 lg:left-60 flex flex-col lg:flex-row w-full lg:w-auto lg:px-0  '>
          <div name="text" className='hidden lg:block relative h-[400px] w-[60px] -ml-10 mr-5'>
            <p className='absolute top-130 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[90px] font-bold text-jci-black/10 font-poppins select-none'>
              Actualités & événements
            </p>
            <p className='absolute top-1/2 left-15 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[25px] font-bold text-jci-white font-poppins'>
              Actualités & événements
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EventsDetails