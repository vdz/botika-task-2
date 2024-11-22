import {useState} from "react";
import { NewWrapper } from "./Background.styled.tsx";
import { BreadcrumbCurrentLink, BreadcrumbLink, BreadcrumbRoot, Button, Field, Fieldset, Heading, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { createBackgroundItem } from "@/store/background/background.actions.ts";
import { Link, useLocation } from "react-router-dom";

export function CreateBackground() {
    const dispatch = useDispatch();
    const location = useLocation();
    const isExternalView = (location.pathname === "/backgrounds/create");
    
    const [avatar, setAvatar] = useState<File>();
    const [preview1, setPreview1] = useState<File>();
    const [preview2, setPreview2] = useState<File>();
    const [preview3, setPreview3] = useState<File>();
    const [name, setName] = useState<string>();
    const [category, setCategory] = useState<string>()


    return (
        <NewWrapper>
            <Heading size="2xl">
                Create Background
            </Heading>

            {getBreadcrumbs()}

            <Field.Root>
                <Field.Label htmlFor='name'>Name</Field.Label>
                <Input type='text' id='name' onChange={e => setName(e.target.value)}/>
            </Field.Root>

            <Fieldset.Content>
                <Field.Root>
                    <Field.Label htmlFor='avatar'>Avatar</Field.Label>
                    <Input type='file' 
                        accept="image/*" 
                       id='avatar' 
                        onChange={e => setAvatar(e.target.files![0])}
                     />
                </Field.Root>
            </Fieldset.Content>

            <Fieldset.Content>
                <Field.Root>
                    <Field.Label htmlFor='preview1'>Preview 1</Field.Label>
                    <Input type='file' 
                        accept="image/*" 
                        id='preview1' 
                        onChange={e => setPreview1(e.target.files![0]!)}
                    />
                </Field.Root>

                <Field.Root>
                    <Field.Label htmlFor='preview2'>Preview 2</Field.Label>
                    <Input type='file' 
                        accept="image/*" 
                        id='preview2' 
                        onChange={e => setPreview2(e.target.files![0]!)}
                    />
                </Field.Root>

                <Field.Root>
                    <Field.Label htmlFor='preview3'>Preview 3</Field.Label>
                    <Input type='file' 
                        accept="image/*" 
                        id='preview3' 
                        onChange={e => setPreview3(e.target.files![0]!)}
                    />
                </Field.Root>
            </Fieldset.Content>

            <Fieldset.Content>
                <Field.Root>
                    <Field.Label htmlFor='category'>Category</Field.Label>
                    <Input type='text' 
                    id='category' 
                        onChange={e => setCategory(e.target.value)}
                    />
                </Field.Root>
            </Fieldset.Content>

            <Button onClick={() => create()}>Create</Button>
        </NewWrapper>
    );

    function create() {
        dispatch(createBackgroundItem({
            body: {
                name: name!,
                avatar: avatar!,
                preview_images: [preview1!, preview2!, preview3!],
                category: category!
            }
        }));
    }

    function getBreadcrumbs() {
        if (!isExternalView) return <Link to="/backgrounds/create">Open in a window</Link>;

        return (
            <BreadcrumbRoot size="sm">
                <BreadcrumbLink href="/">Home</BreadcrumbLink> /&nbsp;
                <BreadcrumbLink href="/backgrounds">Backgrounds</BreadcrumbLink> /&nbsp;
                <BreadcrumbCurrentLink>Create New</BreadcrumbCurrentLink>
            </BreadcrumbRoot>
        )
    }
}