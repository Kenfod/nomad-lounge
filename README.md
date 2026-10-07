# 🏨 Nomad Lounge

Nomad Lounge is a premium, full-featured administrative hotel management dashboard built using **React**, **Vite**, and **Supabase**. The platform streamlines hotel workflows by offering real-time data visualization, operational tracking (booking check-ins/outs), data mutations, role-based routing security, and automated state synchronization.

---

## 🚀 Key Features

- **Advanced Remote State Caching:** Built-in optimistic UI, cache invalidations, and zero-loading transitions utilizing **React Query**.
- **Real-Time Data Filtering & Sorting:** Fully shareable, bookmarkable, and scalable URL-driven filtering pipelines using React Router search parameters.
- **Automated Sample Seeding & Reset Engine:** Dedicated cloud transactional uploader script allowing database purging and insertion routines safely with full relational key mapping cascades.
- **Operational Checkout Workflows:** Seamless check-in/out interfaces with conditional package amenity calculations (e.g., dynamic breakfast price surcharges) and secure payment checkbox verification.
- **Global Theme Engine:** Local storage persistent Light/Dark mode state management mapping dynamic canvas design assets seamlessly.
- **Robust Security & Safety Guards:** Layered `<ProtectedRoute />` layouts paired with top-level runtime `<ErrorBoundary />` constraints protecting active views.

---

## 🛠️ Tech Stack & Design Patterns

### Core Frameworks
* **Frontend:** React 18 / Vite (Fast, modular compilation bundle profiles)
* **Database & Auth Client:** Supabase JavaScript Client (PostgreSQL backend + Row Level Security + Cloud Storage Buckets)
* **Asynchronous Cache State:** React Query (TanStack Query v4)
* **Routing Interceptors:** React Router DOM v6/v7

### Advanced Architecture Styles Implemented
* **Compound Component Pattern:** Leveraged across heavy UI structures like `<Table>`, `<Menus>`, and `<Modal>` to achieve absolute inversion of control, clean layout configurations, and completely strip out prop-drilling blocks.
* **Render Props Pattern:** Infused within `<Table.Body>` and generic `<List>` shells to abstract looping matrix layers away from parent views, supporting clean, reusable rendering.
* **Polymorphic Typography Rules:** Implemented dynamically via a single `<Heading as="h1">` wrapper capable of altering its underlying native tag element on demand.
* **Custom React Hook Encapsulation:** Zero side-effects cluttering UI presentations—all network requests, mutations, and outside DOM click monitors are decoupled into isolated, standalone hook files (`useUser`, `useCabins`, `useOutsideClick`, etc.).
* **Styled Components (CSS-in-JS):** Custom transient style properties prefixed with `$` to avoid leaking design tokens onto underlying native HTML DOM nodes.

---

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd nomad-lounge
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in your root folder footprint and append your active Supabase endpoints:
   ```env
   VITE_SUPABASE_URL=https://supabase.co
   VITE_SUPABASE_ANON_KEY=your-anonymous-key-string
   ```

4. **Launch development server:**
   ```bash
   npm run dev
   ```

---

## 📂 Core Folder Architecture

```text
src/
├── context/         # Global state providers (e.g., DarkModeContext)
├── data/            # Data-related folder (cabins)
├── features/        # Feature-driven domain clusters
│   ├── authentication/
│   ├── bookings/
│   ├── cabins/
│   ├── check-in-out/
│   ├── dashboard/
│   └── settings/
├── hooks/           # Reusable functional hook extensions (useOutsideClick)
├── pages/           # Page-based folders (account, bookings, cabins, check in, dashboard, login, settings, users )
├── services/        # Supabase API transaction service client modules
├── styles/          # Global styles, variables resets, and CSS design tokens
├── ui/              # Reusable atom-level presentation blocks (Button, FormRow, Modal)
└── utils/           # Shared utility formatting helpers and constant properties
```

---

## 🔒 Production Readiness & Code Polish
- **Zero Hardcoded Data:** Authentication entries, testing logins, and asset indicators have been thoroughly sanitized to ensure secure employee operations.
- **Fast Refresh Alignment:** Safely bypassed mixed module export boundaries across dynamic loaders using `// eslint-disable-next-line` directive configurations to retain rapid bundler updates.
- **Race Condition Prevention:** Explicit `await` barriers integrated within nested data updates (such as binary image avatar cloud bucket uploads) to protect profile data structures against synchronization lag.


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
