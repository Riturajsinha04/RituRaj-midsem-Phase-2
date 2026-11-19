# 🐾 Pet Adoption App

A React-based pet adoption platform built as a **Semester-03 ReactJS Homework** assignment. Users can browse available pets, filter by type, view detailed profiles, and adopt/un-adopt pets — all with client-side state management.

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.3.1 | UI library |
| React Router | 8.5.2 | Client-side routing |
| Vite | 8.3.6 | Build tool & dev server |
| OxLint | 1.90.0 | Linting |

---

## 📁 Project Structure

```
Homework/
├── public/
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── AdoptButton.jsx    # Adopt/Cancel button (disabled if unvaccinated)
│   │   └── PetCard.jsx        # Reusable pet summary card with link to details
│   ├── data/
│   │   └── pets.js            # Hardcoded array of 10 pet objects
│   ├── pages/
│   │   ├── Home.jsx           # Dashboard with pet stats
│   │   ├── PetList.jsx        # Filterable list of all pets
│   │   ├── PetDetails.jsx     # Individual pet profile page
│   │   └── Adopted.jsx        # List of adopted pets with total fee
│   ├── utils/
│   │   └── helpers.js         # formatAge() and formatFee() utilities
│   ├── App.jsx                # Root component with routing setup
│   ├── App.css
│   ├── index.css
│   └── main.jsx               # Entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 📄 Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/` | `Home` | Displays total pets, pets ready for adoption (vaccinated & not adopted), and adopted count |
| `/pets` | `PetList` | Lists all pets with a dropdown filter (All / Dog / Cat / Rabbit / Bird) |
| `/pets/:id` | `PetDetails` | Shows full details of a single pet with adopt button and back link |
| `/adopted` | `Adopted` | Shows adopted pets and calculates total adoption fee |

---

## 🧩 Components

### `PetCard`
Reusable card displaying a pet's emoji, name, type, breed, age, vaccination status, fee, an adopt button, and a "View Details" link.

### `AdoptButton`
Conditional button:
- If the pet is **not vaccinated** → shows "Vaccination Pending" text
- If vaccinated → shows an "Adopt" or "Cancel Adoption" toggle button

---

## 🗃️ Data Model

Each pet object in `src/data/pets.js` has the following shape:

```js
{
  id: Number,          // Unique identifier
  name: String,        // Pet name (e.g., "Bruno")
  emoji: String,       // Visual emoji (e.g., "🐶")
  type: String,        // Category: Dog | Cat | Rabbit | Bird
  breed: String,       // Breed name
  ageMonths: Number,   // Age in months
  gender: String,      // Male | Female
  vaccinated: Boolean, // Vaccination status
  adoptionFee: Number, // Fee in ₹ (0 = Free)
  isAdopted: Boolean   // Adoption status (toggled by user)
}
```

**Included pets:** Bruno 🐶, Misty 🐱, Sheru 🐶, Coco 🐰, Mithu 🦜, Luna 🐱, Rocky 🐶, Snowy 🐰, Kiwi 🐦, Simba 🐱

---

## 🛠️ Utility Functions

Located in `src/utils/helpers.js`:

| Function | Input | Output |
|---|---|---|
| `formatAge(ageMonths)` | `8` | `"8 months"` |
| `formatAge(ageMonths)` | `26` | `"2 years"` |
| `formatFee(fee)` | `3000` | `"₹3000"` |
| `formatFee(fee)` | `0` | `"Free"` |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation

```bash
cd Homework
npm install
```

### Run Dev Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
npm run build
```

### Lint

```bash
npm run lint
```

---

## 🔑 Key React Concepts Used

- **React Router v8** — `BrowserRouter`, `Routes`, `Route`, `Link`, `useParams`
- **useState** — Managing pet data and filter state
- **Props** — Passing `pets` and `toggleAdopt` through component tree
- **Conditional Rendering** — Ternary operators for vaccination status, empty states
- **Array Methods** — `.map()`, `.filter()`, `.find()`, `.reduce()` for data manipulation
- **Lifting State Up** — Pet state managed in `App.jsx`, passed down to all pages

---

## 🐛 Known Bugs (Intentional for Homework)

| File | Line | Bug | Fix |
|---|---|---|---|
| `App.jsx` | 26 | Route path is `"/pats"` instead of `"/pets"` | Change to `"/pets"` |
| `Adopted.jsx` | 16 | `PetCard` rendered without `.map()` — `p` is not defined | Wrap in `adoptedPets.map((p) => ...)` |
| `Adopted.jsx` | 21 | Stray `#` character after `</div>` | Remove the `#` |
| `AdoptButton.jsx` | 8 | `EventTarget.isAdopted` should be `pet.isAdopted` | Change to `pet.isAdopted` |

---

## 📝 License

This project is part of a university homework assignment (Semester 03 — Web Development / ReactJS).
