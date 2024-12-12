import './globals.css'
import {Providers} from './providers'
import {NavbarView} from './views/navbar'

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Apple Support - Ticket Tagger',
    description: 'A tool to help Apple customer support tag tickets.',
    robots: {index: false},
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <Providers>
                <body className={`${inter.className} flex min-h-screen w-full flex-col bg-layer-0 text-black antialiased dark:bg-layer-0-dark dark:text-white`}>
                    <NavbarView />
                    {children}
                </body>
            </Providers>
        </html>
    )
}
