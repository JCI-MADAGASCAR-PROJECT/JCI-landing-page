import { useEffect } from 'react';

const BASE_URL = 'https://jcimadagascar.org';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

const SEO = ({
  title,
  description,
  canonicalPath = '',
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noindex = false,
  children
}) => {
  const siteTitle = 'JCI Madagascar';
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Jeune Chambre Internationale`;
  const canonicalUrl = `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  // Synchronisation côté client pour garantir la compatibilité
  useEffect(() => {
    document.title = fullTitle;

    // Mise à jour ou création de la meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    // Mise à jour ou création de la balise canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Gestion du noindex pour les pages privées ou 404
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow');
  }, [fullTitle, description, canonicalUrl, noindex]);

  return (
    <>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {children}
    </>
  );
};

export default SEO;