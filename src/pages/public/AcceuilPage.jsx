import ButtonVoid from "../../components/ui/ButtonVoid"
import EventCard from "../../components/ui/EventCard"
import H1 from "../../components/ui/H1"
import LabelTrait from "../../components/ui/LabelTrait"
import StatBlock from "../../components/ui/StatBlock"
import { LogIn } from "lucide-react"
import Mada from "./Mada"
import BG from "../../images/HomeBG.png"
import LogoJCIMNoBg from "../../images/JCI/JCI Madagascar/JCI Madagascar background marine blue name blue logo.png"
import LogoBLTNoBgRow from "../../images/Charte Build Legacy Together/BLT Blanc/BLT-05.webp"
import LogoBLTNoBgRowWhite from "../../images/Charte Build Legacy Together/BLT Monochrome Blanc/BLT-11.webp"
import PSD2026 from "../../images/Photos corporate BN/DN2026.webp"
import MidiMadagascar from "../../images/LOGO-OTHER/logo_midi_madagasikara.webp"
import OrangeMadagascar from "../../images/LOGO-OTHER/OrangeLogo.webp"
import GroupeKentia from "../../images/LOGO-OTHER/Logo Kentia.webp"
import KoonSpace from "../../images/LOGO-OTHER/Logo Koonspace.webp"
import ISeven from "../../images/LOGO-OTHER/I0SevenStudio.webp"
import { IoArrowDownCircle } from "react-icons/io5"
import { eventAPI } from "../../services/api"
import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import Typewriter from "../../hooks/Typewriter"


