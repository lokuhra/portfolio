import { TextProps } from './types'
import { cva } from 'class-variance-authority'

export const item = cva(' text-left', {
    variants: {
        color: {
            brand: 'text-brand-primary',
            text: 'text-brand-text',
        },
    },
    defaultVariants: {
        color: 'brand',
    },
})

export function Text({ color, text }: TextProps) {
    return <span className={item({ color })}>{text}</span>
}

Text.defaultProps = {
    color: 'brand',
    text: '',
}
