/* Sélection d'ouvrages — Académie Marketing */
const LIVRES = [
  {
    title: "Marketing Management",
    author: "Philip Kotler & Kevin Keller",
    cat: "Fondamentaux",
    level: "Intermédiaire",
    year: 1967,
    blurb: "La bible académique du marketing, mise à jour à chaque édition. Elle couvre tout, de l'analyse de marché au mix marketing, et sert de socle théorique dans la plupart des cursus.",
    takeaway: "Maîtriser les fondamentaux (segmentation, ciblage, positionnement) avant de courir après les tactiques."
  },
  {
    title: "This Is Marketing : on ne vous verra pas tant que vous n'aurez pas appris à voir",
    author: "Seth Godin",
    cat: "Fondamentaux",
    level: "Débutant",
    year: 2018,
    blurb: "Une vision moderne et humaine du marketing, loin de la publicité de masse. Godin invite à servir un public précis plutôt qu'à vouloir plaire à tout le monde.",
    takeaway: "Le marketing consiste à créer du changement pour les gens que l'on cherche à servir."
  },
  {
    title: "Le Marketing selon Kotler",
    author: "Philip Kotler",
    cat: "Fondamentaux",
    level: "Débutant",
    year: 1999,
    blurb: "Une synthèse accessible des grands principes du marketing par son auteur le plus influent. Idéale pour poser un vocabulaire commun et comprendre la logique d'ensemble de la discipline.",
    takeaway: "Le marketing n'est pas l'art de vendre, mais celui de créer une valeur réelle pour le client."
  },
  {
    title: "Stratégie Océan Bleu",
    author: "W. Chan Kim & Renée Mauborgne",
    cat: "Stratégie",
    level: "Intermédiaire",
    year: 2005,
    blurb: "Plutôt que de s'épuiser dans la concurrence frontale, ce livre montre comment créer un espace de marché vierge. Un cadre stratégique très visuel, soutenu par de nombreux cas d'entreprises.",
    takeaway: "On gagne rarement en affrontant la concurrence ; on gagne en la rendant hors de propos."
  },
  {
    title: "Positioning : la conquête de l'esprit",
    author: "Al Ries & Jack Trout",
    cat: "Stratégie",
    level: "Intermédiaire",
    year: 1981,
    blurb: "Le texte fondateur du positionnement de marque. Il explique comment occuper une place distincte dans l'esprit du client, ressource la plus rare à l'ère de la surinformation.",
    takeaway: "Le positionnement ne se joue pas dans le produit, mais dans la tête du prospect."
  },
  {
    title: "Start with Why : comment les grands leaders inspirent l'action",
    author: "Simon Sinek",
    cat: "Stratégie",
    level: "Débutant",
    year: 2009,
    blurb: "Sinek montre que les marques qui marquent commencent par leur « pourquoi » avant le « comment » et le « quoi ». Un cadre simple, le Cercle d'or, pour aligner sens et stratégie.",
    takeaway: "Les gens n'achètent pas ce que vous faites, ils achètent la raison pour laquelle vous le faites."
  },
  {
    title: "Lean Startup : adoptez l'innovation continue",
    author: "Eric Ries",
    cat: "Stratégie",
    level: "Intermédiaire",
    year: 2011,
    blurb: "Une méthode pour tester vite et à moindre coût des idées de produits ou d'offres. Le cycle « construire-mesurer-apprendre » est précieux pour valider un concept avant d'investir.",
    takeaway: "Lancer un produit minimum viable pour apprendre du marché plutôt que de parier sur des suppositions."
  },
  {
    title: "Hooked : comment créer un produit ou un service qui ancre des habitudes",
    author: "Nir Eyal",
    cat: "Digital & growth",
    level: "Intermédiaire",
    year: 2014,
    blurb: "Comment certains produits numériques deviennent des habitudes. Eyal décrit le modèle en quatre temps (déclencheur, action, récompense, investissement) qui fidélise les utilisateurs.",
    takeaway: "Un produit addictif n'est pas une question de chance, mais d'une boucle d'engagement bien conçue."
  },
  {
    title: "Contagious : pourquoi certaines idées se propagent et d'autres meurent",
    author: "Jonah Berger",
    cat: "Digital & growth",
    level: "Débutant",
    year: 2013,
    blurb: "Berger décortique les ressorts du bouche-à-oreille à travers six principes (les STEPPS). Une lecture concrète pour comprendre pourquoi un contenu devient viral et comment provoquer le partage.",
    takeaway: "Le partage repose moins sur le hasard que sur la valeur sociale et l'émotion d'un message."
  },
  {
    title: "Vache pourpre : rendez votre marque remarquable",
    author: "Seth Godin",
    cat: "Digital & growth",
    level: "Débutant",
    year: 2003,
    blurb: "Dans un monde saturé de messages, seul l'extraordinaire se remarque. Godin invite à intégrer la différenciation dès la conception du produit plutôt que de la repousser sur la publicité.",
    takeaway: "Être remarquable n'est plus une option : c'est la seule publicité qui fonctionne encore."
  },
  {
    title: "Building a StoryBrand : précisez votre message pour que les clients écoutent",
    author: "Donald Miller",
    cat: "Communication & storytelling",
    level: "Débutant",
    year: 2017,
    blurb: "Un cadre narratif en sept temps pour clarifier un message de marque. Miller place le client en héros et la marque en guide, méthode directement applicable à un site ou une campagne.",
    takeaway: "Le client est le héros de l'histoire, pas votre marque : votre rôle est de le guider."
  },
  {
    title: "Ces idées qui collent : pourquoi certaines idées survivent quand d'autres meurent",
    author: "Chip Heath & Dan Heath",
    cat: "Communication & storytelling",
    level: "Débutant",
    year: 2007,
    blurb: "Pourquoi retient-on certains messages et pas d'autres ? Les frères Heath proposent le modèle SUCCES pour rendre une idée mémorable. Très utile pour structurer un discours ou un pitch.",
    takeaway: "Une idée mémorable est simple, inattendue, concrète, crédible, émotionnelle et racontée."
  },
  {
    title: "Influence et manipulation",
    author: "Robert Cialdini",
    cat: "Psychologie & influence",
    level: "Débutant",
    year: 1984,
    blurb: "Les six grands principes de la persuasion, illustrés d'exemples concrets. Une lecture fondatrice pour comprendre pourquoi les gens disent oui et comment les marques activent ces leviers.",
    takeaway: "Réciprocité, preuve sociale, rareté : des leviers que tout marketeur doit connaître."
  },
  {
    title: "Système 1 / Système 2 : les deux vitesses de la pensée",
    author: "Daniel Kahneman",
    cat: "Psychologie & influence",
    level: "Avancé",
    year: 2011,
    blurb: "Le prix Nobel d'économie explique nos deux modes de pensée, l'un rapide et intuitif, l'autre lent et réfléchi. Indispensable pour saisir les biais cognitifs qui guident les décisions d'achat.",
    takeaway: "La plupart de nos décisions sont prises par un système intuitif, faillible et facile à influencer."
  },
  {
    title: "L'Économie de l'expérience : le travail, c'est du théâtre et chaque entreprise une scène",
    author: "B. Joseph Pine II & James H. Gilmore",
    cat: "Événementiel",
    level: "Avancé",
    year: 1999,
    blurb: "Le livre qui a théorisé l'expérience comme valeur économique à part entière. Une grille de lecture essentielle pour concevoir des événements mémorables qui dépassent le simple service rendu.",
    takeaway: "On ne vend plus un produit ni un service, mais une expérience que le client vivra et racontera."
  },
  {
    title: "Event Planning : The Ultimate Guide",
    author: "Judy Allen",
    cat: "Événementiel",
    level: "Intermédiaire",
    year: 2000,
    blurb: "Un manuel opérationnel complet pour organiser un événement de A à Z : budget, logistique, prestataires, gestion des risques. La référence pratique pour passer de la stratégie au terrain.",
    takeaway: "Un événement réussi se joue dans la préparation : checklist, budget et anticipation des imprévus."
  }
];
