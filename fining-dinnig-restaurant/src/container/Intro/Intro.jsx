import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import { meal } from '../../constants';
import { useRef, useState } from 'react';
import './Intro.css';

const Intro = () => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef();

  return (
    <div className='app__video'>
      <video 
      src={meal}
      ref={videoRef}
      type='video/mp4'
      loop
      controls ={false}
      muted
      />
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center'>
          {play ? (
            <BsPauseFill color="#fff" fontSize={30} onClick={() => {
              videoRef.current.pause();
              setPlay(false);
            }} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} onClick={() => {
              videoRef.current.play();
              setPlay(true);
            }} />
          )}
        </div>
      </div>
    </div>

)};


export default Intro;
