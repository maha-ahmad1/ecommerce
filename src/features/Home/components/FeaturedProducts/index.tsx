import React from "react";
import useProductData from "features/Home/hooks/useProductData";
import Card from "components/Card";
import Image from "next/image";
import Link from "next/link";
interface FeaturedProductsProps {
  limit: number;
}
export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  limit,
}) => {
  const { products, isLoading, isError } = useProductData(limit);
  if (isLoading) {
    return (
      <div className="w-[100%] h-screen flex justify-center items-center">
        <p className="text-2xl ">🌀Loading...</p>
      </div>
    );
  }
  if (isError) {
    return <p>Error occurred while fetching products.</p>;
  }

  return (
    <div>
      <div className="px-72 mb-24 md:flex flex-wrap mt-20">
        {" "}
        <div className="w-[50%]  relative pr-8">
          <Image
            src="/assets/image/furniture_banner1.jpg"
            alt="Featured Products"
            className="w-full h-auto"
            width={500}
            height={500}
          />
          <div className="absolute top-[15%] left-[15%] transform -translate-x-1/2 -translate-y-1/2 text-start ">
            <h5 className="text-xl font-medium text-black">Super Sale</h5>
            <p className="text-2xl font-bold text-black">New Collection</p>
            <Link href="#" className="text-lg text-black underline">
              Shop Now
            </Link>
          </div>
        </div>{" "}
        <div className="w-[50%] relative">
          <Image
            src="/assets/image/furniture_banner2.jpg"
            alt="Featured Products"
            className="w-full h-[100%]"
            width={500}
            height={500}
          />
          <div className="absolute top-1/2 left-[15%] transform -translate-x-1/2 -translate-y-1/2 text-start ">
            <h5 className="text-2xl font-bold text-black">New Season</h5>
            <p className="text-xl font-medium  text-black">Sale 40% Off</p>
            <Link href="#" className="text-lg text-black underline ">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div className="justify-center flex mb-10">
        <p className="pb-4 text-3xl font-bold border-b-red-500 border-b-2 ">
          Featured Products
        </p>
      </div>

      <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 px-16 md:px-4 2xl:px-64 ">
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
export default FeaturedProducts;
