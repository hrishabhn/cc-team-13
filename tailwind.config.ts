import type {Config} from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
    content: [
        //
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                accent: colors.red[800],
                g: colors.zinc,
                line: {
                    DEFAULT: colors.zinc[200],
                    dark: colors.zinc[800],
                },
                layer: {
                    0: {
                        DEFAULT: colors.zinc[100],
                        dark: colors.zinc[950],
                    },
                    1: {
                        DEFAULT: colors.white,
                        dark: colors.zinc[900],
                    },
                },
            },
            height: {
                screen: '100vh 100dvh',
            },
            minHeight: {
                screen: '100vh 100dvh',
            },
        },
    },
    plugins: [],
} satisfies Config
