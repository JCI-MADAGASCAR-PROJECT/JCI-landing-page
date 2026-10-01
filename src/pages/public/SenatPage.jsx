import SubNav from "../../components/layout/SubNav"
import H2 from "../../components/ui/H2"
import Reveal from "../../components/ui/Reveal"
import LabelTraitSimple from "../../components/ui/LabelTraitSimple"
import ValueCredoBlock from "../../components/ui/ValueCredoBlock"
import SenatImage from "../../images/Senat-removebg-preview.png"

const SenatPage = () => {
  return (
    <div className='min-h-screen font-poppins flex flex-col items-start pt-25 pb-10 px-2 lg:pl-33 lg:pr-10 bg-jci-black gap-2'>
      <SubNav />

      <div className="hidden md:flex flex-col gap-0 lg:ml-20 lg:mr-1">
        <div className="group flex lg:flex-row flex-col  bg-jci-white gap-10 rounded-xl lg:px-10 px-5 lg:p-5 p-2 overflow-hidden">
          <div className='flex flex-1 md:flex-2 flex-col gap-1 items-start text-start max-w-full  '>
            
            <Reveal from="left" duration={1000} threshold={0.05}>
              <LabelTraitSimple Label="Présentation" H1Text="Le sénat - Madagascar" />
            </Reveal>
            <Reveal from="left" duration={1000} threshold={0.05}>
              <p className='lg:text-[12px] md:text-[12px] text-[12px] font-normal font-poppins text-jci-black text-justify'>
                Eminuit autem inter humilia supergressa iam impotentia fines mediocrium delictorum nefanda Clematii cuiusdam Alexandrini nobilis 
                mors repentina; cuius socrus cum misceri sibi generum, flagrans eius amore, non impetraret, ut ferebatur, per palatii pseudothyrum 
                introducta, oblato pretioso reginae monili id adsecuta est, ut ad Honoratum tum comitem orientis formula missa letali omnino scelere 
                nullo contactus idem Clematius nec hiscere nec loqui permissus occideretur.
              </p>
            </Reveal>
           
            <div className='flex lg:flex-row flex-col md:gap-10 gap-5'>
              <div className="flex flex-col flex-1 gap-5 md:gap-10">
                <Reveal from="left" duration={1000} threshold={0.05}>
                <div className="flex flex-col mt-5"> 
                  <H2>Le titre de Sénateur JCI</H2>
                  <p className='lg:text-[12px] md:text-[12px] text-[12px] font-normal font-poppins text-jci-black text-justify'>
                    Un sénateur JCI est un membre de la Jeune Chambre 
                    Internationale reconnu pour son mérite et son exemplarité dans 
                    son parcours dans l’association. Il s’agit d’une distinction interne 
                    remise sur proposition d’une organisation Locale, après 
                    validation de l’organisation nationale et toujours sur décision du 
                    président mondial de la JCI.       
                  </p>
                  <p className='lg:text-[12px] md:text-[12px] text-[12px] mt-3 font-normal font-poppins text-jci-black text-justify'>
                    Un membre recevant le sénat JCI, devient « membre à vie » de 
                    l’organisation. Il peut de ce fait continuer à soutenir le 
                    mouvement et aider à répandre les valeurs de la JCI. A partir de 
                    40 ans, un sénateur JCI n’est plus adhérent mais une sorte de 
                    membre « honoraire ».       
                  </p>
                </div>
              </Reveal>
              </div>
              <div  className="flex flex-1 flex-col gap-5 mt-5 md:gap-10">
                <Reveal from="left" duration={1000} threshold={0.05}>
                <ValueCredoBlock 
                  Title="Objectifs d'un sénateur" 
                  Content="Le rôle d’un sénateur est de promouvoir la solidarité et l’amitié 
                    des sénateurs à travers le monde, de constituer une ressource 
                    pour le sponsoring des projets de son Organisation Locale ainsi 
                    que pour le mentoring des membres et le développement de 
                    JCI." />
                </Reveal>
              </div>

            </div>
          </div>
          <div className='flex flex-1 md:flex-col flex-col gap-10'>
            <Reveal from="right" duration={1000} threshold={0.05}>
            <img src={SenatImage} alt="Image logo Sénateur JCI (Jesus's blood)" className="lg:h-auto h-[200px] w-full object-contain rounded-xl group-hover:scale-102  transition-all duration-300" />
            </Reveal>
          </div>
        </div>

      </div>
      <div className="flex md:hidden flex-col gap-0 lg:ml-20 lg:mr-1">
        <div className=" relative group flex lg:flex-row flex-col  bg-jci-white gap-10 rounded-xl lg:px-10 px-5 lg:p-5 p-2 overflow-hidden">
          <div className='flex flex-1 md:flex-2 flex-col gap-1 items-start text-start max-w-full  '>
            
            <Reveal from="bottom" duration={1000} threshold={0.05}>
              <LabelTraitSimple Label="Présentation" H1Text="Le sénat - Madagascar" H1TextSize="text-xl"/>
            </Reveal>
            <Reveal from="bottom" duration={1000} threshold={0.05}>
              <p className='lg:text-[12px] md:text-[12px] text-[12px] font-normal font-poppins text-jci-black text-justify'>
                Eminuit autem inter humilia supergressa iam impotentia fines mediocrium delictorum nefanda Clematii cuiusdam Alexandrini nobilis 
                mors repentina; cuius socrus cum misceri sibi generum, flagrans eius amore, non impetraret, ut ferebatur, per palatii pseudothyrum 
                introducta, oblato pretioso reginae monili id adsecuta est, ut ad Honoratum tum comitem orientis formula missa letali omnino scelere 
                nullo contactus idem Clematius nec hiscere nec loqui permissus occideretur.
              </p>
            </Reveal>
           
            <div className='flex lg:flex-row flex-col md:gap-10 gap-5'>
              <div className="flex flex-col flex-1 gap-5 md:gap-10">
                <Reveal from="bottom" duration={1000} threshold={0.05}>
                <div className="flex flex-col mt-5"> 
                  <H2>Le titre de Sénateur JCI</H2>
                  <p className='lg:text-[12px] md:text-[12px] text-[12px] font-normal font-poppins text-jci-black text-justify'>
                    Un sénateur JCI est un membre de la Jeune Chambre 
                    Internationale reconnu pour son mérite et son exemplarité dans 
                    son parcours dans l’association. Il s’agit d’une distinction interne 
                    remise sur proposition d’une organisation Locale, après 
                    validation de l’organisation nationale et toujours sur décision du 
                    président mondial de la JCI.       
                  </p>
                  <p className='lg:text-[12px] md:text-[12px] text-[12px] mt-3 font-normal font-poppins text-jci-black text-justify'>
                    Un membre recevant le sénat JCI, devient « membre à vie » de 
                    l’organisation. Il peut de ce fait continuer à soutenir le 
                    mouvement et aider à répandre les valeurs de la JCI. A partir de 
                    40 ans, un sénateur JCI n’est plus adhérent mais une sorte de 
                    membre « honoraire ».       
                  </p>
                </div>
              </Reveal>
              </div>
              <div  className="flex flex-1 flex-col gap-5 mt-5 md:gap-10">
                <Reveal from="bottom" duration={1000} threshold={0.05}>
                <ValueCredoBlock 
                  Title="Objectifs d'un sénateur" 
                  Content="Le rôle d’un sénateur est de promouvoir la solidarité et l’amitié 
                    des sénateurs à travers le monde, de constituer une ressource 
                    pour le sponsoring des projets de son Organisation Locale ainsi 
                    que pour le mentoring des membres et le développement de 
                    JCI." />
                </Reveal>
              </div>

            </div>
          </div>
          <div className=' absolute opacity-40 top-0 left-0'>
            <Reveal from="bottom" duration={1000} threshold={0.05}>
            <img src={SenatImage} alt="Image logo Sénateur JCI (Jesus's blood)" className="lg:h-auto h-[680px]  w-full object-contain rounded-xl group-hover:scale-102  transition-all duration-300" />
            </Reveal>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SenatPage
