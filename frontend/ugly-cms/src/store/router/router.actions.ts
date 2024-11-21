import { createAction } from "@reduxjs/toolkit";

export const routeChange = createAction<string>('router/routeChange');