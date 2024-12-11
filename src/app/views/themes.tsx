import {Heading} from '@/components/layout'
import {Card, cardThemes} from '@/components/ui'

export function ThemesExample() {
    return (
        <div>
            <Heading size="h1">Themes</Heading>
            <div className="grid grid-cols-4 gap-4">
                {cardThemes.map(theme => (
                    <Card key={theme} theme={theme} aspect="video" rounded="md" ring>
                        <div className="px-4 py-3">{theme}</div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
