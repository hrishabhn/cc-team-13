import {CreateTicketForm} from './form'
import {PageHeader, PageSection} from '@/components/layout'
import {Callout, Card} from '@/components/ui'

import {z} from 'zod'

const SearchParamsSchema = z.object({
    response: z.enum(['success', 'error']).nullable().catch(null),
    message: z.string().optional().default(''),
})

export default async function CreateTicketPage({searchParams}: {searchParams: Promise<{[key: string]: string | string[] | undefined}>}) {
    const {response, message} = SearchParamsSchema.parse(await searchParams)

    return (
        <PageSection>
            <PageHeader>Create Ticket</PageHeader>
            {response && <Callout theme={response} message={message} />}

            <Card rounded="xl">
                <CreateTicketForm />
            </Card>
        </PageSection>
    )
}
