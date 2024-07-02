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
   
      <div className="bg-white py-6 sm:py-8 lg:py-12 px-16  2xl:px-64">
        <div className="mx-auto max-w-screen-2xl ">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:gap-8">
            <div className="group relative flex items-end overflow-hidden rounded-lg md:col-span-1 h-[26rem]">
              <Image
                src="/assets/image/furniture_banner1.jpg"
                alt="Featured Products"
                className="absolute  h-full w-full  transition duration-200 group-hover:scale-110"
                width={9000}
                height={9000}
              />
              <div className="pointer-events-none absolute  via-transparent to-transparent opacity-50"></div>
              <div className="absolute top-[18%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 text-start ">
                <h5 className="text-xl font-medium text-black">Super Sale</h5>
                <p className="text-2xl font-bold text-black">New Collection</p>
                <Link href="#" className="text-lg text-black underline ">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="group relative flex items-end overflow-hidden  rounded-lg  md:col-span-2 h-[26rem]">
              <Image
                src="/assets/image/furniture_banner2.jpg"
                alt="Featured Products"
                className="absolute h-full w-full transition duration-200 group-hover:scale-110"
                width={9000}
                height={9000}
              />
              <div className="pointer-events-none absolute inset-0  via-transparent to-transparent opacity-50"></div>
              <div className="absolute sm:top-1/2  sm:left-[15%]  left-[30%]  transform -translate-x-1/2 -translate-y-1/2 text-start ">
                <h5 className="text-2xl font-bold text-black">New Season</h5>
                <p className="text-xl font-medium  text-black">Sale 40% Off</p>
                <Link href="#" className="text-lg text-black underline ">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center flex mb-10 mt-16">
        <p className="pb-4 text-3xl font-bold border-b-red-500 border-b-2 ">
          Featured Products
        </p>
      </div>

      <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 px-16 2xl:px-64 ">
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
