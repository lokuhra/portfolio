import { FC } from 'react'
import { children } from 'types'

export const Layout: FC<children> = ({ children }): JSX.Element => {
    return (
        <div className="flex min-h-screen w-screen grow flex-col break-all bg-bg-dark">
            <div className="mx-auto flex w-[1440px] flex-col items-center justify-center gap-8 py-16">{children}</div>
        </div>
    )
}
