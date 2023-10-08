import Navbar from './components/navbar/page'
import Hero from './components/hero/page'
import Client from './components/client/page'
import Manage from './components/manage/page'
import Login from './components/login/page'
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
      <Login data={data} />
      <Help />
      <Login data={security} />
      <Tesla />
      <Caring />
      <FooterHead />
      <Footer/>
    </>
  )
}
