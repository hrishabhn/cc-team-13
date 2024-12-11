'use client'

import {IconButton, TooltipText} from '@/components/ui'
import {usePageScrolled} from '@/lib/hooks'

import {type Icon} from '@phosphor-icons/react'

export function Navbar({left, center, right}: {left?: React.ReactNode; center?: React.ReactNode; right?: React.ReactNode}) {
    const isScrolled = usePageScrolled()

    return (
        <div
            className={`sticky top-0 z-50 grid w-full grid-cols-3 border-b border-line px-6 py-3 dark:border-line-dark ${isScrolled ? 'bg-layer-1/90 backdrop-blur-xl dark:bg-layer-1-dark/90' : 'bg-layer-1 dark:bg-layer-1-dark'} `}
        >
            <div className="flex w-full items-center justify-start gap-1">{left}</div>
            <div className="flex w-full items-center justify-center gap-1">{center}</div>
            <div className="flex w-full items-center justify-end gap-1">{right}</div>
        </div>
    )
}

export function NavbarItem({icon, title}: {icon: Icon; title: string}) {
    return (
        <TooltipText text={title}>
            <IconButton icon={icon} weight="duotone" size="lg" theme="hover" />
        </TooltipText>
    )
}
