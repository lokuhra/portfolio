/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './features/**/*.{js,ts,jsx,tsx}',
        './providers/**/*.{js,ts,jsx,tsx}',
        './posts/**/*.{js,ts,jsx,tsx}',
        './hooks/**/*.{js,ts,jsx,tsx}',
    ],
    mode: 'jit',
    darkMode: 'class',
    plugins: [],
    theme: {
        extend: {
            colors: {
                // NOTE: We modify the gray color, as the default Tailwind gray color is heavily saturated
                // with blue, which makes it look strange in dark mode. This gray color is more balanced,
                // and works better for sites supporting dark mode.
                // Add a new "brand" color to all Tailwind utilities, so that we can easily change it.
                bg: {
                    light: '#242320',
                    dark: '#1B1A17',
                },
                brand: {
                    primary: '#FF8303',
                    text: '#F0E3CA',
                },
            },
            // Modify the default ring color so that it matches the brand color:
        },
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
}
