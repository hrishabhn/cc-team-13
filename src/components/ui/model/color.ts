import {tw} from '@/lib/tailwind'

export const cardThemes = ['layer-0', 'layer-1', 'foreground', 'hover'] as const
export const tailwindColors = [
    'accent',
    'g',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
] as const
export type TailwindColor = (typeof tailwindColors)[number]

export type CardTheme = (typeof cardThemes)[number] | TailwindColor

export const getCardThemeClass = (theme: CardTheme, active: boolean): string =>
    ({
        // card themes
        'layer-0': tw`bg-layer-0 dark:bg-layer-0-dark`,
        'layer-1': tw`bg-layer-1 dark:bg-layer-1-dark`,
        foreground: tw`bg-layer-1-dark text-white dark:bg-white dark:text-black`,
        hover: active
            ? tw`bg-black/5 active:bg-black/10 dark:bg-white/5 dark:active:bg-white/10`
            : tw`hover:bg-black/5 active:bg-black/10 dark:hover:bg-white/5 dark:active:bg-white/10`,

        // custom
        accent: tw`bg-accent text-white`,
        g: tw`bg-g-500/25`,

        // tailwind
        red: tw`bg-red-500 text-white dark:bg-red-600`,
        orange: tw`bg-orange-500 text-white dark:bg-orange-600`,
        amber: tw`bg-amber-500 text-white dark:bg-amber-600`,
        yellow: tw`bg-yellow-500 text-white dark:bg-yellow-600`,
        lime: tw`bg-lime-500 text-white dark:bg-lime-600`,
        green: tw`bg-green-500 text-white dark:bg-green-600`,
        emerald: tw`bg-emerald-500 text-white dark:bg-emerald-600`,
        teal: tw`bg-teal-500 text-white dark:bg-teal-600`,
        cyan: tw`bg-cyan-500 text-white dark:bg-cyan-600`,
        sky: tw`bg-sky-500 text-white dark:bg-sky-600`,
        blue: tw`bg-blue-500 text-white dark:bg-blue-600`,
        indigo: tw`bg-indigo-500 text-white dark:bg-indigo-600`,
        violet: tw`bg-violet-500 text-white dark:bg-violet-600`,
        purple: tw`bg-purple-500 text-white dark:bg-purple-600`,
        fuchsia: tw`bg-fuchsia-500 text-white dark:bg-fuchsia-600`,
        pink: tw`bg-pink-500 text-white dark:bg-pink-600`,
        rose: tw`bg-rose-500 text-white dark:bg-rose-600`,
    })[theme]
