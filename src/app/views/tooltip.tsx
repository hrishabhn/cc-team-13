import {Heading} from '@/components/layout'
import {Button, TooltipText} from '@/components/ui'

export function TooltipExample() {
    return (
        <div>
            <Heading size="h1">Tooltip</Heading>
            <div className="flex items-start gap-2">
                {(['left', 'center', 'right'] as const).map(align => (
                    <TooltipText key={align} align={align} text="This is a tooltip">
                        <Button size="md">
                            <p className="min-w-48">Tooltip ({align})</p>
                        </Button>
                    </TooltipText>
                ))}
            </div>
        </div>
    )
}
