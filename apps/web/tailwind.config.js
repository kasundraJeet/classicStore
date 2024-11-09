/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1232px",
      },
    },
    fontSize: {
      sm: "12px",
      base: "16px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "36px",
    },
    colors: {
      white:"#FFFFFF",
      black:"hsl(var(--dum-black))",
      peachOrange: "hsl(var(--peach-orange))",
      babyBlue: "hsl(var(--baby-blue))",
      lavenderPurple: "hsl(var(--lavender-purple))",
      pastelPink: "hsl(var(--pastel-pink))",
      sageGreen: "hsl(var(--sage-green))",
      creamNude: "hsl(var(--cream-nude))",
    },
  },
  plugins: [],
};
