import { createReducer } from "@reduxjs/toolkit";
import { openNewBackgroundDialog, closeNewBackgroundDialog, showBackgroundDetails, hideBackgroundDetails } from "./ui.actions";
import { UIState } from "./types";

export const defaultState: UIState = {
    newBackgroundDialogOpen: false,
    showBackgroundDetails: '',
};

export const reducer = createReducer(defaultState, (builder) => {
    builder.addCase(openNewBackgroundDialog, (state) => {
        state.newBackgroundDialogOpen = true;
    })
    .addCase(closeNewBackgroundDialog, (state) => {
        state.newBackgroundDialogOpen = false;
    })
    .addCase(showBackgroundDetails, (state, action) => {
        state.showBackgroundDetails = action.payload.id;
    })
    .addCase(hideBackgroundDetails, (state) => {
        state.showBackgroundDetails = '';
    });
});
