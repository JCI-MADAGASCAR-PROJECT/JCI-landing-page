import { LuExternalLink } from "react-icons/lu";
import { Link } from "react-router";

const EventCard = ({ Img, Day, Month, Type, Title, Content, Year, Id }) => {
  const eventDate = new Date(`${Year}-${Month}-${Day}`);
  const today = new Date();
  return (
    <div className="w-full max-w-[278px] aspect-[278/330]  bg-jci-white border-black/5 border rounded shadow-[0_4px_10px_rgba(0,0,0,0.2)] p-2.5 lg:p-3 hover:scale-105 transition-all duration-300">
      
      <div className="border rounded-xs border-black/5 w-full h-full flex flex-col overflow-hidden">

        {/* Image */}
        <div className="relative w-full aspect-[278/222] shrink-0 overflow-hidden">
          <img
            src={Img}
            alt={Title}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />

          {/* Date */}
          <div className="bg-jci-blue text-white px-1.5 py-1 md:px-2 font-roboto font-bold flex flex-col justify-center items-center absolute top-0 right-2">
            <span className="text-[18px] md:text-[22px]">{Day}</span>
            <span className="text-[10px] md:text-[11px] -mt-2 uppercase">{Month}</span>
            <span className="text-[10px] md:text-[11px]  uppercase">{Year}</span>
          </div>
          {eventDate > today && (
            <div className="bg-red-600 text-white px-1.5 py-1 md:px-2 font-roboto font-bold flex flex-col justify-center items-center absolute top-0 left-2 ">
              <span className="text-[10px]  uppercase">
                à venir
              </span>
            </div>
          )}

          {/* Type */}
          <span className="px-3 md:px-4 py-0.5 bg-jci-yellow text-[7px] md:text-[8px] text-jci-black font-extrabold font-roboto text-center absolute bottom-0.5 left-0">
            {Type}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col  min-h-0 bg-jci-white p-1 md:p-3 font-poppins text-[#313131]">
          <span className="text-[12px] md:text-[14px] font-bold ">
            {Title}
          </span>

          <p>
            {Content}
          </p>
        </div>

      </div>
      {/* Actions */}
      <div className="flex items-center justify-between gap-2 ">

        <Link
          to={`/blog/evenements/${Id}`}
          className=' flex flex-row iterms-center gap-2 px-3 py-1.5 bg-jci-green rounded-lg text-jci-black font-semibold text-[12px] hover:text-jci-black hover:bg-jci-white hover:border-green-600 border border-transparent cursor-pointer transition-colors duration-300'
        >
          Voir  <LuExternalLink size={16}/>

        </Link>

      </div>
    </div>
  )
}

export default EventCard