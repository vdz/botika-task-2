import { CreateBackgroundData, CreateBackgroundError, CreateBackgroundResponse, ListBackgroundsError, ListBackgroundsResponse } from "@/services/api-client/types.gen";
import { createAction } from "@reduxjs/toolkit";

export const getBackgrounds = createAction('backgrounds/getBackgrounds');
export const getBackgroundsSuccess = createAction<ListBackgroundsResponse>('backgrounds/getBackgroundsSuccess');
export const getBackgroundsFailure = createAction<ListBackgroundsError>('backgrounds/getBackgroundsFailure');
export const createBackgroundItem = createAction<CreateBackgroundData>('backgrounds/createBackground');
export const createBackgroundSuccess = createAction<CreateBackgroundResponse>('backgrounds/createBackgroundSuccess');
export const createBackgroundFailure = createAction<CreateBackgroundError>('backgrounds/createBackgroundFailure');
