import { ItemLinkProps } from './types'
import UseAnimations from 'react-useanimations'
import github from 'react-useanimations/lib/github'

export function ItemLink({ text, href, animation, tooltip }: ItemLinkProps) {
    return (
        <a className="group relative flex items-center" href={href} target="_blank" rel="noreferrer">
            <UseAnimations animation={animation} size={48} autoplay loop strokeColor={'#F0E3CA'} />
            <span className="ml-2  text-left text-lg  text-brand-primary md:text-2xl">{text}</span>
            <span className="absolute -top-10 scale-0 rounded bg-bg-light p-2  text-brand-text group-hover:scale-100">
                {tooltip}
            </span>
        </a>
    )
}

ItemLink.defaultProps = {
    text: 'Github',
    href: '',
    animation: github,
}
