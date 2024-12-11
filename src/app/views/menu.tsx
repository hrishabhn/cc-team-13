'use client'

import {Heading} from '@/components/layout'
import {Button, DropdownDivider, DropdownHeader, DropdownMenuItem, DropdownMenuItems, Menu, MenuButton, type TailwindColor, tailwindColors} from '@/components/ui'

import {List, MagnifyingGlass, SquaresFour} from '@phosphor-icons/react'
import {useState} from 'react'

export function MenuExample() {
    const [view, setView] = useState<'grid' | 'list'>('grid')
    const [selectedColor, setSelectedColor] = useState<TailwindColor>('accent')

    return (
        <div>
            <Heading size="h1">Dropdown</Heading>

            <Menu>
                <MenuButton className="active:opacity-50">
                    <Button size="lg" theme={selectedColor}>
                        Dropdown
                    </Button>
                </MenuButton>
                <DropdownMenuItems anchor="bottom start">
                    <DropdownMenuItem action={{href: 'https://www.google.com', target: '_blank'}} image={{icon: MagnifyingGlass}} title="Google Search" />

                    <DropdownDivider />
                    <DropdownHeader text="Image" />
                    <DropdownMenuItem action={{}} image={{imageURL: 'https://live.flighty.app/content/airlines:light_cpa.svg'}} title="Cathay Pacific" />

                    <DropdownDivider />
                    <DropdownHeader text="View" />
                    <DropdownMenuItem action={{onClick: () => setView('grid')}} image={{icon: SquaresFour}} title="Grid" active={view === 'grid'} />
                    <DropdownMenuItem action={{onClick: () => setView('list')}} image={{icon: List}} title="List" active={view === 'list'} />

                    <DropdownDivider />
                    <DropdownHeader text="Colors" />
                    {tailwindColors.map(color => (
                        <DropdownMenuItem key={color} action={{onClick: () => setSelectedColor(color)}} image={{theme: color}} title={color} active={selectedColor === color} />
                    ))}
                </DropdownMenuItems>
            </Menu>
        </div>
    )
}
