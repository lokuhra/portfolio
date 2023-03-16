import { ItemLink } from './ItemLink'
import { LINKS_ITEMS } from './constants'
import { Logo } from 'components'
import { Phrase } from './Phrase'
import { Title } from 'components'

export function Footer() {
    return (
        <div id="contact" className="flex w-full flex-col items-center justify-between self-stretch md:flex-row">
            <div className=" flex flex-col items-center justify-center gap-4 self-stretch md:items-start">
                <Logo />
                <Phrase />
            </div>
            <div className=" flex flex-col items-center justify-center gap-4 self-stretch">
                <Title text="Contacts" />
                <div className="flex flex-col justify-center gap-y-8 md:grid md:grid-cols-2">
                    {LINKS_ITEMS.map(({ text, href, animation, tooltip, id }) => (
                        <ItemLink key={id} text={text} href={href} animation={animation} tooltip={tooltip} />
                    ))}
                </div>
            </div>
        </div>
    )
}
