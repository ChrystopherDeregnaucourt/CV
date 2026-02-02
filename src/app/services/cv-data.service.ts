import { Injectable } from '@angular/core';
import { Profile, Experience, Education, SkillCategory, Language } from '../models/cv.models';

@Injectable({
  providedIn: 'root'
})
export class CvDataService {

  getProfile(): Profile {
    return {
      name: 'Chrystopher DEREGNAUCOURT',
      title: 'Développeur C#/C++',
      contact: {
        email: 'deregnaucourt.chrystopher@hotmail.fr',
        phone: '+33 6 61 92 27 25',
        location: 'Véranne 42520, France'
      },
      about: `Développeur logiciel, passionné avec plus de 12 ans d'expérience, je
        conçois des applications complexes, principalement en environnement
        client lourd (WinForms, WPF, C++, C#), dans des secteurs exigeants
        tels que le médical, l'industriel ou les environnements hostiles.
        Mon parcours m'a amené à intervenir sur des problématiques globales,
        incluant aussi bien le logiciel que le matériel (protocoles
        industriels comme Modbus, réseaux, instrumentation, etc.). Je suis
        reconnu pour ma capacité à comprendre rapidement des systèmes
        complexes, à proposer des solutions concrètes et à m'adapter
        efficacement aux contraintes du terrain.`,
      linkedIn: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'
    };
  }

