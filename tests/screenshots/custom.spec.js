// tests/screenshots/custom.spec.js
const { test, expect } = require('@playwright/test');

// Тест 1: Скріншот всієї сторінки 'About'
test('Скріншот всієї сторінки About', async ({ page }) => {
  await page.goto('/about.html');
  
  // Робимо скріншот всієї сторінки
  // Назва файлу 'about-page.png'
  expect(await page.screenshot()).toMatchSnapshot('about-page.png');
});

// Тест 2: Скріншот окремого елемента (заголовка H1)
test('Скріншот елемента H1 на сторінці About', async ({ page }) => {
  await page.goto('/about.html');
  
  // Знаходимо елемент h1 за його id
  const element = await page.locator('#main-title');
  
  // Робимо скріншот лише цього елемента
  // Назва файлу 'about-page-h1.png'
  expect(await element.screenshot()).toMatchSnapshot('about-page-h1.png');
});
