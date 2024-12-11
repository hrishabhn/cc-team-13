export const searchKeywords = ({query, keywords}: {query: string; keywords: string[]}): boolean => {
    const q = query.toLowerCase()

    return keywords.some(keyword => {
        const k = keyword.toLowerCase()

        // substring match
        if (k.includes(q)) return true

        // acronym match
        const acronym = k
            .split(' ')
            .map(word => word[0])
            .join('')

        if (acronym.includes(q)) return true

        return false
    })
}
