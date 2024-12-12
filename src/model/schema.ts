import {z} from 'zod'

// schema of new ticket
export const CreateTicketSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    comment: z.string(),
})

// enums
export const allProductType = ['iphone', 'ipad', 'mac', 'watch', 'other'] as const
export const allProductDivision = ['hardware', 'software', 'service', 'other'] as const
export const allUrgency = ['low', 'medium', 'high'] as const
export const allSentiment = ['positive', 'neutral', 'negative'] as const

const ProductTypeSchema = z.enum(allProductType)
const ProductDivisionSchema = z.enum(allProductDivision)
const UrgencySchema = z.enum(allUrgency)
const SentimentSchema = z.enum(allSentiment)

// schema of ticket from database
export const TicketSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.string().email(),
    comment: z.string(),

    product_type: ProductTypeSchema.nullable(),
    product_division: ProductDivisionSchema.nullable(),
    urgency: UrgencySchema.nullable(),
    sentiment: SentimentSchema.nullable(),
})

export const TicketTagsSchema = z.object({
    product_type: ProductTypeSchema,
    product_division: ProductDivisionSchema,
    urgency: UrgencySchema,
    sentiment: SentimentSchema,
})

// types
export type CreateTicket = z.infer<typeof CreateTicketSchema>
export type Ticket = z.infer<typeof TicketSchema>
export type TicketTags = z.infer<typeof TicketTagsSchema>
