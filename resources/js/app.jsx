import { Component, createRoot } from 'react';
import { createRoot as ReactCreateRoot } from 'react-dom/client';
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
 * React Error Boundary — catches any uncaught render errors so the app
 * shows a friendly message instead of a blank white screen.
 */
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        // Log error for debugging
        console.error('[DataSoft App Error]', error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8 font-sans">
                    <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 text-center shadow-sm">
                        <div className="h-14 w-14 mx-auto bg-red-50 rounded-2xl flex items-center justify-center mb-5">
                            <svg className="h-7 w-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>
                        </div>
                        <h2 className="text-lg font-bold text-slate-900 mb-2">Something went wrong</h2>
                        <p className="text-sm text-slate-500 mb-6">
                            An unexpected error occurred in DataSoft. The error has been logged. Please try refreshing the page.
                        </p>
                        {this.state.error?.message && (
                            <p className="text-xs text-slate-400 bg-slate-50 rounded-xl p-3 mb-6 font-mono text-left break-all">
                                {this.state.error.message}
                            </p>
                        )}
                        <button
                            type="button"
                            onClick={() => window.location.reload()}
                            className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm shadow-md shadow-blue-600/20 transition"
                        >
                            Refresh Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

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
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <SessionHydrator />
                <AppRouter />
                <Toast />
                {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
            </QueryClientProvider>
        </ErrorBoundary>
    );
}

const container = document.getElementById('app');

if (!container) {
    throw new Error('Root element #app not found. Ensure the Blade layout includes <div id="app"></div>.');
}

ReactCreateRoot(container).render(<App />);
