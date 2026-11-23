# 🚀 Frontend Machine Coding Challenges & Solutions

A curated repository of production-ready **Frontend Machine Coding Round Challenges** built using **React, TypeScript, Vite, and Tailwind CSS**.

This repository is designed to demonstrate problem-solving speed, clean architectural design, modular component patterns, and solid state management under standard frontend interview time constraints (45–60 minutes).

---

## 📂 Challenges Index

| # | Project / Problem | Tech Stack | Key Concepts Demonstrated | Status |
|---|-------------------|------------|---------------------------|--------|
| 1 | **Employee Database Management** | React 19, TypeScript, Tailwind CSS, Vite | Master-Detail View, Controlled Forms, Modal Architecture, Asynchronous Data Fetching | Completed |

---

## 🛠️ Featured Project: Employee Database Management

A complete CRUD-like interface for managing and inspecting employee records, commonly asked in frontend machine coding interviews at top tech companies.

### 🌟 Key Features
- **Master-Detail Layout**: Fast two-column layout displaying an interactive list of employees on the left and full detailed profiles on the right.
- **Asynchronous Data Handling**: Simulates real-world API data loading with proper lifecycle handling using React hooks (`useState`, `useEffect`).
- **Add Employee Modal**:
  - Modal overlay with toggle state and clean prop interface (`isOpen`, `onClose`, `onAddEmployee`).
  - Controlled form inputs for dynamic employee creation.
  - Generates immutable state updates and unique IDs.
- **Optimized Styling**: Clean and modern interface styled with **Tailwind CSS v4**.
- **Type Safety**: Fully typed with TypeScript interfaces ensuring strict contract boundaries between parent and child components.

---

## 🏗️ Architecture & Component Design

```
Frontend_Machine_Coding/
├── .gitignore
├── README.md
└── employee_data/
    └── employeesdata/
        ├── public/
        │   └── data.json              # Mock dataset for initial load
        ├── src/
        │   ├── assets/                # Static assets & icons
        │   ├── components/            # Reusable UI components
        │   │   └── AddEmployeeModal.tsx # Controlled form modal component
        │   ├── pages/                 # Feature pages
        │   │   └── EmplyeeData.tsx    # Core logic, state & master-detail view
        │   ├── App.tsx                # Main application wrapper
        │   ├── index.css              # Tailwind CSS imports
        │   └── main.tsx               # Application entry point
        ├── package.json
        ├── tsconfig.json
        └── vite.config.ts             # Tailwind CSS v4 & React plugins
```

### 💡 Core Engineering Principles Followed
1. **Separation of Concerns**: UI presentation, modal interactions, and parent business logic are decoupled into dedicated components.
2. **Unidirectional Data Flow**: Data flows down via typed props, while updates are communicated up through clean callback handlers.
3. **Clean Code & Readability**: Self-documenting naming conventions, explicit TypeScript interfaces, and elimination of unnecessary re-renders.

---

## 🚀 Getting Started

To run any of the challenges locally on your machine:

### Prerequisites
- Node.js (version 18+ recommended)
- npm or pnpm

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Akash1220-creator/Frontend_Machine_Coding.git
   cd Frontend_Machine_Coding
   ```

2. **Navigate to the project directory:**
   ```bash
   cd employee_data/employeesdata
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🧑‍💻 Author

- **Akash**
- **GitHub**: [@Akash1220-creator](https://github.com/Akash1220-creator)

---

⭐ *If you find these machine coding challenges helpful for your interview preparation, feel free to star this repository!*
