import Image from 'next/image'
import { Inter } from 'next/font/google'
import VideoCard from '@/components/VideoCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <VideoCard
        image={'/thumbnail1.jpg'}
        logo={'/logo1.jpg'}
        title={'Shark Tank Season 03 Episode 01 Full Video'}
        channel={'Ankur Rangi'}
        views={'4.1M'}
        timestamp={'2 days ago'}
      ></VideoCard>
    </div>
  )
}
