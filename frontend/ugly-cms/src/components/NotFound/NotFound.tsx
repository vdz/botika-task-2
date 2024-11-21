import { Link } from "react-router-dom";
import { NotFoundWrapper } from "./NotFound.styled";

export const NotFound: React.FC = () => {
    return (
        <NotFoundWrapper>
            <h1>Bro, you're not in the right place</h1>
            <p>The page you are looking for does not exist.</p>
            <p>Try going back to the <Link to="/">homepage</Link></p>
        </NotFoundWrapper>
    );
}