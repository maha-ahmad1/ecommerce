import { useState } from "react";
import { CardType } from "types";
import Stars from "components/Stars";
import Image from "components/Image";
import Link from "next/link";

export const Card = ({ id, image, title, price, stars, ...rest }: CardType) => {
  const [cart, setCart] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  console.log(cart);
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
      // Log the response from the API for debugging

      // Update the cart state if necessary
      // For simplicity, assume the response includes updated cart data
      setCart(data.products);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg shadow cursor-pointer `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {" "}
      <div className={`mx-auto max-w-2xl pb-4 sm:px-6 sm:pt-0 lg:max-w-7xl lg:px-0 border border-gray-200 rounded-lg shadow`}>
        <div className="group relative hover:bg-gray-300 hover:rounded-t-md ">
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
        </div>
        <div className="mt-2 flex flex-col items-center">
          <div>
            <h3 className="text-md font-medium text-gray-900 ">
              <Link href="#">
                <p className="truncate w-40 hover:text-red-500 cursor-pointer">{title}</p>
              </Link>
            </h3>
          </div>
          {!isHovered && (
            <div>
              <div className="flex py-2 ">
                <div>
                  <span className="text-md font-bold text-red-400 px-2 ">
                    {price}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 font-medium text-sm line-through">
                    {price}
                  </span>
                </div>
              </div>
              <div className="flex">
                <Stars rating={stars} />
              </div>
            </div>
          )}
          {isHovered && (
            <div className="pt-5 ">
              <button
                type="submit"
                onClick={() => addItem({ id })}
                className="bg-red-500 text-white px-10 py-2 rounded-full"
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
