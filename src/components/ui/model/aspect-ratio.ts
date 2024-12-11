import {tw} from '@/lib/tailwind'

export type AspectRatio = 'video' | 'square'
export const getAspectClass = (aspect: AspectRatio): string =>
    ({
        video: tw`aspect-video w-full`,
        square: tw`aspect-square w-full`,
    })[aspect]
