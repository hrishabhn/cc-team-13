import {ManageStack} from './stack'
import {Unauthorized} from './unauthorized'
import {PageSection} from '@/components/layout'
import {PageHeader} from '@/components/layout/page-header'
import {DatabaseClient} from '@/model/client'

import {z} from 'zod'

const SearchParamsSchema = z.object({password: z.string().optional().default('')})

export default async function ManagePage({searchParams}: {searchParams: Promise<{[key: string]: string | string[] | undefined}>}) {
    const {password} = SearchParamsSchema.parse(await searchParams)
    if (!password || password !== process.env.PASSWORD!) return <Unauthorized defaultPassword={password} />

    const client = new DatabaseClient()
    const tickets = await client.getAllTickets()

    return (
        <PageSection>
            <PageHeader>Manage Tickets</PageHeader>
            <ManageStack tickets={tickets} />
        </PageSection>
    )
}
