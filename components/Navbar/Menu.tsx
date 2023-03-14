import { Item } from './Item'
import { MENU_ITEMS } from './constants'
import { useState } from 'react'

export function Menu() {
    const [activeItem, setActiveItem] = useState<number | null>(null)

    const handleOnClick = (id: number) => {
        setActiveItem(id)
    }
    return (
        <div className="relative flex flex-shrink-0 flex-grow-0 items-center justify-start gap-16 self-stretch">
            {MENU_ITEMS.map(({ value, href, id }) => (
                <Item
                    key={id}
                    id={id}
                    value={value}
                    href={href}
                    onClick={(id) => handleOnClick(id)}
                    className={activeItem === id ? 'text-brand-primary' : 'text-brand-text'}
                />
            ))}
        </div>
    )
}
