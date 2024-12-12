'use client'

import {Heading, PageHeader, PageSection} from '@/components/layout'
import {Button, Card, TextInput} from '@/components/ui'

import {useRouter} from 'next/navigation'
import {useState} from 'react'

export function Unauthorized({defaultPassword}: {defaultPassword: string}) {
    const [password, setPassword] = useState<string>(defaultPassword)
    const router = useRouter()

    return (
        <PageSection>
            <PageHeader>Manage Tickets</PageHeader>
            <Card rounded="xl">
                <form action={() => router.push(`/manage?password=${password}`)} className="flex flex-col gap-4 px-8 py-6">
                    <Heading size="h2" withoutPadding>
                        Enter Password
                    </Heading>
                    <TextInput type="text" placeholder="Password" value={password} setValue={setPassword} />
                    <button type="submit" className="active:opacity-80">
                        <Button size="lg" theme="accent">
                            Submit
                        </Button>
                    </button>
                </form>
            </Card>
        </PageSection>
    )
}
