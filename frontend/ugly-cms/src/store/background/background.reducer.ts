import { CreateBackgroundResponse, ListBackgroundsError, ListBackgroundsResponse } from "@/services/api-client/types.gen";
import { Background } from "@/services/api-client";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { createBackgroundItem, createBackgroundSuccess, getBackgrounds, getBackgroundsFailure, getBackgroundsSuccess } from "./background.actions";

export interface BackgroundState {
    backgrounds: Partial<Background>[];
    loading: boolean;
    error: ListBackgroundsError | null;
}

export const defaultState: BackgroundState = {
    backgrounds: [],
    loading: false,
    error: null
};

export const reducer = createReducer(defaultState, (builder) => {
    builder.addCase(getBackgrounds, (state: BackgroundState) => {
        state.loading = true;
    })
    .addCase(getBackgroundsSuccess, (state: BackgroundState, action: PayloadAction<ListBackgroundsResponse>) => {
        state.backgrounds = action.payload;
        state.loading = false;
    })
    .addCase(getBackgroundsFailure, (state: BackgroundState, action: PayloadAction<ListBackgroundsError>) => {
        state.error = action.payload;
        state.loading = false;
    })
    .addCase(createBackgroundItem, (state: BackgroundState) => {
        state.loading = true;
    })
    .addCase(createBackgroundSuccess, (state: BackgroundState, action: PayloadAction<CreateBackgroundResponse>) => {
        state.backgrounds.splice(0, 0, action.payload);
        state.loading = false;
    });
});
