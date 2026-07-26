import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Automated QA Tests', () => {
  
  test('Accessibility (WCAG 2.1 AA)', async ({ page }) => {
    await page.goto('/');
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    
    // We expect 0 violations. If there are any, the test will fail and output them.
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Functionality: Core Navigation', async ({ page }) => {
    await page.goto('/');
    
    // Basic check that the title is correct
    await expect(page).toHaveTitle(/Quantum Code/);
    
    // Check that there is at least one navigation link
    const links = page.locator('a');
    const count = await links.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Performance: Core Web Vitals (LCP estimate)', async ({ page }) => {
    // A rudimentary check to ensure the page loads within 3 seconds
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Target under 3 seconds as requested
    expect(loadTime).toBeLessThan(3000);
  });
  
  test('Security: Basic Checks', async ({ page }) => {
     const response = await page.goto('/');
     expect(response?.status()).toBe(200);
  });

  test('SEO Basics: Meta tags presence', async ({ page }) => {
    await page.goto('/');
    
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveCount(1);
    
    const h1 = page.locator('h1');
    const h1Count = await h1.count();
    expect(h1Count).toBeGreaterThanOrEqual(1); // logical heading hierarchy
  });

});
