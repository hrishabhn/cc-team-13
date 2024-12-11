import {ButtonExample} from './views/button'
import {CalloutExample} from './views/callout'
import {ColorsExample} from './views/colors'
import {FormExample} from './views/form'
import {HeadingExample} from './views/heading'
import {MenuExample} from './views/menu'
import {ThemesExample} from './views/themes'
import {TooltipExample} from './views/tooltip'
import {PageSection} from '@/components/layout'

export default function Home() {
    return (
        <PageSection>
            <div className="space-y-4 py-4">
                <HeadingExample />
                <ColorsExample />
                <ThemesExample />
                <ButtonExample />
                <MenuExample />
                <FormExample />
                <CalloutExample />
                <TooltipExample />
            </div>
        </PageSection>
    )
}
