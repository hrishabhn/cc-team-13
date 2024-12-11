import {type CardTheme} from '@/components/ui'

import {type Icon} from '@phosphor-icons/react'

export type LabelImageType =
    | {
          icon?: Icon
          theme?: never
          imageURL?: never
      }
    | {
          icon?: never
          theme?: CardTheme
          imageURL?: never
      }
    | {
          icon?: never
          theme?: never
          imageURL?: string
      }

export type Label = {
    image?: LabelImageType
    title: string
    subtitle?: string
}
