import { AddNew, BackgroundImage, Item, Items, ListWrapper, New } from "./Background.styled.tsx";
import { Link } from "react-router-dom";
import { Text, Button, Separator, Card } from "@chakra-ui/react";
import { Empty } from "../Empty/Empty.tsx";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store.ts";
import { CreateBackground } from "./CreateBackground.tsx";
import { closeNewBackgroundDialog, hideBackgroundDetails, showBackgroundDetails, openNewBackgroundDialog } from "@/store/ui/ui.actions.ts";
import { BackgroundDetails } from "./BackgroundDetails.tsx";

export const BackgroundList: React.FC = () => {
    const dispatch = useDispatch();
    const backgrounds = useSelector((state: RootState) => state.backgrounds.backgrounds);
    const newBackgroundDialogOpen = useSelector((state: RootState) => state.ui.newBackgroundDialogOpen);
    const showBackgroundQuickView = useSelector((state: RootState) => state.ui.showBackgroundDetails);

    return (
        <ListWrapper>
            <AddNew>
                <Link to="/">Home</Link>
                <Separator />
                <New onClick={() => {
                    dispatch(openNewBackgroundDialog());
                }}>Create New</New>
                {getNewBackgroundDialog()}
                {getBackgroundDetailsDialog()}
            </AddNew>

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
            <Item key={`background-${background.id}`}>
                <Card.Body>
                    <BackgroundImage src={background.avatar} alt={background.name} />
                    <Card.Title>{background.name}</Card.Title>
                    <Card.Footer gap={2}>
                        <Button variant={'ghost'} onClick={() => {
                            dispatch(showBackgroundDetails({ id: background.id }));
                        }}>Quick view</Button>
                        <Link to={`/backgrounds/${background.id}`}>Full view</Link>
                    </Card.Footer>
                </Card.Body>
            </Item>
        ));
    }

    function getNewBackgroundDialog() {
        if (!newBackgroundDialogOpen) return null;

        return (
            <>
                <Button onClick={() => {
                    dispatch(closeNewBackgroundDialog());
                }}>Close</Button>
                <CreateBackground />
            </>
        );
    }

    function getBackgroundDetailsDialog() {
        if (!showBackgroundQuickView) return null;

        return (
            <>
                <Separator />
                <Button onClick={() => {
                    dispatch(hideBackgroundDetails());
                }}>Close</Button>
                <BackgroundDetails id={showBackgroundQuickView} />
            </>
        );
    }
}
