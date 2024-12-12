import 'server-only'

import {type CreateTicket, type Ticket, TicketSchema, type TicketTags} from './schema'

import {neon} from '@neondatabase/serverless'
import {v4 as uuidv4} from 'uuid'
import {z} from 'zod'

const sql = neon(process.env.DATABASE_URL!)

export class DatabaseClient {
    // get all tickets
    public getAllTickets = async (): Promise<Ticket[]> =>
        z.array(TicketSchema).parse(await sql`select id, name, email, comment, product_type, product_division, urgency, sentiment from tickets order by modified desc`)

    // create new ticket
    public createTicket = async ({data}: {data: CreateTicket}) =>
        await sql`insert into tickets (id, name, email, comment, modified) values (${uuidv4()}, ${data.name}, ${data.email}, ${data.comment}, now())`

    // delete ticket
    public deleteTicket = async ({id}: {id: string}) => await sql`delete from tickets where id = ${id}`

    // update tags
    public updateTags = async ({id, tags}: {id: string; tags: TicketTags}) =>
        await sql`update tickets set product_type = ${tags.product_type}, product_division = ${tags.product_division}, urgency = ${tags.urgency}, sentiment = ${tags.sentiment}, modified = now() where id = ${id}`
}
