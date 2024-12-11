'use client'

import {Navbar, NavbarItem} from '@/components/layout'

import {GearFine, PlusCircle} from '@phosphor-icons/react'
import Link from 'next/link'

export function NavbarView() {
    return (
        <Navbar
            left={
                <>
                    <Link href="/new">
                        <NavbarItem icon={PlusCircle} title="Create Ticket" />
                    </Link>
                </>
            }
            right={
                <>
                    <Link href="/manage">
                        <NavbarItem icon={GearFine} title="Manage" />
                    </Link>
                </>
            }
        />
    )
}
