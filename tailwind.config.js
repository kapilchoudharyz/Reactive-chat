/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        app_bg: '#383939',
        chat_bg:'#131214',
        btn_bg:'#ff6b79',
        friend_color:'#5078d4',
        received_chat_col:'#c9f1ff',
        sent_chat_col:'#f5e62e',
        zz:'#571712',
      }
    },
  },
  plugins: [],
}

