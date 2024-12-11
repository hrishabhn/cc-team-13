import {Heading} from '@/components/layout'
import {Callout} from '@/components/ui'

export function CalloutExample() {
    return (
        <div>
            <Heading size="h1">Callout</Heading>
            <Callout theme="info" message="This is an info message" />
            <Callout theme="success" message="This is a success message" />
            <Callout theme="warning" message="This is a warning message" />
            <Callout theme="error" message="This is an error message" />
        </div>
    )
}
