import {type CardTheme} from './model'
import {tw} from '@/lib/tailwind'

type BadgeProps = {
    children?: React.ReactNode
    theme?: CardTheme
}

export const Badge = ({children, theme = 'foreground'}: BadgeProps) => {
    const themeClass = {
        // custom
        'layer-0': tw`border-line bg-layer-0 dark:border-line-dark dark:bg-layer-0-dark`,
        'layer-1': tw`border-line bg-layer-1 dark:border-line-dark dark:bg-layer-1-dark`,
        foreground: tw`border-layer-1-dark bg-layer-1-dark text-white dark:bg-white dark:text-black`,
        hover: tw`border-transparent bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10`,

        // custom
        accent: tw`border-accent/30 bg-accent/20 text-accent`,
        g: tw`border-g-500/30 bg-g-500/25`,

        // tailwind
        red: tw`border-red-500/30 bg-red-500/20 text-red-500`,
        orange: tw`border-orange-500/30 bg-orange-500/20 text-orange-500`,
        amber: tw`border-amber-500/30 bg-amber-500/20 text-amber-500`,
        yellow: tw`border-yellow-500/30 bg-yellow-500/20 text-yellow-500`,
        lime: tw`border-lime-500/30 bg-lime-500/20 text-lime-500`,
        green: tw`border-green-500/30 bg-green-500/20 text-green-500`,
        emerald: tw`border-emerald-500/30 bg-emerald-500/20 text-emerald-500`,
        teal: tw`border-teal-500/30 bg-teal-500/20 text-teal-500`,
        cyan: tw`border-cyan-500/30 bg-cyan-500/20 text-cyan-500`,
        sky: tw`border-sky-500/30 bg-sky-500/20 text-sky-500`,
        blue: tw`border-blue-500/30 bg-blue-500/20 text-blue-500`,
        indigo: tw`border-indigo-500/30 bg-indigo-500/20 text-indigo-500`,
        violet: tw`border-violet-500/30 bg-violet-500/20 text-violet-500`,
        purple: tw`border-purple-500/30 bg-purple-500/20 text-purple-500`,
        fuchsia: tw`border-fuchsia-500/30 bg-fuchsia-500/20 text-fuchsia-500`,
        pink: tw`border-pink-500/30 bg-pink-500/20 text-pink-500`,
        rose: tw`border-rose-500/30 bg-rose-500/20 text-rose-500`,
    }[theme]

    return <div className={`flex shrink-0 items-center gap-1 text-nowrap rounded-full border-2 px-2.5 py-1 text-xs font-medium ${themeClass}`}>{children}</div>
}
