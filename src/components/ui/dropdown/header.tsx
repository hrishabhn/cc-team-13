import {Heading} from '@/components/layout'

export function DropdownHeader({text}: {text: string}) {
    return (
        <div className="px-2 py-1">
            <Heading size="h6" theme="disabled" withoutPadding>
                {text}
            </Heading>
        </div>
    )
}
