import cl from './style.module.scss'
import video from '../../assets/IMG_3379.mp4'  
// import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import { Suspense, lazy } from 'react';
import Loading from '../../components/Loading/Loading';
import ThemeChange from '../../components/ThemeChange/ThemeChange';
import H2Custom from '../../UI/H/H2Custom';

const VideoPlayer = lazy(() => import('../../components/VideoPlayer/VideoPlayer'));
type Props = {}

export default function VideoModule({}: Props) {
  return (
    <Suspense fallback={<Loading />}>
        <div className={cl.wrapper}>
            <H2Custom text='CSS переменные'></H2Custom>
            <VideoPlayer /> 
            <ThemeChange/>
        </div>
    </Suspense>
  )
}