  getExperiences(): Experience[] {
    return [
      {
        period: '2021 à 2025',
        contractType: 'Freelance (6 mois)/CDI',
        title: 'Développeur C++/C#',
        company: 'EFS',
        location: 'Givors (69)',
        description: `Réalisation de logiciels pour la conception de bancs de
          recherche dédiés aux injecteurs de carburant pour moteurs
          thermiques, en utilisant les langages C++ et C#`,
        tasks: [
          'Manipulation avancée de fichiers XML (Regex, xPath, etc)',
          'Administration et optimisation de bases de données MySQL et MariaDB',
          'Responsable de l\'implémentation et du déploiement de Git au sein de l\'entreprise, en utilisant GitLab pour la gestion centralisée des dépôts.',
          'Développement d\'un logiciel (utilisation de l\'API GitLab) afin de simplifier l\'utilisation de Git et la gestion des tickets.',
          'Formation des entreprises à l\'utilisation de nos logiciels et équipements.',
          'Déplacements internationaux pour superviser l\'installation et le déploiement chez les clients.',
          'Support technique à distance pour résoudre des problématiques clients à l\'international.'
        ],
        skills: [
          { name: 'C++' }, { name: 'C#' }, { name: 'WPF' }, { name: 'MFC' }, { name: 'MVVM' },
          { name: 'MariaDB' }, { name: 'MySql' }, { name: 'XML' }, { name: 'Json' },
          { name: 'Inno Setup' }, { name: 'Visual Studio 2022/VS6/2019' }, { name: 'Github Copilot' },
          { name: 'IA' }, { name: 'VirtualBox' }, { name: 'Modbus' }, { name: 'Instrumentation industrielle' },
          { name: 'Gestion de projet' }, { name: 'ISO 9001' }, { name: 'SQLite' }
        ]
      },
      {
        period: '2020',
        contractType: 'Freelance',
        title: 'Développeur C#',
        company: 'Dedalus',
        location: 'Valence (26)',
        description: `Travail sur un logiciel de gestion et logistique d'échantillon destinés à l'analyse génétique et
          d'anatomopathologie. Le logiciel permet de suivre l'avancement
          du traitement des échantillons afin d'obtenir le plus
          rapidement possible les résultats`,
        tasks: [
          'Travail sur un logiciel d\'interopérabilité développé en C# pour permettre l\'échange d\'informations entre différents logiciels',
          'Mise en place de RabbitMQ sur le logiciel d\'interopérabilité pour permettre l\'optimisation des accès à la base de données et améliorer la fluidité des échanges.',
          'Corrections et évolution sur le logiciel de gestion et logistique d\'échantillon développé en C# et WPF MVVM'
        ],
        skills: [
          { name: 'RabbitMQ' }, { name: 'EntityFramework' }, { name: 'Visual Studio 2019' },
          { name: 'DryIOC' }, { name: 'Git' }, { name: 'Azure Devops' }, { name: 'CI/CD' },
          { name: 'Json, Xml, Log, Xsd' }, { name: 'Design pattern Singleton, Factory, MVVM' },
          { name: 'Médical' }, { name: 'Méthode agile' }, { name: 'Microsoft SQL Server' }, { name: 'SQLite' }
        ]
      },
      {
        period: '2019',
        contractType: 'Freelance',
        title: 'Développeur C#',
        company: 'Veertus',
        location: 'Grenoble (38)',
        description: `Développement d'un logiciel en C# WPF MVVM qui permet de communiquer avec une cabine d'essayage qui scanne la morphologie des gens pour permettre de leur proposer des vêtements en fonction de celle-ci. 
          Développement d'un second logiciel en C# ASP.NET qui permet d'entraîner l'IA de catégorisation des vêtements.`,
        tasks: [
          'Écoute des besoins du client et proposition de solutions techniques',
          'Rédaction du cahier des charges',
          'Planning prévisionnel',
          'Conception de l\'architecture du logiciel et Réalisation',
          'Rédaction de la documentation technique',
          'Corrections et évolutions du logiciel puis livraison finale'
        ],
        skills: [
          { name: 'Visual Studio' }, { name: 'C#' }, { name: 'WPF' }, { name: 'MVVM Singleton' },
          { name: 'HTML' }, { name: 'ASP.NET' }, { name: 'Json' }, { name: 'Git' },
          { name: 'Jira' }, { name: 'BitBucket' }, { name: 'Web service' }
        ]
      },
      {
        period: '2018',
        contractType: 'Freelance',
        title: 'Développeur C#',
        company: 'Cabinet Dentaire Dr Roussel',
        location: 'Lyon (69)',
        description: `Développement d'un logiciel de facturation des patients afin de simplifier la comptabilité et d'obtenir des statistiques.`,
        tasks: [
          'Écoute des besoins du client et proposition de solutions techniques',
          'Rédaction du cahier des charges',
          'Planning prévisionnel',
          'Conception de l\'architecture du logiciel et Réalisation',
          'Rédaction de la documentation technique',
          'Corrections et évolutions du logiciel puis livraison finale'
        ],
        skills: [
          { name: 'Visual Studio' }, { name: 'C#' }, { name: 'WPF' }, { name: 'MVVM Singleton' },
          { name: 'ini' }, { name: 'PDF' }, { name: 'Médical' }, { name: 'SQLite' }
        ]
      },
      {
        period: '2017',
        contractType: 'Freelance',
        title: 'Développeur VB',
        company: 'Pavéo',
        location: 'Vendée (85)',
        description: `Reprise d'un logiciel de facturation développé en VB afin de récupérer les données de connexion et d'ajouter des nouvelles fonctionnalités d'export vers Crystal Report.`,
        tasks: [
          'Récupération des informations de connexion aux différents serveurs depuis le code source',
          'Développement d\'une nouvelle fonctionnalité qui permet l\'impression d\'un compte rendu d\'activité',
          'Développement d\'une nouvelle fonctionnalité qui permet de récupérer un fichier PDF avec le compte rendu d\'activité dans un format exploitable sous Crystal Report.'
        ],
        skills: [
          { name: 'Visual Studio' }, { name: 'VB' }, { name: 'Crystal Report' },
          { name: 'Gestion de projet' }, { name: 'PDF' }
        ]
      },
      {
        period: '2017 à 2019',
        contractType: 'CDI',
        title: 'Développeur C++',
        company: 'Dimosoftware',
        location: 'Limonest (69)',
        description: `Développeur C++ sur un logiciel de planification des maintenances préventives et curratives de l'ensemble du parc des entreprises.`,
        tasks: [
          'Réalisation des évolutions et corrections du logiciel',
          'Planification des tâches de développement',
          'Réalisation de la documentation technique',
          'Planning Poker afin de définir le temps et la priorité des tâches à réaliser',
          'Test de l\'API Web afin de vérifier le bon fonctionnement des modifications'
        ],
        skills: [
          { name: 'C++ builder' }, { name: 'C++' }, { name: 'Windows Form' }, { name: 'Tortoise' },
          { name: 'SVN' }, { name: 'Microsoft Azure' }, { name: 'CI/CD' }, { name: 'Test Unitaire' },
          { name: 'Firebird' }, { name: 'MySql' }, { name: 'Sql Server' }
        ]
      },
      {
        period: '2015 à 2017',
        contractType: 'CDI',
        title: 'Développeur C++',
        company: 'Implex',
        location: 'Limonest (69)',
        description: `Développeur C++/C# sur des logiciels de gestion du planning métrologique du parc des entreprises ainsi que d'exploitation des résultats de mesures.
          Responsable du développement d'un boîtier permettant de récupérer les données de mesure sur le terrain et de communiquer avec le logiciel de gestion de parc.
          Responsable du support technique client.
          Responsable de la formation des utilisateurs sur la suite logicielle.
          Consultant technique avant-vente pour la mise en place de la solution logicielle chez le client.`,
        tasks: [
          'Réalisation des évolutions et corrections des logiciels',
          'Responsable de l\'équipe support client',
          'Formateur des utilisateurs sur la suite logicielle',
          'Chef projet d\'automatisation des essais et instrumentations du materiel industriel sensible',
          'Programmation sur cible embarquée en C',
          'Communication étroite avec les clients afin d\'adapter le logiciel à leurs besoins',
          'Réalisation de la documentation technique',
          'Planification des tâches de développement'
        ],
        skills: [
          { name: 'Visual studio 2015' }, { name: 'C++/C# CLI' }, { name: 'C' }, { name: 'Arduino' },
          { name: 'Windows Form' }, { name: 'MFC' }, { name: 'Communication clients' },
          { name: 'Formation clients' }, { name: 'Microsoft Azure' }, { name: 'Organisation des tâches' },
          { name: 'CI/CD' }, { name: 'Méthode agile' }, { name: 'SQL Server' }, { name: 'SQL' },
          { name: 'Ninject' }, { name: 'RabbitMQ' }, { name: 'MassTransit' }, { name: 'NHibernate' },
          { name: 'EntityFramework' }, { name: 'WPF' }, { name: 'MVVM' }, { name: 'Test unitaire' },
          { name: 'ATMega2560' }, { name: 'Métrologie' }, { name: 'ISO 9001' }
        ]
      },
      {
        period: '2014',
        contractType: 'CDD',
        title: 'Développeur C# / Technicien essais',
        company: 'Apave',
        location: 'Limonest (69)',
        description: `Technicien essais sur des produits électrodomestiques afin de vérifier leur conformité aux normes en vigueur.
          Développeur C# sur des bancs d'essais existants et sur des nouveaux bancs d'essais.`,
        tasks: [
          'Réalisation des différents cahiers des charges des nouveaux bancs d\'essais',
          'Planification des tâches de développement',
          'Réalisation de la documentation technique',
          'Formation des utilisateurs sur les nouveaux bancs d\'essais',
          'Réalisation des essais sur les produits électrodomestiques',
          'Conception mécanique, électrique, électronique et programmation des nouveaux bancs d\'essais',
          'Réalisation des IHM en C# WPF',
          'Programmation sur cible embarquée en C'
        ],
        skills: [
          { name: 'Visual studio 2015' }, { name: 'C#' }, { name: 'C' }, { name: 'Arduino' },
          { name: 'WPF' }, { name: 'Communication utilisateurs' }, { name: 'Formation utilisateurs' },
          { name: 'Organisation des tâches' }, { name: 'ATMega2560' }, { name: 'Métrologie' },
          { name: 'Normes AFNOR' }
        ]
      },
      {
        period: '2012 à 2013',
        contractType: 'Alternance',
        title: 'Développeur C# / Technicien essais',
        company: 'Bosch Rexroth',
        location: 'Bonneville (74)',
        description: `Technicien essais sur des prototypes de produits pneumatiques en relation étroite avec le BE.
          Développeur LabView sur des bancs d'essais existants et Développeur C#/C sur des nouveaux bancs d'essais.`,
        tasks: [
          'Réalisation de l\'étude de faisabilité et analyse des risques',
          'Planification des tâches de développement',
          'Réalisation de la documentation technique',
          'Formation des utilisateurs sur le nouveau banc d\'essais',
          'Réalisation des essais sur les produits pneumatiques',
          'Conception mécanique, électrique, électronique et programmation du nouveau banc d\'essais',
          'Réalisation des IHM en C# Windows Form',
          'Programmation sur cible embarquée en C'
        ],
        skills: [
          { name: 'Visual studio 2013' }, { name: 'C#' }, { name: 'C' }, { name: 'Arduino' },
          { name: 'Windows Form' }, { name: 'Communication utilisateurs' }, { name: 'Formation utilisateurs' },
          { name: 'Organisation des tâches' }, { name: 'ATMega2560' }
        ]
      }
    ];
  }

