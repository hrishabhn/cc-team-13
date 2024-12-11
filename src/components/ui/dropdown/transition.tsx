'use client'

import {Transition} from '@headlessui/react'

export function DropdownTransition({children}: {children?: React.ReactNode}) {
    const transitionClasses = 'duration-100 ease-in-out'
    const startClass = 'scale-95 opacity-0 -translate-y-1'
    const endClass = 'scale-100 opacity-100 translate-y-0'

    return (
        <Transition
            //
            enter={transitionClasses}
            enterFrom={startClass}
            enterTo={endClass}
            leave={transitionClasses}
            leaveFrom={endClass}
            leaveTo={startClass}
        >
            {children}
        </Transition>
    )
}
