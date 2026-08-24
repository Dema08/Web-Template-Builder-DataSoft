import { useEffect } from 'react';
import Wizard from '@features/onboarding/components/Wizard';
import { useOnboardingStore } from '@features/onboarding/stores/onboardingStore';

export default function Onboarding() {
    const reset = useOnboardingStore((state) => state.reset);

    useEffect(() => {
        reset();
    }, []);

    return <Wizard />;
}
