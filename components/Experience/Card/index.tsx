import { CardProps } from '../types'
import { Divider } from './Divider'
import { Role } from './Role'
import { Tasks } from './Tasks'

export function Card({ img, alt, role, list }: CardProps) {
    return (
        <div className="flex flex-col items-center justify-between  bg-bg-light p-5 shadow-md">
            <div className=" flex h-48  flex-col justify-around pb-4">
                <img src={img} alt={alt} className="w-24" />
                <Role role={role} />
                <Divider></Divider>
            </div>

            <Tasks list={list} />
        </div>
    )
}

Card.propTypes = {
    img: 'https://www.mitrol.net/wp-content/uploads/2022/11/Logo-04-100x69.png',
    alt: 'Mitrol',
    role: 'Frontend Developer',
    list: [
        '- Sept. 2021 - actualidad ',
        '- Liderando el frontend del proyecto. Encargado de armar la Arquitectura desde cero.',
        '- Es una aplicación con mucha información, tablas, trees y gráficos.',
        '- Estoy participando en la migración de la aplicación desktop (visual basic) a web.',
        '- Liderando el frontend del proyecto.',
        '- Encargado de armar la Arquitectura desde cero.',
        '- Metodología Scrum. Equipo multi disciplinario.',
        '- Tech-Stack: Next.js, Typescript, Jest Enzyme, React Testing Library, Tailwind, Ramda.js, Redux y Cypress.',
    ],
}
