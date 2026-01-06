# College Social Interaction Platform

A modern, visually stunning web application designed to help college students connect, find study groups, and discover events. This platform focuses on providing a premium, Apple-inspired user interface with smooth animations and interactive elements to enhance social interaction.

## 🚀 Features

- **Apple-Style Aesthetics:** A clean, glassmorphism-heavy design language inspired by macOS/iOS.
- **Interactive Dashboard:** comprehensive overview of social activities.
- **Event Discovery:** browse and join college events with ease.
- **Group Finder:** find study groups and social circles tailored to your interests.
- **User Profiles:** manage your identity and preferences.
- **Immersive Visuals:** 3D background elements using Three.js and heavy use of Framer Motion for fluid transitions.
- **Smart Navigation:** Spotlight-style search command center and a macOS-like notification center.
- **Secure Authentication:** built-in login and signup flows with route protection.

## 🛠️ Technology Stack

- **Core:** [React](https://react.dev/), [Vite](https://vitejs.dev/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **Routing:** [React Router 6](https://reactrouter.com/)
- **Styling & Animations:**
  - Vanilla CSS (Custom Design System)
  - [Framer Motion](https://www.framer.com/motion/) (Complex animations)
  - [Lenis](https://github.com/studio-freight/lenis) (Smooth scrolling)
- **3D Graphics:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/), [Drei](https://github.com/pmndrs/drei)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📦 Installation

1.  **Clone the repository** (if applicable) or download the source code.

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## 🏃‍♂️ Usage

1.  **Start the development server**:
    ```bash
    npm run dev
    ```

2.  **Open the application**:
    Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

3.  **Build for production**:
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components (Layout, Navbar, etc.)
│   ├── Background3D.jsx
│   ├── NotificationCenter.jsx
│   └── SearchModal.jsx
├── features/           # Feature-based modules (Auth, Events, Groups)
├── pages/              # Main page views (Dashboard, Profile)
├── store/              # Redux store configuration
├── App.jsx             # Main application component with Routing
└── main.jsx            # Entry point
```

## 🤝 Contributing

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
