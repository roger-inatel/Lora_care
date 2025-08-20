import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage';
import Pacientes from './pages/Pacientes';
import Detalhes from './pages/Detalhes';
import SobreNos from './pages/SobreNos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/pacientes',
    element: <Pacientes />,
  },
  {
    path: '/detalhes',
    element: <Detalhes />,
  },
  {
    path: '/sobre-nos',
    element: <SobreNos />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
