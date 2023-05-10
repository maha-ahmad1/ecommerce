import React from 'react'
import Slider from 'components/Slider';
import {images} from 'data'
import Card from 'components/Card'

export const Home = () => {
  const cardsData = [
    {
      id: 1,
      imageSrc: "/assets/image/product1.jpg",
      title: "Card 1 Title",
      price: "Card 1 description.",
      link: "#",
      linkText: "Read more",
      stars:"1",
      imageAlt:"img"
    },
    {
      id: 2,
      imageSrc: "/assets/image/product1.jpg",
      title: "Card 2 Title",
      price: "Card 2 description.",
      link: "#",
      linkText: "Read more",
      stars:"1"
      ,
      imageAlt:"img"
    },
    {
      id: 3,
      imageSrc: "/assets/image/product1.jpg",
      title: "Card 3 Title",
      price: "Card 3 description.",
      link: "#",
      linkText: "Read more",
      stars:"1"
      ,
      imageAlt:"img"
    },
    {
      id: 4,
      imageSrc: "/assets/image/product1.jpg",
      title: "Card 3 Title",
      price: "Card 3 description.",
      link: "#",
      linkText: "Read more",
      stars:"1",
      imageAlt:"img"

    }
    
  ];
  return (
    <div>
      <Slider images={images} navigation={false} scrollbar={false} autoplay={false}/>
      <div className='flex flex-row m-20 '>
      {cardsData.map((card) => (
        <Card
          key={card.id}
          imageSrc={card.imageSrc}
          title={card.title}
          price={card.price}
          link={card.link}
          linkText={card.linkText}
          stars={card.stars}
          imageAlt={card.imageAlt}


        />
      ))}
    </div>
    </div>
  )
}
export default Home;
//By passing this data down to the Card
//by defining props on the child component. The child component can then access the data by using the props passed to it.