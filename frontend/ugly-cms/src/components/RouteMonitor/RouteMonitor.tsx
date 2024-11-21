import { Router } from '@/routes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { routeChange } from '@/store/router/router.actions';
export const RouteMonitor: React.FC<{router: Router}> = ({router}) => {
    const dispatch = useDispatch();

    // for route changes
    useEffect(() => {
        const unsubscribe = router.subscribe(({ location }) => {
            dispatch(routeChange(location.pathname));
        });

        return () => unsubscribe();
    }, [router, dispatch]);

    // for initial route only
    useEffect(() => {
        dispatch(routeChange(router.state.location.pathname));
    }, []);

  return null;
}

