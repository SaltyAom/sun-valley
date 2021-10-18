module.exports = {
    mode: 'jit',
    purge: ['./index.html', 'src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: [require('@tailwindcss/aspect-ratio')]
}
