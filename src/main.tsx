import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from 'sonner'
import { QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import { queryclient } from './config/store.ts'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import i18n from './i18n.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryclient}>
      <Toaster position='top-right' richColors />
    <BrowserRouter>
    <I18nextProvider i18n={i18n}>
    <App />
    </I18nextProvider>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
