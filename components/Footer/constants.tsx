import { ItemLinkProps } from './types'
import github from 'react-useanimations/lib/github'
import linkedin from 'react-useanimations/lib/linkedin'
import mail from 'react-useanimations/lib/mail'

export const LINKS_ITEMS: ItemLinkProps[] = [
    {
        id: 0,
        text: 'lokuhra',
        href: 'https://github.com/lokuhra',
        animation: github,
        tooltip: 'github',
    },
    {
        id: 1,
        text: 'leandro-bernardi',
        href: 'https://www.linkedin.com/in/leandro-bernardi/',
        animation: linkedin,
        tooltip: 'linkedin',
    },
    {
        id: 2,
        text: 'leandro.88.bernardi@gmail.com',
        href: 'mailto:leandro.88.bernardi@gmail.com',
        animation: mail,
        tooltip: 'mail',
    },
]
