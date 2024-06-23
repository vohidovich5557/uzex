import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from 'sonner'
import { QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import { queryclient } from './config/store.ts'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryclient}>
      <Toaster position='top-right' richColors />
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
