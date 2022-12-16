import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import React from 'react';
import { Toaster } from '#/components/Toast';
import defaultSEOConfig from '_content/next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}
