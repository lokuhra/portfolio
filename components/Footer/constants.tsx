import { ItemLinkProps } from './types'
import explore from 'react-useanimations/lib/explore'
import github from 'react-useanimations/lib/github'
import linkedin from 'react-useanimations/lib/linkedin'
import mail from 'react-useanimations/lib/mail'

export const LINKS_ITEMS: ItemLinkProps[] = [
    {
        text: 'lokuhra',
        href: '',
        animation: github,
        tooltip: 'github',
    },
    {
        text: 'leandro-bernardi',
        href: '',
        animation: linkedin,
        tooltip: 'linkedin',
    },
    {
        text: 'lokuhradev.vercel.app',
        href: '',
        animation: explore,
        tooltip: 'explore',
    },
    {
        text: 'leandro.88.bernardi@gmail.com',
        href: '',
        animation: mail,
        tooltip: 'mail',
    },
]
