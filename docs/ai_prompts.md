# 🤖 Prompts IA pour votre Stratégie de Test

Utilisez ces prompts avec ChatGPT/Claude pour générer votre documentation et test cases.

---

## 📋 PROMPT 1 : Génération de la stratégie de test globale

```
Je travaille sur un portfolio de testeuse junior et je teste le site e-commerce https://automationexercise.com

Voici mes observations initiales du site :
- Le formulaire d'inscription accepte tous types de caractères (pas de validation stricte)
- Il n'y a pas de tailles pour les vêtements
- Pas de fonctionnalité de filtres ou de tri des produits
- Les catégories de vêtements sont incomplètes (ex: pas de pantalons femmes)
- Bug visuel : texte superposé avec image dans le panier
- Il faut obligatoirement cliquer sur "continuer" pour avancer, le clic sur le site ne fonctionne pas
- Pas de paiement réel (site démo)

Peux-tu me créer une stratégie de test complète pour ce projet qui inclut :
1. L'approche de test (UI, API, E2E)
2. Les priorités de test
3. Les risques identifiés
4. Les outils recommandés (j'utilise Playwright + TypeScript et Postman)
5. Les métriques à suivre

Format : Document structuré pour mon portfolio GitHub
```

---

## 🧪 PROMPT 2 : Génération de test cases pour le formulaire

```
Je teste le formulaire d'inscription sur https://automationexercise.com

Le formulaire contient ces champs :
- Name
- Email
- Password
- Date of birth (jour, mois, année)
- Checkbox newsletter
- Checkbox special offers
- First name
- Last name
- Company (optionnel)
- Address
- Country (dropdown)
- State
- City
- Zipcode
- Mobile number

PROBLÈME IDENTIFIÉ : Le formulaire accepte tous types de caractères sans validation stricte.

Génère-moi 30 test cases détaillés incluant :
- Happy path
- Edge cases (caractères spéciaux, emojis, scripts, très longues chaînes)
- Tests de sécurité basiques (XSS, injection)
- Tests de validation de données
- Tests d'ergonomie

Format : Tableau avec colonnes [ID, Titre, Steps, Expected Result, Priority]
```

---

## 🔍 PROMPT 3 : Identification d'edge cases créatifs

```
Je teste un site e-commerce (https://automationexercise.com) et je veux impressionner les recruteurs avec des edge cases auxquels personne ne pense.

Contexte :
- Site de vêtements
- Formulaire d'inscription peu sécurisé
- Pas de validation stricte des inputs
- Bugs visuels dans le panier

Génère-moi 20 edge cases créatifs et originaux que je pourrais tester, qui montrent ma capacité à penser "outside the box".

Inclus des cas sur :
- Sécurité
- Performance
- Accessibilité
- Compatibilité
- Utilisabilité

Format : Liste numérotée avec description du cas et impact potentiel
```

---

## 🌐 PROMPT 4 : Génération de scénarios API

```
Le site https://automationexercise.com a une API documentée.

Principaux endpoints :
- POST /api/verifyLogin
- GET /api/productsList
- POST /api/createAccount
- DELETE /api/deleteAccount
- PUT /api/updateAccount
- GET /api/getUserDetailByEmail
- POST /api/searchProduct

Génère-moi une liste de 25 test cases API incluant :
- Tests CRUD complets
- Tests de validation (codes 200, 400, 401, 404, 500)
- Tests de sécurité (authentification, autorisation)
- Tests de données (payload invalide, champs manquants)
- Tests de performance (charge basique)

Format : Tableau [Endpoint, Method, Test Case, Expected Status, Notes]
```

---

## 📊 PROMPT 5 : Génération de données de test

```
J'ai besoin de générer des jeux de données de test variés pour tester un formulaire d'inscription e-commerce.

Génère-moi en format JSON 15 profils utilisateurs incluant :
- 5 profils valides (happy path)
- 5 profils avec edge cases (noms très longs, caractères spéciaux, etc.)
- 5 profils invalides (pour tester la validation)

Chaque profil doit contenir : name, email, password, address, city, state, country, zipcode, mobile

Sois créatif avec les edge cases !
```

---

## 🎯 PROMPT 6 : Analyse des bugs trouvés

```
J'ai trouvé ce bug sur le site https://automationexercise.com :
[Décrivez votre bug ici - exemple : "Dans le panier, le texte du produit se superpose avec l'image"]

Peux-tu m'aider à :
1. Analyser la cause probable du bug
2. Évaluer sa sévérité et sa priorité
3. Rédiger un rapport de bug professionnel (avec steps to reproduce, expected vs actual, impact)
4. Suggérer des tests de régression pour ce bug
5. Identifier des bugs similaires potentiels sur le site

Format : Rapport de bug complet pour mon portfolio
```

---

## 💡 PROMPT 7 : Optimisation de la couverture de test

```
Mon projet de test actuel couvre :
- Tests UI : formulaire d'inscription, navigation, panier
- Tests API : [listez vos tests API]
- Tests E2E : parcours d'achat complet

Analyse ma couverture et suggère-moi :
1. Les gaps de couverture (ce que je n'ai pas testé)
2. 10 scénarios supplémentaires à haute valeur ajoutée
3. Des suggestions pour améliorer mes tests existants
4. Des idées pour montrer mon expertise dans mon portfolio

Contexte : Portfolio de testeuse junior, je veux impressionner les recruteurs.
```

---

## 📝 COMMENT UTILISER CES PROMPTS

### Étape 1 : Copiez le prompt
Copiez-collez le prompt dans ChatGPT ou Claude

### Étape 2 : Ajustez si nécessaire
Ajoutez vos observations spécifiques

### Étape 3 : Itérez
Demandez des précisions : "Peux-tu détailler le point 3 ?" ou "Donne-moi plus d'exemples"

### Étape 4 : Documentez
Sauvegardez les résultats dans votre projet :
- `docs/test-strategy.md`
- `docs/test-cases.md`
- `test-data/generated-users.json`

### Étape 5 : Citez l'IA dans votre README
```markdown
## 🤖 AI-Enhanced Testing

This project leverages AI (ChatGPT/Claude) for:
- Test strategy optimization
- Edge case identification (+300% coverage)
- Test data generation
- Bug analysis and root cause investigation
```

---

## 🎯 RÉSULTATS ATTENDUS

Après utilisation de ces prompts, vous aurez :
- ✅ Une stratégie de test professionnelle
- ✅ 50+ test cases documentés
- ✅ Des edge cases créatifs
- ✅ Des données de test variées
- ✅ Une documentation impressionnante

**Utilisez ces prompts maintenant et partagez-moi les résultats les plus intéressants !** 🚀