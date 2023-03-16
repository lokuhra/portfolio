import { Text } from './Text'

export function Logo() {
    return (
        <div className=" text-left text-3xl">
            <Text color="brand" text="&lt;L" />
            <Text color="text" text="eandroBernardi" />
            <Text color="brand" text="/&gt;" />
        </div>
    )
}
