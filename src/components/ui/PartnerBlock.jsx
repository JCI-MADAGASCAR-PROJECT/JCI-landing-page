import LabelTraitSimple from './LabelTraitSimple';
import Reveal from './Reveal';


const PartnerBlock = ({ Name, Content, Reverse, Logo, ImageFond, BGColor, LabelColor, H1Color, ContentColor, Title, PertenairType }) => {
  return (
    <div className={`flex flex-col items-start justify-start  py-15 overflow-hidden w-full max-w-full pb-10 px-6 lg:pl-32  lg:px-35 ${BGColor ? BGColor : ""}`}>
      <div className='lg:ml-30 lg:mr-1  '>
        <div className="">
          {!Reverse ?
          <>
            <div className='group hidden md:flex flex-col lg:flex-row justify-between items-start w-full  hover:scale-101  transition-all duration-300 md:gap-10 gap-10 lg:gap-15'>
              <div className=' flex flex-col flex-2 min-w-0'>
                <Reveal from="left" duration={1000} threshold={0.05}>
                <LabelTraitSimple Label={`Partenaire ${PertenairType ? PertenairType : "National"}`} H1Text={Name} LabelColor={LabelColor} H1Color={H1Color}/>
                </Reveal>
                <Reveal from="left" duration={1000} threshold={0.05}>
                <q className={`lg:text-[14px] md:text-[13px] text-[13px] font-bold mt-2 ${H1Color ? H1Color : 'text-jci-black'}`}>
                  {Title}
                </q>
                </Reveal>
                <Reveal from="left" duration={1000} threshold={0.05}>
                <p className={`lg:text-[12px] md:text-[12px] text-[12px] text-justify ${ContentColor ? ContentColor : 'text-jci-black'}`}>
                  {Content}
                </p>
                </Reveal>
              </div>
              <Reveal from="right" duration={1000} threshold={0.05}>
                <div className='relative min-w-0 flex flex-col flex-1 w-full  items-end lg:mt-12 mt-0 transition-all duration-300'>
                  
                  <img
                    src={ImageFond}
                    alt="Image de Fond Partenaire"
                    className="max-w-full max-h-full w-full h-[250px] object-cover object-center rounded-xl group-hover:shadow-xl shadow-black/50 transition-all duration-300  "
                  />
                  <div className='absolute -bottom-3 -right-3 group-hover:-right-5  rounded p-2 w-fit bg-jci-white border border-gray-400 transition-all duration-300 '>
                    <img src={Logo} alt="Logo" className='h-16 w-auto object-cover' />
                  </div>
                </div>
              </Reveal>
            </div>
            <div className='group md:hidden flex flex-col lg:flex-row justify-between items-start w-full  hover:scale-101  transition-all duration-300 md:gap-10 gap-10 lg:gap-15'>
              <Reveal from="right" duration={1000} threshold={0.05}>
                <div className='relative min-w-0 flex flex-col flex-1 w-full  items-end lg:mt-12 mt-0 transition-all duration-300'>
                  
                  <img
                    src={ImageFond}
                    alt="Image de Fond Partenaire"
                    className="max-w-full max-h-full w-full h-[250px] object-cover object-center rounded-xl group-hover:shadow-xl shadow-black/50 transition-all duration-300  "
                  />
                  <div className='absolute -bottom-3 -right-3 group-hover:-right-5  rounded p-2 w-fit bg-jci-white border border-gray-400 transition-all duration-300 '>
                    <img src={Logo} alt="Logo" className='h-16 w-auto object-cover' />
                  </div>
                </div>
              </Reveal>
              <div className=' flex flex-col flex-2 min-w-0'>
                <Reveal from="left" duration={1000} threshold={0.05}>
                <LabelTraitSimple Label={`Partenaire ${PertenairType ? PertenairType : "National"}`} H1Text={Name} LabelColor={LabelColor} H1Color={H1Color}/>
                </Reveal>
                <Reveal from="left" duration={1000} threshold={0.05}>
                <q className={`lg:text-[14px] md:text-[13px] text-[13px] font-bold mt-2 ${H1Color ? H1Color : 'text-jci-black'}`}>
                  {Title}
                </q>
                </Reveal>
                <Reveal from="left" duration={1000} threshold={0.05}>
                <p className={`lg:text-[12px] md:text-[12px] text-[12px] text-justify ${ContentColor ? ContentColor : 'text-jci-black'}`}>
                  {Content}
                </p>
                </Reveal>
              </div>
              
            </div>
            </>
            :
            <div className=' group flex flex-col lg:flex-row justify-between items-start w-full hover:scale-101  transition-all duration-300  md:gap-10 gap-10 lg:gap-15'>
              <Reveal from="left" duration={1000} threshold={0.05}>
              <div className='relative min-w-0 flex flex-col flex-1 w-full items-end lg:mt-12 mt-0'>
                <img
                  src={ImageFond}
                  alt="Image de Fond Partenaire"
                  className="max-w-full max-h-full w-full h-[250px] object-cover object-center rounded-xl group-hover:shadow-xl shadow-black/50 transition-all duration-300  "
                />
                <div className='absolute -bottom-3 left-0 group-hover:-left-5 rounded p-2 w-fit bg-jci-white border border-gray-400 transition-all duration-300'>
                  <img src={Logo} alt="Logo" className='h-16 w-auto object-cover' />
                </div>
              </div>
              </Reveal>
              <div className=' flex flex-col flex-2 min-w-0'>
                <Reveal from="right" duration={1000} threshold={0.05}>
                <LabelTraitSimple Label={`Partenaire ${PertenairType ? PertenairType : "National"}`} H1Text={Name} LabelColor={LabelColor} H1Color={H1Color}/>
                </Reveal>
                <Reveal from="right" duration={1000} threshold={0.05}>
                <q className={`lg:text-[14px] md:text-[13px] text-[13px] font-bold mt-2 ${H1Color ? H1Color : 'text-jci-black'}`}>
                  {Title}
                </q>
                </Reveal>
                <Reveal from="right" duration={1000} threshold={0.05}>
                <p className={`lg:text-[12px] md:text-[12px] text-[12px] text-justify  ${ContentColor ? ContentColor : 'text-jci-black'}`}>
                  {Content}
                </p>
                </Reveal>
              </div>
            </div>
          }
          
        </div>
      </div>
    </div>
  )
}

export default PartnerBlock
