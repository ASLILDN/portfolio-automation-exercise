import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { goToHomePage } from './homepage.spec';

test.beforeEach(async ({ page }) => {
  await goToHomePage(page); // La homepage est ouverte avant chaque test
});

test('remplir formulaire signup', async ({ page }) => {
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Asli');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('asli@test.fr');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByRole('radio', { name: 'Mrs.' }).check();
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill('Test00++');
  await page.locator('#days').selectOption('22');
  await page.locator('#months').selectOption('4');
  await page.locator('#years').selectOption('2000');
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).click();
  await page.getByRole('textbox', { name: 'First name *' }).fill('Asli');
  await page.getByRole('textbox', { name: 'First name *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('LDN');
  await page.getByRole('textbox', { name: 'Last name *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Company', exact: true }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('TEST ACADEMY');
  await page.getByRole('textbox', { name: 'Company', exact: true }).press('Tab');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('22 RUE DE PARIS');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).press('Tab');
  await page.getByRole('textbox', { name: 'Address 2' }).press('Tab');
  await page.getByLabel('Country *').press('ArrowDown');
  await page.getByLabel('Country *').selectOption('United States');
  await page.getByLabel('Country *').press('ArrowDown');
  await page.getByLabel('Country *').selectOption('Canada');
  await page.getByLabel('Country *').press('ArrowDown');
  await page.getByLabel('Country *').selectOption('Australia');
  await page.getByLabel('Country *').press('ArrowDown');
  await page.getByLabel('Country *').selectOption('Israel');
  await page.getByLabel('Country *').press('ArrowDown');
  await page.getByLabel('Country *').selectOption('New Zealand');
  await page.getByLabel('Country *').press('ArrowDown');
  await page.getByLabel('Country *').selectOption('Singapore');
  await page.getByLabel('Country *').press('ArrowDown');
  await page.getByLabel('Country *').press('ArrowDown');
  await page.getByLabel('Country *').press('ArrowDown');
  await page.getByLabel('Country *').press('ArrowUp');
  await page.getByLabel('Country *').selectOption('New Zealand');
  await page.getByLabel('Country *').press('ArrowUp');
  await page.getByLabel('Country *').selectOption('Israel');
  await page.getByLabel('Country *').press('ArrowUp');
  await page.getByLabel('Country *').selectOption('Australia');
  await page.getByLabel('Country *').press('ArrowUp');
  await page.getByLabel('Country *').selectOption('Canada');
  await page.getByLabel('Country *').press('Tab');
  await page.getByRole('textbox', { name: 'State *' }).fill('');
  await page.getByRole('textbox', { name: 'State *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'State *' }).fill('OTTAWA');
  await page.getByRole('textbox', { name: 'State *' }).press('Tab');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('LILLE');
  await page.locator('#zipcode').click();
  await page.locator('#zipcode').fill('75000');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('3463-1326-2125-6686');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByText('Account Created!').click();
});


// remplacer les valeurs par faker et expect à la fin que Account Created apparait.