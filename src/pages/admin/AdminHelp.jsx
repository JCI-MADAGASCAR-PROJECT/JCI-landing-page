import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { IoImages, IoDocumentText } from 'react-icons/io5';

const sections = [
  {
    title: 'Past Presidents',
    text: "Archivage historique des anciens présidents nationaux avec l'année exacte de leur mandat.",
  },
  {
    title: 'Zones géographiques & Présidents de Zone',
    text: 'Découpage territorial, coordonnées et citation des présidents de zone en exercice.',
  },
  {
    title: 'Gestion des utilisateurs',
    text: "Attribution et gestion des comptes administrateurs, association des administrateurs locaux à leur organisation respective.",
  },
];

const faq = [
  {
    q: 'Le système refuse mon image ou mon document joint',
    a: [
      'Vérifiez que le format de votre fichier fait bien partie des formats acceptés (.jpg, .png, .webp pour les images, .pdf pour les documents).',
      "Assurez-vous que la taille du fichier ne dépasse pas les limites (5 Mo pour une image, 10 Mo pour un PDF).",
      "Évitez de renommer manuellement l'extension d'un fichier (ex : renommer un fichier Word .docx en .pdf) : le système inspecte la signature réelle du fichier et bloquera l'opération.",
    ],
  },
  {
    q: 'Je reçois une erreur « Accès refusé »',
    a: [
      "Vous essayez d'accéder à une section ou à une organisation locale qui n'est pas attribuée à votre rôle.",
      'Si vous devez intervenir sur cette ressource, demandez à un Administrateur National de vérifier les droits associés à votre compte.',
    ],
  },
  {
    q: "Ma session s'est déconnectée toute seule",
    a: [
      "Par mesure de sécurité, la session expire au bout d'une période d'inactivité prolongée. Reconnectez-vous simplement sur la page /connexion.",
    ],
  },
  {
    q: 'Mes modifications ne sont pas visibles sur le site public',
    a: [
      'Rechargez la page publique en vidant le cache de votre navigateur (Ctrl + F5 sous Windows ou Cmd + Shift + R sous Mac).',
      'Assurez-vous que vous avez bien cliqué sur le bouton de confirmation ou de sauvegarde après avoir édité un formulaire.',
    ],
  },
];

const AdminHelp = () => {
  const { user } = useContext(UserContext);

  // Même code couleur d'en-tête que les tableaux de gestion
  const headerColor =
    user?.role === 'SUPER_ADMIN'
      ? 'bg-red-900'
      : user?.role === 'ADMIN_NATIONAL'
      ? 'bg-jci-black'
      : user?.role === 'ADMIN_LOCAL'
      ? 'bg-green-900'
      : 'bg-yellow-900';

  return (
    <div className="relative p-10 flex flex-col items-start gap-5 bg-gray-100 w-full min-h-screen md:pt-10 pt-20 font-poppins">
      <h1 className="text-4xl font-bold text-jci-black">Page d'aide</h1>
      <p className="text-xs text-jci-blue">
        * Guide général d'utilisation de l'espace d'administration, accessible à tous les rôles.
      </p>

      <div className="md:w-[90%] w-full flex flex-col gap-5">
        {/* Sections gérées */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-jci-black font-bold text-lg mb-4">Sections gérées</h2>
          <ul className="flex flex-col divide-y divide-gray-200">
            {sections.map((s) => (
              <li key={s.title} className="py-3 first:pt-0 last:pb-0">
                <p className="text-sm font-semibold text-jci-black">{s.title}</p>
                <p className="text-sm text-jci-black/60">{s.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Fichiers et médias */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-jci-black font-bold text-lg mb-1">Fichiers et médias</h2>
          <p className="text-sm text-jci-black/60 mb-4">
            Pour préserver la rapidité du site et assurer une qualité visuelle optimale, respectez les formats et limites suivants.
          </p>

          <div className="overflow-x-auto rounded border border-gray-200">
            <table className="w-full border-collapse text-sm">
              <thead className={`${headerColor} text-jci-white font-poppins font-semibold`}>
                <tr className="text-left">
                  <th className="px-4 py-3 text-left font-semibold text-[13px] uppercase tracking-wide whitespace-nowrap">Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-[13px] uppercase tracking-wide whitespace-nowrap">Formats autorisés</th>
                  <th className="px-4 py-3 text-left font-semibold text-[13px] uppercase tracking-wide whitespace-nowrap">Poids maximal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-jci-black font-medium whitespace-nowrap">
                    <span className="flex items-center gap-2"><IoImages size={16} className="text-gray-400" />Images et photos</span>
                  </td>
                  <td className="px-4 py-3 text-jci-black">JPG / JPEG, PNG, WebP</td>
                  <td className="px-4 py-3 text-jci-black font-semibold whitespace-nowrap">5 Mo par image</td>
                </tr>
                <tr className="bg-jci-white">
                  <td className="px-4 py-3 text-jci-black font-medium whitespace-nowrap">
                    <span className="flex items-center gap-2"><IoDocumentText size={16} className="text-gray-400" />Documents</span>
                  </td>
                  <td className="px-4 py-3 text-jci-black">PDF uniquement (.pdf)</td>
                  <td className="px-4 py-3 text-jci-black font-semibold whitespace-nowrap">5 Mo par fichier</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-5">
            <div>
              <h3 className="text-sm font-semibold text-jci-black mb-2">Bonnes pratiques : images</h3>
              <ul className="list-disc pl-5 flex flex-col gap-1 text-sm text-jci-black/70">
                <li>Utilisez de préférence le format WebP ou JPG compressé pour un affichage rapide.</li>
                <li>Mais obligatoirement le format PNG pour les images transparentes.</li>
                <li>Privilégiez des photos nettes, bien cadrées et lumineuses.</li>
                <li>Évitez les affiches contenant trop de petits textes illisibles sur mobile.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-jci-black mb-2">Bonnes pratiques : documents</h3>
              <ul className="list-disc pl-5 flex flex-col gap-1 text-sm text-jci-black/70">
                
                <li>Optimisez le poids des PDF contenant des visuels avant téléversement.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-jci-black font-bold text-lg mb-2">Questions fréquentes</h2>
          <div className="divide-y divide-gray-200">
            {faq.map((item) => (
              <details key={item.q} className="group py-3">
                <summary className="flex items-center justify-between gap-3 cursor-pointer list-none text-sm font-semibold text-jci-black [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="text-gray-400 font-normal group-open:hidden">+</span>
                  <span className="text-gray-400 font-normal hidden group-open:inline">–</span>
                </summary>
                <ul className="list-disc pl-5 mt-2 flex flex-col gap-1 text-sm text-jci-black/70">
                  {item.a.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </section>

        {/* Support */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-jci-black font-bold text-lg mb-2">Assistance et support</h2>
          <p className="text-sm text-jci-black/60 mb-3">
            Si vous rencontrez une anomalie technique ou avez besoin d'aide sur la plateforme :
          </p>
          <ol className="list-decimal pl-5 flex flex-col gap-1 text-sm text-jci-black/70">
            <li>
              Contactez votre référent au sein du <span className="font-semibold text-jci-black">Bureau National JCI Madagascar</span>.
            </li>
            <li>
              Décrivez précisément l'action réalisée, le message d'erreur éventuel et joignez si possible une capture d'écran.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default AdminHelp;