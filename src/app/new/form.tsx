'use client'

import {createTicket} from './action'
import {Heading} from '@/components/layout'
import {Button, TextInput} from '@/components/ui'

import {Spinner} from '@phosphor-icons/react'
import {useFormStatus} from 'react-dom'

export function CreateTicketForm() {
    return (
        <form action={createTicket} className="flex flex-col gap-4 px-8 py-6">
            <Heading size="h2" withoutPadding>
                Ticket Details
            </Heading>

            <TextInput
                //
                type="text"
                placeholder="Name"
                name="name"
                required
            />
            <TextInput
                //
                type="email"
                placeholder="Email"
                name="email"
                required
            />
            <TextInput
                //
                type="multilineText"
                placeholder="Comment"
                name="comment"
                required
            />

            <SubmitButton />
        </form>
    )
}

function SubmitButton() {
    const {pending} = useFormStatus()

    return (
        <button type="submit" className="active:opacity-80">
            <Button size="lg" theme="accent">
                {pending ? (
                    <>
                        <Spinner weight="bold" className="animate-spin" />
                        <p>Saving</p>
                    </>
                ) : (
                    'Submit'
                )}
            </Button>
        </button>
    )
}
