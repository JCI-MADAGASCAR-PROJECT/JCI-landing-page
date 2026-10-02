import ContactInfoBlock from "../../components/ui/ContactInfoBlock"
import ContactForm from "../../components/ui/ContactForm"
import Reveal from "../../components/ui/Reveal"
import SEO from "../../components/common/SEO"


const ContactPage = () => {
  return (
    <>
    <SEO
        title="Contactez-nous | JCI Madagascar"
        description="Contactez la Jeune Chambre Internationale Madagascar pour toute information ou pour devenir membre."
        canonical="https://jcimadagascar.org/contact"
        indexable={true}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
          __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                  {
                      "@type": "NGO",
                      "@id": "https://jcimadagascar.org/#organization",
                      "name": "JCI Madagascar",
                      "alternateName": "Jeune Chambre Internationale Madagascar",
                      "url": "https://jcimadagascar.org",
                      "logo": {
                          "@type": "ImageObject",
                          "@id": "https://jcimadagascar.org/#logo",
                          "url": "https://jcimadagascar.org/JCI-Madagascar-color-logo.svg",
                          "caption": "Logo JCI Madagascar"
                      },
                      "image": "https://jcimadagascar.org/og-image.jpg",
                      "description": "Organisation nationale affiliée à la Jeune Chambre Internationale (JCI), fédérant 14 organisations locales de jeunes leaders citoyens engagés à Madagascar.",
                      "address": {
                          "@type": "PostalAddress",
                          "streetAddress": "Kentia Ambatonakanga",
                          "addressLocality": "Antananarivo",
                          "addressCountry": "MG"
                      },
                      "contactPoint": {
                          "@type": "ContactPoint",
                          "telephone": "+261326076650",
                          "contactType": "customer service",
                          "email": "contact@jcimadagascar.org",
                          "availableLanguage": [
                              "French",
                              "English",
                              "Malagasy"
                          ]
                      },
                      "sameAs": [
                          "https://www.facebook.com/share/1RopVUxVKk/",
                          "https://www.instagram.com/jcimadagascar",
                          "https://www.linkedin.com/company/jcimadagascar",
                          "https://linktr.ee/JCI_Madagascar"
                      ]
                  },
                  {
                      "@type": "WebSite",
                      "@id": "https://jcimadagascar.org/#website",
                      "url": "https://jcimadagascar.org",
                      "name": "JCI Madagascar",
                      "description": "Site officiel de la Jeune Chambre Internationale Madagascar",
                      "publisher": {
                          "@id": "https://jcimadagascar.org/#organization"
                      },
                      "inLanguage": "fr-FR"
                  }
              ]
          })
      }}
  />
    <div className='min-h-screen font-poppins flex flex-col items-start pt-20 sm:pt-15 pb-10 px-4 sm:px-6 lg:pl-55 lg:pr-10'>

      {/* Header */}
      <Reveal from="left" duration={1000} threshold={0.05}>
      <div className='flex flex-col gap-2 items-start text-start mt-4 sm:mt-8 w-full'>
        <h1 className='text-jci-black font-bold font-poppins text-[22px] sm:text-[26px] lg:text-[30px] leading-tight'>
          ENTRER EN <span className='text-jci-yellow'>CONTACT</span> OU DES QUESTIONS?
        </h1>

        <p className='text-[11px] sm:text-[12px] font-semibold text-jci-black leading-relaxed max-w-3xl'>
          N'hésitez surtout pas à nous écrire pour avoir plus d'informations ou pour devenir membre de la Jeune Chambre Internationale.
        </p>
      </div>
      </Reveal>

      {/* Contact section */}
      <div className='flex flex-col md:flex-row gap-6 lg:gap-10 mt-6 w-full bg-blue-50/80 border border-gray-300 rounded-2xl sm:rounded-3xl p-3 sm:p-5'>

        {/* Contact information */}
        <ContactInfoBlock
          Title="Coordonnées"
          Address="Kentia Ambatonakanga"
          Phone="+261 032 60 766 50"
          Email="contact@jcimada.org"
        />

        {/* Form */}
        <ContactForm />

      </div>
    </div>
    </>
  )
}

export default ContactPage