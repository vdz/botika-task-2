import { listBackgrounds } from "@/services/api-client/services.gen";
import {API_URL} from "@/api.ts";
import {createBackground, CreateBackgroundError} from "@/services/api-client";
import { createBackgroundFailure, createBackgroundItem, createBackgroundSuccess, getBackgrounds, getBackgroundsFailure, getBackgroundsSuccess } from "./background.actions";
import { AnyAction } from "@reduxjs/toolkit";
import { routeChange } from "../router/router.actions";

export const backgroundListener = [
    {
        actionCreator: routeChange,
        effect: async (_: any, listenerApi: any) => {
            listenerApi.dispatch(getBackgrounds());
        }
    },
    {
        actionCreator: getBackgrounds,
        effect: async (_: any, listenerApi: any) => {
            try {
                if (listenerApi.getState().backgrounds.backgrounds.length > 0) return;
                
                const backgrounds = await listBackgrounds({
                    baseURL: API_URL
                });
                
                listenerApi.dispatch(getBackgroundsSuccess(backgrounds.data!));
            } catch (error) {
                listenerApi.dispatch(getBackgroundsFailure(error));
            }
        }
    },
    {
        actionCreator: createBackgroundItem,
        effect: async (action: AnyAction, listenerApi: any) => {
            try {
                const background = await createBackground({
                    baseURL: API_URL,
                    body: action.payload.body
                });

                if (background.error) {
                    listenerApi.dispatch(createBackgroundFailure(background.error));
                    return;
                }

                listenerApi.dispatch(createBackgroundSuccess(background.data!));
            } catch (error) {
                listenerApi.dispatch(createBackgroundFailure(error as CreateBackgroundError));
            }
        }
    }
]
