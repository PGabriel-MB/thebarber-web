import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export const SplashLoading = (): JSX.Element | false => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = (url: string) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url: string) =>
      (url === router.asPath)
      && setTimeout(() => {
        setLoading(false)
      }, 2000);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    }
  });

  return loading && (<div className='wrapper'>
    <p>Esse eh o loader</p>
  </div>)
}