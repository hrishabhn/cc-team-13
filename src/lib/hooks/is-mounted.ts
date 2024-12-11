'use client'

import {useState} from 'react'
import {useMount} from 'react-use'

export function useIsMounted(): boolean {
    const [isMounted, setIsMounted] = useState<boolean>(false)
    useMount(() => setIsMounted(true))
    return isMounted
}
