import Image from 'next/image'
import Navbar from './components/navbar/page'
import Hero from './components/hero/page'
import Client from './components/client/page'
import Manage from './components/manage/page'
import UserLogin from './components/userLogin/page'
import Help from './components/help/page'
import { data, security } from './data/dataFile'
import Tesla from './components/tesla/page'
import Caring from './components/caring/page'
import FooterHead from './components/footerHead/page'
import Footer from './components/footer/page'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Client />
      <Manage />
      <UserLogin data={data} />
      <Help />
      <UserLogin data={security} />
      <Tesla />
      <Caring />
      <FooterHead />
      <Footer/>
    </>
  )
}
