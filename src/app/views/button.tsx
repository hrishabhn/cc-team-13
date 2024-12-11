'use client'

import {MagnifyingGlass} from '@phosphor-icons/react'

import {Heading} from '@/components/layout'
import {Button, IconButton} from '@/components/ui'

const buttonSize = ['xs', 'sm', 'md', 'lg'] as const

export function ButtonExample() {
    return (
        <>
            <div>
                <Heading size="h1">Text Button</Heading>
                <div className="flex items-start gap-2">
                    {buttonSize.map(size => (
                        <Button key={size} size={size}>
                            Button ({size})
                        </Button>
                    ))}
                </div>
            </div>

            <div>
                <Heading size="h1">Icon Button</Heading>
                <div className="flex items-start gap-2">
                    {buttonSize.map(size => (
                        <div key={size}>
                            <IconButton icon={MagnifyingGlass} size={size} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
