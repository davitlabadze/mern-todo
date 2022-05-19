module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    backgroundPosition: {
      'left-1': '1rem',
    },
    extend: {
      backgroundImage: {
        task: "url('/src/components/task.svg')",
      },
    },
  },
  plugins: [],
};
