import SubNav from "../../components/layout/SubNav"
import H1 from "../../components/ui/H1"
import Programme1 from "../../images/Programme1.webp"
import Programme2 from "../../images/Programme2.webp"
import Programme3 from "../../images/Programme3.webp"
import Programme4 from "../../images/Programme4.webp"
import Jib from "../../images/JIB.png"

const ProgrammesPage = () => {
  return (
    <div className='min-h-screen font-poppins flex flex-col items-start pt-25 pb-10 px-2 lg:pl-33 lg:pr-10 bg-jci-black gap-2'>
      <SubNav />

      <div className="flex flex-col gap-0 lg:ml-20 lg:mr-1 ml-0 self-center" >
        <div className="flex flex-col  bg-jci-white gap-2 rounded-xl lg:p-3 md:p-3 p-1">
          <div className=" w-full overflow-hidden">
            <div className=" hidden md:grid lg:grid-cols-2 grid-cols-1">
              {/* Grande section du haut */}
              <div className="col-span-2 relative gap-0">
                <img
                  src={Programme1}
                  alt=""
                  className="w-full md:h-[300px] h-[250px] lg:h-[550px] object-cover"
                  loading="eager"
                />
                <div className=" absolute md:top-10 md:left-10 left-5 top-5 text-jci-white font-bold  md:text-[12px] text-[10px]  lg:text-4xl border-l-4  md:border-l-6 py-0  border-jci-blue  pl-2">
                  NOS <br/>
                  PROGRAMMES <br/>
                  NATIONAUX
                </div>
                             
              </div>
              <div className="col-span-2 flex flex-col gap-5 mb-10  md:p-5 p-1 w-full md:mt-0 mt-5">
                  <div className="flex flex-1 flex-col gap-2 "> 
                    <H1 TextColor="text-jci-teal">QUE FAISONS NOUS ?</H1>
                    <p className='md:text-[12px] text-[9px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                      A la Jeune Chambre Internationale de Madagascar, nous 
                      plaçons le développement humain et l’impact au coeur de 
                      notre engagement.
                    </p>
                    <p className='md:text-[12px] text-[9px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                      Nous nous lançons le défi d’identifier les leviers stratégiques 
                      mondiaux permettant à nos membres de maximiser 
                      l’efficacité 
                      de leurs actions pour résoudre les 
                      problématiques qu’encourt notre société tout en renforçant 
                      leurs compétences et leur leadership.
                    </p>


                  </div>
                  <div className="flex flex-1 flex-col gap-3"> 
                    <H1 TextColor="text-jci-teal">COMMENT ?</H1>
                    <p className='md:text-[12px] text-[9px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                      A travers des divers programmes :
                    </p>
                    <ul className='ml-3 -mt-3 list-disc list-inside md:text-[12px] text-[9px] lg:text-[14px] text-jci-black font-poppins leading-relaxed'>
                      <li>La JMA (JCI Malagasy Academy)</li>
                      <li>Art Oratoire & Débat</li>
                      <li>TOYP (Ten Outstanding Young Persons)</li>
                      <li>CYE (CReative Young Entrepreneur)</li>
                    </ul>                   
                  </div>

                </div>

              {/* Image gauche */}
              <div className="flex mx-5 my-2 flex-col mb-5">
                <img
                  src={Programme4}
                  alt=""
                  className="w-full h-[150px] lg:h-[300px] object-cover "
                />
              </div>

              {/* Image droite */}
              <div className="flex mx-5 mt-5 flex-col mb-5">
                  <H1 TextColor="text-jci-teal">CYE – Creative Young Entrepreneur</H1>
                  <p className='md:text-[12px] text-[9px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                    Programme qui accompagne et met en lumière les jeunes entrepreneurs créatifs et innovants, 
                    en leur offrant des opportunités de renforcement de capacités, de visibilité et de développement de leur entreprise.
                  </p>
              </div>

              {/* Image gauche */}
              <div className="flex mx-5 mt-5 flex-col mb-5">
                <H1 TextColor="text-jci-teal">TOYP – Ten Outstanding Young Persons</H1>
                <p className='md:text-[12px] text-[9px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Programme de reconnaissance qui met à l’honneur des jeunes
                  ayant réalisé des contributions et des impacts remarquables dans différents domaines de la société.
                </p>
              </div>

              {/* Image droite */}
              <div className="flex mx-5 my-2 flex-col mb-5">
                <img
                  src={Programme3}
                  alt=""
                  className="w-full h-[150px] lg:h-[300px] object-cover"
                />
              </div>
              {/* Image gauche */}
              <div className="flex mx-5 my-2 flex-col mb-5">
                <img
                  src={Programme4}
                  alt=""
                  className="w-full h-[150px] lg:h-[300px] object-cover"
                />
              </div>

              {/* Image droite */}
              <div className="flex mx-5 mt-5 flex-col mb-5">
                <H1 TextColor="text-jci-teal">Standard Performance Indicator</H1>
                <p className='md:text-[12px] text-[9px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Programme de reconnaissance de la performance des Organisations Locales (OL), basé sur leur efficacité, 
                  leur organisation et leur capacité à atteindre les objectifs fixés au cours de l’année.
                </p>
              </div>

              {/* Image gauche */}
              <div className="flex mx-5 mt-5 flex-col mb-5">
                <H1 TextColor="text-jci-teal">Caravane de l’Éloquence</H1>
                <p className='md:text-[12px] text-[9px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Programme de reconnaissance qui met à l’honneur des jeunes
                  ayant réalisé des contributions et des impacts remarquables dans différents domaines de la société.
                </p>
              </div>

              {/* Image droite */}
              <div className="flex mx-5 my-2 flex-col mb-5">
                <img
                  src={Programme3}
                  alt=""
                  className="w-full h-[150px] lg:h-[300px] object-cover"
                />
              </div>
              {/* Image gauche */}
              <div className="flex mx-5 my-2 flex-col mb-5">
                <img
                  src={Jib}
                  alt=""
                  className="w-full h-[150px] lg:h-[300px] object-contain"
                />
              </div>

              {/* Image droite */}
              <div className="flex mx-5  mt-5 flex-col mb-5">
                <H1 TextColor="text-jci-teal">JCI in Business (JIB)</H1>
                <p className='md:text-[12px] text-[9px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Programme dédié au développement de l’esprit entrepreneurial et des compétences professionnelles des jeunes. 
                  Il favorise l’apprentissage, le réseautage et les échanges avec des entrepreneurs et professionnels.
                </p>
              </div>
            </div>
            <div className=" md:hidden flex flex-col gap-3">
              {/* Grande section du haut */}
              <div className="col-span-2 relative gap-0">
                <img
                  src={Programme1}
                  alt=""
                  className="w-full md:h-[300px] h-[250px] lg:h-[550px] object-cover"
                  loading="eager"
                />
                <div className=" absolute md:top-10 md:left-10 left-5 top-5 text-jci-white font-bold  md:text-[12px] text-[10px]  lg:text-4xl border-l-4  md:border-l-6 py-0  border-jci-blue  pl-2">
                  NOS <br/>
                  PROGRAMMES <br/>
                  NATIONAUX
                </div>
                             
              </div>
              <div className="col-span-2 flex flex-col gap-5  mb-5  p-3 w-full  mt-5">
                  <div className="flex flex-1 flex-col gap-2 "> 
                    <H1 TextColor="text-jci-teal">QUE FAISONS NOUS ?</H1>
                    <p className='md:text-[12px] text-[12px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                      A la Jeune Chambre Internationale de Madagascar, nous 
                      plaçons le développement humain et l’impact au coeur de 
                      notre engagement.
                    </p>
                    <p className='md:text-[12px] text-[12px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                      Nous nous lançons le défi d’identifier les leviers stratégiques 
                      mondiaux permettant à nos membres de maximiser 
                      l’efficacité 
                      de leurs actions pour résoudre les 
                      problématiques qu’encourt notre société tout en renforçant 
                      leurs compétences et leur leadership.
                    </p>


                  </div>
                  <div className="flex flex-1 flex-col gap-3"> 
                    <H1 TextColor="text-jci-teal">COMMENT ?</H1>
                    <p className='md:text-[12px] text-[12px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                      A travers des divers programmes :
                    </p>
                    <ul className='ml-3 -mt-3 list-disc list-inside md:text-[12px] text-[12px] lg:text-[14px] text-jci-black font-poppins leading-relaxed'>
                      <li>La JMA (JCI Malagasy Academy)</li>
                      <li>Art Oratoire & Débat</li>
                      <li>TOYP (Ten Outstanding Young Persons)</li>
                      <li>CYE (CReative Young Entrepreneur)</li>
                    </ul>                   
                  </div>

                </div>

              {/* Image droite */}
              <div className="flex px-3 mt-5 flex-col mb-2">
                  <H1 TextColor="text-jci-teal">CYE – Creative Young Entrepreneur</H1>
                  <p className='md:text-[12px] text-[12px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                    Programme qui accompagne et met en lumière les jeunes entrepreneurs créatifs et innovants, 
                    en leur offrant des opportunités de renforcement de capacités, de visibilité et de développement de leur entreprise.
                  </p>
              </div>
              {/* Image gauche */}
              <div className="flex  flex-col mb-2 px-3">
                <img
                  src={Programme4}
                  alt=""
                  className="w-full h-[200px] lg:h-[300px] object-cover "
                />
              </div>


              {/* Image gauche */}
              <div className="flex px-3 mt-5 flex-col mb-2">
                <H1 TextColor="text-jci-teal">TOYP – Ten Outstanding Young Persons</H1>
                <p className='md:text-[12px] text-[12px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Programme de reconnaissance qui met à l’honneur des jeunes
                  ayant réalisé des contributions et des impacts remarquables dans différents domaines de la société.
                </p>
              </div>

              {/* Image droite */}
              <div className="flex  flex-col mb-2 px-3">
                <img
                  src={Programme3}
                  alt=""
                  className="w-full h-[150px] lg:h-[300px] object-cover"
                />
              </div>

              {/* Image droite */}
              <div  className="flex px-3 mt-5 flex-col mb-2">
                <H1 TextColor="text-jci-teal">Standard Performance Indicator</H1>
                <p className='md:text-[12px] text-[12px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Programme de reconnaissance de la performance des Organisations Locales (OL), basé sur leur efficacité, 
                  leur organisation et leur capacité à atteindre les objectifs fixés au cours de l’année.
                </p>
              </div>
              {/* Image gauche */}
              <div className="flex  flex-col mb-2 px-3">
                <img
                  src={Programme4}
                  alt=""
                  className="w-full h-[150px] lg:h-[300px] object-cover"
                />
              </div>

              {/* Image gauche */}
              <div  className="flex px-3 mt-5 flex-col mb-2">
                <H1 TextColor="text-jci-teal">Caravane de l’Éloquence</H1>
                <p className='md:text-[12px] text-[12px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Programme de reconnaissance qui met à l’honneur des jeunes
                  ayant réalisé des contributions et des impacts remarquables dans différents domaines de la société.
                </p>
              </div>

              {/* Image droite */}
              <div className="flex  flex-col mb-2 px-3">
                <img
                  src={Programme3}
                  alt=""
                  className="w-full h-[150px] lg:h-[300px] object-cover"
                />
              </div>

              {/* Image droite */}
              <div className="flex px-3 mt-5 flex-col mb-2">
                <H1 TextColor="text-jci-teal">JCI in Business (JIB)</H1>
                <p className='md:text-[12px] text-[12px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Programme dédié au développement de l’esprit entrepreneurial et des compétences professionnelles des jeunes. 
                  Il favorise l’apprentissage, le réseautage et les échanges avec des entrepreneurs et professionnels.
                </p>
              </div>
              {/* Image gauche */}
              <div className="flex  flex-col mb-5 px-3">
                <img
                  src={Jib}
                  alt=""
                  className="w-full h-[150px] lg:h-[300px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgrammesPage
