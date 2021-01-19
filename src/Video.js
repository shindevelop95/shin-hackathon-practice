import React, {useRef,useState} from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
function Video() {

    const [playing,setPlaying] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress =()=>{
       if(playing){
        videoRef.current.pause();
        setPlaying(false);
       }else{
           videoRef.current.play();
           setPlaying(true);
       }
    }
    return (
        <div className="video">
            <video className="video__player" src="https://v39-as.tiktokcdn.com/62e1c84a6ee14c3904876c53a8de1583/60070225/video/tos/alisg/tos-alisg-pve-0037/12236d8271664d99be4b49c46c767097/?a=1180&br=4760&bt=2380&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=2021011910002201023410415657036CC0&lr=tiktok&mime_type=video_mp4&pl=0&qs=0&rc=ajR3cDkzbm1xMzMzOjgzM0ApNDg2O2lnMzxpNzo8aGRpO2djNDJra2hzLi9gLS02LzRzczMtYy0vXzEtYy5fNl9fNmM6Yw%3D%3D&vl=&vr="
                   loop
                   onClick={onVideoPress}
                   ref={videoRef}
                   controls
            ></video>
            <VideoFooter/>
        </div>
    )
}

export default Video
