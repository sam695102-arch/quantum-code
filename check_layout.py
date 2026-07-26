from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1920, 'height': 1080})
    page.goto('http://localhost:3000/services')
    
    html = page.evaluate('() => { const el = document.documentElement; const rect = el.getBoundingClientRect(); return { width: rect.width, display: getComputedStyle(el).display }; }')
    body = page.evaluate('() => { const el = document.body; const rect = el.getBoundingClientRect(); return { width: rect.width, display: getComputedStyle(el).display, flex_direction: getComputedStyle(el).flexDirection }; }')
    main = page.evaluate('() => { const el = document.querySelector("main"); const rect = el.getBoundingClientRect(); return { width: rect.width, display: getComputedStyle(el).display, margin: getComputedStyle(el).margin }; }')
    wrap = page.evaluate('() => { const el = document.querySelector(".wrap"); const rect = el.getBoundingClientRect(); return { width: rect.width, left: rect.left, margin: getComputedStyle(el).margin, max_width: getComputedStyle(el).maxWidth }; }')
    
    print(f'HTML: {html}')
    print(f'BODY: {body}')
    print(f'MAIN: {main}')
    print(f'WRAP: {wrap}')
    
    browser.close()
