import React from "react";
import Slider from "components/Slider";
import { images } from "data";
import Card from "components/Card";

export const Home = () => {
  const cardsData = [
    {
      id: 1,
      imageSrc: "/assets/image/product1.jpg",
      title: "Card 1 Title",
      price: "$162.00",
      link: "#",
      linkText: "Read more",
      stars: "1",
      imageAlt: "img",
      offer: "$100.00",
    },
    {
      id: 2,
      imageSrc: "/assets/image/product1.jpg",
      title: "Card 2 Title",
      price: "$162.00",
      link: "#",
      linkText: "Read more",
      stars: "1",
      imageAlt: "img",
      offer: "$100.00",
    },
    {
      id: 3,
      imageSrc: "/assets/image/product1.jpg",
      title: "Lorem ipsum furniture two",
      price: "$162.00",
      link: "#",
      linkText: "Read more",
      stars: "1",
      imageAlt: "img",
      offer: "$100.00",
    },
    {
      id: 4,
      imageSrc: "/assets/image/product1.jpg",
      title: "Lorem ipsum furniture two",
      price: "$162.00",
      link: "#",
      linkText: "Read more",
      stars: "1",
      imageAlt: "img",
      offer: "$100.00",
    },
    {
      id: 5,
      imageSrc: "/assets/image/product1.jpg",
      title: "Lorem ipsum furniture two",
      price: "$162.00",
      link: "#",
      linkText: "Read more",
      stars: "1",
      imageAlt: "img",
      offer: "$100.00",
    },
    {
      id: 6,
      imageSrc: "/assets/image/product1.jpg",
      title: "Lorem ipsum furniture two",
      price: "$162.00",
      link: "#",
      linkText: "Read more",
      stars: "1",
      imageAlt: "img",
      offer: "$100.00",
    },
  ];

  return (
    <div>
      <Slider
        images={images}
        navigation={false}
        scrollbar={false}
        autoplay={false}
      />
      <div className="justify-center flex mb-10">
        <p className=" pt-20 pb-4 text-3xl font-bold border-b-red-500 border-b-2 ">
          Exclusive Products
        </p>
      </div>
      <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 px-16 md:px-24 ">
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
            offer={card.offer}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
//By passing this data down to the Card
//by defining props on the child component. The child component can then access the data by using the props passed to it.
