import { ITEMS } from './constants'
import { Item } from './Item'
import { Title } from 'components'

export function Skills() {
    return (
        <div id="skills" className="flex w-full flex-col items-center justify-center">
            <Title text="My Skills" />
            <div className="flex flex-col items-start justify-start gap-4 md:grid md:grid-cols-4">
                {ITEMS.map(({ icon, text }) => (
                    <Item key={text} icon={icon} text={text} />
                ))}
            </div>
        </div>
    )
}
