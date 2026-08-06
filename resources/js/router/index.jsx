import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout, GuestLayout, BuilderLayout } from '@layouts';
import {
            Login,
            Register,
            ForgotPassword,
            VerifyOtp,
            ResetPassword,
            Dashboard,
            Websites,
            Templates,
            Builder,
            Settings,
            Profile,
            AdminDashboard,
            AdminUsers,
            AdminWebsites,
            AdminTemplates,
            AdminTemplateBuilder,
            AdminCategories,
            AdminAnalytics,
            AdminSettings,
            Onboarding,
        } from '@pages';
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
                    <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
                    <Route path={ROUTES.VERIFY_OTP} element={<VerifyOtp />} />
                    <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
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
                    <Route path={ROUTES.ONBOARDING} element={<Onboarding />} />

                    {/* Dedicated Admin Panel Routes */}
                    <Route path={ROUTES.ADMIN} element={<AdminUsers />} />
                    <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashboard />} />
                    <Route path={ROUTES.ADMIN_USERS} element={<AdminUsers />} />
                    <Route path={ROUTES.ADMIN_WEBSITES} element={<AdminWebsites />} />
                    <Route path={ROUTES.ADMIN_TEMPLATES} element={<AdminTemplates />} />
                    <Route path="/admin/templates/builder/create" element={<AdminTemplateBuilder />} />
                    <Route path="/admin/templates/builder/:id" element={<AdminTemplateBuilder />} />
                    <Route path={ROUTES.ADMIN_CATEGORIES} element={<AdminCategories />} />
                    <Route path={ROUTES.ADMIN_ANALYTICS} element={<AdminAnalytics />} />
                    <Route path={ROUTES.ADMIN_SETTINGS} element={<AdminSettings />} />
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
