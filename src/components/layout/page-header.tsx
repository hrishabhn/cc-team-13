import {Heading} from './heading'

export function PageHeader({children}: {children?: React.ReactNode}) {
    return (
        <div className="py-4">
            <Heading size="h1">{children}</Heading>
        </div>
    )
}
