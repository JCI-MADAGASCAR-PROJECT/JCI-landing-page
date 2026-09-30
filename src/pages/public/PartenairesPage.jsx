import H1 from "../../components/ui/H1"
import LabelTrait from "../../components/ui/LabelTrait"
import PartnerBlock from "../../components/ui/PartnerBlock"

import MidiMadagascarLogo from "../../images/LOGO-OTHER/logo_midi_madagasikara.webp"
import MidiMadagascarFond from "../../images/Partenariat/MidiMadagascar.webp"

import GroupeKentiaLogo from "../../images/LOGO-OTHER/Logo Koonspace.webp"
import GroupeKentiaFond from "../../images/Partenariat/Kentia.webp"

import OrangeLogo from "../../images/LOGO-OTHER/OrangeLogo.webp"
import OrangeFond from "../../images/Partenariat/Orange.webp" 

import ISevenLogo from "../../images/LOGO-OTHER/I0SevenStudio.webp"
import ISevenFond from "../../images/Partenariat/iSeven.webp"

import Logo2424 from "../../images/LOGO-OTHER/2424Logo.webp"

import LogoVitafoam from "../../images/LOGO-OTHER/LogoVitafoam.webp"

import LogoMasae from "../../images/LOGO-OTHER/logo-sae.svg"

