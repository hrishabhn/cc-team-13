type PageSectionProps = {
    fullWidth?: boolean
    children?: React.ReactNode
}

export function PageSection({fullWidth = false, children}: PageSectionProps) {
    return (
        <div className="w-full px-4 sm:px-10">
            <div className={`w-full ${fullWidth ? '' : 'mx-auto max-w-5xl'}`}>{children}</div>
        </div>
    )
}
