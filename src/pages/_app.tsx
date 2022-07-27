import React, { useEffect } from "react";

import { AppProps } from "next/app";

import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles";
import { useRouter } from "next/router";

import { pageView } from "@/lib/google-analytics/ga";
import Script from "next/script";
import { NextPage } from "next";
import { NextPageWithLayout } from "@/types/shared";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = (props: AppPropsWithLayout) => {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page: NextPage) => page);

  const router = useRouter();
  const gaMeasurementId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || null;

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />

      {/* Only Activates in production */}
      {gaMeasurementId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaMeasurementId}');
        `}
          </Script>
        </>
      )}

      <ChakraProvider resetCSS theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </>
  );
};

export default App;
