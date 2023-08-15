/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            'bebas': ['BebasNeue'],
            'poppins-sb': ['Poppins-SemiBold'],
            'poppins-r': ['Poppins-Regular'],
            'poppins-l': ['Poppins-Light'],

        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'custom': '950px',
            'lg': '1024px',
            'customlg': '1165px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                'cyan': '#09C7FB',
                'purple': '#C471ED',
                'red': '#F64F59',
                'lightDark': '#333333',
                'dark': '#1E1E1E',
                'primary': '#282828',
                'extraDark': '#121212',
            }
        },
    },
    plugins: [],
}