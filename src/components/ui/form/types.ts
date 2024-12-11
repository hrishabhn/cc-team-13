type ControlledInputProps<T> = {
    name?: never
    defaultValue?: never

    value: T
    setValue: (value: T) => void
}

type UncontrolledInputProps<T> = {
    name: string
    defaultValue?: T

    value?: never
    setValue?: never
}

export type InputProps<T> = ControlledInputProps<T> | UncontrolledInputProps<T>
