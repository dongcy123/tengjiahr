/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6B57', // 珊瑚红作为主色调
        'secondary': '#494980', // 深紫灰色用于标题和正文
        'bg-light': '#F7FAFC', // 浅灰色用于背景区域
      },
      fontFamily: {
        'sans': ['Inter', 'Source Han Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}