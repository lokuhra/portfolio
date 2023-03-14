import { ITEMS } from './constants'
import { Item } from './Item'
import { Title } from 'components'

export function Skills() {
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <Title text="My Skills" />
            <div className="grid grid-cols-4 items-start justify-start gap-4">
                {ITEMS.map(({ icon, text }) => (
                    <Item key={text} icon={icon} text={text} />
                ))}
            </div>
        </div>
    )
}
