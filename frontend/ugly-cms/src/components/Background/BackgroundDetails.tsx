import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Link, useLocation, useParams } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { BreadcrumbCurrentLink, BreadcrumbRoot, BreadcrumbLink, Heading, Stack } from "@chakra-ui/react";
import { BackgroundImage, DetailsWrapper, Avatar } from "./Background.styled";

export interface BackgroundDetailsProps {
    id?: string;
}

export const BackgroundDetails:React.FC<BackgroundDetailsProps> = ({ id }) => {
    if (!id) id = useParams().id;
    if (!id) return <NotFound />;
    const location = useLocation();
    const isExternalView = (location.pathname === `/backgrounds/${id}`);

    const background = useSelector((state: RootState) => state.backgrounds.by_id[id]);

    if (!background) return <NotFound />;

    return (
        <DetailsWrapper>
            <Heading size="2xl">
                {background.name}
            </Heading>
            
            {getBreadcrumbs()}

            <Avatar src={background.avatar} fit={'contain'} />
            <Stack direction="column">
                <BackgroundImage boxSize="300px" src={background.preview_images[0]} alt={'Loading...'} />
                <BackgroundImage boxSize="300px" src={background.preview_images[1]} alt={'Loading...'} />
                <BackgroundImage boxSize="300px" src={background.preview_images[2]} alt={'Loading...'} />
            </Stack>

            <Heading size="md">Info</Heading>
            <h3>{background.category}</h3>
        </DetailsWrapper>
    );

    function getBreadcrumbs() {
        if (!isExternalView) return <Link to={`/backgrounds/${id}`}>Open in a window</Link>;

        return (
            <BreadcrumbRoot size="sm">
                <BreadcrumbLink href="/">Home</BreadcrumbLink> /&nbsp;
                <BreadcrumbLink href="/backgrounds">Backgrounds</BreadcrumbLink> /&nbsp;
                <BreadcrumbCurrentLink>{background.name}</BreadcrumbCurrentLink>
            </BreadcrumbRoot>
        )
    }
}
