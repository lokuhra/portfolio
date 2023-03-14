import { ItemProps } from './types'

export function Item({ icon, text }: ItemProps) {
    return (
        <div className="h-[300px] w-[200px] rounded-[10px] bg-bg-light">
            <div className="flex  h-full  flex-col  items-center justify-center gap-4 rounded-xl">
                <img src={icon} className="h-24 w-24" />
                <p className="flex-shrink-0 flex-grow-0 text-left text-3xl text-white">{text}</p>
            </div>
        </div>
    )
}

Item.defaultProps = {
    icon: 'https://skillicons.dev/icons?i=js',
    text: 'JavaScript',
}
