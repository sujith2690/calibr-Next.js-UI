import Image from 'next/image'
import Navbar from './components/navbar/page'
import Hero from './components/hero/page'
import Client from './components/client/page'
import Manage from './components/manage/page'
import UserLogin from './components/userLogin/page'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Client />
      <Manage/>
      <UserLogin/>
    </>
  )
}
