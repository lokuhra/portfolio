import { ListProps } from '../types'

export function Tasks({ list }: ListProps) {
    return (
        <ul className=" flex h-full flex-col justify-start text-left text-base leading-7 text-brand-text">
            {list.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
}
