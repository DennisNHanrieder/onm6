import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from "./components/About.tsx"
import Home from "./components/Home.tsx"
import Assignment3App from "./components/Assignment3App.tsx"
import Assignment5App from "./components/Assignment5App.tsx"

const router = createBrowserRouter([
  {
    path: "home",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> }
    ]
  },
  {
    path: "solutions",
    element: <App />,
    children: [
      { path: "assignment3", element: <Assignment3App /> },
      { path: "assignment5", element: <Assignment5App /> }
    ]
  },
  {
    path: "about",
    element: <About />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
