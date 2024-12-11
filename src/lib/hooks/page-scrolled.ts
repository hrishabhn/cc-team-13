'use client'

import {useEffect, useState} from 'react'

export function usePageScrolled(): boolean {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0)
        addEventListener('scroll', handleScroll)
        return () => removeEventListener('scroll', handleScroll)
    }, [])

    return isScrolled
}
