import {tw} from '@/lib/tailwind'

export type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'base'

type HeadingTheme = 'default' | 'clickable' | 'disabled'

type HeadingProps = {
    size: HeadingSize
    theme?: HeadingTheme
    withoutPadding?: boolean
    children?: React.ReactNode
}

export function Heading({size, theme = 'default', withoutPadding = false, children}: HeadingProps) {
    const sizeClass = {
        h1: tw`text-3xl font-bold`,
        h2: tw`text-2xl font-bold`,
        h3: tw`text-xl font-semibold`,
        h4: tw`text-lg font-semibold`,
        h5: tw`text-sm font-semibold`,
        h6: tw`text-xs font-semibold`,
        base: tw`text-base`,
    }[size]

    const themeClass = {
        default: {
            h1: '',
            h2: '',
            h3: '',
            h4: '',
            h5: 'text-g-500',
            h6: 'text-g-500',
            base: '',
        }[size],
        clickable: tw`text-indigo-600 hover:underline active:opacity-60`,
        disabled: 'text-g-500',
    }[theme]

    const paddingClass = withoutPadding
        ? ''
        : {
              h1: tw`pb-2 pt-6`,
              h2: tw`pb-2 pt-4`,
              h3: tw`pb-2 pt-3`,
              h4: tw`py-1.5`,
              h5: tw`py-1`,
              h6: tw`py-1`,
              base: tw`py-1`,
          }[size]

    return <div className={`${sizeClass} ${themeClass} ${paddingClass} flex items-center gap-1`}>{children}</div>
}
