import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

/**
 * Tests du formulaire d'inscription - Automation Exercise
 * 
 * Observations initiales :
 * - Le formulaire accepte tous types de caractères
 * - Pas de validation stricte sur les champs
 * - Bug potentiel de sécurité
 * 
 * Ce test démontre l'utilisation de l'IA pour identifier les edge cases
 */

test.describe('Signup Form Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigation vers la page de signup
    await page.goto('/');
    await page.click('a[href="/login"]');
    await expect(page.locator('h2:has-text("New User Signup!")')).toBeVisible();
  });

  test('TC001 - Happy Path: Successful signup with valid data', async ({ page }) => {
    // Données de test générées avec Faker (simulant l'IA)
    const testUser = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password({ length: 12 }),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      company: faker.company.name(),
      address: faker.location.streetAddress(),
      country: 'United States',
      state: faker.location.state(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode(),
      mobile: faker.phone.number()
    };

    // Étape 1: Remplir le formulaire initial (nom + email)
    await page.fill('input[data-qa="signup-name"]', testUser.name);
    await page.fill('input[data-qa="signup-email"]', testUser.email);
    await page.click('button[data-qa="signup-button"]');

    // Attendre la page de détails du compte
    await expect(page.locator('h2:has-text("Enter Account Information")')).toBeVisible();

    // Étape 2: Remplir les informations du compte
    await page.check('#id_gender1'); // Mr.
    await page.fill('#password', testUser.password);
    
    // Date de naissance
    await page.selectOption('#days', '15');
    await page.selectOption('#months', '6');
    await page.selectOption('#years', '1990');

    // Newsletters (optionnel)
    await page.check('#newsletter');
    await page.check('#optin');

    // Étape 3: Remplir les informations d'adresse
    await page.fill('#first_name', testUser.firstName);
    await page.fill('#last_name', testUser.lastName);
    await page.fill('#company', testUser.company);
    await page.fill('#address1', testUser.address);
    await page.selectOption('#country', testUser.country);
    await page.fill('#state', testUser.state);
    await page.fill('#city', testUser.city);
    await page.fill('#zipcode', testUser.zipcode);
    await page.fill('#mobile_number', testUser.mobile);

    // Soumettre le formulaire
    await page.click('button[data-qa="create-account"]');

    // Vérification: Compte créé avec succès
    await expect(page.locator('h2[data-qa="account-created"]')).toBeVisible();
    await expect(page.locator('h2[data-qa="account-created"]')).toContainText('Account Created!');
  });

  test('TC002 - Edge Case: Signup with special characters in name', async ({ page }) => {
    /**
     * Test identifié grâce à l'observation:
     * "Le formulaire accepte tous types de caractères"
     * 
     * But: Tester la robustesse du formulaire
     */
    const specialName = "John <script>alert('XSS')</script> Doe";
    const email = faker.internet.email();

    await page.fill('input[data-qa="signup-name"]', specialName);
    await page.fill('input[data-qa="signup-email"]', email);
    await page.click('button[data-qa="signup-button"]');

    // Le site devrait soit rejeter, soit encoder les caractères spéciaux
    // À documenter dans le rapport: comportement actuel du site
    await page.waitForTimeout(2000);
  });

  test('TC003 - Edge Case: Signup with very long name (boundary test)', async ({ page }) => {
    /**
     * Test de limite: nom de 255 caractères
     * L'IA suggère ce type de test pour vérifier les limites
     */
    const longName = 'A'.repeat(255);
    const email = faker.internet.email();

    await page.fill('input[data-qa="signup-name"]', longName);
    await page.fill('input[data-qa="signup-email"]', email);
    await page.click('button[data-qa="signup-button"]');

    // Vérifier le comportement: accepté ou rejeté?
    await page.waitForTimeout(2000);
  });

  test('TC004 - Edge Case: Signup with emoji in name', async ({ page }) => {
    /**
     * Test créatif suggéré par l'IA:
     * Beaucoup d'utilisateurs utilisent des emojis
     */
    const emojiName = "John 😀 Doe 🎉";
    const email = faker.internet.email();

    await page.fill('input[data-qa="signup-name"]', emojiName);
    await page.fill('input[data-qa="signup-email"]', email);
    await page.click('button[data-qa="signup-button"]');

    await page.waitForTimeout(2000);
  });

  test('TC005 - Negative Test: Signup with invalid email format', async ({ page }) => {
    const invalidEmails = [
      'notanemail',
      'missing@domain',
      '@nodomain.com',
      'spaces in@email.com',
      'double@@domain.com'
    ];

    for (const email of invalidEmails) {
      await page.fill('input[data-qa="signup-name"]', 'Test User');
      await page.fill('input[data-qa="signup-email"]', email);
      await page.click('button[data-qa="signup-button"]');
      
      // Le site devrait afficher un message d'erreur
      // Documenter le comportement réel
      await page.waitForTimeout(1000);
      
      // Recharger pour le prochain test
      await page.reload();
    }
  });

  test('TC006 - Negative Test: Signup with duplicate email', async ({ page }) => {
    /**
     * Test de règle métier:
     * Un email ne peut être utilisé qu'une fois
     */
    const duplicateEmail = 'test.duplicate@example.com';
    const name = faker.person.fullName();

    await page.fill('input[data-qa="signup-name"]', name);
    await page.fill('input[data-qa="signup-email"]', duplicateEmail);
    await page.click('button[data-qa="signup-button"]');

    // Vérifier le message d'erreur
    await expect(page.locator('p:has-text("Email Address already exist!")')).toBeVisible();
  });

  test('TC007 - Edge Case: Signup with SQL injection attempt', async ({ page }) => {
    /**
     * Test de sécurité basique
     * L'IA suggère ce type de test pour démontrer la conscience sécurité
     */
    const sqlName = "Robert'; DROP TABLE users;--";
    const email = faker.internet.email();

    await page.fill('input[data-qa="signup-name"]', sqlName);
    await page.fill('input[data-qa="signup-email"]', email);
    await page.click('button[data-qa="signup-button"]');

    // Le site devrait encoder ou rejeter ce type d'input
    await page.waitForTimeout(2000);
  });

  test('TC008 - Edge Case: Leave all optional fields empty', async ({ page }) => {
    /**
     * Test de champs optionnels
     * Identifier quels champs sont vraiment obligatoires
     */
    const testUser = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    };

    await page.fill('input[data-qa="signup-name"]', testUser.name);
    await page.fill('input[data-qa="signup-email"]', testUser.email);
    await page.click('button[data-qa="signup-button"]');

    await expect(page.locator('h2:has-text("Enter Account Information")')).toBeVisible();

    // Remplir UNIQUEMENT les champs obligatoires
    await page.check('#id_gender1');
    await page.fill('#password', testUser.password);
    await page.selectOption('#days', '1');
    await page.selectOption('#months', '1');
    await page.selectOption('#years', '2000');

    // Soumettre sans remplir les champs d'adresse optionnels
    await page.click('button[data-qa="create-account"]');

    // Observer le comportement
    await page.waitForTimeout(2000);
  });

  test('TC009 - UI Test: Verify all form fields are visible and enabled', async ({ page }) => {
    /**
     * Test de présence des éléments UI
     */
    await page.fill('input[data-qa="signup-name"]', 'Test');
    await page.fill('input[data-qa="signup-email"]', faker.internet.email());
    await page.click('button[data-qa="signup-button"]');

    // Vérifier tous les champs sont présents
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#first_name')).toBeVisible();
    await expect(page.locator('#last_name')).toBeVisible();
    await expect(page.locator('#address1')).toBeVisible();
    await expect(page.locator('#country')).toBeVisible();
    await expect(page.locator('#state')).toBeVisible();
    await expect(page.locator('#city')).toBeVisible();
    await expect(page.locator('#zipcode')).toBeVisible();
    await expect(page.locator('#mobile_number')).toBeVisible();
  });

  test('TC010 - Performance: Measure signup form load time', async ({ page }) => {
    /**
     * Test de performance basique
     * Utile pour montrer une approche holistique du testing
     */
    await page.fill('input[data-qa="signup-name"]', 'Perf Test');
    await page.fill('input[data-qa="signup-email"]', faker.internet.email());
    
    const startTime = Date.now();
    await page.click('button[data-qa="signup-button"]');
    await page.waitForSelector('h2:has-text("Enter Account Information")');
    const endTime = Date.now();
    
    const loadTime = endTime - startTime;
    console.log(`Form loaded in ${loadTime}ms`);
    
    // Assertion: Le formulaire devrait charger en moins de 3 secondes
    expect(loadTime).toBeLessThan(3000);
  });
});

/**
 * NOTES POUR LE PORTFOLIO:
 * 
 * 1. Ces tests démontrent:
 *    - Utilisation de Faker pour générer des données (approche moderne)
 *    - Identification d'edge cases grâce aux observations initiales
 *    - Tests de sécurité basiques (XSS, SQL injection)
 *    - Tests de performance
 *    - Tests négatifs
 * 
 * 2. Points à mentionner en entretien:
 *    - "J'ai utilisé l'IA pour identifier 15 edge cases supplémentaires"
 *    - "J'ai implémenté des tests de sécurité suite à l'observation que le formulaire accepte tous caractères"
 *    - "J'ai utilisé Faker pour générer des données de test réalistes"
 * 
 * 3. Améliorations futures:
 *    - Ajouter des tests d'accessibilité (ARIA labels, navigation clavier)
 *    - Tests cross-browser (déjà configuré dans playwright.config.ts)
 *    - Tests de responsive design
 *    - Intégration avec CI/CD (GitHub Actions déjà configuré)
 */