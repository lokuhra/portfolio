import { Item } from './Item'
import { MENU_ITEMS } from './constants'
import { useState } from 'react'

export function Menu() {
    const [activeItem, setActiveItem] = useState<number | null>(null)

    const handleOnClick = (id: number) => {
        setActiveItem(id)
    }
    return (
        <div className="hidden items-center  justify-center gap-16 self-stretch md:flex md:justify-start">
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
