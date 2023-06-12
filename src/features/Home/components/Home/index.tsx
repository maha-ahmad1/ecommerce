import React from "react";
import { images } from "data";
import Card from "components/Card";
import useProductData from "features/Home/hooks/useProductData";
import Slider from "components/Slider";
export const Home = () => {
  const { products, isLoading, isError } = useProductData();
  if (isLoading) {
    return(
    <div className="w-[100%] h-screen flex justify-center items-center">
      <p className="text-2xl ">🌀Loading...</p>
    </div>)
  }

  if (isError) {
    return <p>Error occurred while fetching products.</p>;
  }

  console.log("maha " + products);

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
      <div className="mt-6 mb-40 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 px-16 md:px-48">
        {products.map((product: any) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            stars={product.rating.rate}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
//By passing this data down to the Card
//by defining props on the child component. The child component can then access the data by using the props passed to it.
