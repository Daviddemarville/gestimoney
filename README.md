📱 GestiMoney

GestiMoney est une application mobile de gestion de budget personnel, conçue pour être simple, apaisante et fiable, avec une approche centrée sur l’utilisateur et la durabilité du code.

L’objectif du projet est de proposer une application :

claire et non anxiogène malgré un sujet sensible (l’argent),

utilisable au quotidien sans surcharge fonctionnelle,

construite sur une base technique solide et maintenable.

🎯 Vision du projet

GestiMoney permet à un utilisateur de :

suivre ses revenus et dépenses,

visualiser son solde et ses équilibres mensuels,

gérer des récurrences (salaires, abonnements, charges),

organiser son budget via des comptes, épargnes et enveloppes,

évoluer vers des fonctionnalités avancées (Premium) sans complexifier le MVP.

Le projet est pensé comme la première brique d’un écosystème plus large (Gesti*).

🧠 Philosophie de développement

Le développement suit une méthode stricte visant à éviter la dette technique et la dérive fonctionnelle.

Principes clés

Clean code dès le départ

Séparation stricte des responsabilités

Composants petits et ciblés (≈ 200 lignes max)

Commits atomiques (une intention par commit)

Code durable et assumé, pas de bricolage jetable

🔵 Méthode des 4 cercles

Le projet respecte strictement la méthode suivante :

Navigation & écrans
Définition des écrans et des flux, sans logique métier.

UI statique
Construction de l’interface avec des données factices.

Logique applicative
Calculs, règles métier, comportements (sans backend).

Backend & persistance
Intégration Supabase, sécurité et synchronisation.

👉 Il est interdit de sauter un cercle.

🧱 Stack technique

Expo (SDK 54)

React Native

Expo Router

NativeWind (Tailwind pour RN)

React Native Reanimated

Supabase (auth + base de données, phase ultérieure)

Le socle technique est volontairement figé pour garantir la stabilité.

🗂️ Organisation du projet
app/            → écrans et navigation (Expo Router)
components/     → composants UI réutilisables
hooks/          → logique transverse et métier
constants/      → thèmes, couleurs, constantes
assets/         → images et ressources statiques
scripts/        → scripts de développement (outils internes)

🔒 Gouvernance du code

Code hébergé sur GitHub

Branche main protégée

Développement par branches courtes (feature/*, fix/*)

Aucun commit direct sur main

Toute décision structurante est documentée

⚠️ Licence & droits d’utilisation
🔐 Licence propriétaire — Tous droits réservés

Ce projet est un logiciel propriétaire.

Toute reproduction, distribution, modification, extraction ou réutilisation — totale ou partielle — du code source est strictement interdite, quel que soit le support ou le contexte, sans autorisation écrite préalable de l’auteur.

Cela inclut notamment :

la réutilisation de composants,

la reprise de logique métier,

la copie de structures, d’architectures ou de patterns spécifiques,

l’usage commercial ou non commercial.

Toute violation pourra donner lieu à des poursuites.

👤 Auteur

Projet conçu et développé par David De Marville.
Tous droits réservés.

📌 Statut du projet

🚧 En cours de développement

🎯 MVP en construction

📱 Application mobile (Android / iOS)