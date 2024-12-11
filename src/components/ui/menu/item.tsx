'use client'

import {DropdownItem, type DropdownItemProps} from '@/components/ui'
import {type Action} from '@/lib/action'

import {MenuItem} from '@headlessui/react'
import Link from 'next/link'

type DropdownMenuItemProps = {action: Action} & Omit<DropdownItemProps, 'focus'>

export function DropdownMenuItem({action, ...props}: DropdownMenuItemProps) {
    if (action.href)
        return (
            <MenuItem>
                {({focus}) => (
                    <Link href={action.href} target={action.target} className="w-full">
                        <DropdownItem {...props} focus={focus} />
                    </Link>
                )}
            </MenuItem>
        )

    return (
        <MenuItem>
            {({focus}) => (
                <button onClick={action.onClick} className="w-full">
                    <DropdownItem {...props} focus={focus} />
                </button>
            )}
        </MenuItem>
    )
}
