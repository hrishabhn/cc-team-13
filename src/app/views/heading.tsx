import {Heading} from '@/components/layout'
import {Card} from '@/components/ui'

export function HeadingExample() {
    return (
        <div>
            <Heading size="h1">Headings</Heading>
            <Card rounded="md">
                <div className="px-4 py-3">
                    <Heading size="h1">Heading 1</Heading>
                    <Heading size="h2">Heading 2</Heading>
                    <Heading size="h3">Heading 3</Heading>
                    <Heading size="h4">Heading 4</Heading>
                    <Heading size="h5">Heading 5</Heading>
                    <Heading size="h6">Heading 6</Heading>
                    <Heading size="base">Base</Heading>
                </div>
            </Card>
        </div>
    )
}
