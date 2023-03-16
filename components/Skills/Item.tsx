import { ItemProps } from './types'

export function Item({ icon, text }: ItemProps) {
    return (
        <div className="w-full rounded-[10px] bg-bg-light md:h-[300px] md:w-[200px]">
            <div className="flex  h-full items-center   gap-4 rounded-xl pr-4 md:flex-col md:justify-center">
                <img src={icon} className="h-8 w-8 md:h-24 md:w-24" />
                <p className=" text-left text-lg  text-white md:text-3xl">{text}</p>
            </div>
        </div>
    )
}

Item.defaultProps = {
    icon: 'https://skillicons.dev/icons?i=js',
    text: 'JavaScript',
}
