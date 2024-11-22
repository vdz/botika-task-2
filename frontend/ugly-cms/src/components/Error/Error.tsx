import { useRouteError } from "react-router-dom";
import { ErrorText, ErrorWrapper } from "./Error.styled";
import { List, DialogRoot, DialogBody, DialogHeader, DialogContent, DialogTitle } from "@chakra-ui/react";

export const Error = () => {
    const error = useRouteError() as unknown as any;
    console.log('🔥', error);
    return (
        <ErrorWrapper>
            <DialogRoot placement={'center'} 
                modal={true} 
                size={'lg'} 
                defaultOpen={true} 
                scrollBehavior={'inside'}
            >
                <DialogContent colorPalette={'pink'}>
                    <DialogHeader>
                        <DialogTitle>Error: {error.name}</DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                        <ErrorText>{error.message}</ErrorText>
                        <List.Root>
                            {getStack()}
                        </List.Root>
                    </DialogBody>
                </DialogContent>
            </DialogRoot>
        </ErrorWrapper>
    );

    function getStack() {
        return error.stack.split('\n').map((line: string, index: number) => {
            return <List.Item key={`stack-${index}`}>{line}</List.Item>
        });
    }
}
