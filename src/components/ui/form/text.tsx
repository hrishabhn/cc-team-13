'use client'

import {type InputProps} from './types'

import {Envelope, Hash, type Icon, Link, Password, TextAa} from '@phosphor-icons/react'
import {useState} from 'react'
import TextareaAutosize from 'react-textarea-autosize'

type TextInputType = 'text' | 'multilineText' | 'url' | 'number' | 'email' | 'password'

type TextInputProps = {
    type: TextInputType
    placeholder?: string
    required?: boolean
} & InputProps<string>

export function TextInput({type = 'text', placeholder, required, name, defaultValue, value: controlledValue, setValue: controlledSetValue}: TextInputProps) {
    const [uncontrolledValue, setUncontrolledValue] = useState<string>(defaultValue ?? '')

    const isControlled = controlledValue !== undefined && controlledSetValue !== undefined

    const value = isControlled ? controlledValue : uncontrolledValue
    const setValue = isControlled ? controlledSetValue : setUncontrolledValue

    return (
        <TextInputContainer
            icon={
                {
                    text: TextAa,
                    multilineText: TextAa,
                    url: Link,
                    number: Hash,
                    email: Envelope,
                    password: Password,
                }[type]
            }
        >
            {type === 'multilineText' ? (
                <TextareaAutosize
                    minRows={2}
                    maxRows={8}
                    placeholder={placeholder}
                    required={required}
                    name={name}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    className="flex-1 resize-none bg-transparent py-2 outline-none disabled:text-g-500"
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    name={name}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    className="flex-1 bg-transparent py-2 outline-none disabled:text-g-500"
                />
            )}
        </TextInputContainer>
    )
}

export function TextInputContainer({icon, children}: {icon: Icon; children?: React.ReactNode}) {
    const Icon = icon
    return (
        <div className="flex w-full items-center gap-2 rounded-lg bg-layer-1 px-3 text-sm font-medium ring-1 ring-line transition focus-within:ring-2 focus-within:ring-accent dark:bg-layer-1-dark dark:ring-line-dark">
            <Icon weight="bold" className="text-base opacity-60" />
            {children}
        </div>
    )
}
