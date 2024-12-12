import 'server-only'

import {type CreateTicket, type Ticket, TicketSchema, type TicketTags} from './schema'

import {neon} from '@neondatabase/serverless'
import {v4 as uuidv4} from 'uuid'
import {z} from 'zod'

const sql = neon(process.env.DATABASE_URL!)

export class DatabaseClient {
    // get all tickets
    public getAllTickets = async (): Promise<Ticket[]> =>
        z.array(TicketSchema).parse(await sql`select id, title, email, comment, ticket_type, urgency, sentiment from tickets order by modified desc`)

    // create new ticket
    public createTicket = async ({data}: {data: CreateTicket}) =>
        await sql`insert into tickets (id, title, email, comment, modified) values (${uuidv4()}, ${data.title}, ${data.email}, ${data.comment}, now())`

    // delete ticket
    public deleteTicket = async ({id}: {id: string}) => await sql`delete from tickets where id = ${id}`

    // update tags
    public updateTags = async ({id, tags}: {id: string; tags: TicketTags}) =>
        await sql`update tickets set ticket_type = ${tags.ticket_type}, urgency = ${tags.urgency}, sentiment = ${tags.sentiment}, modified = now() where id = ${id}`
}
