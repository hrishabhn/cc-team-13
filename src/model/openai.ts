import 'server-only'

import {type TicketTags, TicketTagsSchema} from './schema'

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
                    'Given the following customer ticket, provide the ticket type, urgency, and sentiment.',
                    'The ticket type should be one of: issue, suggestion, other.',
                    'The urgency should be one of: low, medium, high.',
                    'The sentiment should be one of: positive, neutral, negative.',
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
