import { test, expect, Page } from '@playwright/test';
import { faker } from '@faker-js/faker'; // facultatif si tu l'utilises ailleurs

// Fonction réutilisable pour naviguer vers la homepage
export async function goToHomePage(page: Page) {
  await page.goto('https://automationexercise.com/');
  await expect(page).toHaveTitle('Automation Exercise');
  
  // Si une popup apparaît pour autoriser, on clique dessus, sinon rien
  const autoriserButton = page.getByRole('button', { name: 'Autoriser' });
  if (await autoriserButton.isVisible()) {
    await autoriserButton.click();
  }
}

// Test existant pour vérifier la page d'accueil
test('connexion homepage', async ({ page }) => {
  await goToHomePage(page);
});
