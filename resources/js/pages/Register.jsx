import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, Input, Spinner, Card, Alert } from '@components/ui';
import { useRegister } from '@hooks';
import { ROUTES } from '@constants';

export default function Register() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: { name: '', email: '', password: '', password_confirmation: '' },
    });

    const doRegister = useRegister();
    const password = watch('password');

    const onSubmit = (values) => {
        doRegister.mutate({
            name: values.name,
            email: values.email,
            password: values.password,
            password_confirmation: values.password_confirmation,
        });
    };

    return (
        <Card className="p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Create your account</h2>
            <p className="text-sm text-gray-500 mb-6">Join and start building your company profile website.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <Input
                    label="Full name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    error={errors.name?.message}
                    {...register('name', {
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' },
                    })}
                />

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
                    autoComplete="new-password"
                    placeholder="At least 8 characters"
                    error={errors.password?.message}
                    {...register('password', {
                        required: 'Password is required',
                        minLength: { value: 8, message: 'Password must be at least 8 characters' },
                    })}
                />

                <Input
                    label="Confirm password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Re-enter your password"
                    error={errors.password_confirmation?.message}
                    {...register('password_confirmation', {
                        required: 'Please confirm your password',
                        validate: (value) => value === password || 'Passwords do not match',
                    })}
                />

                {doRegister.isError && (
                    <Alert variant="error" title="Unable to create account">
                        {doRegister.error?.response?.data?.errors?.email?.[0] ||
                            doRegister.error?.response?.data?.message ||
                            'Please review the form and try again.'}
                    </Alert>
                )}

                {doRegister.isSuccess && (
                    <Alert variant="success" title="Account created">
                        You can now sign in with your new credentials.
                    </Alert>
                )}

                <Button type="submit" className="w-full" disabled={doRegister.isPending}>
                    {doRegister.isPending ? <Spinner size="sm" /> : 'Create account'}
                </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link to={ROUTES.LOGIN} className="font-medium text-indigo-600 hover:text-indigo-500">
                    Sign in
                </Link>
            </p>
        </Card>
    );
}
