import { createListenerMiddleware, TypedStartListening } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '@/store/store';
import { backgroundListener } from '@/store/background/background.listener';
import { uiListener } from './ui/ui.listener';

const listenerMiddleware = createListenerMiddleware();

// pre-typed startListening function
export const startAppListening =
  listenerMiddleware.startListening as TypedStartListening<RootState, AppDispatch>;

const listeners = [
    backgroundListener,
    uiListener
];

export function initAppListeners() {
    listeners.forEach((listener) => {
        listener.forEach((logic) => {
            startAppListening(logic as any);
        })
    });
    
    return listenerMiddleware;
}
