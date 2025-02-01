import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, } from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './Redux/Store/store.js';
import AuthListener from './AuthListener/AuthListener.jsx';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <AuthListener></AuthListener>

        <RouterProvider router={router}>
        </RouterProvider>
      </Provider>
    </QueryClientProvider>
    <ToastContainer />
  </StrictMode>,
)
