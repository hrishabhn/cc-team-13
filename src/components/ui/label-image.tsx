'use client'

import {Card, type LabelImageType, SimpleImage} from '@/components/ui'

type IconLikeProps = {
    image: LabelImageType
    size: 'sm' | 'md' | 'lg'
}

export function LabelImage({image, size}: IconLikeProps) {
    const {icon: Icon, theme, imageURL} = image

    if (theme) {
        const sizeClass = {sm: 'size-2', md: 'size-3', lg: 'size-4'}[size]

        return (
            <div className={`mx-1 ${sizeClass}`}>
                <Card theme={theme} rounded="full" aspect="square" />
            </div>
        )
    }

    if (Icon) return <Icon weight="bold" size={{sm: 16, md: 20, lg: 24}[size]} />

    if (imageURL) {
        const sizeClass = {sm: 'w-4', md: 'w-5', lg: 'w-6'}[size]

        return (
            <div className={sizeClass}>
                <Card aspect="square" ring rounded="full">
                    <SimpleImage url={imageURL} />
                </Card>
            </div>
        )
    }

    return <div className={{sm: 'size-4', md: 'size-5', lg: 'size-6'}[size]} />
}
