import { Logo } from 'components'
import { Menu } from './Menu'

export function Navbar() {
    return (
        <header className="flex h-20 w-full  items-center justify-between">
            <Logo />
            <Menu />
        </header>
    )
}
