import Image from 'next/image'
import Navbar from './components/navbar/page'
import Hero from './components/hero/page'

export default function Home() {
  return (
    <main className=''>
      <Navbar />
      <Hero/>
    </main>
  )
}
