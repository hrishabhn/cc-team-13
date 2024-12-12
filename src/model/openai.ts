import 'server-only'

import {type TicketTags, TicketTagsSchema, allProductDivision, allProductType, allSentiment, allUrgency} from './schema'

import OpenAI from 'openai'
import {zodResponseFormat} from 'openai/helpers/zod'

const openai = new OpenAI()

export async function getTags({comment}: {comment: string}): Promise<TicketTags> {
    const completion = await openai.beta.chat.completions.parse({
        model: 'gpt-4o-mini',
        messages: [
            {
                role: 'system',
                content: [
                    'You are a helpful assistant for the Apple customer support team.',
                    'Given the following customer ticket comment, provide the product type, product division, urgency, and sentiment.',
                    `The product type should be one of: ${allProductType.join(', ')}. If it isn't clear, select 'other'.`,
                    `The product division should be one of: ${allProductDivision.join(', ')}. If it isn't clear, select 'other'.`,
                    `The urgency should be one of: ${allUrgency.join(', ')}.`,
                    `The sentiment should be one of: ${allSentiment.join(', ')}.`,
                ].join(' '),
            },
            {
                role: 'user',
                content: [
                    {
                        type: 'text',
                        text: `# User ticket comment\n\n${comment}`,
                    },
                ],
            },
        ],
        response_format: zodResponseFormat(TicketTagsSchema, 'tags'),
    })

    const data = completion.choices[0].message.parsed
    if (!data) throw new Error('Failed to get tags from OpenAI.')
    return data
}