  getEducation(): Education[] {
    return [
      {
        year: '2026 (En cours)',
        title: 'Développeur Full-Stack - Java et Angular',
        institution: 'Niveau 7 (Bac+5)',
        details: [
          'Choisir les outils et le paradigme de programmation d\'un projet',
          'Développer le front-end et le back-end d\'une application web, et les intégrer',
          'Cadrer un projet de développement',
          'Encadrer une équipe technique',
          'Gérer l\'intégration et la livraison continues pour améliorer un projet',
          'Concevoir l\'architecture et la base de données d\'un projet'
        ]
      },
      {
        year: '2024',
        title: 'SecNumacadémie, MOOC',
        institution: 'ANSSI',
        details: [
          'Comprendre les enjeux de la sécurité numérique',
          'Identifier les menaces et les vulnérabilités',
          'Identifier les risques et menaces liés au numérique',
          'Adopter les bonnes pratiques pour protéger ses données',
          'Renforcer la sécurité des systèmes d\'information'
        ]
      },
      {
        year: '2015',
        title: 'Formation à l\'utilisation du logiciel de calcul d\'incertitudes de mesure',
        institution: 'Implex',
        details: [
          'Formation afin de comprendre ce qu\'est l\'incertitude de mesure. Comprendre les exigences de la certification de conformité, de qualité et de traçabilité.'
        ]
      },
      {
        year: '2015',
        title: 'Formation à la métrologie générale',
        institution: 'BEA Métrologie',
        details: [
          'Comprendre les concepts clés de la métrologie, y compris les unités de mesure, les étalons, les incertitudes de mesure et les tolérances.',
          'Maîtriser les méthodes d\'étalonnage et de vérification des instruments de mesure.',
          'Appliquer les normes et réglementations en vigueur, notamment la norme ISO/IEC 17025 relative aux exigences générales concernant la compétence des laboratoires d\'étalonnages et d\'essais.',
          'Optimiser la gestion des équipements de mesure au sein d\'une organisation.'
        ]
      },
      {
        year: '2013',
        title: 'Licence professionnelle en alternance : Technicien en instrumentation intelligente et transmission de données (TIT)',
        institution: 'Bac+3'
      },
      {
        year: '2013',
        title: 'CQPM (Contrat de Qualification Professionnelle Métallurgie)',
        institution: 'IUT Annecy'
      },
      {
        year: '2012',
        title: 'Formation pour Windows server 2008 R2, 2003',
        institution: 'Opale Data'
      },
      {
        year: '2012',
        title: 'BTS Informatique Réseaux Industrie et Service technique (IRIS)',
        institution: 'BTS'
      }
    ];
  }

