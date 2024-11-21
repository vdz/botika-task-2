import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import { router } from './routes';
import { Provider } from 'react-redux'
import { Provider as Chakra } from '@/components/UI/Provider'
import { store } from '@/store/store'

import './styles.css'
import { RouteMonitor } from './components/RouteMonitor/RouteMonitor';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <Chakra>
                <RouteMonitor router={router} />
                <RouterProvider router={router} />
            </Chakra>
        </Provider>
    </StrictMode>,
)
