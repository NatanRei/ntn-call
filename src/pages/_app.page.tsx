import { QueryClientProvider } from '@tanstack/react-query'
import '../lib/dayjs'

import { globalStyles } from '../styles/global'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { queryClient } from '@/lib/react-query'
import { DefaultSeo } from 'next-seo'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://ntn-call.ntnconsultoria.com.br',
            siteName: 'NTN Call',
          }}
        />
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
