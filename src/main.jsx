import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import AuthProvider from './AuthProvider/AuthProvider'
import CartDrawerProvider from './cartDrawerProvider/CartDrawerProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <CartDrawerProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </CartDrawerProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </StrictMode>,
)
