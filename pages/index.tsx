import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title={'Home'}>
      <section className='flex flex-col w-full'>
        <div className='columns-2 flex flex-col md:flex-row justify-around items-center w-full'>
          <div>
            <h1>Hello My Name is Joe</h1>
            <br />
            <h3>and Im a Fullstack Developer</h3>
          </div>
          <div>
            <Image src='https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg' alt={'dev'} width={500} height={500} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
