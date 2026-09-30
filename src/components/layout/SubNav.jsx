import { NavLink } from 'react-router'

const tabs = [
  { label: "HISTORIQUE", path: "/jci-madagascar" },
  { label: "NOS VALEURS", path: "/jci-madagascar/valeurs" },
  { label: "BUREAU NATIONAL 2026", path: "/jci-madagascar/bureau-national" },
  { label: "NOS PROGRAMMES", path: "/jci-madagascar/programmes" },
  { label: "SÉNAT", path: "/jci-madagascar/senat" },
]

const SubNav = () => {
  return (
    <>
    <div className=' hidden w-fit lg:flex flex-row flex-wrap gap-x-0  gap-0 sm:gap-y-3 justify-center rounded-xl items-center  md:mx-12 lg:ml-20 lg:mr-1   font-roboto font-normal text-[10px]  md:text-[12px] lg:text-[14px] border  border-white/10'>
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          end
          className={({ isActive }) => isActive ? "text-jci-black rounded-xl bg-jci-white py-5  lg:py-3 px-3 sm:px-5 font-semibold scale-105" : "text-jci-white/50 py-5  lg:py-3 px-3 sm:px-5 hover:scale-105 transition-transform duration-300 hover:text-jci-white/70"}
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
     <div className=' lg:hidden flex flex-wrap sm:gap-y-3 justify-center rounded-xl items-center  md:mx-12   font-roboto font-normal text-[10px]  md:text-[14px] mb-3 ml-3 '>
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          end
          className={({ isActive }) => isActive ? "text-jci-black rounded-xl w-fit bg-jci-white py-1  lg:py-3 px-3 sm:px-5 font-semibold" : "text-jci-white/50  py-1  lg:py-3 px-3 sm:px-5"}
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
    </>
  )
}

export default SubNav
