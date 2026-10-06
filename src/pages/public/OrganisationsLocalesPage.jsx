import ZoneFilterTabs from "../../components/layout/ZoneFilterTabs"
import Mada from "../../images/MadaLocalOrg.webp"
import LabelTraitSimple from "../../components/ui/LabelTraitSimple"
import JCIAmbilobe from "../../images/JCI/JCI Ambilobe/JCI Ambilobe background marine blue logo.webp"
import JCIAntananarivo from "../../images/JCI/JCI Antananarivo/JCI Antananarivo background blue logo.webp"
import JCIAntsiranana from "../../images/JCI/JCI Antsiaranana/JCI Antsiranana color.webp"
import JCIAntsohihy from "../../images/JCI/JCI Antsohihy/JCI Antsohihy background marine blue logo.webp"
import JCIFaradofay from "../../images/JCI/JCI Faradofay/JCI Faradofay background blue logo.webp"
import JCIIarivo from "../../images/JCI/JCI Iarivo/JCI Iarivo color logo.webp"
import JCIIlonIarivo from "../../images/JCI/JCI Ilon_Iarivo/JCI Ilon_Iarivo background marine blue logo.webp"
import JCIIvonea from "../../images/JCI/JCI Ivonea/JCI Ivonea color logo.webp"
import JCIMahajanga from "../../images/JCI/JCI Mahajanga/JCI Mahajanga background marine blue logo.webp"
import JCIMayendeleyo from "../../images/JCI/JCI Mayendeleyo/JCI Mayendeleyo background blue logo.webp"
import JCINosyBe from "../../images/JCI/JCI Nosy Be/JCI Nosy Be color logo.webp"
import JCISambava from "../../images/JCI/JCI Sambava/JCI Sambava background marine blue logo.webp"
import JCIToamasina from "../../images/JCI/JCI Toamasina/JCI Toamasina background blue logo.webp"
import JCIToliara from "../../images/JCI/JCI Toliara/JCI Toliara color logo.webp"
import Reveal from "../../components/ui/Reveal"
import SEO from "../../components/common/SEO"

const listeOl1 =[
  { name: "JCI Ambilobe", logo: JCIAmbilobe },
  { name: "JCI Antananarivo", logo: JCIAntananarivo },
  { name: "JCI Antsiranana", logo: JCIAntsiranana },
  { name: "JCI Antsohihy", logo: JCIAntsohihy },
  { name: "JCI Faradofay", logo: JCIFaradofay },
  { name: "JCI Iarivo", logo: JCIIarivo },
  { name: "JCI Ilon Iarivo", logo: JCIIlonIarivo },
 
]
const listeOl2 = [
  { name: "JCI Ivonea", logo: JCIIvonea },
  { name: "JCI Mahajanga", logo: JCIMahajanga },
  { name: "JCI Mayendeleyo", logo: JCIMayendeleyo },
  { name: "JCI Nosy Be", logo: JCINosyBe },
  { name: "JCI Sambava", logo: JCISambava },
  { name: "JCI Toamasina", logo: JCIToamasina },
  { name: "JCI Toliara", logo: JCIToliara },
]

