import { routeChange } from "../router/router.actions";
import { closeNewBackgroundDialog } from "./ui.actions";

export const uiListener = [
    {
        actionCreator: routeChange,
        effect: async (_: any, listenerApi: any) => {
            listenerApi.dispatch(closeNewBackgroundDialog());
        }
    }
]
