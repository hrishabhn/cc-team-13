import {z} from 'zod'

// schema of new ticket
export const CreateTicketSchema = z.object({
    title: z.string(),
    email: z.string().email(),
    comment: z.string(),
})

// enums
const allTicketType = ['issue', 'suggestion', 'other'] as const
const allUrgency = ['low', 'medium', 'high'] as const
const allSentiment = ['positive', 'neutral', 'negative'] as const

const TicketTypeSchema = z.enum(allTicketType)
const UrgencySchema = z.enum(allUrgency)
const SentimentSchema = z.enum(allSentiment)

// schema of ticket from database
export const TicketSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    email: z.string().email(),
    comment: z.string(),
    ticket_type: TicketTypeSchema.nullable(),
    urgency: UrgencySchema.nullable(),
    sentiment: SentimentSchema.nullable(),
})

export const TicketTagsSchema = z.object({
    ticket_type: TicketTypeSchema,
    urgency: UrgencySchema,
    sentiment: SentimentSchema,
})

// types
export type CreateTicket = z.infer<typeof CreateTicketSchema>
export type Ticket = z.infer<typeof TicketSchema>
export type TicketTags = z.infer<typeof TicketTagsSchema>
