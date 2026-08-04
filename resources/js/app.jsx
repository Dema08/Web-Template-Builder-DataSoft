import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppRouter from '@router';
import { Toast } from '@components/ui';
import { useCurrentUser } from '@hooks';
import '../css/app.css';

// Configure the global QueryClient.
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            staleTime: 30_000,
        },
        mutations: {
            retry: false,
        },
    },
});

/**
 * SessionHydrator
 *
 * On app mount, if a persisted session exists, re-fetch the current
 * user from /auth/me to keep the store fresh after a browser refresh.
 */
function SessionHydrator() {
    useCurrentUser();
    return null;
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <SessionHydrator />
            <AppRouter />
            <Toast />
            {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
    );
}

const container = document.getElementById('app');

if (!container) {
    throw new Error('Root element #app not found. Ensure the Blade layout includes <div id="app"></div>.');
}

createRoot(container).render(<App />);
