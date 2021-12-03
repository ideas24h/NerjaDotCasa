module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography","@tailwindcss/aspect-ratio"),],
};

/* CSA para slider TAilwind*/

