import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from './provider/AuthProvider.jsx'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}>

    </RouterProvider>
    </QueryClientProvider>
    <Toaster />
  </AuthProvider>
  </React.StrictMode>,
)
