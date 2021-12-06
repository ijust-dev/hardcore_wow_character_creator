import Layout from '../components/layout'
import 'tailwindcss/tailwind.css'
import { useEffect } from 'react'


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    let lang = 'en';
    document.documentElement.lang = lang;
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
