'use server'

import {DatabaseClient} from '@/model/client'
import {CreateTicketSchema} from '@/model/schema'

import {redirect} from 'next/navigation'

export async function createTicket(formData: FormData) {
    // parse form data
    const {data, error} = CreateTicketSchema.safeParse(Object.fromEntries(formData))

    // handle invalid form data
    if (error) return redirect(`/new?${new URLSearchParams({response: 'error', message: 'Invalid form data'})}`)

    // save to database
    const client = new DatabaseClient()
    await client.createTicket({data})

    // redirect to new page with success
    return redirect(`/new?${new URLSearchParams({response: 'success', message: 'Ticket submitted. We will get back to you soon!'})}`)
}
