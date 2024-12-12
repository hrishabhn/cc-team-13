'use client'

import {handleDelete, handleTags} from './action'
import {Heading} from '@/components/layout'
import {Card, DropdownMenuItem, DropdownMenuItems, Menu, MenuButton} from '@/components/ui'
import {Badge} from '@/components/ui'
import {type Ticket} from '@/model/schema'

import {ArrowsClockwise, Spinner, Tag, Trash} from '@phosphor-icons/react'
import {useState} from 'react'

export function TicketCard({ticket}: {ticket: Ticket}) {
    const [pending, setPending] = useState<boolean>(false)
    const isUntagged = ticket.product_type === null || ticket.product_division === null || ticket.urgency === null || ticket.sentiment === null

    return (
        <Card rounded="xl">
            <div className="px-4 py-3">
                <Menu>
                    <MenuButton className="text-left hover:underline active:opacity-80">
                        <Heading size="h3" withoutPadding>
                            <p className="line-clamp-1">{ticket.name}</p>
                        </Heading>
                    </MenuButton>
                    <DropdownMenuItems>
                        <DropdownMenuItem
                            action={{
                                onClick: async () => {
                                    setPending(true)
                                    await handleTags({id: ticket.id, comment: ticket.comment})
                                    setPending(false)
                                },
                            }}
                            image={{icon: isUntagged ? Tag : ArrowsClockwise}}
                            title={isUntagged ? 'Add Tags' : 'Refresh Tags'}
                        />
                        <DropdownMenuItem
                            action={{
                                onClick: async () => {
                                    if (confirm('Are you sure you want to delete this ticket?')) {
                                        setPending(true)
                                        await handleDelete({id: ticket.id})
                                        setPending(false)
                                    }
                                },
                            }}
                            image={{icon: Trash}}
                            title="Delete"
                        />
                    </DropdownMenuItems>
                </Menu>

                <p className="line-clamp-3 text-xs font-medium opacity-70">{ticket.comment}</p>
                <div className="flex flex-wrap items-center gap-2 py-2.5">
                    {isUntagged ? (
                        <Badge theme="layer-0">Untagged</Badge>
                    ) : (
                        <>
                            <Badge theme="blue">{ticket.product_type}</Badge>
                            <Badge theme="yellow">{ticket.product_division}</Badge>
                            <Badge theme="red">{ticket.urgency}</Badge>
                            <Badge theme="green">{ticket.sentiment}</Badge>
                        </>
                    )}
                    <div className="grow" />
                    {pending && <Spinner weight="bold" className="animate-spin" />}
                </div>
            </div>
        </Card>
    )
}
