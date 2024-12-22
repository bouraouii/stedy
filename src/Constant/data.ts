import context from "react-bootstrap/esm/AccordionContext";
import { v4 as uuidv4 } from "uuid";

export const data = { name: "test@gmail.com", password: "12345" };
export const generateUUID = (): string => {
  return uuidv4();
};

export const structureData = {
  1: {
    title:
      "StedY repense le métier de conseil en technologies et services numériques pour délivrer plus de valeur, de transparence et d’engagementà ses consultants comme à ses clients entreprises.",
  },
  2: {
    1: {
      title: "Talents",
      subtailte: {
        1: {
          title: "Rémunération optimisée",
          content:
            "Afin de rendre la part qui vous revient, nous pratiquons un des taux de commissionnement les plus bas du marché",
        },
        2: {
          title: "Choix dans vos missions",
          content:
            "Nos Talents Manager vous proposerons l’intégralité des missions de nos clients. Vous pourrez alors vous positionner sur celles qui vous ressemblent, selon vos compétences et vos attentes.",
        },
        3: {
          title: "Autonomie et gestion de carrière",
          content:
            "Bénéficiez d’un accompagnement personnalisé lorsque vous êtes prêt à embrasser le statut d’indépendant.",
        },
      },
    },
    2: {
      title: "Talents2",
      subtailte: {
        1: {
          title: "Rémunération optimisée55",
          content:
            "Afin de rendre la part qui vous revient, nous pratiquons un des taux de commissionnement les plus bas du marché",
        },
        2: {
          title: "Choix dans vos missions",
          content:
            "Nos Talents Manager vous proposerons l’intégralité des missions de nos clients. Vous pourrez alors vous positionner sur celles qui vous ressemblent, selon vos compétences et vos attentes.",
        },
        3: {
          title: "Autonomie et gestion de carrière",
          content:
            "Bénéficiez d’un accompagnement personnalisé lorsque vous êtes prêt à embrasser le statut d’indépendant.",
        },
      },
    },
  },
  3: {
    1: {
      title: "StedY c’est aussi du RPO",
      subTitle: {
        title: "Le RPO by StedY, c’est quoi ?",
        content:
          "Le RPO (Recruitment Process Outsourcing) vous permet de disposer rapidement de l’expertise d’un StedYer, un RH spécialiste du sourcing et de l'engagement des profils tech et numérique, quand le besoin s’en fait sentir.Immédiatement opérationnel, rompu aux stratégies d'approche de ces talents rares et recherchés, il vous aide à atteindre plus rapidement vos objectifs de recrutement tout en éliminant les risques liés à l'embauche d'une nouvelle ressource*",
        souContent:
          "* Un expert RH à l’expérience 'confirmée' (5 ans) et disposant des mêmes outils que ceux de nos équipes représente un cout global annuel d’environ 100 K€.",
      },
    },
  },
  4: {
    2: {
      1: {
        title: "Talents",
        subtailte: {
          1: {
            title: "Rémunération optimisée",
            content:
              "Afin de rendre la part qui vous revient, nous pratiquons un des taux de commissionnement les plus bas du marché",
          },
          2: {
            title: "Choix dans vos missions",
            content:
              "Nos Talents Manager vous proposerons l’intégralité des missions de nos clients. Vous pourrez alors vous positionner sur celles qui vous ressemblent, selon vos compétences et vos attentes.",
          },
          3: {
            title: "Autonomie et gestion de carrière",
            content:
              "Bénéficiez d’un accompagnement personnalisé lorsque vous êtes prêt à embrasser le statut d’indépendant.",
          },
        },
      },
      2: {
        title: "Talents2",
        subtailte: {
          1: {
            title: "Rémunération optimisée55",
            content:
              "Afin de rendre la part qui vous revient, nous pratiquons un des taux de commissionnement les plus bas du marché",
          },
          2: {
            title: "Choix dans vos missions",
            content:
              "Nos Talents Manager vous proposerons l’intégralité des missions de nos clients. Vous pourrez alors vous positionner sur celles qui vous ressemblent, selon vos compétences et vos attentes.",
          },
          3: {
            title: "Autonomie et gestion de carrière",
            content:
              "Bénéficiez d’un accompagnement personnalisé lorsque vous êtes prêt à embrasser le statut d’indépendant.",
          },
        },
      },
    },
  },
  5: {
    title: "L’offre RPO by StedY",
    content: "Une relation simple, une prestation complète",
    subTaitle: {
      1: { title: "Un interlocuteur unique, responsable de la prestation" },
      2: { title: "Un chef de projet, responsable du pilotage stratégique" },
      3: {
        title:
          "L’ensemble des outils RH fournis (Job Boards, LinkedIn Recruiter, ATS, Reports, …)",
      },
    },
  },
  6: {
    title: "Sourcing Specialist",
    subTitle: "Off site",
    content: {
      1: { title: "Sourcing" },
      2: { title: "Qualifications à distance" },
      3: { title: "Gestion de la relation avec le business et les RH" },
    },
  },
  7: {
    title: "Talent Acquisition Specialist",
    subTitle: "On site",
    content: {
      1: { title: "Sourcing" },
      2: { title: "Qualifications à distance" },
      3: { title: "Gestion de la relation avec le business et les RH" },
    },
  },
  8: {
    title: "Durée de la prestation",
    content: {
      1: {
        title: "Déterminée",
        soutitle:
          " prestation de 1 ou plusieurs mois avec date de fin, renouvelable.",
      },
      2: { title: "Indéterminée ", souTitle: "avec préavis de fin de 1 mois." },
    },
  },
  9: {
    title: "",
    subtitle: {
      1: { title: "0498555555" },
      2: { title: "contata@gmail.com" },
      3: { title: "10 palcede la joutehh" },
    },
  },
};

