import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import homepageData from './data/homepageData'
import Layout from '../components/layout/Layout'
import AppButton from '../components/button/Button'
import Card from '../components/card/Card'
import Modal from '../components/modal/Modal'

const technologies = [
  { image: 'https://www.pngitem.com/pimgs/m/1-15848_node-js-node-js-hd-png-download.png' },
  { image: 'https://coder.clothing/images/stories/virtuemart/product/reactjs-logo-sticker.jpg' },
  { image: 'https://cdn.zapier.com/storage/blog/4ec8fc7dc3a75758a3913bab9e5a4fd8_2.500x278.png' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' },
  {
    image:
      'data:image/png;base64,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',
  },
  { image: 'https://25y35xxcueanov2s108puszp-wpengine.netdna-ssl.com/wp-content/uploads/2022/03/ext-553.png' },
  { image: 'https://thumbs.dreamstime.com/b/sql-database-icon-logo-design-ui-ux-app-orange-inscription-shadow-96841969.jpg' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png' },
]

const stylesData = [{ image: 'https://www.brcline.com/wp-content/uploads/2016/01/bootstrap-logo.png' }, { image: 'https://mui.com/static/logo.png' }, { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk03fpMxbjzvgaDz2z3gu5G-9UeqgnNfUdd7gzSo9-er843XxKIG3g46lO1GRUF-L9UWs&usqp=CAU' }, { image: 'https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png' }]

export default function Home() {
  return (
    <Layout title={'Home'}>
      <section className='flex flex-col w-full relative backdrop-blur-lg'>
        <div className='z-[-10]' style={{ backgroundImage: `url(${'/assets/images/bg-half.svg'})`, backgroundRepeat: 'no-repeat', transform: 'rotate(270deg)', width: '80vw', height: '80vw', position: 'absolute', top: 0, left: 0 }}></div>
        <div className='columns-2 flex flex-col md:flex-row justify-around items-center w-full text-center md:text-left backdrop-blur-sm'>
          <div className='w-6/12 pt-[10%] md:pt-0 flex flex-col items-center justify-center'>
            <h1 className='text-stone-700 font-black text-5xl'>Hello My Name is Joe Luna</h1>
            <br />
            <h3 className='text-stone-700 font-semibold text-3xl pb-4'>and I&#39;m a Fullstack Developer</h3>
            <div className='flex  max-[1160px]:flex-col flex-row items-center justify-center pb-4'>
              <AppButton size={'XL'} label={'Contact Me'} clickHandler={function (): {} {}} color={'PRIMARY'} style={{ margin: '5px' }} />
              <a href='#important'>
                <AppButton size={'XL'} label={'View My Projects'} clickHandler={function (): {} {}} color={'SECONDARY'} style={{ margin: '5px' }} />
              </a>
            </div>
          </div>
          <div className='w-12/12 md:w-6/12 h-full flex-1 relative'>
            <img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg' className='object-contain' />
          </div>
        </div>
      </section>
      <section className='w-full flex flex-col items-center justify-center mt-5'>
        {homepageData.map((data, index) => {
          return (
            <div className='flex flex-col items-center justify-center mt-3' key={index}>
              <Card image={data.image} title={data.title} text={data.text} />
            </div>
          )
        })}
      </section>
      <section className='flex flex-col w-full items-center justify-center backdrop-blur-sm mt-5 mb-5'>
        <h2 className='text-xl font-bold mb-5'>Frontend & Backend Technologies</h2>
        <div className='flex w-11/12 lg:w-auto lg:flex-row flex-wrap items-center justify-center rounded-xl shadow-xl p-4 opacity-90 bg-white'>
          {technologies &&
            technologies.map((data, index) => {
              return (
                <div key={index}>
                  <img className='hover:scale-125 duration-700 m-2' src={data.image} alt='node js' width='75px' height='75px' />
                </div>
              )
            })}
        </div>
      </section>
      <section className=' flex flex-col w-full items-center justify-center backdrop-blur-sm  mt-5 mb-5'>
        <h2 className='text-xl font-bold mb-5'>Frontend Styling Framworks</h2>
        <div className='flex w-11/12 md:w-auto md:flex-row flex-wrap items-center justify-center rounded-xl shadow-xl p-4 opacity-90 bg-white '>
          {stylesData &&
            stylesData.map((data, index) => {
              return <img key={index} className='hover:scale-125 duration-700 m-2' src={data.image} alt='node js' width='75px' height='75px' />
            })}
        </div>
        <Modal />
      </section>
    </Layout>
  )
}
