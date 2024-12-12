'use server'

import {DatabaseClient} from '@/model/client'
import {getTags} from '@/model/openai'

import {revalidatePath} from 'next/cache'

const client = new DatabaseClient()

export const handleTags = async ({id, comment}: {id: string; comment: string}) => {
    const tags = await getTags({comment})
    client.updateTags({id, tags})
    revalidatePath('/manage')
}

export const handleDelete = async ({id}: {id: string}) => {
    await client.deleteTicket({id})
    revalidatePath('/manage')
}
