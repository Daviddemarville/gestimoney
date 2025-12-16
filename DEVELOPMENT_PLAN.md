📘 GestiMoney — Plan de développement officiel
🎯 Objectif du document

Ce document définit la méthode de développement officielle de l’application GestiMoney.

Il a pour but de :

garantir un code propre, lisible et durable

éviter la dérive technique

structurer le travail dans le temps

permettre une reprise du projet sans perte de contexte

👉 Ce document fait foi. Toute implémentation doit le respecter.

🧭 Principes généraux (règles absolues)
Gestion du code

Le code est stocké sur GitHub.

La branche main est protégée.

Le développement se fait sur des branches courtes :

feature/*

fix/*

Aucun commit direct sur main.

Commits

Commits petits et atomiques.

Un commit = une intention claire :

un écran

un composant

une fonction

une règle métier

Messages de commit explicites.

Architecture & qualité

Séparation stricte des responsabilités.

Composants petits et ciblés.

Limite de 200 lignes par composant (sauf exception justifiée).

Clean code dès le départ.

Code lisible > code “malin”.

Pas de duplication volontaire.

Méthode de développement

Le développement suit strictement la méthode des 4 cercles :

Navigation & écrans

UI statique

Logique applicative

Backend & persistance

👉 Il est interdit de sauter un cercle.

🔵 Cercle 1 — Navigation & écrans
🎯 Objectif

Définir la carte complète de l’application :

quels écrans existent

leur rôle

comment on navigue entre eux

⚠️ Interdictions

aucune logique métier

aucun backend

aucun calcul

aucune dépendance Supabase

📱 Écrans du MVP
Dashboard

Fichier : app/(tabs)/index.tsx

Rôle : vue d’ensemble du budget

Responsabilité :

afficher le solde

accès rapide à l’ajout de transaction

aperçu global

Historique

Fichier : app/(tabs)/history.tsx

Rôle : consulter les transactions

Responsabilité :

liste des dépenses / revenus

navigation temporelle (mois)

Paramètres

Fichier : app/(tabs)/settings.tsx

Rôle : configuration utilisateur

Responsabilité :

informations compte

préférences

accès suppression compte (plus tard)

Modal — Ajout transaction

Fichier : app/modal.tsx

Rôle : saisie ponctuelle

Responsabilité :

ajout dépense

ajout revenu

📂 Navigation

Bottom tabs définis dans : app/(tabs)/_layout.tsx

Stack racine définie dans : app/_layout.tsx

🔵 Cercle 2 — UI statique (sans logique)
🎯 Objectif

Construire l’interface utilisateur complète avec :

données en dur

aucune logique complexe

aucun backend

🧩 Composants UI prévus
Dashboard

BalanceCard

StatsSummary

ChartPlaceholder

AddTransactionButton

Historique

TransactionRow

TransactionList

MonthSelector

Paramètres

SettingsSection

SettingsItem

🎨 Thème (première version)
Principes

moderne

apaisant

non anxiogène

lisible en light et dark

Palette cible (indicative)

Vert doux / menthe → revenus / positif

Rouge atténué / corail → dépenses

Gris chaud → textes secondaires

Fond clair non blanc pur

Dark mode non contrasté excessivement

👉 Les couleurs vivent dans constants/theme.ts.

🔵 Cercle 3 — Logique applicative (locale)
🎯 Objectif

Donner un comportement réel à l’app, sans backend.

📐 Règles

La logique ne vit pas dans les écrans.

Les écrans affichent.

Les hooks / fonctions calculent.

🔧 Logique à implémenter

calcul du solde

ajout / suppression transaction (en mémoire)

gestion du mois courant

récurrence (booléen)

règles métier :

pas de suppression rétroactive

arrêt de récurrence ≠ suppression historique

📂 Emplacements

hooks :

useTransactions

useBalance

fonctions pures :

calculateBalance

groupByMonth

🔵 Cercle 4 — Backend & persistance (Supabase)
🎯 Objectif

Rendre les données :

persistantes

sécurisées

synchronisées

🗄️ Tables principales (prévision)
users

id

email

first_name

last_name

created_at

transactions

id

user_id

type (income / expense)

amount

category

description

date

is_recurring

created_at

accounts (épargne / enveloppes)

id

user_id

name

type (current / savings / envelope)

balance

🛠️ Tables admin (si nécessaire plus tard)

audit_logs

feature_flags

👉 Aucune table admin n’est créée tant que le MVP user n’est pas stable.

🔐 Sécurité

RLS activé sur toutes les tables

accès strictement limité à user_id

aucune logique métier critique côté client

📌 Règles complémentaires

Aucun backend tant que l’UI n’est pas validée.

Mock data obligatoire avant Supabase.

Une décision technique importante = une trace écrite.

Pas d’optimisation prématurée.

Pas de state manager global tant que non justifié.

✅ Statut

Ce document constitue :

la référence officielle

le cadre de travail

la garantie de cohérence du projet

Toute implémentation doit respecter ce plan.