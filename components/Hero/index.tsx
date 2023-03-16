import { Name } from './Name'
import { Role } from './Role'

export function Hero() {
    return (
        <div className="flex w-full  items-center  justify-center md:h-[400px]">
            <div>
                <Name />
                <Role />
            </div>
        </div>
    )
}