// git checkout gh-pages
// git rm -rf .
// git commit -m "Clean gh-pages branch"
// git push origin gh-pages
// git checkout main

// git config --global user.name "Your Name"
// git config --global user.email "you@example.com"
// npm install gh-pages --save-dev
export const splitTextIntoLines = (
  text: string,
  numberOfParts: number
): string[] => {
  const words = text.split(" "); // Split the text into words
  const totalWords = words.length;

  // Calculate approximate number of words per chunk
  const chunkSize = Math.floor(totalWords / numberOfParts);
  const chunks: string[] = [];
  let start = 0;

  for (let i = 0; i < numberOfParts; i++) {
    let end = start + chunkSize;

    // Ensure the last chunk includes any remaining words
    if (i === numberOfParts - 1) {
      end = totalWords;
    }

    // Add the chunk of words to the chunks array
    chunks.push(words.slice(start, end).join(" "));
    start = end;
  }

  return chunks;
};
export const structureData1 = {
  text:{
    "1": {
      "title": "StedY repense le métier de conseil en technologies et services numériques pour délivrer plus de valeur, de transparence et d’engagement à ses consultants comme à ses clients entreprises.",
      "subTitle": [
        {
          "tilte": "ESN "
        },
        {
          "title": "Next Generation"
        }
      ]
    },
    "2": {
      "title": "Talents",
      "sections": [
        {
          "title": "Rémunération optimisée",
          "content": "Afin de rendre la part qui vous revient, nous pratiquons un des taux de commissionnement les plus bas du marché"
        },
        {
          "title": "Choix dans vos missions",
          "content": "Nos Talents Manager vous proposerons l’intégralité des missions de nos clients. Vous pourrez alors vous positionner sur celles qui vous ressemblent, selon vos compétences et vos attentes."
        },
        {
          "title": "Autonomie et gestion de carrière",
          "content": "Bénéficiez d’un accompagnement personnalisé lorsque vous êtes prêt à embrasser le statut d’indépendant."
        }
      ]
    },
    "3": {
      "title": "Entreprises",
      "sections": [
        {
          "title": "Transparence des coûts",
          "content": "Notre modèle vous assure une transparence complète sur l’intégralité de notre structure de tarification."
        },
        {
          "title": "Faible turnover",
          "content": "Nos talents sont plus libres et mieux rémunérés, ils se positionnent eux mêmes sur les missions qui les intéressent. Ils sont beaucoup plus engagés."
        },
        {
          "title": "Vivier de talents qualifés",
          "content": "important vivier de candidats engagés et qualiés par nos experts RH."
        }
      ]
    },
    "4": {
      "title": "StedY c’est aussi du RPO",
      "content": "Le RPO (Recruitment Process Outsourcing) vous permet de disposer rapidement de l’expertise d’un StedYer, un RH spécialiste du sourcing et de l'engagement des profils tech et numérique, quand le besoin s’en fait sentir. Immédiatement opérationnel, rompu aux stratégies d'approche de ces talents rares et recherchés, il vous aide à atteindre plus rapidement vos objectifs de recrutement tout en éliminant les risques liés à l'embauche d'une nouvelle ressource.",
      "subTitle": "Le RPO by StedY, c’est quoi ?",
      "subContent": "* Un expert RH à l’expérience 'confirmée' (5 ans) et disposant des mêmes outils que ceux de nos équipes représente un coût global annuel d’environ 100 K€.",
      "MetaContent": "Immédiatement opérationnel, rompu aux stratégies d'approche de ces talents rares et recherchés, il vous aide à atteindre plus rapidement vos objectifs de recrutement tout en éliminant les risques liés à l'embauche d'une nouvelle ressource*"
    },
    "5": {
      "title": "Les contextes propices au RPO",
      "sections": [
        {
          "content": "Afin de rendre la part qui vous revient, nous pratiquons un des taux de commissionnement les plus bas du marché"
        },
        {
          "content": "Compenser un manque de process RH et/ou de ressources expérimentées en interne"
        },
        {
          "content": "Déployer et piloter des campagnes de recrutement d'envergure"
        },
        {
          "content": "Accompagner la montée en compétence des équipes RH en place, notamment sur les spécificités du recrutement des profils tech et numérique"
        },
        {
          "content": "Identifier vos principaux concurrents en termes d'attractivité talents, leurs actions et stratégies (market mapping)"
        },
        {
          "content": "Mieux comprendre les forces et faiblesses de votre image employeur pour mieux la valoriser"
        }
      ]
    },
    "6": {
      "title": "Les avantages du RPO",
      "sections": [
        {
          "content": "Un accompagnement sur-mesure, adapté à vos besoins et plans de charge : ponctuel ou sur la durée, à temps plein ou à temps partiel, en présentiel ou en distanciel..."
        },
        {
          "content": "Déployable rapidement et facilement : consultant(s), outils, suivi... une prestation complète, pour une seule ligne de budget !"
        },
        {
          "content": "A des coûts maitrisés et compétitifs, définis en amont : un coût au recrutement jusqu'à 70% moins cher qu'un cabinet qui facture entre 15 et 20% du salaire annuel d'un candidat recruté"
        }
      ]
    },
    "7": {
      "title": "L’offre RPO by StedY",
      "content": "Une relation simple, une prestation complète",
      "subSections": [
        {
          "title": "Un interlocuteur unique, responsable de la prestation"
        },
        {
          "title": "Un chef de projet, responsable du pilotage stratégique"
        },
        {
          "title": "L’ensemble des outils RH fournis (Job Boards, LinkedIn Recruiter, ATS, Reports, …)"
        },
        {
          "title": "La prise en charge de l’administratif RH (gestion des contrats, onboarding, organisation des sessions de recrutement…)"
        },
        {
          "title": "La gestion des retours sur annonces (accès à l’ATS client)"
        },
        {
          "title": "Des points hebdomadaires de suivi de l’activité avec un retour à chaud sur les tendances du marché"
        },
        {
          "title": "Des points globaux avec report de l’activité (nombre de contacts, sociétés cibles, canaux porteurs de candidats potentiels…) ainsi qu’un accès au vivier global"
        }
      ]
    },
    "8": {
      "title": "Sourcing Specialist",
      "sections": [
        {
          "title": "Sourcing"
        },
        {
          "title": "Qualifications à distance"
        },
        {
          "title": "Gestion de la relation avec le business et les RH"
        },
        {
          "title": "Suivi RH (reporting)"
        }
      ],
      "subTitle": "Off site"
    },
    "9": {
      "title": "Talent Acquisition Specialist",
      "sections": [
        {
          "title": "Sourcing"
        },
        {
          "title": "Entretiens physiques"
        },
        {
          "title": "Onboarding"
        },
        {
          "title": "Gestion de la relation avec le business"
        },
        {
          "title": "Admin RH"
        },
        {
          "title": "Campus management"
        },
        {
          "title": "Communication RH"
        }
      ],
      "subTitle": "On site"
    },
    "10": {
      "title": "Durée de la prestation",
      "options": [
        {
          "title": "Déterminée",
          "subTitle": "Prestation de 1 ou plusieurs mois avec date de fin, renouvelable."
        },
        {
          "title": "Indéterminée",
          "subTitle": "Avec préavis de fin de 1 mois."
        }
      ]
    },
    "11": {
      "contactInfo": [
        {
          "tilte": "0498555555"
        },
        {
          "title": "contact@gmail.com"
        },
        {
          "title": "10 place de la Joutehh"
        }
      ]
    }
  },
  Formulair: {
    1: {
      Object: "pro",
      Name: "mohamed",
      pénome: "bouraoui",
      Email: "moahed@gamil.com",
      Télephone: "2999999",
      EntrePrise: "RBK",
      Message: "bonjoure je souis mohamed bouraoui ",
    },
    2:{
      Object: "protet",
      Name: "ali",
      pénome: "bouraoui",
      Email: "ali@gamil.com",
      Télephone: "2999999",
      EntrePrise: "RBK",
      Message: "bonjour",
    }
  },
};
