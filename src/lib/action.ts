import type {DOMAttributes, HTMLAttributeAnchorTarget} from 'react'

export type Action =
    | {
          onClick?: DOMAttributes<HTMLButtonElement>['onClick']

          href?: never
          target?: never
      }
    | {
          onClick?: never

          href: string
          target?: HTMLAttributeAnchorTarget
      }
