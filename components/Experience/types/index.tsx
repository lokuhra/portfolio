export interface RoleProps {
    role: string
}
export interface ListProps {
    list: string[]
}

export interface CardProps extends RoleProps, ListProps {
    id?: number
    img: string
    alt: string
}
