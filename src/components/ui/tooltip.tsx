import {Card} from './card'

type TooltipAlign = 'left' | 'center' | 'right'

type TooltipProps = {
    align?: TooltipAlign
    interactive?: boolean
    tooltipContent: React.ReactNode
    children: React.ReactNode
}

export function Tooltip({align = 'left', interactive = true, tooltipContent, children}: TooltipProps) {
    const alignClass = {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
    }[align]

    return (
        <div className="group relative">
            {children}
            <div
                className={`pointer-events-none absolute top-full z-10 flex w-full origin-top -translate-y-1 scale-95 pt-1.5 opacity-0 transition group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 ${interactive ? 'group-hover:pointer-events-auto' : ''} ${alignClass}`}
            >
                <div className="w-fit">{tooltipContent}</div>
            </div>
        </div>
    )
}

type TooltipTextProps = {
    align?: TooltipAlign
    text: string
    children: React.ReactNode
}

export function TooltipText({align = 'center', text, children}: TooltipTextProps) {
    return (
        <Tooltip
            align={align}
            interactive={false}
            tooltipContent={
                <Card ring theme="layer-1" rounded="lg" shadow="md">
                    <p className="whitespace-nowrap px-2 py-1 text-xs font-medium">{text}</p>
                </Card>
            }
        >
            {children}
        </Tooltip>
    )
}
