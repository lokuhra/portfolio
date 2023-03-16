import { Logo } from 'components'
import { Menu } from './Menu'

export function Navbar() {
    return (
        <header className="flex h-20 w-full flex-col  items-center justify-between md:flex-row">
            <Logo />
            <Menu />
        </header>
    )
}
