# portfolio-automation-exercise
Portfolio QA : Suite de tests automatisés pour site e-commerce. Tests UI (Playwright), API (Postman) et E2E avec stratégie de test optimisée par IA.

# 🧪 QA Portfolio - E-commerce Test Automation

Portfolio de test automation démontrant mes compétences en tests UI, API et E2E avec intégration d'IA pour optimiser la stratégie de test.

## 🎯 Projet

Tests automatisés du site e-commerce [Automation Exercise](https://automationexercise.com/) incluant :
- ✅ Tests UI (Playwright + TypeScript)
- ✅ Tests API (Postman)
- ✅ Tests End-to-End
- ✅ Stratégie de test optimisée par IA

## 🛠️ Stack Technique

- **Framework de test** : Playwright
- **Langage** : TypeScript
- **Génération de données** : Faker.js
- **API Testing** : Postman
- **CI/CD** : GitHub Actions (à venir)

## 📋 Observations Clés

Durant l'exploration du site, j'ai identifié :
- Le formulaire d'inscription accepte tous types de caractères (risque sécurité)
- Absence de filtres/tri sur les produits
- Bug visuel : texte superposé dans le panier
- Catégories de produits incomplètes

Ces observations ont guidé ma stratégie de test, notamment l'ajout de tests de sécurité et d'edge cases.

## 🚀 Installation
```bash
# Cloner le projet
git clone https://github.com/VOTRE-USERNAME/portfolio-automation-exercise.git
cd portfolio-automation-exercise

# Installer les dépendances
npm install

# Installer les navigateurs Playwright
npx playwright install
```

## ▶️ Lancer les tests
```bash
# Tous les tests
npm test

# Tests UI uniquement
npx playwright test tests/ui/

# Mode headed (voir le navigateur)
npx playwright test --headed

# Mode debug
npx playwright test --debug
```

## 📊 Rapports

Après l'exécution des tests :
```bash
npx playwright show-report
```

## 🤖 Utilisation de l'IA

Ce projet démontre l'utilisation de l'IA (ChatGPT/Claude) pour :
- Identifier des edge cases (+300% de couverture)
- Générer des stratégies de test
- Optimiser les données de test
- Analyser les bugs trouvés

Documentation complète : [`docs/ai-prompts.md`](docs/ai-prompts.md)

## 📁 Structure du Projet
```
portfolio-automation-exercise/
├── tests/
│   ├── ui/              # Tests interface utilisateur
│   ├── api/             # Tests API
│   └── e2e/             # Tests end-to-end
├── docs/                # Documentation
├── test-data/           # Données de test
├── utils/               # Fonctions utilitaires
└── reports/             # Rapports de test
```

## 📈 Progression

- [x] Configuration Playwright
- [x] Premier test homepage
- [ ] Tests formulaire signup (en cours)
- [ ] Tests API
- [ ] Tests E2E
- [ ] Intégration CI/CD
- [ ] Documentation complète

## 👤 Auteur

**[Votre Nom]** - Testeuse Junior QA  
📧 [votre.email@example.com]  
🔗 [LinkedIn](votre-profil-linkedin)  
💼 [Portfolio](votre-portfolio)

---

*Projet créé dans le cadre de mon portfolio professionnel de test automation*
