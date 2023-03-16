export interface ItemProps {
    id?: number
    value: string
    href: string
    onClick?: (id: number) => void
    className?: string
}
