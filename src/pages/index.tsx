import React from 'react'
import Slider from 'components/Slider';
import {images} from 'data'
import Card from 'components/Card'

export const Home = () => {
  return (
    <div>
      <Slider images={images} navigation={false} scrollbar={false} autoplay={false}/>
      <Card
        imageSrc="/assets/image/3.jpg"
        title="Noteworthy technology acquisitions 2021"
        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        link="#"
        linkText="Read more"
      />

    </div>
  )
}
export default Home;
