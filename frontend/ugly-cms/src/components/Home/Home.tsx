import { Link } from "react-router-dom"
import { Heading, HomeWrapper } from "./Home.styled"

export const Home: React.FC = () => {
    return (
        <HomeWrapper>
            <Heading>Welcome to Ugly 🦆 CMS</Heading>
            <Link to="/backgrounds">Backgrounds</Link>
            <Link to="/models">Models</Link>
            <Link to="/poses">Poses</Link>
            <Link to="/products">Products</Link>
        </HomeWrapper>
    )
}