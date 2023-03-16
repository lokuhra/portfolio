import { Card } from './Card'
import { EXPERIENCE_LIST } from './constants'
import { Title } from 'components'

export function Experience() {
    return (
        <div id="experience" className="flex w-full flex-col items-center justify-center">
            <Title text="My Experience" />
            <div className=" flex flex-col gap-4 md:grid  md:grid-cols-3 ">
                {EXPERIENCE_LIST.map(({ img, alt, role, list }) => (
                    <Card key={alt} img={img} alt={alt} role={role} list={list} />
                ))}
            </div>
        </div>
    )
}
