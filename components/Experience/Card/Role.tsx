import { RoleProps } from '../types'

export function Role({ role }: RoleProps) {
    return <p className="py-3 text-left text-base font-medium text-brand-text">{role}</p>
}

Role.propTypes = {
    role: 'Frontend Developer',
}
