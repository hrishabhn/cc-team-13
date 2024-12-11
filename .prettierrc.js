/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    bracketSpacing: false,
    printWidth: 180,
    arrowParens: 'avoid',
    plugins: [
        //
        '@trivago/prettier-plugin-sort-imports',
        'prettier-plugin-tailwindcss',
    ],

    tailwindFunctions: ['tw'],

    importOrder: [
        //
        '^./(.*)$',
        '<THIRD_PARTY_MODULES>',
        '^@/lib/(.*)$',
        '^@/components/(.*)$',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
}

module.exports = config
