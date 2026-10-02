import ButtonFull from "../../components/ui/ButtonFull"
import H1 from "../../components/ui/H1"
import Card from "../../components/ui/Card"
import SEO from "../../components/common/SEO"

const NotFoundPage = () => {
  return (
    <>
      <SEO
        title="Page non trouvée (404) | JCI Madagascar"
        description="La page que vous recherchez n'existe pas ou a été déplacée sur le site de JCI Madagascar."
        canonical="https://jcimadagascar.org/404"
        noindex={true}
      />
      <div className='min-h-screen flex flex-col items-center justify-center gap-4 font-poppins text-center px-6 bg-jci-blue'>
        <Card />
        <H1 TextSize="text-4xl" TextColor="text-jci-white">Page introuvable</H1>
        <p className='text-[13px] text-jci-white/70 max-w-md '>
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <ButtonFull path="/" TextColorHover="hover:text-jci-white">Retour à l'accueil</ButtonFull>
      </div>
    </>
  )
}

export default NotFoundPage
