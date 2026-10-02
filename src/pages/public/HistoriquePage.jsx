import SubNav from "../../components/layout/SubNav"
import StatBlock from "../../components/ui/StatBlock"
import HistoriqueImg1 from "../../images/Historique1.webp"
import HistoriqueImg2 from "../../images/Historique2.webp"
import Timeline from "../../images/timeline.svg"
import LabelTraitSimple from './../../components/ui/LabelTraitSimple';
import { useEffect, useState } from "react"
import { pastPresidentAPI } from "../../services/api.js";
import Reveal from "../../components/ui/Reveal"
import SEO from "../../components/common/SEO"


const HistoriquePage = () => {
  const [presidentsList, setPresidentsList] = useState([])

  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")

    const handleChange = (e) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  useEffect(() => {
    const fetchPresidents = async () => {
      try {
        const res = await pastPresidentAPI.getAll();
        setPresidentsList(res.data);
      } catch (error) {
        console.error("Error fetching presidents list:", error);
      }
    };

    fetchPresidents();
  }, [])
  return (
    <>
    <SEO
        title="Notre Histoire | JCI Madagascar"
        description="Découvrez l'histoire de la JCI Madagascar depuis son affiliation en 1960 par Charles Andriantsitohaina, sa renaissance en 1987 et ses présidents nationaux successifs"
        canonical="https://jcimadagascar.org/jci-madagascar"
        indexable={true}
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://jcimadagascar.org/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "JCI Madagascar",
          "item": "https://jcimadagascar.org/jci-madagascar"
        }
      ]
    }) }} />
    <div className='min-h-screen font-poppins flex flex-col items-start pt-25 pb-10 px-2 lg:pl-33 lg:pr-10 bg-jci-black gap-2'>
      <SubNav />
      {/**DESKTOP VIEW */}
      <div className="hidden md:flex flex-col gap-0 lg:ml-20 lg:mr-1">
        <div className='flex flex-col lg:flex-row gap-20 items-start text-start max-w-full  bg-jci-white  rounded-t-xl lg:px-10 p-5 lg:pr-20 overflow-hidden'>
          <div className='group flex flex-col flex-1 md:flex-1 lg:flex-2 gap-0 lg:gap-5'>
            <Reveal from="left" duration={1000} threshold={0.05}>
            <div>
              <LabelTraitSimple Label="HISTORIQUE" H1Text="LA JCI MADAGASCAR" LabelColor="text-jci-teal" H1Color="text-jci-black" />
              <p className='text-[12px] font-normal text-jci-black text-justify'>
                La JCI Madagascar est affiliée à la JCI depuis 1960 grâce à son Président Fondateur Charles Andriantsitohaina.
                Après quelques années de sommeil, la renaissance a été initiée par le Président Christian RAZAFIMANDIMBY en 1987,
                avec le soutien des Organisations Nationales sœurs de La Réunion, de Maurice, de France, de Suisse, et d'autres encore.
              </p>
              <p className='text-[12px] font-normal text-jci-black text-justify'>
                Retrouvant les membres des premières années et intégrant de nouveaux, plusieurs projets pour booster l'économie ont été
                mis en place : Opérez Vite et Bien (24 fascicules des secteurs porteurs pour informer les investisseurs), Passeport PME
                (premier guide de création d'entreprise en 10.000 exemplaires), Trophée JCE (award qui récompensait les entreprises performantes).
              </p>
            </div>
            </Reveal>
            
            <div className='flex flex-col md:flex-row gap-3 mt-10 items-center self-center justify-center lg:w-[60%] w-full'>
              <div className='flex flex-2 flex-row gap-3 md:w-fit w-full'>
                <Reveal from="fade" duration={1000} threshold={0.05} className="w-full">
                  <StatBlock Value="36"  WFull={isMobile} Label="ANS" TextColor2="text-jci-black" BGColor="bg-jci-teal" TextColor3="text-jci-white" />
                </Reveal>
                <Reveal from="fade" duration={1000} threshold={0.05} className="w-full">
                  <StatBlock Value="14" WFull={isMobile}  Label="OLs" TextColor2="text-jci-black" BGColor="bg-jci-teal" TextColor3="text-jci-white" />
                </Reveal>
              </div>
              <div className='flex flex-1 md:w-fit w-full'>
                <Reveal from="fade" duration={1000} threshold={0.05} className="w-full">
                  <StatBlock Value="384" WFull={isMobile} Label="Membres" TextColor2="text-jci-black" BGColor="bg-jci-teal" TextColor3="text-jci-white" />
                </Reveal>
              </div>
            </div>
            <div className='w-full mt-5 lg:0 items-center  flex justify-center'>
              <Reveal from="fade" duration={1000} threshold={0.05}>
                <img src={Timeline} alt="" className="h-auto w-[90%] " />
              </Reveal>
            </div>
          </div>
          <div className='flex flex-1 flex-col gap-1 w-full'>
            <Reveal from="right" duration={1000} threshold={0.05}>
              <img src={HistoriqueImg1} alt="" className="h-auto w-full rounded object-cover hover:scale-105  transition-all duration-300" loading="lazy" />
            </Reveal>
            <Reveal from="right" duration={1000} threshold={0.05}>
              <img src={HistoriqueImg2} alt="" className="h-auto w-full rounded object-cover hover:scale-105  transition-all duration-300" loading="lazy" />
            </Reveal>
          </div>
        </div>

        <div className='group flex flex-col flex-wrap gap-3 justify-start max-w-full -mt-1   bg-jci-white  p-5 lg:pr-20 rounded-b-xl'>
          <div className=' flex flex-col gap-1'>
            <LabelTraitSimple Label="LISTES" H1Text="DES PRÉSIDENTS NATIONAUX" LabelColor="text-jci-teal" H1Color="text-jci-black" />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 items-start'>
            {presidentsList?.length > 0 ? presidentsList?.map((president) => (
              <Reveal from="fade" duration={1000} threshold={0.05}>
              <div key={president?.id} className='relative flex flex-col gap-1 p-2 border border-[#F9F9F9] bg-[#F9F9F9] rounded'>
                <div className="flex flex-row gap-3">
                  <div>
                    <div className="rounded-full border-2 border-green-500">
                      <img src={`${import.meta.env.VITE_BACKEND_APP_API_URL_IMAGE}${president?.imgUrl}`} alt={president?.name} className="h-10 w-10 rounded-full object-cover" loading="lazy"/>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-[0.5px]">
                    <p className='text-[12px] font-bold text-jci-black'>{president?.name}</p>
                  </div>
                </div>
                <div className="px-3 md:px-2 py-0.5 bg-jci-yellow text-[7px] md:text-[9px] text-jci-black font-extrabold font-roboto text-center absolute bottom-1 right-0">
                  {president?.year}
                </div>
              </div>  
              </Reveal>
            )) : (
              <div className='relative flex flex-col gap-1 p-2 border border-[#F9F9F9] bg-[#F9F9F9] rounded animate-pulse'>
                <div className="flex flex-row gap-3">
                  <div className="h-10 w-10 rounded-full border-2 border-gray-300 bg-gray-300"></div>
                  <div className="flex flex-col justify-center gap-[4px]">
                    <div className="h-3 w-24 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="h-3 w-8 bg-gray-300 rounded absolute bottom-1 right-2"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/**MOBILE VIEW */}
      <div className="md:hidden flex flex-col gap-0 lg:ml-20 lg:mr-1">
        <div className='flex flex-col lg:flex-row gap-20 items-start text-start max-w-full  bg-jci-white  rounded-t-xl lg:px-10 p-5 lg:pr-20 overflow-hidden'>
          <div className='group flex flex-col flex-1 md:flex-1 lg:flex-2 gap-0 lg:gap-5'>
            <Reveal from="bottom" duration={1000} threshold={0.05}>
            <div>
              <LabelTraitSimple Label="HISTORIQUE" H1Text="LA JCI MADAGASCAR" LabelColor="text-jci-teal" H1Color="text-jci-black" />
              <p className='text-[12px] font-normal text-jci-black text-justify'>
                La JCI Madagascar est affiliée à la JCI depuis 1960 grâce à son Président Fondateur Charles Andriantsitohaina.
                Après quelques années de sommeil, la renaissance a été initiée par le Président Christian RAZAFIMANDIMBY en 1987,
                avec le soutien des Organisations Nationales sœurs de La Réunion, de Maurice, de France, de Suisse, et d'autres encore.
              </p>
              <p className='text-[12px] font-normal text-jci-black text-justify'>
                Retrouvant les membres des premières années et intégrant de nouveaux, plusieurs projets pour booster l'économie ont été
                mis en place : Opérez Vite et Bien (24 fascicules des secteurs porteurs pour informer les investisseurs), Passeport PME
                (premier guide de création d'entreprise en 10.000 exemplaires), Trophée JCE (award qui récompensait les entreprises performantes).
              </p>
            </div>
            </Reveal>
            
            <div className='flex flex-col md:flex-row gap-3 mt-10 items-center self-center justify-center lg:w-[60%] w-full'>
              <div className='flex flex-2 flex-row gap-3 md:w-fit w-full'>
                <Reveal from="bottom" duration={1000} threshold={0.05} className="w-full">
                  <StatBlock Value="36"  WFull={isMobile} Label="ANS" TextColor2="text-jci-black" BGColor="bg-jci-teal" TextColor3="text-jci-white" />
                </Reveal>
                <Reveal from="bottom" duration={1000} threshold={0.05} className="w-full">
                  <StatBlock Value="14" WFull={isMobile}  Label="OLs" TextColor2="text-jci-black" BGColor="bg-jci-teal" TextColor3="text-jci-white" />
                </Reveal>
              </div>
              <div className='flex flex-1 md:w-fit w-full'>
                <Reveal from="bottom" duration={1000} threshold={0.05} className="w-full">
                  <StatBlock Value="384" WFull={isMobile} Label="Membres" TextColor2="text-jci-black" BGColor="bg-jci-teal" TextColor3="text-jci-white" />
                </Reveal>
              </div>
            </div>
            <div className='w-full mt-5 lg:0 items-center  flex justify-center'>
              <Reveal from="bottom" duration={1000} threshold={0.05}>
                <img src={Timeline} alt="" className="h-auto w-[90%] " />
              </Reveal>
            </div>
          </div>
          <div className='flex flex-1 flex-col gap-1 w-full'>
            <Reveal from="bottom" duration={1000} threshold={0.05}>
              <img src={HistoriqueImg1} alt="" className="h-auto w-full rounded object-cover hover:scale-105  transition-all duration-300" loading="lazy" />
            </Reveal>
            <Reveal from="bottom" duration={1000} threshold={0.05}>
              <img src={HistoriqueImg2} alt="" className="h-auto w-full rounded object-cover hover:scale-105  transition-all duration-300" loading="lazy" />
            </Reveal>
          </div>
        </div>

        <div className='group flex flex-col flex-wrap gap-3 justify-start max-w-full -mt-1   bg-jci-white  p-5 lg:pr-20 rounded-b-xl'>
          <div className=' flex flex-col gap-1'>
            <LabelTraitSimple Label="LISTES" H1Text="DES PRÉSIDENTS NATIONAUX" LabelColor="text-jci-teal" H1Color="text-jci-black" />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 items-start'>
            {presidentsList?.length > 0 ? presidentsList?.map((president) => (
              <Reveal from="bottom" duration={1000} threshold={0.05}>
              <div key={president?.id} className='relative flex flex-col gap-1 p-2 border border-[#F9F9F9] bg-[#F9F9F9] rounded'>
                <div className="flex flex-row gap-3">
                  <div>
                    <div className="rounded-full border-2 border-green-500">
                      <img src={`${import.meta.env.VITE_BACKEND_APP_API_URL_IMAGE}${president?.imgUrl}`} alt={president?.name} className="h-10 w-10 rounded-full object-cover" loading="lazy"/>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-[0.5px]">
                    <p className='text-[12px] font-bold text-jci-black'>{president?.name}</p>
                  </div>
                </div>
                <div className="px-3 md:px-2 py-0.5 bg-jci-yellow text-[7px] md:text-[9px] text-jci-black font-extrabold font-roboto text-center absolute bottom-1 right-0">
                  {president?.year}
                </div>
              </div>  
              </Reveal>
            )) : (
              <div className='relative flex flex-col gap-1 p-2 border border-[#F9F9F9] bg-[#F9F9F9] rounded animate-pulse'>
                <div className="flex flex-row gap-3">
                  <div className="h-10 w-10 rounded-full border-2 border-gray-300 bg-gray-300"></div>
                  <div className="flex flex-col justify-center gap-[4px]">
                    <div className="h-3 w-24 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="h-3 w-8 bg-gray-300 rounded absolute bottom-1 right-2"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HistoriquePage
