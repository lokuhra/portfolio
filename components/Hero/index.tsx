import { ParticlesComponent } from './ParticlesComponent'

export function Hero() {
    return (
        <div className="flex h-[500px] w-full  items-center justify-center">
            <ParticlesComponent />
            <div>
                <p className="text-left text-5xl font-black text-brand-primary">Leandro Bernardi</p>
                <p className="text-left text-[40px] font-bold text-brand-text">Frontend Developer</p>
                <p className=" w-[400px] text-left text-xl text-brand-text">
                    Frontend developer looking for ideas and projects for himself and others
                </p>
            </div>
        </div>
    )
}
