import { BackgroundImage, Item, Items, ListWrapper, New } from "./Background.styled.tsx";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { Empty } from "../Empty/Empty.tsx";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store.ts";

export const BackgroundList: React.FC = () => {
    const backgrounds = useSelector((state: RootState) => state.backgrounds.backgrounds);

    return (
        <ListWrapper>
            <New to="/backgrounds/create">Create New</New>

            <Items>
                {getBackgroundItems()}
            </Items>
        </ListWrapper>
    );

    function getBackgroundItems() {
        if (!backgrounds || !backgrounds.length) return (
            <Empty>
                <Link to="/backgrounds/create">Create New</Link>
            </Empty>
        );

        return backgrounds.map((background) => (
            <Item key={`background-${background.id}`} to={`/backgrounds/${background.id}`}>
                <BackgroundImage src={background.avatar} alt={background.name} />
                <Text>{background.name}</Text>
            </Item>
        ));
    }
}
