import { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppLayout, GuestLayout, BuilderLayout } from '@layouts';
import { PageLoader } from '@shared/components/ui';
import {
            LandingPage,
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
            AdminTemplatePreview,
            AdminCategories,
            AdminAnalytics,
            AdminSettings,
            AdminLandingEditor,
            AdminPricelist,
            AdminTransactions,
            BillingPage,
            Onboarding,
            TemplateGalleryPage,
        } from './pages';
import { ProtectedRoute, GuestRoute } from './guards';
import { ROUTES } from '@constants';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname]);

    return null;
}

export default function AppRouter() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<PageLoader fullScreen />}>
                <Routes>
                    {/* Public Landing Page — accessible to everyone */}
                <Route path="/" element={<LandingPage />} />

                {/* Public Template Gallery — accessible to everyone */}
                <Route path={ROUTES.TEMPLATE_GALLERY} element={<TemplateGalleryPage />} />

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
                    <Route path={ROUTES.BILLING} element={<BillingPage />} />
                    <Route path={ROUTES.ONBOARDING} element={<Onboarding />} />

                    {/* Dedicated Admin Panel Routes */}
                    <Route path={ROUTES.ADMIN} element={<AdminUsers />} />
                    <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashboard />} />
                    <Route path={ROUTES.ADMIN_USERS} element={<AdminUsers />} />
                    <Route path={ROUTES.ADMIN_WEBSITES} element={<AdminWebsites />} />
                    <Route path={ROUTES.ADMIN_TEMPLATES} element={<AdminTemplates />} />
                    <Route path={ROUTES.ADMIN_CATEGORIES} element={<AdminCategories />} />
                    <Route path={ROUTES.ADMIN_ANALYTICS} element={<AdminAnalytics />} />
                    <Route path={ROUTES.ADMIN_LANDING} element={<AdminLandingEditor />} />
                    <Route path={ROUTES.ADMIN_PRICELIST} element={<AdminPricelist />} />
                    <Route path={ROUTES.ADMIN_TRANSACTIONS} element={<AdminTransactions />} />
                    <Route path={ROUTES.ADMIN_SETTINGS} element={<AdminSettings />} />
                </Route>

                {/* Preview routes — public fullscreen live website preview */}
                <Route path="/admin/templates/builder/preview" element={<AdminTemplatePreview />} />
                <Route path="/admin/templates/builder/:id/preview" element={<AdminTemplatePreview />} />
                <Route path="/preview/template" element={<AdminTemplatePreview />} />
                <Route path="/preview/template/:id" element={<AdminTemplatePreview />} />
                <Route path="/preview/:slug" element={<AdminTemplatePreview />} />

                {/* Authenticated builder routes (fullscreen) */}
                <Route
                    path="/admin/templates/builder/create"
                    element={
                        <ProtectedRoute>
                            <AdminTemplateBuilder />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/templates/builder/:id"
                    element={
                        <ProtectedRoute>
                            <AdminTemplateBuilder />
                        </ProtectedRoute>
                    }
                />
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

                {/* Fallback — redirect to landing page */}
                <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
