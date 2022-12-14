import type { ReactElement } from 'react'
import Head from 'next/head'
import styles from './Layout.module.css'
import Navigation from '../navigation/Navigation'
import Footer from '../footer/Footer'

const Layout = ({ children, title }: any) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css'></link>
      </Head>
      <header>
        <Navigation />
      </header>
      <main className={styles.appHeight}>{children}</main>
      <footer className='relative'>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
