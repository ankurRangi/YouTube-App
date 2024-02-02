import VideoCard from "./VideoCard"

const VIDEOS = [
  {
    image: '/thumbnail1.jpg',
    logo: '/logo1.jpg',
    title: 'Shark Tank Season 03 Episode 01 Full Video',
    channel: 'Ankur Rangi',
    views: '4.1M',
    timestamp: '20 days ago',
  },
  {
    image: '/thumbnail1.jpg',
    logo: '/logo1.jpg',
    title: 'Shark Tank Season 03 Episode 02 Full Video',
    channel: 'Ankur Rangi',
    views: '6.1M',
    timestamp: '12 days ago',
  },
  {
    image: '/thumbnail1.jpg',
    logo: '/logo1.jpg',
    title: 'Shark Tank Season 03 Episode 03 Full Video',
    channel: 'Ankur Rangi',
    views: '2.1M',
    timestamp: '2 days ago',
  },{
    image: '/thumbnail1.jpg',
    logo: '/logo1.jpg',
    title: 'Shark Tank Season 03 Episode 03 Full Video',
    channel: 'Ankur Rangi',
    views: '2.1M',
    timestamp: '2 days ago',
  },{
    image: '/thumbnail1.jpg',
    logo: '/logo1.jpg',
    title: 'Shark Tank Season 03 Episode 03 Full Video',
    channel: 'Ankur Rangi',
    views: '2.1M',
    timestamp: '2 days ago',
  },{
    image: '/thumbnail1.jpg',
    logo: '/logo1.jpg',
    title: 'Shark Tank Season 03 Episode 03 Full Video',
    channel: 'Ankur Rangi',
    views: '2.1M',
    timestamp: '2 days ago',
  },
]

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) =>
        <div>
          <VideoCard
            image={video.image}
            logo={video.logo}
            title={video.title}
            channel={video.channel}
            views={video.views}
            timestamp={video.timestamp}
          ></VideoCard>
        </div>
      )}
    </div>
  )
}
