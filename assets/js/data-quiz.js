/* Banques de quiz — Académie Marketing */
const QUIZZES = [
  {
    id: "fondamentaux",
    title: "Les fondamentaux du marketing",
    desc: "Marketing mix, segmentation, ciblage, positionnement, besoins et valeur.",
    level: "Débutant",
    accent: "accent-vert",
    questions: [
      {
        q: "Que désigne le « marketing mix » ?",
        options: ["Le mélange des budgets publicitaires", "Les 4P : Produit, Prix, Place, Promotion", "La segmentation du marché", "Le calcul du retour sur investissement"],
        answer: 1,
        why: "Le marketing mix réunit les 4P (Produit, Prix, Distribution/Place, Communication/Promotion), c'est-à-dire les leviers opérationnels que l'entreprise combine pour mettre une offre sur le marché."
      },
      {
        q: "Dans la démarche STP, que signifient les trois lettres ?",
        options: ["Stratégie, Tactique, Performance", "Sourcing, Test, Production", "Segmentation, Ciblage (Targeting), Positionnement", "Slogan, Trafic, Prix"],
        answer: 2,
        why: "STP décrit la séquence stratégique : on segmente le marché, on cible le ou les segments les plus pertinents, puis on positionne l'offre dans l'esprit de ces clients."
      },
      {
        q: "Qu'est-ce que la segmentation d'un marché ?",
        options: ["Découper le marché en groupes de clients aux attentes homogènes", "Baisser les prix pour gagner des parts de marché", "Multiplier les canaux de distribution", "Diffuser une publicité auprès de tout le monde"],
        answer: 0,
        why: "Segmenter consiste à diviser un marché hétérogène en sous-ensembles homogènes (besoins, comportements, critères socio-démographiques) afin d'adresser à chacun une offre adaptée."
      },
      {
        q: "Le positionnement d'une marque correspond à :",
        options: ["Sa place physique en rayon", "Son chiffre d'affaires annuel", "La place distinctive qu'elle occupe dans l'esprit du consommateur", "Le nombre de ses points de vente"],
        answer: 2,
        why: "Le positionnement est l'image différenciante que la marque cherche à ancrer dans l'esprit de la cible par rapport aux concurrents ; il guide tous les choix du mix."
      },
      {
        q: "Selon la pyramide de Maslow, quel besoin se situe à la base ?",
        options: ["Le besoin d'accomplissement de soi", "Les besoins d'estime", "Les besoins physiologiques", "Le besoin d'appartenance"],
        answer: 2,
        why: "Maslow place les besoins physiologiques (manger, boire, dormir) à la base : ils doivent être satisfaits avant que n'émergent les besoins supérieurs comme l'estime ou l'accomplissement."
      },
      {
        q: "Qu'appelle-t-on la « proposition de valeur » d'une offre ?",
        options: ["Le prix le plus bas du marché", "Le bénéfice clair que le client retire de l'offre par rapport aux alternatives", "Le montant investi en publicité", "La valeur boursière de l'entreprise"],
        answer: 1,
        why: "La proposition de valeur résume la promesse faite au client : les bénéfices (fonctionnels, émotionnels) qu'il obtient, qui justifient son choix et le prix payé."
      },
      {
        q: "Quelle est la différence entre un besoin et un désir en marketing ?",
        options: ["Il n'y a aucune différence", "Le besoin est un manque fondamental, le désir en est la forme façonnée par la culture et la personne", "Le désir précède toujours le besoin", "Le besoin concerne uniquement les produits de luxe"],
        answer: 1,
        why: "Le besoin est un état de manque (se nourrir) ; le désir est la manière dont ce besoin s'exprime selon la culture et l'individu (vouloir un plat précis). Le marketing oriente les désirs, il ne crée pas les besoins."
      }
    ]
  },
  {
    id: "digital",
    title: "Marketing digital",
    desc: "SEO et SEA, funnel de conversion, inbound, social ads et médias owned, earned, paid.",
    level: "Intermédiaire",
    accent: "accent-bleu",
    questions: [
      {
        q: "Quelle est la principale différence entre le SEO et le SEA ?",
        options: ["Le SEO est payant, le SEA est gratuit", "Le SEO vise le référencement naturel, le SEA achète des annonces payantes", "Le SEO ne concerne que les réseaux sociaux", "Il s'agit de deux noms pour la même technique"],
        answer: 1,
        why: "Le SEO (référencement naturel) optimise un site pour les résultats organiques sans payer le clic, tandis que le SEA (Search Engine Advertising) achète des annonces sponsorisées, par exemple via Google Ads."
      },
      {
        q: "Comment classe-t-on les médias en owned, earned et paid ?",
        options: ["Owned = possédés, earned = gagnés, paid = payants", "Owned = anciens, earned = récents, paid = futurs", "Ce sont trois réseaux sociaux", "Owned = mobiles, earned = web, paid = TV"],
        answer: 0,
        why: "Les owned media appartiennent à la marque (site, newsletter), les earned media sont gagnés gratuitement (partages, bouche-à-oreille, presse spontanée) et les paid media sont achetés (publicité)."
      },
      {
        q: "Qu'est-ce que l'inbound marketing ?",
        options: ["Démarcher les prospects par appels à froid", "Attirer le client à soi grâce à du contenu utile plutôt que d'aller le solliciter", "Acheter des bases de données d'e-mails", "Diffuser des spots publicitaires à la télévision"],
        answer: 1,
        why: "L'inbound marketing fait venir le prospect vers la marque via du contenu à valeur ajoutée (articles, livres blancs, SEO), à l'inverse de l'outbound qui va chercher le client par la sollicitation directe."
      },
      {
        q: "Dans un funnel de conversion classique, quel est l'ordre des étapes ?",
        options: ["Conversion, Considération, Notoriété", "Notoriété, Considération, Conversion", "Considération, Notoriété, Fidélisation", "Conversion, Notoriété, Considération"],
        answer: 1,
        why: "Le tunnel descend de la notoriété (faire connaître), à la considération (être évalué), puis à la conversion (l'achat) ; il se prolonge souvent par la fidélisation."
      },
      {
        q: "Que sont les « social ads » ?",
        options: ["Les publications gratuites d'une marque sur les réseaux", "Les commentaires des internautes", "Les publicités payantes diffusées sur les réseaux sociaux", "Les messages privés envoyés aux abonnés"],
        answer: 2,
        why: "Les social ads sont des campagnes publicitaires payantes diffusées sur des plateformes comme Meta, TikTok ou LinkedIn, généralement ciblées selon les centres d'intérêt et les données des utilisateurs."
      },
      {
        q: "À quoi sert une « landing page » (page d'atterrissage) ?",
        options: ["À héberger toutes les pages du site", "À convertir un visiteur sur un objectif unique et précis", "À stocker les e-mails de l'entreprise", "À afficher les mentions légales"],
        answer: 1,
        why: "Une landing page est conçue autour d'un seul objectif de conversion (inscription, achat, téléchargement) avec un appel à l'action clair et peu de distractions, ce qui en augmente l'efficacité."
      },
      {
        q: "Que désigne le « lead nurturing » ?",
        options: ["Supprimer les prospects inactifs", "Entretenir la relation avec un prospect par des contenus jusqu'à ce qu'il soit prêt à acheter", "Acheter de la publicité display", "Mesurer le trafic d'un site"],
        answer: 1,
        why: "Le lead nurturing consiste à « faire mûrir » un prospect encore froid en lui adressant, souvent par e-mail automatisé, des contenus adaptés à son avancement, jusqu'au moment opportun pour la vente."
      }
    ]
  },
  {
    id: "communication",
    title: "Communication & marque",
    desc: "Branding, identité, storytelling, AIDA, relations presse et notoriété.",
    level: "Intermédiaire",
    accent: "accent-dore",
    questions: [
      {
        q: "Que recouvre la notion de « branding » ?",
        options: ["La construction et la gestion de l'identité et de l'image d'une marque", "La gestion de la trésorerie de l'entreprise", "Le calcul des marges commerciales", "La logistique de livraison"],
        answer: 0,
        why: "Le branding englobe tout ce qui forge l'identité d'une marque (nom, logo, ton, valeurs, expérience) afin de la rendre reconnaissable, cohérente et désirable dans la durée."
      },
      {
        q: "Dans le modèle AIDA, que représentent les quatre lettres ?",
        options: ["Attention, Intérêt, Désir, Action", "Audace, Innovation, Design, Audience", "Analyse, Information, Décision, Achat", "Attirance, Image, Diffusion, Adhésion"],
        answer: 0,
        why: "AIDA décrit les étapes psychologiques d'un message publicitaire efficace : capter l'Attention, susciter l'Intérêt, créer le Désir et déclencher l'Action."
      },
      {
        q: "Qu'est-ce que le storytelling de marque ?",
        options: ["Réciter les caractéristiques techniques d'un produit", "Publier les résultats financiers", "Raconter une histoire porteuse de sens et d'émotion autour de la marque", "Lister les avis clients"],
        answer: 2,
        why: "Le storytelling met en récit la marque, ses valeurs ou ses clients pour créer une connexion émotionnelle et rendre le message plus mémorable qu'un simple argumentaire factuel."
      },
      {
        q: "À quoi servent principalement les relations presse (RP) ?",
        options: ["À acheter des encarts publicitaires", "À obtenir des retombées médiatiques gagnées (non payées) auprès des journalistes", "À gérer le service client", "À fixer les prix de vente"],
        answer: 1,
        why: "Les relations presse visent à susciter une couverture éditoriale spontanée (earned media) via communiqués et contacts journalistes ; cette parole tierce est jugée plus crédible que la publicité payée."
      },
      {
        q: "Que distingue une plateforme de marque ?",
        options: ["Un logiciel de gestion des stocks", "Le site e-commerce de la marque", "Le réseau de distributeurs", "Le document de référence définissant mission, valeurs, positionnement et ton de la marque"],
        answer: 3,
        why: "La plateforme de marque est le socle stratégique qui formalise l'identité (mission, vision, valeurs, promesse, ton) et garantit la cohérence de toutes les prises de parole."
      },
      {
        q: "Que signifie la « notoriété spontanée » d'une marque ?",
        options: ["La part de clients fidèles", "Le budget publicitaire annuel", "La capacité à citer la marque sans qu'on en suggère le nom", "Le nombre d'abonnés sur les réseaux"],
        answer: 2,
        why: "La notoriété spontanée mesure le pourcentage de personnes qui nomment la marque d'elles-mêmes dans une catégorie ; elle est plus exigeante que la notoriété assistée, où l'on propose le nom."
      },
      {
        q: "Qu'est-ce qu'une charte graphique ?",
        options: ["Un contrat de partenariat", "L'ensemble des règles visuelles (logo, couleurs, typographies) garantissant la cohérence de la marque", "Le plan média d'une campagne", "La liste des fournisseurs"],
        answer: 1,
        why: "La charte graphique codifie les éléments visuels de la marque et leurs usages afin que toutes les communications restent cohérentes et immédiatement reconnaissables, quel que soit le support."
      }
    ]
  },
  {
    id: "evenementiel",
    title: "Marketing événementiel",
    desc: "Brief, objectifs SMART, rétroplanning, logistique, activation et ROI d'un événement.",
    level: "Intermédiaire",
    accent: "accent-bordeaux",
    questions: [
      {
        q: "Qu'est-ce que le marketing événementiel ?",
        options: ["L'utilisation d'événements pour créer une expérience et atteindre des objectifs de marque", "La vente de billets de spectacle", "La gestion des salles de réunion", "La diffusion de spots radio"],
        answer: 0,
        why: "Le marketing événementiel mobilise un événement (salon, conférence, lancement, soirée) comme levier d'expérience pour servir des objectifs de notoriété, d'image, de relation ou de vente."
      },
      {
        q: "Quel est le rôle du brief événementiel ?",
        options: ["Faire le bilan financier après l'événement", "Cadrer en amont les objectifs, la cible, le message, le budget et les contraintes", "Rédiger le communiqué de presse", "Installer la salle le jour J"],
        answer: 1,
        why: "Le brief est le document fondateur : il aligne le commanditaire et les équipes sur les objectifs, la cible, le concept, le budget et les contraintes avant toute conception."
      },
      {
        q: "Un objectif « SMART » doit notamment être :",
        options: ["Subjectif et modulable", "Secret, Marketing, Ambitieux, Régional, Tactique", "Spécifique, Mesurable, Atteignable, Réaliste, Temporellement défini", "Simple, Mobile, Annuel, Récurrent, Total"],
        answer: 2,
        why: "Un objectif SMART est Spécifique, Mesurable, Atteignable, Réaliste et défini dans le Temps ; ce cadrage rend l'objectif évaluable, condition indispensable pour mesurer ensuite la performance."
      },
      {
        q: "À quoi sert un rétroplanning ?",
        options: ["À calculer le budget marketing global", "À planifier les tâches à rebours depuis la date de l'événement", "À analyser la concurrence", "À recruter les commerciaux"],
        answer: 1,
        why: "Le rétroplanning part de la date de l'événement (jour J) et remonte le temps pour positionner chaque tâche et son échéance, garantissant que tout soit prêt à temps."
      },
      {
        q: "Que désigne l'« activation » d'un événement ?",
        options: ["L'allumage de la sonorisation", "La signature du contrat avec le lieu", "L'envoi de la facture finale", "Les dispositifs qui font vivre une expérience et engagent activement les participants"],
        answer: 3,
        why: "Une activation est un dispositif expérientiel (atelier, démonstration, animation immersive) conçu pour engager les participants et créer un contact mémorable avec la marque."
      },
      {
        q: "Comment évalue-t-on le ROI d'un événement ?",
        options: ["En rapportant les résultats obtenus (leads, ventes, notoriété) aux coûts engagés", "Uniquement au nombre de personnes présentes", "Au seul ressenti de l'équipe organisatrice", "Au nombre de photos publiées"],
        answer: 0,
        why: "Le ROI événementiel met en relation les retombées (leads qualifiés, ventes, retombées presse, gain de notoriété) avec l'investissement total ; il suppose d'avoir fixé des objectifs mesurables en amont."
      },
      {
        q: "Pourquoi prévoir un plan B et une marge dans le budget événementiel ?",
        options: ["Pour gonfler artificiellement les coûts", "Parce qu'un événement comporte des aléas (météo, technique, défections) à anticiper", "Parce que la loi l'impose", "Pour réduire le nombre d'invités"],
        answer: 1,
        why: "L'événementiel est soumis à de nombreux imprévus ; prévoir des scénarios de repli et une marge budgétaire (souvent une réserve pour aléas) permet de sécuriser le jour J sans tout remettre en cause."
      }
    ]
  },
  {
    id: "mesure",
    title: "Données, KPI & performance",
    desc: "ROI, CTR, CPC, CPM, taux de conversion, reach et impressions, NPS et engagement.",
    level: "Avancé",
    accent: "accent-bleu",
    questions: [
      {
        q: "Que mesure le CTR (Click-Through Rate) ?",
        options: ["Le coût d'une campagne", "Le rapport entre le nombre de clics et le nombre d'impressions", "Le nombre total d'achats", "La durée moyenne d'une visite"],
        answer: 1,
        why: "Le CTR, ou taux de clic, se calcule en divisant les clics par les impressions (multiplié par 100) ; il mesure l'attractivité d'une annonce ou d'un lien auprès de ceux qui l'ont vu."
      },
      {
        q: "Quelle différence entre le CPC et le CPM ?",
        options: ["Le CPC est un coût par clic, le CPM un coût pour mille impressions", "Le CPC concerne la télévision, le CPM la radio", "Ce sont deux synonymes", "Le CPC mesure les ventes, le CPM les retours"],
        answer: 0,
        why: "Le CPC (coût par clic) facture chaque clic obtenu, tandis que le CPM (coût pour mille) facture chaque tranche de mille impressions affichées, indépendamment des clics."
      },
      {
        q: "Comment calcule-t-on un taux de conversion ?",
        options: ["Visiteurs divisés par conversions", "Conversions divisées par le nombre total de visiteurs", "Clics divisés par impressions", "Chiffre d'affaires divisé par le coût"],
        answer: 1,
        why: "Le taux de conversion rapporte le nombre d'actions souhaitées (achats, inscriptions) au nombre de visiteurs, multiplié par 100 ; il mesure l'efficacité d'une page ou d'un parcours à transformer."
      },
      {
        q: "Quelle est la différence entre « reach » et « impressions » ?",
        options: ["Le reach compte les personnes uniques touchées, les impressions comptent les affichages totaux", "Le reach concerne les clics, les impressions les ventes", "Ce sont deux mots pour la même mesure", "Le reach est payant, les impressions sont gratuites"],
        answer: 0,
        why: "Le reach (couverture) dénombre les personnes uniques exposées, alors que les impressions comptent chaque affichage, y compris répété : une même personne peut générer plusieurs impressions mais un seul reach."
      },
      {
        q: "Que mesure le NPS (Net Promoter Score) ?",
        options: ["Le coût d'acquisition d'un client", "Le nombre de ventes mensuelles", "La propension des clients à recommander la marque", "Le trafic du site web"],
        answer: 2,
        why: "Le NPS repose sur la question « recommanderiez-vous ? » (note de 0 à 10) ; on soustrait le pourcentage de détracteurs (0-6) à celui des promoteurs (9-10) pour obtenir un score de fidélité et de bouche-à-oreille."
      },
      {
        q: "Comment se calcule simplement le ROI d'une action marketing ?",
        options: ["(Gain de l'investissement − Coût) / Coût", "Coût / Gain de l'investissement", "Coût × Nombre de clics", "Chiffre d'affaires × Marge"],
        answer: 0,
        why: "Le ROI (retour sur investissement) se calcule en soustrayant le coût du gain généré, puis en divisant par le coût ; un résultat positif signifie que l'action a rapporté plus qu'elle n'a coûté."
      },
      {
        q: "Que représente le taux d'engagement sur les réseaux sociaux ?",
        options: ["Le nombre d'abonnés gagnés", "Le budget publicitaire dépensé", "Le nombre de publications par semaine", "Le rapport entre les interactions (likes, commentaires, partages) et l'audience ou la portée"],
        answer: 3,
        why: "Le taux d'engagement rapporte les interactions générées à l'audience touchée (abonnés ou portée) ; il évalue la résonance réelle des contenus, au-delà du simple nombre d'abonnés."
      }
    ]
  }
];
