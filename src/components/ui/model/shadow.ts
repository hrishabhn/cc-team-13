import {tw} from '@/lib/tailwind'

export type Shadow = 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl'
export const getShadowClass = (shadow: Shadow): string =>
    ({
        sm: tw`shadow-sm`,
        base: tw`shadow`,
        md: tw`shadow-md`,
        lg: tw`shadow-lg`,
        xl: tw`shadow-xl`,
        '2xl': tw`shadow-2xl`,
    })[shadow]
