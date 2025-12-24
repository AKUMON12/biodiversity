# Biodiversity Website - Setup Instructions

This document provides step-by-step instructions for setting up and running the Biodiversity educational website on your local machine.

---

## 📋 Prerequisites

Before starting, ensure you have the following installed:

1. **Node.js** (v18 or higher)

   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js) or **bun**

   - Verify: `npm --version`

3. **Git** (optional, for version control)
   - Download from: https://git-scm.com/

---

## 🚀 Step-by-Step Setup

### Step 1: Clone or Download the Project

If using Git:

```bash
git clone <your-repository-url>
cd biodiversity-website
```

Or download the ZIP file and extract it to your desired location.

### Step 2: Install Dependencies

Navigate to the project folder and install all required packages:

```bash
npm install
```

Or if using bun:

```bash
bun install
```

This will install:

- React 18
- Tailwind CSS
- Vite (build tool)
- Lucide React (icons)
- And other dependencies listed in `package.json`

### Step 3: Start the Development Server

```bash
npm run dev
```

Or with bun:

```bash
bun dev
```

The terminal will display a local URL (usually `http://localhost:5173`). Open this in your browser.

### Step 4: View the Website

Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

You should see the Biodiversity website with:

- ✅ Interactive particle background that responds to your cursor
- ✅ Animated hero section
- ✅ Three components of biodiversity (Species, Genetic, Ecosystem)
- ✅ Interactive hotspot map
- ✅ Micro/Macro organisms section
- ✅ Conservation dashboard

---

## 📁 Project Structure

```
biodiversity-website/
├── public/                 # Static assets
│   └── favicon.ico
├── src/
│   ├── assets/            # Images and media
│   ├── components/
│   │   ├── ui/            # Shadcn UI components
│   │   │   └── button.tsx
│   │   ├── ParticleBackground.tsx    # Cursor-responsive animation
│   │   ├── Navigation.tsx            # Top navigation bar
│   │   ├── HeroSection.tsx           # Landing hero
│   │   ├── ComponentsSection.tsx     # 3 pillars of biodiversity
│   │   ├── HotspotSection.tsx        # Interactive map
│   │   ├── MicroMacroSection.tsx     # Organisms view
│   │   ├── ConservationSection.tsx   # Benefits dashboard
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useMousePosition.ts       # Mouse tracking hook
│   │   └── use-mobile.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx                 # Main page
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                     # Tailwind + Design system
├── index.html
├── tailwind.config.ts                # Tailwind configuration
├── vite.config.ts
├── package.json
└── INSTRUCTIONS.md
```

---

## 🎨 Design System

The website uses a custom design system defined in `src/index.css`:

### Color Palette (HSL)

| Variable            | Color                  | Usage                 |
| ------------------- | ---------------------- | --------------------- |
| `--jungle`          | Deep Green (#1B4332)   | Primary, forests      |
| `--bioluminescence` | Bright Green (#70E000) | Accents, glow effects |
| `--ocean`           | Deep Blue (#0077B6)    | Aquatic elements      |
| `--amber`           | Orange (#FF9F1C)       | Hotspots, alerts      |

### Key CSS Classes

- `.glass` - Glassmorphism effect
- `.glass-strong` - Stronger glass effect
- `.glow-text` - Glowing text effect
- `.glow-box` - Glowing box shadow
- `.text-gradient` - Gradient text (green to blue)
- `.animate-float` - Floating animation
- `.animate-pulse-glow` - Pulsing glow effect

---

## 🛠 Customization

### Changing Colors

Edit `src/index.css` to modify the color scheme:

```css
:root {
  --jungle: 153 46% 15%;        /* Adjust hue, saturation, lightness */
  --bioluminescence: 91 100% 44%;
  --ocean: 199 100% 36%;
  --amber: 35 100% 55%;
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import it in `src/pages/Index.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

### Modifying Hotspots

Edit the `hotspots` array in `src/components/HotspotSection.tsx`:

```typescript
const hotspots: Hotspot[] = [
  {
    id: 'unique-id',
    name: 'Location Name',
    location: { x: 50, y: 50 }, // Percentage from left/top
    species: ['Species 1', 'Species 2'],
    description: 'Description text',
  },
  // Add more...
];
```

---

## 🗄 Database Integration (Optional)

If you need MySQL/phpMyAdmin integration:

### Step 1: Install MySQL Dependencies

```bash
npm install mysql2
```

### Step 2: Create Database Connection

Create `src/lib/db.ts`:

```typescript
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'biodiversity_db',
});

export default pool;
```

### Step 3: Database Schema

```sql
CREATE DATABASE biodiversity_db;

USE biodiversity_db;

CREATE TABLE hotspots (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location_x DECIMAL(5,2),
  location_y DECIMAL(5,2),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE species (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  hotspot_id INT,
  is_endemic BOOLEAN DEFAULT true,
  FOREIGN KEY (hotspot_id) REFERENCES hotspots(id)
);
```

> **Note:** For a frontend-only deployment, database integration requires a backend API. Consider using Supabase or a Node.js/Express server.

---

## 📦 Building for Production

### Step 1: Build the Project

```bash
npm run build
```

This creates an optimized `dist/` folder.

### Step 2: Preview the Build

```bash
npm run preview
```

### Step 3: Deploy

The `dist/` folder contains static files that can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

---

## 🐛 Troubleshooting

### Common Issues

1. **"Module not found" errors**

   ```bash
   npm install
   ```

2. **Particles not showing**

   - Check browser console for errors
   - Ensure canvas element is rendering

3. **Styles not applying**

   ```bash
   npm run dev
   ```

   Clear browser cache and hard refresh (Ctrl+Shift+R)

4. **Build failures**
   ```bash
   rm -rf node_modules
   npm install
   npm run build
   ```

---

## 📚 Technologies Used

| Technology               | Version | Purpose            |
| ------------------------ | ------- | ------------------ |
| React                    | 18.x    | UI Framework       |
| TypeScript               | 5.x     | Type Safety        |
| Vite                     | 5.x     | Build Tool         |
| Tailwind CSS             | 3.x     | Styling            |
| Lucide React             | Latest  | Icons              |
| class-variance-authority | Latest  | Component Variants |

---

## 📝 Content Reference

The website content is based on the following biodiversity topics:

1. **Components of Biodiversity**

   - Species Diversity
   - Genetic Diversity
   - Ecosystem Diversity

2. **Key Concepts**

   - Evolution
   - Hotspots
   - Endemic Species
   - Terrestrial & Aquatic Habitats
   - Microscopic Decomposers

3. **Benefits of Biodiversity**
   - Food, health, and livelihood security
   - Medical research resources
   - Disease control and prevention
   - Cultural and spiritual value
   - Climate change adaptation
   - Ecosystem stability

---

## 🤝 Contributing

Feel free to enhance this educational resource by:

- Adding more hotspot locations
- Expanding species information
- Improving accessibility
- Adding more interactive elements

---

## 📄 License

This educational project is free to use and modify for learning purposes.

---

_Made with 💚 for our planet's biodiversity_
