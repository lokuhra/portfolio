import { TitleProps } from './types'

export function Title({ text }: TitleProps) {
    return <p className="py-4 text-center text-3xl font-bold text-brand-primary">{text}</p>
}
