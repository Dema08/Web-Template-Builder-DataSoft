import { useEffect } from 'react';
import Wizard from '@components/onboarding/Wizard';
import { useOnboardingStore } from '@store/onboardingStore';

export default function Onboarding() {
    const reset = useOnboardingStore((state) => state.reset);

    useEffect(() => {
        reset();
    }, []);

    return <Wizard />;
}
