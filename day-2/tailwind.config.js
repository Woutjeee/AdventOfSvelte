/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(function ({addVariant}) {
            addVariant('progress-unfilled', ['&::-webkit-progress-bar', '&']);
            addVariant('progress-filled', ['&::-webkit-progress-value', '&::-moz-progress-bar', '&']);
        })
    ],
}

