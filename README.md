# 🎓 Assignments Manager — Frontend Angular ESATIC 2025/2026

Application Angular 21 pour la gestion des assignments étudiants.

## ✨ Fonctionnalités

- **Authentification JWT** : login, register, déconnexion automatique
- **Gestion des rôles** : admin (CRUD complet) / user (ajout + modification)
- **Tableau enrichi** : matière (image), auteur (avatar), note colorée, statut
- **Filtres avancés** : recherche texte, filtre par matière, filtre rendu/non rendu
- **Formulaire Stepper** : ajout en 3 étapes (devoir → auteur → note)
- **Dialogue de confirmation** avant suppression
- **SnackBar** notifications sur chaque action
- **Navigation** : guard d'accès, route protégée
- **Contrainte note** : impossible de marquer "rendu" sans note
- **Détail complet** : photo auteur, photo prof, note colorée par mention

## 🛠️ Installation locale

```bash
git clone <URL_REPO_FRONT>
cd frontend
npm install
cp .env.example .env
# Dans .env : BACKEND_URL=http://localhost:8010
npm run startdev
# Accéder à http://localhost:4200
```

## 🔧 Variables d'environnement

| Variable | Description | Défaut |
|---|---|---|
| `BACKEND_URL` | URL de base du backend | `http://localhost:8010` |

## 🏗️ Déploiement sur Render.com

1. Créer un **Static Site** (ou Web Service avec `server.js`) sur render.com
2. Build Command : `npm run build`
3. Publish directory : `dist/assignment-app/browser`
4. Variable : `BACKEND_URL=https://votre-backend.onrender.com`

## 👥 Auteurs

- Ibrahim Yankine — Projet Mini ESATIC 2025/2026

## 🔐 Compte de test

- **Admin** : `admin` / `Admin1234!`

## 🎥 Vidéo de démo

[Lien YouTube à renseigner]

## 📁 Structure du projet

```
src/app/
├── auth/
│   ├── login/          # Page de connexion JWT
│   └── register/       # Page d'inscription
├── assignments/
│   ├── add-assignment/ # Formulaire stepper en 3 étapes
│   ├── assignment-detail/ # Vue détail avec photo auteur/prof
│   ├── edit-assignment/   # Formulaire de modification
│   └── assignments.ts     # Tableau paginé avec filtres
└── shared/
    ├── auth.service.ts     # Gestion JWT (login/register/logout)
    ├── auth-guard.ts       # Guards de route
    ├── assignments.service.ts # CRUD avec token Bearer
    └── confirm-dialog/     # Dialogue de confirmation Material
```
