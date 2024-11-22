import { createAction } from "@reduxjs/toolkit";
import { ShowBackgroundDetailsPayload } from "./types";

export const openNewBackgroundDialog = createAction('ui/openNewBackgroundDialog');
export const closeNewBackgroundDialog = createAction('ui/closeNewBackgroundDialog');
export const showBackgroundDetails = createAction<ShowBackgroundDetailsPayload>('ui/showBackgroundDetails');
export const hideBackgroundDetails = createAction('ui/hideBackgroundDetails');
