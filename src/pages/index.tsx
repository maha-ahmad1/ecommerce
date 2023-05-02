import React from 'react'
import Slider from 'components/Slider';
import {images} from 'data'

export const Home = () => {
  return (
    <div>
      <Slider images={images} />
      <div className='h-20 '>maha</div>
    </div>
  )
}
export default Home;
