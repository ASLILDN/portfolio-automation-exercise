import { defineConfig, devices } from '@playwright/test';

/**
 * Configuration Playwright optimisée pour portfolio QA
 * Projet: Test automation Automation Exercise
 */
export default defineConfig({
  testDir: './tests',
  
  /* Timeout par test */
  timeout: 30 * 1000,
  
  /* Configuration des tests */
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  
  /* Rapports */
  reporter: [
    ['html', { open: 'never' }],
    ['json', { outputFile: 'reports/test-results.json' }],
    ['list']
  ],
  
  /* Configuration partagée pour tous les tests */
  use: {
    /* URL de base */
    baseURL: 'https://automationexercise.com',
    
    /* Collecter trace en cas d'échec */
    trace: 'retain-on-failure',
    
    /* Screenshots en cas d'échec */
    screenshot: 'only-on-failure',
    
    /* Vidéos en cas d'échec */
    video: 'retain-on-failure',
    
    /* Timeout des actions */
    actionTimeout: 10 * 1000,
    
    /* Timeout de navigation */
    navigationTimeout: 30 * 1000,
  },

  /* Configuration des projets (navigateurs) */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 }
      },
    },

    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        viewport: { width: 1920, height: 1080 }
      },
    },

    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
        viewport: { width: 1920, height: 1080 }
      },
    },

    // /* Tests mobile */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
  ],

  /* Serveur de dev local (optionnel) */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});