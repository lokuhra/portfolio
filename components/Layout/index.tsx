import { FC } from 'react'
import { children } from 'types'

export const Layout: FC<children> = ({ children }): JSX.Element => {
    return (
        <div className="mx-auto flex w-[95%] flex-col items-center justify-center gap-8 bg-bg-dark py-16 md:w-[1440px]">
            {children}
        </div>
    )
}
