// tests/e2e/custom.test.js
const { test, expect } = require('@playwright/test');

// Тест 1: Перевірка заголовка (title) нашої нової сторінки 'About'
test('Перевірка заголовка сторінки About', async ({ page }) => {
  // `baseURL` додасться автоматично, тому `page.goto` йде на /about.html
  await page.goto('/about.html'); 
  await expect(page).toHaveTitle(/About Page/);
});

// Тест 2: Перевірка навігації (посилання "Повернутися на головну")
test('Перевірка посилання "Повернутися на головну"', async ({ page }) => {
  await page.goto('/about.html');
  
  // Клікаємо на посилання
  await page.click('text=Повернутися на головну');
  
  // Очікуємо, що URL зміниться на головну сторінку
  // `baseURL` (http://localhost:3000) + /
  await expect(page).toHaveURL('http://localhost:3000/');
});

// Тест 3: Тестування зовнішнього сайту (візьмемо Google)
test('Перевірка пошуку на Google', async ({ page }) => {
  // Для зовнішніх сайтів вказуємо повний URL
  await page.goto('https://www.google.com/');
  
  // Знаходимо поле вводу за назвою
  await page.fill('[name="q"]', 'Playwright');
  
  // Натискаємо Enter
  await page.press('[name="q"]', 'Enter');
  
  // Чекаємо на результати та перевіряємо, що заголовок сторінки оновився
  await page.waitForNavigation();
  await expect(page).toHaveTitle(/Playwright/);
});
