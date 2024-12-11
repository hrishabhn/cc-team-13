import {
    //
    type AspectRatio,
    type CardTheme,
    type Rounded,
    type Shadow,
    getAspectClass,
    getCardThemeClass,
    getRoundedClass,
    getShadowClass,
} from './model'

import {tw} from '@/lib/tailwind'

type CardProps = {
    children?: React.ReactNode

    // styling
    theme?: CardTheme
    aspect?: AspectRatio
    ring?: true
    rounded?: Rounded
    shadow?: Shadow

    // state
    active?: boolean
}

export function Card({
    children,

    theme = 'layer-1',
    aspect,
    ring,
    rounded,
    shadow,

    active = false,
}: CardProps) {
    const themeClass = getCardThemeClass(theme, active)
    const aspectClass = aspect ? getAspectClass(aspect) : ''

    const ringClass = (() => {
        if (!ring) return ''
        if (active) return tw`ring-2 ring-accent`
        return tw`ring-line dark:ring-line-dark ring-1`
    })()

    const roundedClass = rounded ? getRoundedClass(rounded) : ''
    const shadowClass = shadow ? getShadowClass(shadow) : ''

    return <div className={`overflow-hidden ${[themeClass, aspectClass, ringClass, roundedClass, shadowClass].join(' ')}`}>{children}</div>
}
