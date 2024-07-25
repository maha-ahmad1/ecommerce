import { useState } from "react";
import { CardType } from "types";
import Stars from "components/Stars";
import Image from "components/Image";
import Link from "next/link";
import { Arrow, Searchicon, HeartIcon } from "lib/@heroicon";

export const Card = ({ id, image, title, price, stars, ...rest }: CardType) => {
  const [cart, setCart] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const addItem = async ({ id }: any) => {
    try {
      const response = await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 5,
          date: "2020-02-03",
          products: [{ productId: id, quantity: 1 }],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      const data = await response.json();
      console.log(data);

      setCart(data.products);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div
      className={`group bg-white border border-gray-200 rounded-lg shadow cursor-pointer  transition-all duration-500 `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      <div
        className={`mx-auto max-w-2xl pb-4 sm:px-6 sm:pt-0 lg:max-w-7xl lg:px-0 `}
      >
        <div
          className={`group relative hover:rounded-t-md group-hover:bg-gray-300`}
        >
          <div className="min-h-80 w-full overflow-hidden rounded-t-md lg:aspect-none group-hover:opacity-50 lg:h-80">
            <div className="flex justify-center items-center h-80 bg-white">
              <Image
                src={image}
                alt="image"
                className="h-full w-auto object-cover object-center"
                width={500}
                height={500}
                priority={true}
              />
            </div>
          </div>
          {isHovered && (
            <div className="absolute inset-0 flex flex-row justify-center items-center ">
              <button
                type="submit"
                onClick={() => addItem({ id })}
                className="bg-white text-black px-2 py-2 mx-1 border rounded-full hover:bg-red-500 hover:text-white  hover:border-red-500"
              >
                <Arrow className="h-5 w-5" />
              </button>
              <button
                type="submit"
                onClick={() => addItem({ id })}
                className="bg-white text-black px-2 py-2 mx-1 border rounded-full hover:bg-red-500 hover:text-white  hover:border-red-500"
              >
                <Searchicon className="h-5 w-5" />
              </button>
              <button
                type="submit"
                onClick={() => addItem({ id })}
                className="bg-white text-black px-2 py-2 mx-1 border rounded-full hover:bg-red-500 hover:text-white hover:border-red-500"
              >
                <HeartIcon className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
        <div className="mt-2 flex flex-col items-center">
          <div>
            <h3 className="text-md font-medium text-gray-900">
              <Link href="#">
                <p className="truncate w-40 hover:text-red-500 cursor-pointer">
                  {title}
                </p>
              </Link>
            </h3>
          </div>
          {!isHovered && (
            <div>
              <div className="flex py-2">
                <div>
                  <span className="text-md font-bold text-red-400 px-2">
                    {price}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 font-medium text-sm line-through">
                    {price + 2.3}
                  </span>
                </div>
              </div>
              <div className="flex">
                <Stars rating={stars} />
              </div>
            </div>
          )}
          {isHovered && (
            <div className=" sm:pt-4">
              <button
                type="submit"
                onClick={() => addItem({ id })}
                className="bg-red-500 text-white px-10 py-2 border-red-500 border rounded-full hover:bg-white hover:text-red-500"
              >
                Add To Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
