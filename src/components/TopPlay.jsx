import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {Swiper, SwiperSlide} from 'swiper/react'
import { FreeMode } from "swiper";
import {PlayPause, setActiveSong} from '../redux/features/playerSlice';
import {useGetTopChartsQuery} from '../redux/services/shazamCore';
import 'swiper/css';
import 'swiper/css/free-mode';

const TopPlay = () => {
  const dispatch = useDispatch();
  const {setActiveSong, isPlaying} = useSelector((state) => state.player);
  const {data} = useGetTopChartsQuery();
  const divRef = useRef(null);
};

useEffect(() => {
  divRef.current.scrollIntoView({behavior: 'smooth'});

});
const topPlay = data?.slice(0, 5)

const handlePauseClick = () => {
  dispatch(playPause(false))
};


const handlePLayClick = () =>{
  dispatch(setActiveSong({song, data, i }));
  dispatch(playPause(true));



  return (
    <div ref={divRef}>
  
    </div>
  
  )
};


export default TopPlay;
