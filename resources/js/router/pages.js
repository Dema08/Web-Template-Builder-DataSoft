import { lazy } from 'react';

// Admin Pages
export const AdminDashboard = lazy(() => import('@features/admin/pages/AdminDashboard'));
export const AdminUsers = lazy(() => import('@features/admin/pages/AdminUsers'));
export const AdminWebsites = lazy(() => import('@features/admin/pages/AdminWebsites'));
export const AdminTemplates = lazy(() => import('@features/admin/pages/AdminTemplates'));
export const AdminTemplateBuilder = lazy(() => import('@features/admin/pages/AdminTemplateBuilder'));
export const AdminTemplatePreview = lazy(() => import('@features/admin/pages/AdminTemplatePreview'));
export const AdminCategories = lazy(() => import('@features/admin/pages/AdminCategories'));
export const AdminAnalytics = lazy(() => import('@features/admin/pages/AdminAnalytics'));
export const AdminSettings = lazy(() => import('@features/admin/pages/AdminSettings'));
export const AdminLandingEditor = lazy(() => import('@features/admin/pages/AdminLandingEditor'));
export { default as AdminPricelist } from '@features/admin/pages/AdminPricelist';
export const AdminTransactions = lazy(() => import('@features/admin/pages/AdminTransactions'));

// User Pages
export const UserDashboard = lazy(() => import('@features/user/pages/UserDashboard'));
export const Websites = lazy(() => import('@features/user/pages/Websites'));
export const Templates = lazy(() => import('@features/user/pages/Templates'));
export const Profile = lazy(() => import('@features/user/pages/Profile'));
export const Settings = lazy(() => import('@features/user/pages/Settings'));
export const Onboarding = lazy(() => import('@features/onboarding/pages/Onboarding'));
export const TemplateGalleryPage = lazy(() => import('@features/user/pages/TemplateGalleryPage'));
export const BillingPage = lazy(() => import('@features/billing/pages/BillingPage'));

// Auth Pages
export const Login = lazy(() => import('@features/auth/pages/Login'));
export const Register = lazy(() => import('@features/auth/pages/Register'));
export const ForgotPassword = lazy(() => import('@features/auth/pages/ForgotPassword'));
export const VerifyOtp = lazy(() => import('@features/auth/pages/VerifyOtp'));
export const ResetPassword = lazy(() => import('@features/auth/pages/ResetPassword'));

// Builder Page
export const Builder = lazy(() => import('@features/builder/pages/Builder'));

// Main Dashboard Switcher
export const Dashboard = lazy(() => import('@features/user/pages/Dashboard'));

// Public Landing Page
export const LandingPage = lazy(() => import('@features/publish/pages/LandingPage'));