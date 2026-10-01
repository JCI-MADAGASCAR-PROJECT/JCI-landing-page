import SubNav from "../../components/layout/SubNav"
import H1 from "../../components/ui/H1"
import Reveal from "../../components/ui/Reveal"
import Programme1 from "../../images/Programme1.webp"
import Programme2 from "../../images/Programme2.webp"
import Programme5 from "../../images/Programme5.webp"
import JIB_Inverted from "../../images/JIB_Inverted.png"
import CYE_Inverted from "../../images/CYE_Inverted.png"
import TOYP_Inverted from "../../images/TOYP_Inverted.png"
import JCI_RISE_Inverted from "../../images/JCI_RISE_Inverted.png"
import IHD_Inverted from "../../images/IHD_Inverted.png"

const ProgrammesPage = () => {
  return (
    <div className='min-h-screen font-poppins flex flex-col items-start pt-25 pb-10 px-2 lg:pl-33 lg:pr-10 bg-jci-black gap-2'>
      <SubNav />

      <div className="flex flex-col gap-0 lg:ml-20 lg:mr-1 ml-0 self-center" >
        <div className="flex flex-col  bg-jci-white gap-2 rounded-xl lg:p-3 md:p-3 p-1">
          <div className=" w-full overflow-hidden">
            {/**DESKTOP */}
            <div className=" hidden md:grid lg:grid-cols-2 grid-cols-1">
              {/* Grande section du haut */}
              <div className="col-span-2 relative gap-0">
                <Reveal from="fade" duration={1000} threshold={0.05}>
                  <img
                    src={Programme1}
                    alt=""
                    className="w-full md:h-[300px] h-[250px] lg:h-[550px] object-cover"
                    loading="eager"
                  />
                </Reveal>
                <Reveal
                  from="left"
                  delay={400}
                  duration={900}
                  threshold={0.05}
                  className=" absolute md:top-10 md:left-10 left-5 top-5 text-jci-white font-bold  md:text-[12px] text-[10px]  lg:text-4xl border-l-4  md:border-l-6 py-0  border-jci-blue  pl-2"
                >
                  NOS <br/>
                  PROGRAMMES <br/>
                  NATIONAUX
                </Reveal>
              </div>

              <div className="col-span-2 flex flex-col gap-5 mb-10  md:p-5 p-1 w-full md:mt-0 mt-5">
                  <Reveal from="up" className="flex flex-1 flex-col gap-2 ">
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
                  </Reveal>

                  <Reveal from="up" delay={150} className="flex flex-1 flex-col gap-3">
                    <H1 TextColor="text-jci-teal">COMMENT ?</H1>
                    <p className='md:text-[12px] text-[9px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                      A travers des divers programmes :
                    </p>
                    <ul className='ml-3 -mt-3 list-disc list-inside md:text-[12px] text-[9px] lg:text-[14px] text-jci-black font-poppins leading-relaxed'>
                      {/* Les éléments de liste apparaissent l'un après l'autre */}
                      <Reveal as="li" from="left" delay={100}>La JMA (JCI Malagasy Academy)</Reveal>
                      <Reveal as="li" from="left" delay={220}>Art Oratoire & Débat</Reveal>
                      <Reveal as="li" from="left" delay={340}>TOYP (Ten Outstanding Young Persons)</Reveal>
                      <Reveal as="li" from="left" delay={460}>CYE (CReative Young Entrepreneur)</Reveal>
                    </ul>
                  </Reveal>
              </div>

              {/* CYE : image gauche */}
              <Reveal from="left" className="flex mx-5 my-2 flex-col mb-5 bg-[#184459] py-3">
                <img
                  src={CYE_Inverted}
                  alt="CYE Logo"
                  className="w-full h-[150px] lg:h-[270px] object-contain "
                />
              </Reveal>

              {/* CYE : texte droite */}
              <Reveal from="right" delay={150} className="flex mx-5 mt-5 flex-col mb-5">
                  <H1 TextColor="text-jci-teal">CYE – Creative Young Entrepreneur</H1>
                  <p className='md:text-[12px] text-[9px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                    Programme qui accompagne et met en lumière les jeunes entrepreneurs créatifs et innovants,
                    en leur offrant des opportunités de renforcement de capacités, de visibilité et de développement de leur entreprise.
                  </p>
              </Reveal>

              {/* TOYP : texte gauche */}
              <Reveal from="left" className="flex mx-5 mt-5 flex-col mb-5">
                <H1 TextColor="text-jci-teal">TOYP – Ten Outstanding Young Persons</H1>
                <p className='md:text-[12px] text-[9px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Programme de reconnaissance qui met à l’honneur des jeunes
                  ayant réalisé des contributions et des impacts remarquables dans différents domaines de la société.
                </p>
              </Reveal>

              {/* TOYP : image droite */}
              <Reveal from="right" delay={150} className="flex mx-5 my-2 flex-col mb-5 bg-[#184459] py-3">
                <img
                  src={TOYP_Inverted}
                  alt=""
                  className="w-full h-[150px] lg:h-[270px] object-contain"
                />
              </Reveal>

              {/* SPI : image gauche */}
              <Reveal from="left" className="flex mx-5 my-2 flex-col mb-5">
                <img
                  src={Programme2}
                  alt=""
                  className="w-full h-[150px] lg:h-[300px] object-contain"
                />
              </Reveal>

              {/* SPI : texte droite */}
              <Reveal from="right" delay={150} className="flex mx-5 mt-5 flex-col mb-5">
                <H1 TextColor="text-jci-teal">Standard Performance Indicator</H1>
                <p className='md:text-[12px] text-[9px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Programme de reconnaissance de la performance des Organisations Locales (OL), basé sur leur efficacité,
                  leur organisation et leur capacité à atteindre les objectifs fixés au cours de l’année.
                </p>
              </Reveal>

              {/* Caravane : texte gauche */}
              <Reveal from="left" className="flex mx-5 mt-5 flex-col mb-5">
                <H1 TextColor="text-jci-teal">Caravane de l’Éloquence</H1>
                <p className='md:text-[12px] text-[9px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Initiative visant à renforcer les compétences des jeunes en prise de parole en public,
                  en art oratoire et en débat. Elle contribue au développement de la confiance en soi, de l’argumentation et du leadership.
                </p>
              </Reveal>

              {/* Caravane : image droite */}
              <Reveal from="right" delay={150} className="flex mx-5 my-2 flex-col mb-5">
                <img
                  src={Programme5}
                  alt=""
                  className="w-full h-[150px] lg:h-[270px] object-cover"
                />
              </Reveal>

              {/* JIB : image gauche */}
              <Reveal from="left" className="flex mx-5 my-2 flex-col mb-5 bg-[#184459] py-3">
                <img
                  src={JIB_Inverted}
                  alt=""
                  className="w-full h-[150px] lg:h-[270px] object-contain"
                />
              </Reveal>

              {/* JIB : texte droite */}
              <Reveal from="right" delay={150} className="flex mx-5  mt-5 flex-col mb-5">
                <H1 TextColor="text-jci-teal">JCI in Business (JIB)</H1>
                <p className='md:text-[12px] text-[9px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Programme dédié au développement de l’esprit entrepreneurial et des compétences professionnelles des jeunes.
                  Il favorise l’apprentissage, le réseautage et les échanges avec des entrepreneurs et professionnels.
                </p>
              </Reveal>

              {/* Human Duties Day : texte gauche */}
              <Reveal from="left" className="flex mx-5  mt-5 flex-col mb-5">
                <H1 TextColor="text-jci-teal">Human Duties Day (Journée des Devoirs Humains)</H1>
                <p className='md:text-[12px] text-[9px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Le <span className="font-bold">Human Duties Day</span> (Journée des Devoirs Humains), célébré chaque <span className="font-bold">10 décembre </span>
                   par la JCI en parallèle de la Journée des droits de l'homme, rappelle qu'à chaque droit
                   correspond un devoir envers la communauté : à travers des actions concrètes
                   (écologie, entraide, don du sang), il incite chacun à devenir un citoyen actif et
                   responsable pour faire évoluer la société.
                </p>
              </Reveal>

              {/* Human Duties Day : image droite */}
              <Reveal from="right" delay={150} className="flex mx-5 my-2 flex-col mb-5 bg-[#184459] py-3">
                <img
                  src={IHD_Inverted}
                  alt=""
                  className="w-full h-[150px] lg:h-[270px] object-contain"
                />
              </Reveal>

              {/* JCI Rise : image gauche */}
              <Reveal from="left" className="flex mx-5 my-2 flex-col mb-5 bg-[#184459] py-3">
                <img
                  src={JCI_RISE_Inverted}
                  alt=""
                  className="w-full h-[150px] lg:h-[270px] object-contain"
                />
              </Reveal>

              {/* JCI Rise : texte droite */}
              <Reveal from="right" delay={150} className="flex mx-5  mt-5 flex-col mb-5">
                <H1 TextColor="text-jci-teal">JCI Rise</H1>
                <p className='md:text-[12px] text-[9px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Le <span className="font-bold">JCI RISE</span> (Rebuild, Invest, Sustain, Evolve) est une initiative mondiale lancée par
                  la JCI pour répondre aux défis économiques et sociaux post-pandémie : elle engage les
                  jeunes leaders à <span className="font-bold">reconstruire les économies locales, </span><span className="font-bold">investir dans la jeunesse, </span>
                  <span className="font-bold">pérenniser les entreprises</span> et <span className="font-bold">faire évoluer les mentalités</span> pour une reprise durable.
                </p>
              </Reveal>

            </div>

            {/**MOBILE */}
            <div className=" md:hidden flex flex-col gap-3">
              {/* Grande section du haut */}
              <div className="col-span-2 relative gap-0">
                <Reveal from="fade" duration={1000} threshold={0.05}>
                  <img
                    src={Programme1}
                    alt=""
                    className="w-full md:h-[300px] h-[250px] lg:h-[550px] object-cover"
                    loading="eager"
                  />
                </Reveal>
                <Reveal
                  from="left"
                  delay={400}
                  duration={900}
                  threshold={0.05}
                  className=" absolute md:top-10 md:left-10 left-5 top-5 text-jci-white font-bold  md:text-[12px] text-[10px]  lg:text-4xl border-l-4  md:border-l-6 py-0  border-jci-blue  pl-2"
                >
                  NOS <br/>
                  PROGRAMMES <br/>
                  NATIONAUX
                </Reveal>
              </div>

              <div className="col-span-2 flex flex-col gap-5  mb-5  p-3 w-full  mt-5">
                  <Reveal from="up" className="flex flex-1 flex-col gap-2 ">
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
                  </Reveal>

                  <Reveal from="up" className="flex flex-1 flex-col gap-3">
                    <H1 TextColor="text-jci-teal">COMMENT ?</H1>
                    <p className='md:text-[12px] text-[12px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                      A travers des divers programmes :
                    </p>
                    <ul className='ml-3 -mt-3 list-disc list-inside md:text-[12px] text-[12px] lg:text-[14px] text-jci-black font-poppins leading-relaxed'>
                      <Reveal as="li" from="left" delay={100}>La JMA (JCI Malagasy Academy)</Reveal>
                      <Reveal as="li" from="left" delay={220}>Art Oratoire & Débat</Reveal>
                      <Reveal as="li" from="left" delay={340}>TOYP (Ten Outstanding Young Persons)</Reveal>
                      <Reveal as="li" from="left" delay={460}>CYE (CReative Young Entrepreneur)</Reveal>
                    </ul>
                  </Reveal>
              </div>

              {/* CYE */}
              <Reveal from="up" className="flex px-3 mt-5 flex-col mb-2">
                  <H1 TextColor="text-jci-teal">CYE – Creative Young Entrepreneur</H1>
                  <p className='md:text-[12px] text-[12px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                    Programme qui accompagne et met en lumière les jeunes entrepreneurs créatifs et innovants,
                    en leur offrant des opportunités de renforcement de capacités, de visibilité et de développement de leur entreprise.
                  </p>
              </Reveal>
              <Reveal from="zoom" className="flex mx-5 my-2 flex-col mb-5 bg-[#184459] py-3">
                <img
                  src={CYE_Inverted}
                  alt=""
                  className="w-full h-[150px] lg:h-[270px] object-contain "
                />
              </Reveal>

              {/* TOYP */}
              <Reveal from="up" className="flex px-3 mt-5 flex-col mb-2">
                <H1 TextColor="text-jci-teal">TOYP – Ten Outstanding Young Persons</H1>
                <p className='md:text-[12px] text-[12px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Programme de reconnaissance qui met à l’honneur des jeunes
                  ayant réalisé des contributions et des impacts remarquables dans différents domaines de la société.
                </p>
              </Reveal>
              <Reveal from="zoom" className="flex mx-5 my-2 flex-col mb-5 bg-[#184459] py-3">
                <img
                  src={TOYP_Inverted}
                  alt=""
                  className="w-full h-[150px] lg:h-[270px] object-contain"
                />
              </Reveal>

              {/* Standard Performance Indicator */}
              <Reveal from="up" className="flex px-3 mt-5 flex-col mb-2">
                <H1 TextColor="text-jci-teal">Standard Performance Indicator</H1>
                <p className='md:text-[12px] text-[12px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Programme de reconnaissance de la performance des Organisations Locales (OL), basé sur leur efficacité,
                  leur organisation et leur capacité à atteindre les objectifs fixés au cours de l’année.
                </p>
              </Reveal>
              <Reveal from="zoom" className="flex mx-5 my-2 flex-col mb-5">
                <img
                  src={Programme2}
                  alt=""
                  className="w-full h-[150px] lg:h-[300px] object-cover"
                />
              </Reveal>

              {/* Caravane de l'Éloquence (texte corrigé : il reprenait celui du TOYP) */}
              <Reveal from="up" className="flex px-3 mt-5 flex-col mb-2">
                <H1 TextColor="text-jci-teal">Caravane de l’Éloquence</H1>
                <p className='md:text-[12px] text-[12px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Initiative visant à renforcer les compétences des jeunes en prise de parole en public,
                  en art oratoire et en débat. Elle contribue au développement de la confiance en soi, de l’argumentation et du leadership.
                </p>
              </Reveal>
              <Reveal from="zoom" className="flex mx-5 my-2 flex-col mb-5">
                <img
                  src={Programme5}
                  alt=""
                  className="w-full h-[150px] lg:h-[270px] object-cover"
                />
              </Reveal>

              {/* JIB */}
              <Reveal from="up" className="flex px-3 mt-5 flex-col mb-2">
                <H1 TextColor="text-jci-teal">JCI in Business (JIB)</H1>
                <p className='md:text-[12px] text-[12px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Programme dédié au développement de l’esprit entrepreneurial et des compétences professionnelles des jeunes.
                  Il favorise l’apprentissage, le réseautage et les échanges avec des entrepreneurs et professionnels.
                </p>
              </Reveal>
              <Reveal from="zoom" className="flex mx-5 my-2 flex-col mb-5 bg-[#184459] py-3">
                <img
                  src={JIB_Inverted}
                  alt=""
                  className="w-full h-[150px] lg:h-[270px] object-contain"
                />
              </Reveal>

              {/* Human Duties Day */}
              <Reveal from="up" className="flex mx-5  mt-5 flex-col mb-5">
                <H1 TextColor="text-jci-teal">Human Duties Day (Journée des Devoirs Humains)</H1>
                <p className='md:text-[12px] text-[12px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Le <span className="font-bold">Human Duties Day</span> (Journée des Devoirs Humains), célébré chaque <span className="font-bold">10 décembre </span>
                   par la JCI en parallèle de la Journée des droits de l'homme, rappelle qu'à chaque droit
                   correspond un devoir envers la communauté : à travers des actions concrètes
                   (écologie, entraide, don du sang), il incite chacun à devenir un citoyen actif et
                   responsable pour faire évoluer la société.
                </p>
              </Reveal>
              <Reveal from="zoom" className="flex mx-5 my-2 flex-col mb-5 bg-[#184459] py-3">
                <img
                  src={IHD_Inverted}
                  alt=""
                  className="w-full h-[150px] lg:h-[270px] object-contain"
                />
              </Reveal>

              {/* JCI Rise */}
              <Reveal from="up" className="flex mx-5  mt-5 flex-col mb-5">
                <H1 TextColor="text-jci-teal">JCI Rise</H1>
                <p className='md:text-[12px] text-[12px] lg:text-[14px] font-normal font-poppins text-jci-black leading-relaxed text-justify'>
                  Le <span className="font-bold">JCI RISE</span> (Rebuild, Invest, Sustain, Evolve) est une initiative mondiale lancée par
                  la JCI pour répondre aux défis économiques et sociaux post-pandémie : elle engage les
                  jeunes leaders à <span className="font-bold">reconstruire les économies locales, </span><span className="font-bold">investir dans la jeunesse, </span>
                  <span className="font-bold">pérenniser les entreprises</span> et <span className="font-bold">faire évoluer les mentalités</span> pour une reprise durable.
                </p>
              </Reveal>
              <Reveal from="zoom" className="flex mx-5 my-2 flex-col mb-5 bg-[#184459] py-3">
                <img
                  src={JCI_RISE_Inverted}
                  alt=""
                  className="w-full h-[150px] lg:h-[270px] object-contain"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgrammesPage