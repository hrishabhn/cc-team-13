import {type CardTheme} from './model'
import {tw} from '@/lib/tailwind'

type BadgeProps = {
    children?: React.ReactNode
    theme?: CardTheme
}

export const Badge = ({children, theme = 'foreground'}: BadgeProps) => {
    const themeClass = {
        // custom
        'layer-0': tw`bg-layer-0 dark:bg-layer-0-dark`,
        'layer-1': tw`bg-layer-1 dark:bg-layer-1-dark`,
        foreground: tw`bg-layer-1-dark text-white dark:bg-white dark:text-black`,
        hover: tw`bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10`,

        // custom
        accent: tw`bg-accent/20 text-accent`,
        g: tw`bg-g-500/25`,

        // tailwind
        red: tw`bg-red-500/20 text-red-500`,
        orange: tw`bg-orange-500/20 text-orange-500`,
        amber: tw`bg-amber-500/20 text-amber-500`,
        yellow: tw`bg-yellow-500/20 text-yellow-500`,
        lime: tw`bg-lime-500/20 text-lime-500`,
        green: tw`bg-green-500/20 text-green-500`,
        emerald: tw`bg-emerald-500/20 text-emerald-500`,
        teal: tw`bg-teal-500/20 text-teal-500`,
        cyan: tw`bg-cyan-500/20 text-cyan-500`,
        sky: tw`bg-sky-500/20 text-sky-500`,
        blue: tw`bg-blue-500/20 text-blue-500`,
        indigo: tw`bg-indigo-500/20 text-indigo-500`,
        violet: tw`bg-violet-500/20 text-violet-500`,
        purple: tw`bg-purple-500/20 text-purple-500`,
        fuchsia: tw`bg-fuchsia-500/20 text-fuchsia-500`,
        pink: tw`bg-pink-500/20 text-pink-500`,
        rose: tw`bg-rose-500/20 text-rose-500`,
    }[theme]

    return <div className={`flex shrink-0 items-center gap-1 text-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${themeClass}`}>{children}</div>
}