const OrganisationsLocalesPage = () => {
  return (
    <>
    <SEO
        title="Organisations Locales | JCI Madagascar"
        description="Un réseau national, un impact local. Découvrez les Organisations Locales (OL) de JCI Madagascar réparties sur les zones Nord, Centre et Sud de la Grande Île."
        canonical="https://jcimadagascar.org/organisations-locales"
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
          "name": "Organisations Locales",
          "item": "https://jcimadagascar.org/organisations-locales"
        },
      ]
    }) }} />
    <div className='min-h-screen font-poppins flex flex-col items-start pt-25 pb-10 px-2 lg:pl-33 lg:pr-20 bg-jci-black gap-2'>
      <ZoneFilterTabs />
      <div className="group hidden md:flex flex-col gap-0 lg:ml-20 lg:mr-1 mr-0">
        <div className="flex lg:flex-row flex-col md:justify-center md:items-center lg:items-start bg-jci-white gap-10 rounded-xl  md:pl-10 pt-5  md:pr-10 lg:pr-0 overflow-hidden">
          <div className='flex flex-1 md:flex-2 flex-col gap-1 items-start text-start max-w-full p-3'>
            
            <Reveal from="left" duration={1000} threshold={0.05}>
            <LabelTraitSimple Label="Présentation" H1Text="LES 14 ORGANISATIONS LOCALES" />
            </Reveal>
            <Reveal from="left" duration={1000} threshold={0.05}>
              <p className='lg:text-[12px] md:text-[12px] text-[12px] font-normal font-poppins text-jci-black text-justify'>
              Un réseau national, un impact local. Découvrez les 14 Organisations Locales de JCI Madagascar à travers nos zones Nord, Centre et 
              Sud, et rejoignez le mouvement des jeunes leaders engagés sur tout l'île. 
              </p>
            </Reveal>
            
            <Reveal from="left" duration={1000} threshold={0.05}>
            <div className='flex flex-wrap gap-0 mt-10 items-center justify-center w-full'>

                {listeOl1.map((ol, index) => (
                  <div key={index} className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <img src={ol.logo} alt={ol.name} className="md:w-25 w-20 aspect-[50/50] object-cover " loading="lazy" decoding="async"/>
                  </div>
                ))}

                {listeOl2.map((ol, index) => (
                  <div key={index} className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <img src={ol.logo} alt={ol.name} className="md:w-25 w-20 object-cover aspect-[50/50]" loading="lazy" decoding="async"/>
                  </div>
                ))}

            </div>
            </Reveal>
          </div>
          <div className='flex flex-1 rounded-b-xl '>
            <Reveal from="right" duration={1000} threshold={0.05}>
            <img src={Mada} alt="Madagascar Map" className="h-full w-auto object-cover rounded-none lg:rounded-b-xl " loading="lazy" decoding="async"/>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="group flex md:hidden flex-col gap-0 lg:ml-20 lg:mr-1 mr-0">
        <div className="flex lg:flex-row flex-col md:justify-center md:items-center lg:items-start bg-jci-white gap-10 rounded-xl  md:pl-10 pt-5  md:pr-10 lg:pr-0 overflow-hidden">
          <div className='flex flex-1 md:flex-2 flex-col gap-1 items-start text-start max-w-full p-3'>
            
            <Reveal from="bottom" duration={1000} threshold={0.05}>
            <LabelTraitSimple Label="Présentation" H1Text="LES 14 ORGANISATIONS LOCALES" />
            </Reveal>
            <Reveal from="bottom" duration={1000} threshold={0.05}>
              <p className='lg:text-[12px] md:text-[12px] text-[12px] font-normal font-poppins text-jci-black text-justify'>
              Un réseau national, un impact local. Découvrez les 14 Organisations Locales de JCI Madagascar à travers nos zones Nord, Centre et 
              Sud, et rejoignez le mouvement des jeunes leaders engagés sur tout l'île. 
              </p>
            </Reveal>
            
            <Reveal from="bottom" duration={1000} threshold={0.05} className="flex items-center justify-center ">
            <div className='flex flex-wrap gap-0 mt-10 items-center self-center  w-[85%]'>

                {listeOl1.map((ol, index) => (
                  <Reveal from="bottom" duration={1000} threshold={0.05}>
                  <div key={index} className="">
                    <img src={ol.logo} alt={ol.name} className="md:w-25 w-20 aspect-[50/50] object-cover" loading="lazy" decoding="async"/>
                  </div>
                  </Reveal>
                ))}

                {listeOl2.map((ol, index) => (
                  <Reveal from="bottom" duration={1000} threshold={0.05}>
                  <div key={index} className="">
                    <img src={ol.logo} alt={ol.name} className="md:w-25 w-20 object-cover aspect-[50/50]" loading="lazy" decoding="async"/>
                  </div>
                  </Reveal>
                ))}

            </div>
            </Reveal>
          </div>
          <div className='flex flex-1 rounded-b-xl pl-5'>
            <Reveal from="bottom" duration={1000} threshold={0.05} className="">
            <img src={Mada} alt="Madagascar Map" className="h-full w-auto object-cover rounded-none lg:rounded-b-xl  " loading="lazy" decoding="async"/>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default OrganisationsLocalesPage
