import { EmptyWrapper, Title } from "./Empty.styled"
import { EmptyProps } from "./types"

export const Empty: React.FC<EmptyProps> = ({ children }) => {
    return (
        <EmptyWrapper>
            <Title>No items yet</Title>
            {children}
        </EmptyWrapper>
    )
}