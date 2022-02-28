import Loading from '@/components/Loading';
import customTheme from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import defaultSEOConfig from '../../next-seo.config';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', () => {
      setTimeout(() => handleComplete(), 2000);
    });
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <DefaultSeo {...defaultSEOConfig} />
      {loading ? <Loading /> : <Component {...pageProps} />}
    </ChakraProvider>
  );
}
