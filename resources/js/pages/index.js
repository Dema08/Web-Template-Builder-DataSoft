import { lazy } from 'react';

// Admin Pages
export const AdminDashboard = lazy(() => import('./admin/AdminDashboard'));
export const AdminUsers = lazy(() => import('./admin/AdminUsers'));
export const AdminWebsites = lazy(() => import('./admin/AdminWebsites'));
export const AdminTemplates = lazy(() => import('./admin/AdminTemplates'));
export const AdminTemplateBuilder = lazy(() => import('./admin/AdminTemplateBuilder'));
export const AdminTemplatePreview = lazy(() => import('./admin/AdminTemplatePreview'));
export const AdminCategories = lazy(() => import('./admin/AdminCategories'));
export const AdminAnalytics = lazy(() => import('./admin/AdminAnalytics'));
export const AdminSettings = lazy(() => import('./admin/AdminSettings'));

// User Pages
export const UserDashboard = lazy(() => import('./user/UserDashboard'));
export const Websites = lazy(() => import('./user/Websites'));
export const Templates = lazy(() => import('./user/Templates'));
export const Profile = lazy(() => import('./user/Profile'));
export const Settings = lazy(() => import('./user/Settings'));
export const Onboarding = lazy(() => import('./user/Onboarding'));

// Auth Pages
export const Login = lazy(() => import('./auth/Login'));
export const Register = lazy(() => import('./auth/Register'));
export const ForgotPassword = lazy(() => import('./auth/ForgotPassword'));
export const VerifyOtp = lazy(() => import('./auth/VerifyOtp'));
export const ResetPassword = lazy(() => import('./auth/ResetPassword'));

// Builder Page
export const Builder = lazy(() => import('./builder/Builder'));

// Main Dashboard Switcher
export const Dashboard = lazy(() => import('./Dashboard'));

// Public Landing Page
export const LandingPage = lazy(() => import('./LandingPage'));
