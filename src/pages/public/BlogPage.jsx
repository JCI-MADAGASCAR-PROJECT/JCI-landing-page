import { useState, useEffect, useRef, useMemo } from 'react'
import H1 from "../../components/ui/H1"
import EventCard from "../../components/ui/EventCard"
import Pagination from "../../components/ui/Pagination"
import { eventAPI } from "../../services/api"

const PAGE_SIZE = 12

const formatEvent = (event) => {
  const date = new Date(event.date)
  return {
    day: date.getDate(),
    month: date.toLocaleString('default', { month: 'short' }),
    year: date.getFullYear(),
  }
}

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [eventList, setEventList] = useState([])
  const [totalPages, setTotalPages] = useState(1)

  const [dateFilter, setDateFilter] = useState("tous")
  const [typeFilter, setTypeFilter] = useState("tous")

  // Aujourd'hui à 00:00 (calculé une seule fois)
  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  const carouselRefMobile = useRef(null)

  const scrollByItemMobile = (direction) => {
    const el = carouselRefMobile.current
    if (!el) return

    el.scrollBy({
      left: direction * el.clientWidth,
      behavior: "smooth"
    })
  }

  // Changer de filtre => retour à la page 1
  const handleDateFilter = (value) => {
    setDateFilter(value)
    setCurrentPage(1)
  }

  const handleTypeFilter = (value) => {
    setTypeFilter(value)
    setCurrentPage(1)
  }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const params = {
          page: currentPage,
          limit: PAGE_SIZE,
        }

        // À adapter selon les paramètres réellement gérés par ton backend
        if (typeFilter !== "tous") params.type = typeFilter
        if (dateFilter === "a-venir") params.from = today.toISOString()

        const res = await eventAPI.getAll(params)

        setEventList(res.data.events)
        setTotalPages(res.data.totalPages)
      } catch (error) {
        console.error("Failed to fetch events:", error)
      }
    }

    fetchEvents()
  }, [currentPage, dateFilter, typeFilter, today])

  // Filtrage côté client conservé comme sécurité
  // (utile tant que le backend n'applique pas encore les filtres)
  const filteredEvents = eventList.filter((event) => {
    const eventDate = new Date(event.date)

    const matchesDate =
      dateFilter === "tous" ||
      (dateFilter === "a-venir" && eventDate >= today)

    const matchesType =
      typeFilter === "tous" ||
      event.type?.toUpperCase() === typeFilter

    return matchesDate && matchesType
  })

  const renderCard = (event) => {
    const { day, month, year } = formatEvent(event)

    return (
      <EventCard
        key={event.id}
        Img={`${import.meta.env.VITE_BACKEND_APP_API_URL_IMAGE}${event.imgUrl}`}
        Title={event.title}
        Content={event.content}
        Day={day}
        Month={month}
        Type={event.type}
        Year={year}
        Id={event.id}
      />
    )
  }

  return (
    <div className='flex flex-col w-full min-h-screen bg-jci-black'>

      {/* Actualités & évènements */}
      <section className='relative bg-jci-blue'>
        <div className='relative flex flex-col lg:flex-row w-full'>

          {/* Fond blanc */}
          <div className='absolute inset-y-0 right-0 left-0 lg:left-[25%] bg-jci-white' />

          {/* Texte vertical (zone bleue) */}
          <div className='relative z-10 flex flex-col flex-1 gap-6 px-6 lg:pr-8 lg:pl-[var(--rail)] py-10 lg:py-16 [--rail:12%]'>

          {/* Texte vertical : colonne à gauche, dans le même conteneur */}
          <div className='hidden lg:grid absolute inset-y-0 left-45 w-[var(--rail)] place-items-center overflow-hidden'>
            <p className='[grid-area:1/1] [writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-[90px] font-bold text-jci-black/10 font-poppins select-none'>
              Actualités & événements
            </p>

            <p className='[grid-area:1/1] [writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-[25px] font-bold text-jci-white font-poppins self-start mt-50'>
              Actualités & événements
            </p>
          </div>

            {/* En-tête : décalé pour rester dans la zone blanche */}
            <div className='flex flex-col items-start lg:pl-[20%] mt-10 lg:mt-0 pl-0'>

              <div className='flex flex-row items-center -mb-1'>
                <p className='text-jci-blue text-[8px] font-bold font-poppins'>
                  ACTUALITÉS & ÉVÉNEMENTS
                </p>

                <div className='ml-2 h-[0.5px] w-10 bg-jci-yellow'></div>
              </div>

              <H1 TextSize="text-2xl">
                RESTEZ CONNECTÉ
              </H1>

              <p className='text-[12px] font-poppins font-medium text-jci-black/80'>
                Découvrez toutes les actualités autour de la JCI et les évènements à venir.
              </p>

              {/* FILTRES */}
              <div className='flex flex-row gap-3 mt-3  w-full items-center justify-center md:justify-normal'>

                {/* Filtre date */}
                <select
                  value={dateFilter}
                  onChange={(e) => handleDateFilter(e.target.value)}
                  className='border border-jci-black/20 px-4 py-2 text-[11px] font-poppins font-medium bg-jci-white outline-none'
                >
                  <option value="tous">Toutes les dates</option>
                  <option value="a-venir">À venir</option>
                </select>

                {/* Filtre type */}
                <select
                  value={typeFilter}
                  onChange={(e) => handleTypeFilter(e.target.value)}
                  className='border border-jci-black/20 px-4 py-2 text-[11px] font-poppins font-medium bg-jci-white outline-none'
                >
                  <option value="tous">Tous les types</option>
                  <option value="ACTU">Actualité</option>
                  <option value="EVENT">Événement</option>
                  <option value="PROJET">Projet réalisé</option>
                </select>

              </div>
            </div>

            {/* DESKTOP */}
            <div className='hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6 w-full lg:max-w-6xl lg:ml-[10%] max-w-full'>
              {filteredEvents.map(renderCard)}
            </div>

            {/* MOBILE */}
            <div className='sm:hidden relative self-center w-full'>

              {/* ARROW LEFT */}
              <button
                type="button"
                onClick={() => scrollByItemMobile(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                  w-10 h-10 rounded-full bg-jci-black/70 text-jci-white
                  flex items-center justify-center shadow-lg cursor-pointer
                  hover:bg-jci-black transition-all duration-300"
              >
                &lt;
              </button>

              {/* CAROUSEL */}
              <div
                ref={carouselRefMobile}
                className="flex flex-row w-full overflow-x-auto
                  snap-x snap-mandatory scrollbar-hide"
              >
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="snap-center snap-always shrink-0 w-full flex justify-center"
                  >
                    {renderCard(event)}
                  </div>
                ))}
              </div>

              {/* ARROW RIGHT */}
              <button
                type="button"
                onClick={() => scrollByItemMobile(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                  w-10 h-10 rounded-full bg-jci-black/70 text-jci-white
                  flex items-center justify-center shadow-lg cursor-pointer
                  hover:bg-jci-black transition-all duration-300"
              >
                &gt;
              </button>

            </div>

            {/* Pagination */}
            <div className='flex justify-center w-full lg:pl-[10%]'>
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage