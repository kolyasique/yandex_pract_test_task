import Header from './components/Header'
import Footer from './components/Footer'
import VideoModule from '../modules/VideoModule/VideoModule'
import PhotoModule from '../modules/PhotoModule/PhotoModule'
import MyHistoryModule from '../modules/MyHistoryModule/MyHistoryModule'

type Props = {}

export default function AboutMePage({}: Props) {
  return (
    <>
        <Header />
            <PhotoModule/>
            <MyHistoryModule/>
            <VideoModule/>
        <Footer />
    </>
  )
}