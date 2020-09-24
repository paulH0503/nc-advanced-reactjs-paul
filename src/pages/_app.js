import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import React from 'react'
import '../../antd.less'

Sentry.init({
  dsn: 'https://fbd0146fa6f84d02b1ef1c2daabba370@o450209.ingest.sentry.io/5434446',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
})

// eslint-disable-next-line no-undef
// console.log('init')

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
