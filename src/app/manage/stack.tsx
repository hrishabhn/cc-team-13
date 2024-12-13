'use client'

import {TicketCard} from './card'
import {Button, DropdownMenuItem, DropdownMenuItems, Menu, MenuButton} from '@/components/ui'
import {type Ticket, allProductDivision, allProductType, allSentiment, allUrgency} from '@/model/schema'

import {parseAsStringLiteral, useQueryState} from 'nuqs'

export function ManageStack({tickets}: {tickets: Ticket[]}) {
    const [productType, setProductType] = useQueryState('product_type', parseAsStringLiteral(allProductType))
    const [productDivision, setProductDivision] = useQueryState('product_division', parseAsStringLiteral(allProductDivision))
    const [urgency, setUrgency] = useQueryState('urgency', parseAsStringLiteral(allUrgency))
    const [sentiment, setSentiment] = useQueryState('sentiment', parseAsStringLiteral(allSentiment))

    const displayTickets = tickets
        .filter(ticket => {
            if (productType === null) return true
            return ticket.product_type === productType
        })
        .filter(ticket => {
            if (productDivision === null) return true
            return ticket.product_division === productDivision
        })
        .filter(ticket => {
            if (urgency === null) return true
            return ticket.urgency === urgency
        })
        .filter(ticket => {
            if (sentiment === null) return true
            return ticket.sentiment === sentiment
        })

    return (
        <>
            <div className="flex items-center gap-2 py-2">
                <Menu>
                    <MenuButton className="active:opacity-60">
                        <Button size="sm" ring theme="layer-1" active={productType !== null}>
                            {productType || 'Product Type'}
                        </Button>
                    </MenuButton>
                    <DropdownMenuItems>
                        <DropdownMenuItem action={{onClick: () => setProductType(null)}} title="All" active={productType === null} />
                        {allProductType.map(x => (
                            <DropdownMenuItem key={x} action={{onClick: () => setProductType(x)}} title={x} active={productType === x} />
                        ))}
                    </DropdownMenuItems>
                </Menu>

                <Menu>
                    <MenuButton className="active:opacity-60">
                        <Button size="sm" ring theme="layer-1" active={productDivision !== null}>
                            {productDivision || 'Product Division'}
                        </Button>
                    </MenuButton>
                    <DropdownMenuItems>
                        <DropdownMenuItem action={{onClick: () => setProductDivision(null)}} title="All" active={productDivision === null} />
                        {allProductDivision.map(x => (
                            <DropdownMenuItem key={x} action={{onClick: () => setProductDivision(x)}} title={x} active={productDivision === x} />
                        ))}
                    </DropdownMenuItems>
                </Menu>

                <Menu>
                    <MenuButton className="active:opacity-60">
                        <Button size="sm" ring theme="layer-1" active={urgency !== null}>
                            {urgency || 'Urgency'}
                        </Button>
                    </MenuButton>
                    <DropdownMenuItems>
                        <DropdownMenuItem action={{onClick: () => setUrgency(null)}} title="All" active={urgency === null} />
                        {allUrgency.map(x => (
                            <DropdownMenuItem key={x} action={{onClick: () => setUrgency(x)}} title={x} active={urgency === x} />
                        ))}
                    </DropdownMenuItems>
                </Menu>

                <Menu>
                    <MenuButton className="active:opacity-60">
                        <Button size="sm" ring theme="layer-1" active={sentiment !== null}>
                            {sentiment || 'Sentiment'}
                        </Button>
                    </MenuButton>
                    <DropdownMenuItems>
                        <DropdownMenuItem action={{onClick: () => setSentiment(null)}} title="All" active={sentiment === null} />
                        {allSentiment.map(x => (
                            <DropdownMenuItem key={x} action={{onClick: () => setSentiment(x)}} title={x} active={sentiment === x} />
                        ))}
                    </DropdownMenuItems>
                </Menu>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4">
                {displayTickets.map(ticket => (
                    <TicketCard key={ticket.id} ticket={ticket} />
                ))}
            </div>
        </>
    )
}
