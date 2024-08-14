import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { router } from './routes/Routes';
import AuthProvider from './providers/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
   <RouterProvider router={router} />
    <Toaster />
    </AuthProvider>
  </React.StrictMode>,
)
