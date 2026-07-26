# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: qa.spec.ts >> Automated QA Tests >> Performance: Core Web Vitals (LCP estimate)
- Location: tests\qa.spec.ts:26:7

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 3000
Received:   17091
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e4]:
      - link "Quantum Code Logo" [ref=e5] [cursor=pointer]:
        - /url: /
        - img "Quantum Code Logo" [ref=e6]
      - link "Get free consultation" [ref=e8] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e9]:
      - generic:
        - img
      - generic [ref=e10]:
        - generic [ref=e11]: Software engineering studio
        - heading "Software built with the precision of a proof, not the speed of a sprint." [level=1] [ref=e12]:
          - text: Software built with the
          - emphasis [ref=e13]: precision
          - text: of a proof, not the speed of a sprint.
        - paragraph [ref=e14]: Quantum Code is a small studio of engineers who ship production systems for teams who'd rather wait two weeks for the right architecture than launch tomorrow with the wrong one.
        - generic [ref=e15]:
          - link "Start a project" [ref=e16] [cursor=pointer]:
            - /url: /contact
          - link "See how we work →" [ref=e17] [cursor=pointer]:
            - /url: "#work"
        - generic [ref=e18]:
          - generic [ref=e19]:
            - generic [ref=e20]: "11"
            - generic [ref=e21]: years in production systems
          - generic [ref=e22]:
            - generic [ref=e23]: 40+
            - generic [ref=e24]: systems shipped, still running
          - generic [ref=e25]:
            - generic [ref=e26]: "6"
            - generic [ref=e27]: engineers, no bench, no juniors on your code
    - generic [ref=e29]:
      - generic [ref=e30]:
        - generic [ref=e31]: What we take on
        - heading "Three kinds of problems, chosen deliberately." [level=2] [ref=e32]:
          - text: Three kinds of problems,
          - emphasis [ref=e33]: chosen deliberately
          - text: .
        - paragraph [ref=e34]: We don't run a menu of services. We take on the problems below because they're the ones where careful engineering compounds — and we say no to the rest.
      - generic [ref=e35]:
        - generic [ref=e36]:
          - generic [ref=e37]: "01"
          - heading "Systems that can't go down" [level=3] [ref=e38]
          - paragraph [ref=e39]: Payments, ledgers, infrastructure control planes — software where a bug isn't an inconvenience, it's an incident. We design for the failure mode first.
        - generic [ref=e40]:
          - generic [ref=e41]: "02"
          - heading "Products outgrowing their prototype" [level=3] [ref=e42]
          - paragraph [ref=e43]: The version that got you to product-market fit is rarely the version that scales. We rebuild the load-bearing parts without stopping the business.
        - generic [ref=e44]:
          - generic [ref=e45]: "03"
          - heading "Teams that need a second set of senior hands" [level=3] [ref=e46]
          - paragraph [ref=e47]: Embedded engineering for stretches of 3–9 months, working inside your codebase and your standards, not around them.
    - generic [ref=e49]:
      - generic [ref=e50]:
        - generic [ref=e51]: How we work
        - heading "Three habits we don't compromise on." [level=2] [ref=e52]:
          - text: Three habits we don't
          - emphasis [ref=e53]: compromise
          - text: on.
        - paragraph [ref=e54]: None of this is process for its own sake. Each habit exists because we've watched its absence cost a client months.
      - generic [ref=e55]:
        - generic [ref=e56]:
          - generic [ref=e57]: “
          - heading "We write the design doc first" [level=4] [ref=e58]
          - paragraph [ref=e59]: Before a line of code, we write down the architecture, the tradeoffs we considered, and the ones we rejected — so you're reviewing a decision, not a diff.
        - generic [ref=e60]:
          - generic [ref=e61]: “
          - heading "Senior engineers only, start to finish" [level=4] [ref=e62]
          - paragraph [ref=e63]: The person who scopes your project is the person who builds it. No handoff to a team you haven't met.
        - generic [ref=e64]:
          - generic [ref=e65]: “
          - heading "We hand over systems you can leave" [level=4] [ref=e66]
          - paragraph [ref=e67]: Documentation, runbooks, and a walkthrough with your own team — built so our involvement is optional, not load-bearing.
    - generic [ref=e69]:
      - generic [ref=e70]:
        - generic [ref=e71]: Recent work
        - heading "A ledger system rebuilt underneath a live product." [level=2] [ref=e72]:
          - text: A ledger system rebuilt
          - emphasis [ref=e73]: underneath
          - text: a live product.
        - paragraph [ref=e74]: An 8-month engagement replacing a fintech client's transaction core while it processed live volume, with zero downtime windows used.
      - generic [ref=e75]:
        - figure "— VP Engineering, fintech client" [ref=e76]:
          - generic [ref=e77]: CASE — TRANSACTION CORE REBUILD
          - blockquote [ref=e78]: "\"They rebuilt the engine while the plane stayed in the air. We never once had to explain a maintenance window to our customers.\""
          - generic [ref=e79]: — VP Engineering, fintech client
        - generic [ref=e80]:
          - generic [ref=e81]:
            - generic [ref=e82]: "0"
            - generic [ref=e83]: unplanned outages during the migration
          - generic [ref=e84]:
            - generic [ref=e85]: 3.4x
            - generic [ref=e86]: throughput headroom after the rebuild
          - generic [ref=e87]:
            - generic [ref=e88]: 8 mo
            - generic [ref=e89]: from design doc to full cutover
    - generic [ref=e92]:
      - heading "Tell us the problem. We'll tell you honestly if we're the right fit." [level=2] [ref=e93]:
        - text: Tell us the problem. We'll tell you
        - emphasis [ref=e94]: honestly
        - text: if we're the right fit.
      - generic [ref=e95]:
        - link "Start a project" [ref=e96] [cursor=pointer]:
          - /url: /contact
        - link "Book a call" [ref=e97] [cursor=pointer]:
          - /url: /contact
    - generic [ref=e99]:
      - generic [ref=e100]: © 2026 Quantum Code Studio
      - generic [ref=e101]:
        - link "Home" [ref=e102] [cursor=pointer]:
          - /url: /
        - link "Services" [ref=e103] [cursor=pointer]:
          - /url: /services
        - link "About Us" [ref=e104] [cursor=pointer]:
          - /url: /about
        - link "Privacy Policy" [ref=e105] [cursor=pointer]:
          - /url: /quantum-code-privacy-policy.html
        - link "Terms of Service" [ref=e106] [cursor=pointer]:
          - /url: /quantum-code-terms-of-service.html
  - alert [ref=e107]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | 
  4  | test.describe('Automated QA Tests', () => {
  5  |   
  6  |   test('Accessibility (WCAG 2.1 AA)', async ({ page }) => {
  7  |     await page.goto('/');
  8  |     const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  9  |     
  10 |     // We expect 0 violations. If there are any, the test will fail and output them.
  11 |     expect(accessibilityScanResults.violations).toEqual([]);
  12 |   });
  13 | 
  14 |   test('Functionality: Core Navigation', async ({ page }) => {
  15 |     await page.goto('/');
  16 |     
  17 |     // Basic check that the title is correct
  18 |     await expect(page).toHaveTitle(/Quantum Code/);
  19 |     
  20 |     // Check that there is at least one navigation link
  21 |     const links = page.locator('a');
  22 |     const count = await links.count();
  23 |     expect(count).toBeGreaterThan(0);
  24 |   });
  25 | 
  26 |   test('Performance: Core Web Vitals (LCP estimate)', async ({ page }) => {
  27 |     // A rudimentary check to ensure the page loads within 3 seconds
  28 |     const startTime = Date.now();
  29 |     await page.goto('/');
  30 |     const loadTime = Date.now() - startTime;
  31 |     
  32 |     // Target under 3 seconds as requested
> 33 |     expect(loadTime).toBeLessThan(3000);
     |                      ^ Error: expect(received).toBeLessThan(expected)
  34 |   });
  35 |   
  36 |   test('Security: Basic Checks', async ({ page }) => {
  37 |      const response = await page.goto('/');
  38 |      expect(response?.status()).toBe(200);
  39 |   });
  40 | 
  41 |   test('SEO Basics: Meta tags presence', async ({ page }) => {
  42 |     await page.goto('/');
  43 |     
  44 |     const metaDescription = page.locator('meta[name="description"]');
  45 |     await expect(metaDescription).toHaveCount(1);
  46 |     
  47 |     const h1 = page.locator('h1');
  48 |     const h1Count = await h1.count();
  49 |     expect(h1Count).toBeGreaterThanOrEqual(1); // logical heading hierarchy
  50 |   });
  51 | 
  52 | });
  53 | 
```