const AcceuilPage = () => {
  const { t, i18n } = useTranslation()
  const [actuEvents, setActuEvents] = useState([])
  const [showSecondImage, setShowSecondImage] = useState(false)
  const [showPSD, setShowPSD] = useState(false)
  const carouselRefMobile = useRef(null)

  
  const scrollByItemMobile = (direction) => {
    const el = carouselRefMobile.current
    if (!el) return

    el.scrollBy({
      left: direction * el.clientWidth,
      behavior: "smooth"
    })
  }


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

  const cadresAction = [
    t("home.actions.categories.individualDevelopment"),
    t("home.actions.categories.communityImpact"),
    t("home.actions.categories.businessEntrepreneurship"),
    t("home.actions.categories.internationalCooperation")
  ]

  const programmes = [
    t("home.programs.items.jma.title"),
    t("home.programs.items.publicSpeaking.title"),
    t("home.programs.items.toyp.title"),
    t("home.programs.items.cye.title")
  ]

  const credoItems = t("home.values.credo.items", {
    returnObjects: true
  })

  useEffect(() => {
    const fetchActuEvents = async () => {
      try {
        const response = await eventAPI.getAllActu()
        const data = response.data
        setActuEvents(data)
      } catch (error) {
        console.error("Failed to fetch actu events:", error)
      }
    }

    fetchActuEvents()
  }, [])

  return (
    <div className='flex flex-col w-full min-h-screen bg-jci-black'>

      {/* QUI SOMMES-NOUS / CADRES D'ACTION / VALEURS / PROGRAMMES */}
      <section
        className='hidden md:flex px-2 sm:px-2 md:px-12 lg:pl-20 lg:pr-1 py-20 md:py-14 lg:py-20 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${BG})` }}
        name="qui-sommes-nous"
      >

        <div className='ml-0 lg:ml-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-1 mr-0 lg:mr-5 items-start max-w-8xl mx-auto'>

          {/* COLONNE 1 */}
          <div className='flex flex-col h-full gap-12'>

            <div className='flex flex-col gap-8'>

              {/* QUI SOMMES-NOUS */}
              <div className='group flex flex-col opacity-100 lg:opacity-40 lg:hover:opacity-100 transition-opacity duration-300'>

                <LabelTrait>
                  {t("home.about.label")}
                </LabelTrait>

                <H1 TextColor="text-jci-white">
                  {t("home.about.title")}
                </H1>

                <div className='flex flex-col gap-2'>

                  <p className='text-[10px] text-jci-white font-poppins leading-relaxed text-justify'>
                    {t("home.about.description")}
                  </p>

                  <ButtonVoid
                    TextColor="text-jci-white"
                    path="/jci-madagascar"
                  >
                    {t("home.about.readMore")}
                    <LogIn size={20}/>
                  </ButtonVoid>

                </div>
              </div>


              {/* CADRES D'ACTIONS */}
              <div className='group flex flex-col gap-1 opacity-100 lg:opacity-40 lg:hover:opacity-100 transition-opacity duration-300'>

                <LabelTrait>
                  {t("home.actions.label")}
                </LabelTrait>

                <H1 TextColor="text-jci-white">
                  {t("home.actions.title")}
                </H1>

                <p className='text-[10px] text-jci-white font-poppins leading-relaxed text-justify'>
                  {t("home.actions.description")}
                </p>

                <div className='ml-3 flex flex-col gap-1 text-[10px] text-jci-white font-poppins leading-relaxed'>
                  <ul className='list-disc list-inside'>

                    {cadresAction.map((item) => (
                      <li key={item}>
                        {item}
                      </li>
                    ))}

                  </ul>
                </div>

                <ButtonVoid
                  TextColor="text-jci-white"
                  path="/jci-madagascar/programmes"
                >
                  {t("home.actions.projects")}
                  <LogIn size={20}/>
                </ButtonVoid>

              </div>


              {/* MESSAGE PRESIDENT */}
              <div className='relative flex flex-col lg:flex-row items-start lg:items-center gap-4'>

                <img
                  src={PSD2026}
                  alt={t("home.president.imageAlt")}
                  className='peer h-10 w-10 rounded-full object-cover transition-all duration-300 ease-out hover:h-24 hover:w-24'
                />

                <div className='relative lg:absolute w-full lg:w-[500px] lg:left-25 top-0 z-55 mt-3 lg:mt-0 lg:ml-3 max-w-full max-h-fit overflow-visible lg:overflow-hidden lg:max-w-0 lg:max-h-0 rounded border border-jci-blue/40 bg-jci-black/40 backdrop-blur-xl p-5 lg:p-0 opacity-100 lg:opacity-0 shadow-lg transition-all duration-300 ease-out lg:peer-hover:max-w-[10000px] lg:peer-hover:max-h-fit lg:peer-hover:p-5 lg:peer-hover:opacity-100'>

                  <div className="flex flex-row justify-between">

                    <div className="flex flex-col">

                      <img
                        src={LogoJCIMNoBg}
                        alt="Logo JCI Madagascar"
                        className="h-5 w-fit bg-no-repeat"
                      />

                      <div>
                        <H1
                          TextColor="text-jci-white"
                          TextSize="text-[11px]"
                        >
                          {t("home.president.name")}
                        </H1>

                        <p className="text-jci-white font-light text-[9px]">
                          {t("home.president.title")}
                        </p>
                      </div>

                    </div>

                    <div>
                      <img
                        src={LogoBLTNoBgRow}
                        alt="Logo Build Legacy Together"
                        className="h-5 w-auto"
                      />
                    </div>

                  </div>

                  <p className='text-[10px] text-jci-white font-poppins italic text-justify'>

                    <span className='text-jci-yellow text-2xl align-middle leading-none'>
                      "
                    </span>

                    {t("home.president.message.paragraph1")}
                    <br/>

                    {t("home.president.message.paragraph2")}
                    <br/>

                    {t("home.president.message.paragraph3")}
                    <br/>

                    {t("home.president.message.paragraph4")}
                    <br/>

                    {t("home.president.message.paragraph5")}
                    <br/>

                    {t("home.president.message.paragraph6")}
                    <br/>

                    {t("home.president.message.paragraph7")}
                    <br/>

                    {t("home.president.message.paragraph8")}
                    <br/>

                    {t("home.president.message.signature")}

                    <span className='text-[10px] align-middle leading-none'>
                      "
                    </span>

                    <br/>

                  </p>

                </div>

              </div>

            </div>


            {/* STATS */}
            <div className='grid grid-cols-3 gap-5'>

              <StatBlock
                Value="36"
                Label={t("home.stats.years")}
                TextColor="text-jci-blue"
              />

              <StatBlock
                Value="384"
                Label={t("home.stats.members")}
                TextColor="text-jci-blue"
              />

              <StatBlock
                Value="14"
                Label={t("home.stats.localOrganizations")}
                TextColor="text-jci-blue"
              />

            </div>
            

          </div>


          {/* CARTE */}
          <div className='flex justify-center md:row-span-2 md:self-center -mt-15 lg:row-span-1 lg:self-start z-50'>
            <Mada Width="350" Height="755" />
          </div>


          {/* COLONNE 3 */}
          <div className="flex flex-col justify-between h-full">

            <div className='flex flex-col gap-5'>

              {/* VALEURS */}
              <div className='group flex flex-col gap-7 opacity-100 lg:opacity-40 lg:hover:opacity-100 transition-opacity duration-300'>

                <div>

                  <H1 TextColor="text-jci-white">
                    {t("home.values.label")}
                  </H1>

                  <LabelTrait>
                    {t("home.values.mission.title")}
                  </LabelTrait>

                  <p className='text-[10px] text-jci-white font-poppins leading-relaxed'>
                    {t("home.values.mission.content")}
                  </p>

                </div>


                <div>

                  <LabelTrait>
                    {t("home.values.vision.title")}
                  </LabelTrait>

                  <p className='text-[10px] text-jci-white font-poppins leading-relaxed'>
                    {t("home.values.vision.content")}
                  </p>

                </div>


                <div className='flex flex-col gap-3'>

                  <div className='flex flex-col gap-1'>

                    <LabelTrait>
                      {t("home.values.credo.title")}
                    </LabelTrait>

                    <ul className='ml-3 list-disc list-inside text-[10px] text-jci-white font-poppins leading-relaxed'>

                      {credoItems.map((item, index) => (
                        <li key={index}>
                          {item}
                        </li>
                      ))}

                    </ul>

                  </div>

                  <ButtonVoid
                    TextColor="text-jci-white"
                    path="/jci-madagascar/valeurs"
                  >
                    {t("home.values.readMore")}
                    <LogIn size={20}/>
                  </ButtonVoid>

                </div>

              </div>


              {/* PROGRAMMES */}
              <div className='group flex flex-col gap-5 opacity-100 lg:opacity-40 lg:hover:opacity-100 transition-opacity duration-300'>

                <div className='flex flex-col gap-1'>

                  <H1 TextColor="text-jci-white">
                    {t("home.programs.label")}
                  </H1>

                  <p className='ml-1 text-[10px] font-poppins text-jci-white'>
                    {t("home.programs.intro")}
                  </p>

                  <div className='flex flex-col gap-1'>

                    <ul className='ml-3 list-disc list-inside text-[10px] text-jci-white font-poppins leading-relaxed'>

                      {programmes.map((item) => (
                        <li key={item}>
                          {item}
                        </li>
                      ))}

                    </ul>

                  </div>

                </div>

                <ButtonVoid
                  TextColor="text-jci-white"
                  path="/jci-madagascar/programmes"
                >
                  {t("home.programs.readMore")}
                  <LogIn size={20}/>
                </ButtonVoid>

              </div>

            </div>


            {/* LOGO BLT */}
            <div className="w-full h-full mt-5 relative">

              <div className="group relative flex justify-start">

                <img
                  src={LogoBLTNoBgRowWhite}
                  alt="Logo Build Legacy Together"
                  className="absolute left-0 top-0 h-11 w-auto translate-y-0 opacity-50 transition-all duration-500 ease-out group-hover:opacity-0"
                />

                <img
                  src={LogoBLTNoBgRow}
                  alt="Logo Build Legacy Together"
                  className="absolute left-0 top-0 h-11 w-auto translate-y-0 opacity-0 transition-all duration-500 ease-out group-hover:h-13 group-hover:w-auto group-hover:opacity-100"
                />

              </div>

              <div className="absolute bottom-0 right-2">
                <IoArrowDownCircle
                  className="text-jci-white"
                  size={20}
                />
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* MOBILE */}
      <section
        className='relative md:hidden flex px-3 sm:px-2 pt-10 pb-0 md:py-14 bg-cover bg-center bg-no-repeat flex-col gap-1'
        style={{ backgroundImage: `url(${BG})` }}
        name="qui-sommes-nous"
      >

        <div className='ml-0 lg:ml-32 grid grid-cols-1 gap-0 mr-0 items-start mx-auto'>

          {/* CARTE */}
          <div
            className="flex group justify-center md:row-span-2 md:self-center lg:row-span-1 lg:self-start hover:scale-101 transition-all duration-300 cursor-pointer relative"
            onClick={() => setShowSecondImage((prev) => !prev)}
          >

            <div className="relative flex items-center justify-center -ml-10">

              <Mada Width="290" Height="755" />

            </div>

            <div className="absolute top-10 left-0 w-32 h-14">

              <img
                src={LogoBLTNoBgRowWhite}
                alt="Logo Build Legacy Together"
                className={`absolute left-0 top-0 h-11 w-auto transition-all duration-500 ease-out ${
                  showSecondImage
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />

              <img
                src={LogoBLTNoBgRow}
                alt="Logo Build Legacy Together"
                className={`absolute left-0 top-0 h-11 w-auto transition-all duration-500 ease-out ${
                  showSecondImage
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />

            </div>

          </div>


          {/* COLONNE 1 */}
          <div className='flex flex-col h-full gap-12'>

            <div className='relative flex flex-col gap-8'>

              {/* QUI SOMMES-NOUS */}
              <div className='group flex flex-col opacity-100 lg:opacity-40 lg:hover:opacity-100 transition-opacity duration-300'>

                <LabelTrait>
                  {t("home.about.label")}
                </LabelTrait>

                <H1 TextColor="text-jci-white">
                  {t("home.about.title")}
                </H1>

                <div className='flex flex-col gap-2'>

                  <p className='text-[10px] text-jci-white font-poppins leading-relaxed text-justify'>
                      <Typewriter
                      text={t("home.about.description")}
                      speed={20}
                    />
                  </p>

                  <ButtonVoid
                    TextColor="text-jci-white"
                    path="/jci-madagascar"
                  >
                    {t("home.about.readMore")}
                    <LogIn size={20}/>
                  </ButtonVoid>

                </div>

              </div>


              {/* CADRES D'ACTIONS */}
              <div className='group flex flex-col gap-1 opacity-100 lg:opacity-40 lg:hover:opacity-100 transition-opacity duration-300'>

                <LabelTrait>
                  {t("home.actions.label")}
                </LabelTrait>

                <H1 TextColor="text-jci-white">
                  {t("home.actions.title")}
                </H1>

                <p className='text-[10px] text-jci-white font-poppins leading-relaxed text-justify'>
                  <Typewriter
                      text={t("home.actions.description")}
                      speed={20}
                    />
                </p>

                <div className='ml-3 flex flex-col gap-1 text-[10px] text-jci-white font-poppins leading-relaxed'>

                  <ul className='list-disc list-inside'>

                    {cadresAction.map((item) => (
                      <li key={item}>
                        <Typewriter
                          text={item}
                          speed={20}
                        />
                      </li>
                    ))}

                  </ul>

                </div>

                <ButtonVoid
                  TextColor="text-jci-white"
                  path="/jci-madagascar/programmes"
                >
                  {t("home.actions.projects")}
                  <LogIn size={20}/>
                </ButtonVoid>

              </div>


              {/* MESSAGE MOBILE */}
              <div className="fixed bottom-5 right-5 z-50">

                <div
                  className={`absolute bottom-full right-0 mb-4 w-[500px] max-w-[calc(100vw-2rem)] rounded border border-jci-blue/40 bg-jci-black/80 backdrop-blur-xl shadow-lg overflow-hidden transition-all duration-500 ease-out ${
                    showPSD
                      ? "max-h-[1000px] p-5 opacity-100 translate-y-0"
                      : "max-h-0 p-0 opacity-0 translate-y-5 pointer-events-none"
                  }`}
                >

                  <div className="relative">

                    <div className="flex flex-row justify-between gap-4 pr-5">

                      <div className="flex flex-col">

                        <img
                          src={LogoJCIMNoBg}
                          alt="Logo JCI Madagascar"
                          className="h-5 w-fit"
                        />

                        <H1
                          TextColor="text-jci-white"
                          TextSize="text-[11px]"
                        >
                          {t("home.president.name")}
                        </H1>

                        <p className="text-jci-white font-light text-[9px]">
                          {t("home.president.title")}
                        </p>

                      </div>

                      <img
                        src={LogoBLTNoBgRow}
                        alt="Logo Build Legacy Together"
                        className="h-5 w-auto"
                      />

                    </div>


                    <p className="mt-4 text-[10px] text-jci-white font-poppins italic text-justify">

                      <span className="text-jci-yellow text-2xl align-middle leading-none">
                        "
                      </span>

                      {t("home.president.message.paragraph1")}
                      <br/>

                      {t("home.president.message.paragraph2")}
                      <br/>

                      {t("home.president.message.paragraph3")}
                      <br/>

                      {t("home.president.message.paragraph4")}
                      <br/>

                      {t("home.president.message.paragraph5")}
                      <br/>

                      {t("home.president.message.paragraph6")}
                      <br/>

                      {t("home.president.message.paragraph7")}
                      <br/>

                      {t("home.president.message.paragraph8")}
                      <br/>

                      {t("home.president.message.signature")}

                      <span className="text-[10px] align-middle leading-none">
                        "
                      </span>

                    </p>

                  </div>

                </div>


                <button
                  type="button"
                  onClick={() => setShowPSD((prev) => !prev)}
                  className="relative block rounded-full focus:outline-none"
                  aria-label={t("home.president.messageButton")}
                >

                  <img
                    src={PSD2026}
                    alt={t("home.president.imageAlt")}
                    className="h-15 w-15 rounded-full object-cover"
                    loading="lazy"
                  />

                  <span className="absolute inset-0 rounded-full border-2 border-jci-blue animate-ping" />

                  <span className="absolute inset-0 rounded-full border-2 border-jci-blue" />

                </button>

              </div>

            </div>


            {/* STATS */}
              <div className='flex flex-col md:flex-row gap-3 mb-5 items-center self-center justify-center lg:w-[60%] w-full'>
              <div className='flex flex-2 flex-row gap-3 md:w-fit w-full'>
                <StatBlock Value="36"  WFull={isMobile} Label="ANS" TextColor="text-jci-blue"  />
                <StatBlock Value="14" WFull={isMobile}  Label="OLs" TextColor="text-jci-blue"  />
              </div>
              <div className='flex flex-1 md:w-fit w-full'>
                <StatBlock Value="384" WFull={isMobile} Label="Membres" TextColor="text-jci-blue"  />
              </div>
            </div>

          </div>


          {/* VALEURS + PROGRAMMES */}
          <div className="flex flex-col h-full relative">

            <div className='flex flex-col gap-5'>

              {/* VALEURS */}
              <div className='group flex flex-col gap-7 opacity-100 lg:opacity-40 lg:hover:opacity-100 transition-opacity duration-300'>

                <div>

                  <H1 TextColor="text-jci-white">
                    {t("home.values.label")}
                  </H1>

                  <LabelTrait>
                    {t("home.values.mission.title")}
                  </LabelTrait>

                  <p className='text-[10px] text-jci-white font-poppins leading-relaxed'>
                    <Typewriter
                      text={t("home.values.mission.content")}
                      speed={20}
                    />
                  </p>

                </div>


                <div>

                  <LabelTrait>
                    {t("home.values.vision.title")}
                  </LabelTrait>

                  <p className='text-[10px] text-jci-white font-poppins leading-relaxed'>
                    <Typewriter
                      text={t("home.values.vision.content")}
                      speed={20}
                    />
                  </p>
                </div>


                <div className='flex flex-col gap-3'>

                  <div className='flex flex-col gap-1'>

                    <LabelTrait>
                      {t("home.values.credo.title")}
                    </LabelTrait>

                    <ul className='ml-3 list-disc list-inside text-[10px] text-jci-white font-poppins leading-relaxed'>

                      {credoItems.map((item, index) => (
                        <li key={index}>
                          <Typewriter
                            text={item}
                            speed={20}
                          />
                        </li>
                      ))}

                    </ul>

                  </div>

                  <ButtonVoid
                    TextColor="text-jci-white"
                    path="/jci-madagascar/valeurs"
                  >
                    {t("home.values.readMore")}
                    <LogIn size={20}/>
                  </ButtonVoid>

                </div>

              </div>


              {/* PROGRAMMES */}
              <div className='group flex flex-col gap-5 opacity-100 lg:opacity-40 lg:hover:opacity-100 transition-opacity duration-300'>

                <div className='flex flex-col gap-1'>

                  <H1 TextColor="text-jci-white">
                    {t("home.programs.label")}
                  </H1>

                  <p className='ml-1 text-[10px] font-poppins text-jci-white'>
                    <Typewriter
                      text={t("home.programs.intro")}
                      speed={20}
                    />
                  </p>

                  <div className='flex flex-col gap-1'>

                    <ul className='ml-3 list-disc list-inside text-[10px] text-jci-white font-poppins leading-relaxed'>

                      {programmes.map((item) => (
                        <li key={item}>
                          <Typewriter
                            text={item}
                            speed={20}
                          />
                        </li>
                      ))}

                    </ul>

                  </div>

                </div>

                <ButtonVoid
                  TextColor="text-jci-white"
                  path="/jci-madagascar/programmes"
                >
                  {t("home.programs.readMore")}
                  <LogIn size={20}/>
                </ButtonVoid>

              </div>

            </div>


            <div className="w-full h-full mt-5 relative bg-red-500">

              <div className="absolute bottom-0 right-2">

                <IoArrowDownCircle
                  className="text-jci-white"
                  size={20}
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* PARTENAIRES */}
      <section className='bg-jci-blue px-2 md:px-16 py-16 flex flex-col items-center gap-10'>

        <div className='flex flex-col items-center gap-0.5 text-center'>

          <div className='flex flex-row items-center'>

            <div className='mr-2 h-[0.5px] w-10 bg-jci-yellow'></div>

            <p className='text-jci-white text-[8px] font-medium font-poppins'>
              {t("home.partners.label")}
            </p>

            <div className='ml-2 h-[0.5px] w-10 bg-jci-yellow'></div>

          </div>

          <H1
            TextColor="text-jci-white"
            TextSize="text-2xl"
          >
            {t("home.partners.title")}
          </H1>

          <p className='text-jci-white/80 font-semibold text-[13px] italic'>
            {t("home.partners.subtitle")}
          </p>

        </div>


        <div className="w-full overflow-hidden">

          <div className="flex w-max animate-scroll-horizontal">

            {/* PREMIER GROUPE */}
            <div className="flex items-center gap-6 lg:gap-10 pr-6 lg:pr-10">

              <div className="flex items-center justify-center rounded-xl w-[180px] sm:w-[200px] h-[80px] sm:h-[100px] overflow-hidden bg-jci-white py-3 shrink-0">
                <img
                  src={MidiMadagascar}
                  alt={t("home.partners.images.midiMadagascar")}
                  
                  
                  className="h-15 w-auto"
                />
              </div>

              <div className="flex items-start justify-center rounded-xl w-[180px] sm:w-[200px] h-[80px] sm:h-[100px] overflow-hidden bg-jci-white pt-1 md:pt-5 shrink-0">
                <img
                  src={OrangeMadagascar}
                  alt={t("home.partners.images.orangeMadagascar")}
                  
                  
                  className="h-17 w-auto"
                />
              </div>

              <div className="flex items-center justify-center rounded-xl w-[180px] sm:w-[200px] h-[80px] sm:h-[100px] overflow-hidden bg-jci-white py-3 shrink-0">
                <img
                  src={GroupeKentia}
                  alt={t("home.partners.images.kentia")}
                  
                  
                  className="h-20 w-auto"
                />
              </div>

              <div className="flex items-center justify-center rounded-xl w-[180px] sm:w-[200px] h-[80px] sm:h-[100px] overflow-hidden bg-jci-white py-3 shrink-0">
                <img
                  src={ISeven}
                  alt={t("home.partners.images.iseven")}
                  
                  
                  className="h-15 w-auto"
                />
              </div>

              <div className="flex items-center justify-center rounded-xl w-[180px] sm:w-[200px] h-[80px] sm:h-[100px] overflow-hidden bg-jci-white py-3 shrink-0">
                <img
                  src={KoonSpace}
                  alt={t("home.partners.images.koonSpace")}
                    
                  className="h-16 w-auto"
                />
              </div>

            </div>


            {/* DEUXIÈME GROUPE */}
            <div className="flex items-center gap-6 lg:gap-10 pr-6 lg:pr-10">

              <div className="flex items-center justify-center rounded-xl w-[180px] sm:w-[200px] h-[80px] sm:h-[100px] overflow-hidden bg-jci-white py-3 shrink-0">
                <img
                  src={MidiMadagascar}
                  alt={t("home.partners.images.midiMadagascar")}
                   
                  className="h-15 w-auto"
                />
              </div>

              <div className="flex items-start justify-center rounded-xl w-[180px] sm:w-[200px] h-[80px] sm:h-[100px] overflow-hidden bg-jci-white pt-5 shrink-0">
                <img
                  src={OrangeMadagascar}
                  alt={t("home.partners.images.orangeMadagascar")}
                   
                  className="h-17 w-auto"
                />
              </div>

              <div className="flex items-center justify-center rounded-xl w-[180px] sm:w-[200px] h-[80px] sm:h-[100px] overflow-hidden bg-jci-white py-3 shrink-0">
                <img
                  src={GroupeKentia}
                  alt={t("home.partners.images.kentia")}
                   
                  className="h-20 w-auto"
                />
              </div>

              <div className="flex items-center justify-center rounded-xl w-[180px] sm:w-[200px] h-[80px] sm:h-[100px] overflow-hidden bg-jci-white py-3 shrink-0">
                <img
                  src={ISeven}
                  alt={t("home.partners.images.iseven")}
                   
                  className="h-15 w-auto"
                />
              </div>

              <div className="flex items-center justify-center rounded-xl w-[180px] sm:w-[200px] h-[80px] sm:h-[100px] overflow-hidden bg-jci-white py-3 shrink-0">
                <img
                  src={KoonSpace}
                  alt={t("home.partners.images.koonSpace")}
                   
                  className="h-16 w-auto"
                />
              </div>

            </div>
            

          </div>

        </div>

      </section>


      {/* ACTUALITÉS & ÉVÉNEMENTS */}
      <section className='relative bg-jci-blue px-2 md:px-8 lg:px-1 py-10 lg:py-1 flex flex-col items-center md:gap-10 overflow-hidden lg:h-screen md:mt-0 -mt-5'>

        <div className='flex flex-col items-start justify-between py-7 px-6 lg:pl-7 lg:pr-0 gap-4 lg:gap-1 text-left lg:text-center bg-jci-white h-auto lg:h-[570px] w-full lg:w-[1600px] lg:-mr-200'>

          <div className="flex flex-col items-start">

            <div className='flex flex-row items-center -mb-1'>

              <p className='text-jci-blue text-[8px] font-bold font-poppins'>
                {t("home.news.label")}
              </p>

              <div className='ml-2 h-[0.5px] w-10 bg-jci-yellow'></div>

            </div>

            <H1 TextSize="text-2xl">
              {t("home.news.title")}
            </H1>

            <p className='text-[12px] -mt-0 font-poppins font-medium text-jci-black/80'>
              {t("home.news.subtitle")}
            </p>

          </div>


          <div className='flex justify-end lg:w-[68%] w-full'>

            <ButtonVoid
              nVoid
              BgColors="hover:bg-jci-blue border-jci-blue"
              TextColor="text-jci-black"
              path="/blog"
            >
              {t("home.news.more")}
              <LogIn size={20}/>
            </ButtonVoid>

          </div>

        </div>


        <div className='relative lg:absolute lg:top-27 lg:left-70 flex flex-col lg:flex-row w-full lg:w-auto px-6 lg:px-0 md:bg-transparent bg-jci-white -mt-2 md:mt-0 pb-10 md:pb-0'>

          <div
            name="text"
            className='hidden lg:block relative h-[400px] w-[60px] -ml-10 mr-5'
          >

            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[90px] font-bold text-jci-black/10 font-poppins select-none'>
              {t("home.news.decorativeTitle")}
            </p>

            <p className='absolute top-1/2 left-15 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[20px] font-bold text-jci-white font-poppins'>
              {t("home.news.decorativeSubtitle")}
            </p>

          </div>


          {/* DESKTOP */}
          <div className='hidden md:grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6 lg:w-full max-w-6xl'>

            {actuEvents?.map((event) => {

              const date = new Date(event?.date)
              const day = date.getDate()

              const month = date.toLocaleString(
                i18n.language,
                { month: "short" }
              )

              const year = date.getFullYear()

              return (
                <EventCard
                  key={event?.id}
                  Img={`${import.meta.env.VITE_BACKEND_APP_API_URL_IMAGE}${event?.imgUrl}`}
                  Title={event?.title}
                  Content={event?.content}
                  Day={day}
                  Month={month}
                  Type={event?.type}
                  Year={year}
                  Id={event?.id}
                />
              )
            })}

          </div>


          {/* MOBILE */}
          {/* <div className='sm:hidden flex flex-row overflow-x-scroll snap-x snap-mandatory self-center lg:w-full max-w-6xl w-[90%]'>

            {actuEvents.map((event) => {

              const date = new Date(event.date)

              const day = date.getDate()

              const month = date.toLocaleString(
                i18n.language,
                {
                  month: "short"
                }
              )

              const year = date.getFullYear()

              return (
                <div
                  key={event.id}
                  className='snap-center shrink-0 w-full flex justify-center'
                >

                  <EventCard
                    Img={`${import.meta.env.VITE_BACKEND_APP_API_URL_IMAGE}${event.imgUrl}`}
                    Title={event.title}
                    Content={event.content}
                    Day={day}
                    Month={month}
                    Type={event.type}
                    Year={year}
                    Id={event.id}
                  />

                </div>
              )
            })}

          </div> */}
          <div className="sm:hidden relative self-center w-[90%] max-w-6xl">

            {/* Bouton précédent */}
            <button
              type="button"
              onClick={() => scrollByItemMobile(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                w-10 h-10 rounded-full bg-jci-black/70 text-jci-white
                flex items-center justify-center shadow-lg cursor-pointer hover:bg-jci-black transition-all duration-300"
          >
              &lt;
          </button>

            {/* Carousel */}
            <div
              ref={carouselRefMobile}
              className="
                flex flex-row
                w-full
                overflow-x-auto
                snap-x snap-mandatory
                scrollbar-hide
              "
            >

              {actuEvents.map((event) => {

                const date = new Date(event.date)

                const day = date.getDate()

                const month = date.toLocaleString(
                  i18n.language,
                  {
                    month: "short"
                  }
                )

                const year = date.getFullYear()

                return (
                  <div
                    key={event.id}
                    className="
                      snap-center
                      snap-always
                      shrink-0
                      w-full
                      flex
                      justify-center
                    "
                  >

                    <EventCard
                      Img={`${import.meta.env.VITE_BACKEND_APP_API_URL_IMAGE}${event.imgUrl}`}
                      Title={event.title}
                      Content={event.content}
                      Day={day}
                      Month={month}
                      Type={event.type}
                      Year={year}
                      Id={event.id}
                    />

                  </div>
                )
              })}

            </div>

            {/* Bouton suivant */}
            <button
                type="button"
                onClick={() => scrollByItemMobile(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                        w-10 h-10 rounded-full bg-jci-black/70 text-jci-white
                        flex items-center justify-center shadow-lg cursor-pointer hover:bg-jci-black transition-all duration-300"
            >
                &gt;
            </button>

          </div>

        </div>

      </section>

    </div>
  )
}

export default AcceuilPage