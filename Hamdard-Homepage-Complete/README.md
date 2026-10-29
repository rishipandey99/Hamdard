# My Hamdard Store — Shopify Homepage Replica

Responsive homepage replica built from the supplied design screenshots and image/icon pack.

## Project structure

- `index.html` — standalone homepage preview. HTML, CSS and demo JavaScript are included in this file so it can be opened directly.
- `assets/` — all supplied product images, category images, banners, icons, logos and quality artwork, plus readable aliases used by the page.
- `assets/hamdard-homepage.css` — Shopify section styling.
- `assets/hamdard-homepage.js` — Shopify section slider behavior.
- `sections/hamdard-homepage.liquid` — Shopify Online Store 2.0 section.
- `reference/` — copies of the supplied reference screenshots and offer badge for project reference.

## Run the HTML preview

1. Extract the ZIP.
2. Keep the `assets` folder beside `index.html`.
3. Open `index.html` in a browser.

The preview uses real supplied assets for the logo, category tiles, product images, navigation icons, attributes banner and certification logos. Product card content and controls are built with HTML/CSS/JavaScript rather than using full-card screenshots.

## Install in Shopify

1. Duplicate your current theme before making changes.
2. In **Online Store → Themes → Edit code**, create `sections/hamdard-homepage.liquid`.
3. Upload `assets/hamdard-homepage.css`, `assets/hamdard-homepage.js` and all image files from the project `assets/` folder to the theme's **Assets** directory.
4. In **Customize → Home page**, add the **Hamdard homepage** section. Its preset includes the hero, category tiles and seven product shelves.
5. Assign a Shopify collection to each product shelf and, if desired, to each category tile. The shelves use live Shopify product images, prices, availability and variant links; quick add submits to Shopify's cart.
6. If the active theme has its own header or announcement bar, disable those theme sections on the home page to avoid showing a second header above this replica. Keep the theme's cart and account features enabled.
7. Preview desktop and mobile layouts in **Customize** before publishing. The standalone `index.html` is only a visual preview; its demo cart buttons do not place real orders.

The supplied category images, Khaalis attributes artwork and certification logos are used as section asset fallbacks. The merchant still needs to choose the store's real collections so product shelves show the right catalog.

## Notes

- CSS classes are descriptive and use `hamdard-` prefixes in the Shopify section to reduce conflicts with existing theme styles.
- The HTML preview uses readable classes such as `product-card`, `category-card`, `section-heading` and `nav-link`.
- All 52 image files from the supplied `hamdardallpics.zip` are included in `assets/`, alongside aliases used by the page.
- The homepage has not been installed in a live Shopify store, so final visual verification should be done in the target theme.
