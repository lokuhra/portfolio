import { ItemProps } from './types'

export function Item({ value, onClick, id, className, href }: ItemProps) {
    const handleClick = () => {
        if (onClick && id !== undefined) {
            onClick(id)
        }
    }
    return (
        <a
            className={`${className}  cursor-pointer text-left text-xl font-bold capitalize  hover:text-brand-primary`}
            onClick={handleClick}
            href={href}
        >
            {value}
        </a>
    )
}

Item.defaultProps = {
    value: 'about me',
}
