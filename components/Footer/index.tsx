import { ItemLink } from './ItemLink'
import { LINKS_ITEMS } from './constants'
import { Logo } from 'components'
import { Phrase } from './Phrase'
import { Title } from 'components'

export function Footer() {
    return (
        <div className="flex  w-full items-center justify-between self-stretch">
            <div className=" flex flex-shrink-0 flex-grow-0 flex-col items-start justify-center gap-4 self-stretch">
                <Logo />
                <Phrase />
            </div>
            <div className=" flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-4 self-stretch">
                <Title text="Contacts" />
                <div className="grid grid-cols-2 gap-y-8">
                    {LINKS_ITEMS.map(({ text, href, animation, tooltip }) => (
                        <ItemLink key={text} text={text} href={href} animation={animation} tooltip={tooltip} />
                    ))}
                </div>
            </div>
        </div>
    )
}
