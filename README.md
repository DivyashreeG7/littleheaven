<div align="center">

  <h1>Little's Heaven Child Care & Early Learning</h1>
  <p><strong>Premier Early Childhood Education & Daycare Platform | Bengaluru, India</strong></p>

  <p>
    <a href="https://github.com/optifysupport/littlesheaven"><img src="https://img.shields.io/badge/Client_Milestone-1st_Client_Project-blueviolet?style=for-the-badge&logo=github" alt="1st Client Project" /></a>
    <a href="https://github.com/optifysupport/littlesheaven"><img src="https://img.shields.io/badge/Google_Rating-5.0_%E2%98%85-gold?style=for-the-badge&logo=google" alt="Google Rating 5.0" /></a>
    <a href="https://github.com/optifysupport/littlesheaven"><img src="https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react" alt="React 19" /></a>
    <a href="https://github.com/optifysupport/littlesheaven"><img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" /></a>
    <a href="https://github.com/optifysupport/littlesheaven"><img src="https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite" alt="Vite 6" /></a>
    <a href="https://github.com/optifysupport/littlesheaven"><img src="https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS v4" /></a>
  </p>

</div>

---

## Client Milestone: 1st Client Production Release

This platform marks the **1st Client Production Release** delivered by the engineering team. Designed and engineered for **Little's Heaven Child Care & Early Learning**, located in Hebbal, Bengaluru, the web application delivers a modern, interactive, and high-performance digital presence to engage parents and showcase early childhood programs.

---

## Core Features

- **Interactive Program Showcase**: Detailed curriculum previews for Day Care, Play Group, Nursery, LKG, UKG, and Abacus mental arithmetic.
- **Virtual Campus Tour**: Modal-driven virtual tour enabling prospective parents to explore classroom facilities, play arenas, and safety setups.
- **Interactive Book & Gallery Viewer**: High-resolution image showcase with smooth category filtering and animated lightboxes.
- **Admissions & Enquiry Gateway**: Integrated lead acquisition form with automated field validation and direct communication routing.
- **Verified Google Parent Reviews**: Dynamic testimonial carousels highlighting verified Google reviews from parents.
- **Direct WhatsApp Integration**: Floating action trigger offering one-click direct messaging to the admissions office.
- **Custom Vector Dividers**: Fluid SVG wave transitions between content sections for an aesthetic visual flow.
- **Search Engine Optimization (SEO)**: Pre-configured Open Graph tags, canonical URLs, meta tags, and schema.org JSON-LD structured data for local search visibility in Bengaluru.

---

## Technology Stack

| Domain | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Frontend Core** | React | `^19.0.1` | Component architecture and state management |
| **Language** | TypeScript | `~5.8.2` | Type safety and reliable code contracts |
| **Build Tool** | Vite | `^6.2.3` | Ultra-fast HMR and optimized production bundles |
| **Styling** | Tailwind CSS | `^4.1.14` | Utility-first styling engine and custom tokens |
| **Animations** | Motion (Framer Motion) | `^12.23.24` | Scroll-triggered transitions and micro-interactions |
| **Iconography** | Lucide React | `^0.546.0` | Modern vector icons |

---

## Repository Structure

```
littleheaven/
├── public/
│   ├── foot.png
│   ├── logo-littles.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AnimatedSection.tsx
│   │   ├── BookGallery.tsx
│   │   ├── CampusTourModal.tsx
│   │   ├── EnquirySection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── MissionVision.tsx
│   │   ├── Navbar.tsx
│   │   ├── ParentReviews.tsx
│   │   ├── ProgramModal.tsx
│   │   ├── ProgramsSection.tsx
│   │   ├── SectionDividers.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── WhyChooseUs.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Getting Started

### Prerequisites

Ensure the following tools are installed locally:

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation & Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/optifysupport/littlesheaven.git
   ```

2. **Navigate into the directory**:
   ```bash
   cd littlesheaven
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the local development server**:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

### Production Build & Type Checking

To compile the production bundle and verify type definitions:

```bash
# Type check and build bundle
npm run build

# Preview production build locally
npm run preview
```

---

## SEO & Local Business Optimization

The application implements standard local search engine optimization practices for Bengaluru:

- **JSON-LD Schema**: Embedded `ChildCare` structured schema for Google Rich Results.
- **Canonical Routing**: Configured canonical link tags to prevent duplicate indexing.
- **Index Control**: Configured `public/robots.txt` and `public/sitemap.xml` for crawler indexing.

---

## Deployment Remotes

This repository is maintained across two remote endpoints:

- **Primary Client Remote**: `https://github.com/optifysupport/littlesheaven.git` (`origin`)
- **Developer Portfolio Remote**: `https://github.com/Chiranth-Janardhan-moger/littleheaven.git` (`personal`)

---

## License

This project is licensed under the MIT License for code structure, with all branding assets, media, and copy reserved for **Little's Heaven Child Care & Early Learning**.