  getSkillCategories(): SkillCategory[] {
    return [
      {
        name: 'Interface',
        skills: [
          { name: 'WPF', level: 100 },
          { name: 'Windows Form', level: 90 },
          { name: 'MFC', level: 90 },
          { name: 'HTML', level: 60 },
          { name: 'CSS', level: 60 }
        ]
      },
      {
        name: 'Langages',
        skills: [
          { name: 'C#', level: 100 },
          { name: 'C++', level: 100 },
          { name: 'C', level: 95 },
          { name: 'SQL', level: 80 },
          { name: 'Python', level: 30 },
          { name: 'PHP', level: 15 },
          { name: 'Java', level: 60 },
          { name: 'TypeScript', level: 70 },
          { name: 'JavaScript', level: 40 }
        ]
      },
      {
        name: 'Outils & Autres',
        skills: [
          { name: 'Git', level: 100 },
          { name: 'GitLab', level: 100 },
          { name: 'GitHub', level: 100 },
          { name: 'Microsoft Azure', level: 90 },
          { name: 'Docker', level: 80 },
          { name: 'AWS', level: 10 },
          { name: 'CI/CD', level: 80 },
          { name: 'Agile/Scrum', level: 90 }
        ]
      },
      {
        name: 'IDE',
        skills: [
          { name: 'Visual Studio', level: 100 },
          { name: 'Visual Studio Code', level: 90 },
          { name: 'C++ Builder', level: 80 },
          { name: 'Cursor', level: 80 },
          { name: 'Arduino', level: 100 }
        ]
      },
      {
        name: 'SGBD',
        skills: [
          { name: 'MySQL', level: 100 },
          { name: 'MariaDB', level: 100 },
          { name: 'Microsoft SQL Server', level: 95 },
          { name: 'SqLite', level: 90 },
          { name: 'Firebird', level: 70 },
          { name: 'Oracle', level: 70 }
        ]
      }
    ];
  }

  getLanguages(): Language[] {
    return [
      { name: 'Français', level: 5, description: 'Langue maternelle' },
      { name: 'Anglais', level: 2, description: 'Technique' }
    ];
  }
}
