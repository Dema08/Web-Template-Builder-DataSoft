import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout, GuestLayout, BuilderLayout } from '@layouts';
import { Login, Register, Dashboard, Websites, Templates, Builder, Settings, Admin, Profile } from '@pages';
import { ProtectedRoute, GuestRoute } from './guards';
import { ROUTES } from '@constants';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Guest-only routes */}
                <Route
                    element={
                        <GuestRoute>
                            <GuestLayout />
                        </GuestRoute>
                    }
                >
                    <Route path={ROUTES.LOGIN} element={<Login />} />
                    <Route path={ROUTES.REGISTER} element={<Register />} />
                </Route>

                {/* Authenticated app routes */}
                <Route
                    element={
                        <ProtectedRoute>
                            <AppLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                    <Route path={ROUTES.WEBSITES} element={<Websites />} />
                    <Route path={ROUTES.TEMPLATES} element={<Templates />} />
                    <Route path={ROUTES.PROFILE} element={<Profile />} />
                    <Route path={ROUTES.SETTINGS} element={<Settings />} />
                    <Route path={ROUTES.ADMIN} element={<Admin />} />
                </Route>

                {/* Authenticated builder routes (fullscreen) */}
                <Route
                    path={ROUTES.BUILDER}
                    element={
                        <ProtectedRoute>
                            <BuilderLayout>
                                <Builder />
                            </BuilderLayout>
                        </ProtectedRoute>
                    }
                />

                {/* Fallback */}
                <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
            </Routes>
        </BrowserRouter>
    );
}
