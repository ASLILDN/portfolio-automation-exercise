import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('connexion homepage', async ({page}) => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle('Automation Exercise');
});

