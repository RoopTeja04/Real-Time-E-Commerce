/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "bg-login-image":"url('https://static.vecteezy.com/system/resources/previews/006/663/095/non_2x/shopping-concept-cartons-or-paper-boxes-and-shopping-bag-in-red-shopping-cart-on-pink-background-online-shopping-consumers-can-shop-from-home-and-delivery-service-with-copy-space-free-photo.jpg')",
      },
      backgroundColor:{
        "navbar-color":"#213555",
        "add-to-cart":"#FFEB00",
      }
    },
  },
  plugins: [],
}