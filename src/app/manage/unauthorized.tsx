'use client'

import {Heading, PageSection} from '@/components/layout'
import {Button, Card, TextInput} from '@/components/ui'

import Link from 'next/link'
import {useState} from 'react'

export function Unauthorized({defaultPassword}: {defaultPassword: string}) {
    const [password, setPassword] = useState<string>(defaultPassword)

    return (
        <PageSection>
            <Heading size="h1">Unauthorized</Heading>
            <Card rounded="xl">
                <div className="flex flex-col gap-4 px-8 py-6">
                    <Heading size="h2" withoutPadding>
                        Enter Password
                    </Heading>
                    <TextInput type="text" placeholder="Password" value={password} setValue={setPassword} />
                    <Link href={{pathname: '/manage', query: {password}}}>
                        <Button size="lg" theme="accent">
                            Submit
                        </Button>
                    </Link>
                </div>
            </Card>
        </PageSection>
    )
}
