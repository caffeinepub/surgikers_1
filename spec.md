# Surgikers – Product Catalogue Page

## Current State
- ProductsPage.tsx is a placeholder with a "coming soon" message.
- Navbar has old category dropdown (Cutting Instruments, Scissors, etc.) that needs updating to match the 7 real categories.
- App.tsx routing is already set up for /products.

## Requested Changes (Diff)

### Add
- Full Product Catalogue page replacing the placeholder.
- Hero intro section: 3-4 lines about Surgikers' product offering and key USPs (quality, certifications, wide range, Asian market reach).
- Promotions/Ads banner strip: compact horizontal banner showing seasonal discounts and promotional offers.
- Left-side filter panel (sticky): search bar, A-to-Z sort toggle, category filter checkboxes, price range filter.
- Main content: large grid cards for 7 categories, each expandable to show sample products within.
- 7 categories with sample products:
  1. Dental Instruments (scalers, extractors, mirrors, probes, elevators)
  2. Orthopedic Instruments (bone chisels, mallets, retractors, drills, plates)
  3. General Instruments (scissors, forceps, scalpels, needle holders, clamps)
  4. Laparoscopy Instruments (trocars, graspers, dissectors, clip appliers, suction-irrigation)
  5. Hospital Furnitures (OT tables, IV stands, hospital beds, trolleys, mayo trays)
  6. Medical Hollowwares (kidney trays, dressing drums, bowls, buckets, basins)
  7. ENT Instruments (nasal specula, ear hooks, laryngoscopes, tongue depressors, tuning forks)

### Modify
- Navbar dropdown categories updated to match the 7 real categories.

### Remove
- Placeholder "coming soon" content from ProductsPage.

## Implementation Plan
1. Build ProductsPage.tsx with:
   - Intro section with Surgikers product USPs
   - Promo/ads compact banner
   - Two-column layout: left filter panel + right category grid
   - Filter panel: search, sort A-Z/Z-A, category filter checkboxes
   - Category cards in large grid, clicking expands to show products within
   - Sample products (4-6 per category)
2. Update Navbar CATEGORIES array to match the 7 real categories.