// Données de démonstration en attendant le contenu officiel des partenaires
const partners = [
  {
    Name: "iSeven Studio",
    Title: "iSeven Studio : accompagner la jeunesse malgache par le digital",
    Content: `iSeven Studio est une jeune startup malgache basée à Fianarantsoa, spécialisée dans la conception graphique et les solutions digitales. Elle accompagne ses clients dans l'identité visuelle, le branding, l'illustration, le motion design, le UI/UX design ainsi que le développement de sites et plateformes web sur mesure.

Portée par une équipe pluridisciplinaire de jeunes talents, iSeven Studio place l'excellence, l'innovation et le souci du détail au cœur de ses projets. L'agence privilégie des solutions modernes, accessibles et faciles à administrer, pensées pour répondre aux besoins du marché local.

À travers ses valeurs de proximité et de transmission, iSeven Studio accompagne ses partenaires au-delà de la livraison de leurs projets et contribue au développement des compétences et de la jeunesse malgache.`,

    Logo: ISevenLogo,
    ImageFond: ISevenFond,
    BGColor: "bg-[#FFFFFF]",
    LabelColor: "text-[#045F66]",
    H1Color: "text-[#C1CA1D]",
    ContentColor: "text-jci-black"
  },

  {
    Name: "Orange Madagascar",
    Title: "JCI Madagascar et Orange Madagascar : ensemble pour le développement des jeunes leaders",
    Content: `La JCI Madagascar mobilise des jeunes citoyens actifs autour d'une conviction : chaque jeune peut devenir un acteur du changement positif dans sa communauté. Pour donner à cette ambition l'envergure qu'elle mérite, nous nous associons à des partenaires qui partagent nos valeurs. Orange Madagascar, présent dans le pays depuis 20 ans, figure parmi ces alliés de premier plan avec un partenariat durable depuis 18 années.

Notre partenariat repose sur une vision commune autour d'un numérique plus humain, inclusif et responsable. Cette vision rejoint directement la mission de la JCI : offrir aux jeunes des opportunités de développement afin de créer un impact durable.

Nos engagements se rejoignent notamment autour de l'inclusion numérique, de l'économie locale et de l'inclusion financière. Orange accompagne les jeunes et les communautés à travers la formation, l'entrepreneuriat, l'accès au numérique et les services financiers mobiles.

Pour les jeunes Malgaches, cette alliance signifie davantage d'opportunités en matière de compétences numériques, d'entrepreneuriat, d'éducation financière et de leadership. Pour nos communautés, elle contribue à des projets plus ambitieux et à un impact durable.`,

    Logo: OrangeLogo,
    ImageFond: OrangeFond,
    BGColor: "bg-[#FF6500]",
    LabelColor: "text-jci-white",
    H1Color: "text-[#215E61]",
    ContentColor: "text-jci-white"
  },

  {
    Name: "Midi Madagascar",
    Title: "JCI Madagascar et Midi Madagasikara : donner une voix à l'engagement des jeunes",
    Content: `La JCI Madagascar mobilise des jeunes citoyens actifs autour d'une conviction : chaque jeune peut devenir un acteur du changement positif dans sa communauté. Pour que ces actions inspirent le plus grand nombre, elles doivent être connues. C'est pourquoi nous sommes fiers de compter Midi Madagasikara parmi nos partenaires.

Fondé il y a 43 ans, Midi Madagasikara s'est imposé comme l'un des titres de référence de la presse malgache. Son exigence de rigueur et de crédibilité rejoint les valeurs de la JCI, qui forme des leaders responsables et attachés au service de la communauté.

Notre partenariat permet notamment de donner davantage de visibilité aux initiatives citoyennes et aux projets menés par nos membres et nos Organisations Locales. Il contribue également à rapprocher l'information des territoires et à valoriser les actions en faveur de l'éducation et de la jeunesse.

Pour les jeunes Malgaches, cette alliance signifie des initiatives mieux connues, des parcours inspirants davantage partagés et une parole jeune mieux entendue. Pour nos communautés, elle contribue à rendre notre impact plus visible et durable.`,

    Logo: MidiMadagascarLogo,
    ImageFond: MidiMadagascarFond,
    BGColor: "bg-[#DF0023]",
    LabelColor: "text-jci-white",
    H1Color: "text-jci-yellow",
    ContentColor: "text-jci-white"
  },

  {
    Name: "Groupe Kentia | Koon Space",
    Title: "JCI Madagascar, Groupe Kentia et Koon Space : ensemble pour les entrepreneurs de demain",
    Content: `La JCI Madagascar mobilise des jeunes citoyens actifs autour d'une conviction : chaque jeune peut devenir un acteur du changement positif dans sa communauté. Le Groupe Kentia et son espace de travail Koon Space, acteurs reconnus de l'accompagnement des entreprises à Antananarivo, figurent parmi nos partenaires.

Avec plus de 15 ans d'expérience, le Groupe Kentia accompagne les entreprises et les entrepreneurs dans différentes étapes de leur développement. Ses valeurs d'excellence, d'intégrité, d'innovation et d'engagement client rejoignent celles de la JCI, qui forme de jeunes leaders capables de créer un impact durable.

Le partenariat s'articule notamment autour de l'accompagnement entrepreneurial, des espaces de travail et de la formation. Koon Space offre un environnement adapté au coworking, aux réunions et au networking, tandis que Kentia accompagne les entrepreneurs et propose des formations en leadership, négociation et communication.

Pour les jeunes Malgaches, cette alliance ouvre davantage d'opportunités : accès à des espaces professionnels, accompagnement dans la création d'entreprise, montée en compétences et développement du leadership.`,

    Logo: GroupeKentiaLogo,
    ImageFond: GroupeKentiaFond,
    BGColor: "bg-[#FFFFFF]",
    LabelColor: "text-jci-teal",
    H1Color: "text-jci-teal",
    ContentColor: "text-jci-black"
  },

  {
    Name: "2424.mg",
    Title: "JCI Madagascar et 2424.mg : raconter l'engagement des jeunes en temps réel",
    Content: `La JCI Madagascar mobilise des jeunes citoyens actifs autour d'une conviction : chaque jeune peut devenir un leader du changement positif dans sa communauté. Pour que ces actions inspirent au plus loin, elles doivent être vues, partagées et racontées. C'est tout le sens de notre partenariat avec 2424.mg.

Promu par United Malagasy Media, 2424.mg est un site d'information consacré à l'actualité à Madagascar en temps réel. Sa vocation est de proposer des contenus de qualité, aussi bien dans le traitement de l'actualité que dans les reportages approfondis.

Notre partenariat permet notamment de valoriser les événements et initiatives de la JCI Madagascar grâce à la réactivité du numérique et à la force du reportage. Les projets menés sur le terrain peuvent ainsi être mieux racontés, donnant davantage de visibilité aux bénéficiaires et à l'impact de l'engagement bénévole.

Pour les jeunes Malgaches, cette alliance signifie davantage de visibilité pour leurs initiatives et leurs parcours. Pour nos communautés, elle contribue à faire connaître les actions citoyennes et à renforcer leur impact.`,

    Logo: Logo2424,
    ImageFond: GroupeKentiaFond,
    BGColor: "bg-[#DF0023]",
    LabelColor: "text-jci-teal",
    H1Color: "text-jci-teal",
    ContentColor: "text-jci-white"
  },

  {
    Name: "MaSAE",
    Title: "JCI Madagascar et MaSAE : des passerelles entre leadership et entrepreneuriat",
    Content: `La JCI Madagascar mobilise des jeunes citoyens actifs autour d'une conviction : chaque jeune peut devenir un acteur du changement positif dans sa communauté. En juillet 2026, nous avons signé un protocole d'accord de partenariat avec MaSAE, le réseau Madagascar Structures d'Accompagnement à l'Entrepreneuriat.

Placée sous l'égide de l'ONUDI, MaSAE rassemble 35 structures d'accompagnement réparties sur l'ensemble du territoire. Le réseau connecte les entrepreneurs aux ressources, financements et expertises nécessaires pour transformer leurs projets en réussites durables.

La JCI et MaSAE partagent une même conviction : le leadership et l'entrepreneuriat sont deux leviers complémentaires pour bâtir un avenir durable. Le partenariat permet notamment l'orientation des porteurs de projets, la communication croisée, le partage d'expertises et la mise en œuvre de projets communs.

Pour nos membres, cette alliance facilite l'accès aux structures d'accompagnement du réseau MaSAE. Pour les entrepreneurs accompagnés, elle ouvre des opportunités de leadership, de réseautage et d'engagement citoyen, contribuant ainsi au développement de l'entrepreneuriat à Madagascar.`,

    Logo: LogoMasae,
    ImageFond: ISevenFond,
    BGColor: "bg-[#FFFFFF]",
    LabelColor: "text-[#045F66]",
    H1Color: "text-[#C1CA1D]",
    ContentColor: "text-jci-black"
  },

  {
    Name: "VITAFOAM Madagascar",
    Title: "JCI Madagascar et VITAFOAM : soutenir l'excellence locale et l'engagement de nos leaders",
    Content: `La JCI Madagascar mobilise des jeunes citoyens actifs autour d'une conviction : chaque jeune peut devenir un acteur du changement positif dans sa communauté. En septembre 2026, JCI Madagascar et VITAFOAM Madagascar ont signé une convention de partenariat pour unir leurs forces en 2026 et 2027.

Implantée à Madagascar depuis 1964, VITAFOAM Madagascar est le premier fabricant de mousse du pays. Forte de plus de 60 ans d'expertise, l'entreprise produit localement une large gamme de matelas et d'accessoires de literie dans ses usines d'Antananarivo, Antsiranana et Sambava.

VITAFOAM et la JCI Madagascar partagent une même volonté de valoriser le travail local et d'investir dans les talents malgaches. Le partenariat prévoit notamment le soutien aux initiatives de la JCI Madagascar, la promotion des entreprises locales et la mise en relation avec de jeunes talents.

Pour nos membres, cette alliance ouvre des opportunités de visibilité, de formation et d'accès à l'emploi. Pour VITAFOAM, elle permet de renforcer ses liens avec un réseau national de jeunes leaders, entrepreneurs et professionnels engagés.`,

    Logo: LogoVitafoam,
    ImageFond: OrangeFond,
    BGColor: "bg-[#FF6500]",
    LabelColor: "text-jci-white",
    H1Color: "text-[#215E61]",
    ContentColor: "text-jci-white"
  }
];

const PartenairesPage = () => {
  return (
    <div className='min-h-screen font-poppins flex flex-col items-center pt-5  bg-jci-white gap-0'>
      <div className="w-fit -ml-120 mt-10 border-l-6 pl-3 border-jci-yellow hover:scale-105 transition-all duration-300">
        <H1 TextSize="text-4xl" TextColor="text-jci-blue">
          Nos Partenaires Nationaux
        </H1>
      </div>
      <div className='flex flex-col w-full'>
        {partners.map((partner, index) => (
          <PartnerBlock key={partner.Name} 
          Title={partner.Title} 
          Name={partner.Name} Content={partner.Content} 
          Reverse={index % 2 === 1} Logo={partner.Logo} 
          ImageFond={partner.ImageFond} BGColor={partner.BGColor} 
          LabelColor={partner.LabelColor} H1Color={partner.H1Color} 
          ContentColor={partner.ContentColor} />
        ))}
      </div>
    </div>
  )
}

export default PartenairesPage
