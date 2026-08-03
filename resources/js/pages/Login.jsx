import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, Input, Spinner, Card, Alert } from '@components/ui';
import { useLogin } from '@hooks';
import { ROUTES } from '@constants';

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: { email: '', password: '' },
    });

    const login = useLogin();

    const onSubmit = (values) => {
        login.mutate(values);
    };

    return (
        <Card className="p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Welcome back</h2>
            <p className="text-sm text-gray-500 mb-6">Sign in to continue building your company website.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <Input
                    label="Email address"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    error={errors.email?.message}
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Enter a valid email address',
                        },
                    })}
                />

                <Input
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                    error={errors.password?.message}
                    {...register('password', {
                        required: 'Password is required',
                        minLength: { value: 8, message: 'Password must be at least 8 characters' },
                    })}
                />

                {login.isError && (
                    <Alert variant="error" title="Unable to sign in">
                        {login.error?.response?.data?.message || 'Please check your credentials and try again.'}
                    </Alert>
                )}

                <Button type="submit" className="w-full" disabled={login.isPending}>
                    {login.isPending ? <Spinner size="sm" /> : 'Sign in'}
                </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to={ROUTES.REGISTER} className="font-medium text-indigo-600 hover:text-indigo-500">
                    Create one
                </Link>
            </p>
        </Card>
    );
}
