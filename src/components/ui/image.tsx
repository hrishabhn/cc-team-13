import Image from 'next/image'

import {Heading} from '@/components/layout'

type SipmleImageProps = {
    url?: string
    alt?: string
    verticalAlign?: 'top' | 'center' | 'bottom'
}

function Container({children}: {children?: React.ReactNode}) {
    return <div className="relative flex size-full items-center justify-center">{children}</div>
}

export function SimpleImage({url, alt = 'Simple Image', verticalAlign = 'center'}: SipmleImageProps) {
    if (url) {
        const verticalAlignClass = {
            top: 'object-top',
            center: 'object-center',
            bottom: 'object-bottom',
        }[verticalAlign]

        return (
            <Container>
                <Image className={`size-full object-cover ${verticalAlignClass}`} src={url} alt={alt} fill={true} unoptimized />
            </Container>
        )
    }

    if (alt) {
        return (
            <Container>
                <div className="p-2 text-center">
                    <Heading size="h5">{alt}</Heading>
                </div>
            </Container>
        )
    }

    return <Container />
}
