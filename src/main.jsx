import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './Carts&Orders/cartContext.jsx'
import { ThemeProvider } from './ContextAPI/ThemeContext.jsx'
import { AccountProvider } from './ContextAPI/AccountContext.jsx'
import ScrollTop from './ScrollTop.jsx'
import { OrderProvider } from './Carts&Orders/OrderContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollTop />
      <ThemeProvider>
          <CartProvider>
            <OrderProvider>
              <AccountProvider>
                  <App />
              </AccountProvider>
            </OrderProvider>
          </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
