import {Heading} from '@/components/layout'
import {Card, tailwindColors} from '@/components/ui'

export function ColorsExample() {
    return (
        <div>
            <Heading size="h1">Colors</Heading>
            <div className="grid grid-cols-4 gap-4">
                {tailwindColors.map(color => (
                    <Card key={color} theme={color} aspect="video" rounded="md">
                        <div className="px-4 py-3">{color}</div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
