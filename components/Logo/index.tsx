import { Text } from './Text'

export function Logo() {
    return (
        <div className="flex-shrink-0 flex-grow-0 text-left text-3xl">
            <Text color="brand" text="&lt;L" />
            <Text color="text" text="eandroBernardi" />
            <Text color="brand" text="/&gt;" />
        </div>
    )
}
