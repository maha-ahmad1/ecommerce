import React from "react";
import Image from "next/image";
import useProfile from "features/hooks/useProfile";
export const Profile = () => {
  const { items, isLoading, isError } = useProfile();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred while fetching items.</p>;
  }

  console.log("maha " + items);

  return (
    <div>
      <div className="flex justify-center items-center h-full">
        <div className="lg:w-9/12 xl:w-7/12">
          <div className="bg-white rounded-lg">
            <div
              className="flex-row-reverse"
              style={{
                backgroundImage: "url('/assets/image/image.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="ms-8 flex flex-col w-48">
                <Image
                  width={200}
                  height={200}
                  src={items.photo}
                  alt="Profile"
                  className="mt-4 mb-2 border border-gray-300 bg-white rounded-lg p-2 transform translate-y-24"
                />
              </div>
              <div className="ml-60 text-lg font-bold ">
                <h5 className="text-white">{items.name}</h5>
                <p className="text-white">Gaza</p>
              </div>
            </div>

            <div className="md:p-4 text-black bg-gray-200">
              <div className="flex flex-col items-center justify-between sm:flex-row sm:text-center pb-8">
                <div className="flex sm:ml-4 sm:mt-6 mt-20 ">
                  <button className="border rounded-md border-gray-500 outline-none h-10  w-40 hover:bg-blue-600 hover:text-white text-center">
                    Edit profile
                  </button>
                  <button className="border rounded-md border-gray-500 outline-none h-10 w-40 hover:bg-blue-600 hover:text-white text-center ml-4">
                    Add Friends
                  </button>
                </div>

                <div className="flex mt-2">
                  <div>
                    <p className="mb-1 md:text-2xl font-bold">{items.likes}</p>
                    <p className="md:text-lg mb-0">Likes</p>
                  </div>
                  <div className="px-3">
                    <p className="mb-1 md:text-2xl font-bold">
                      {items.followers}
                    </p>
                    <p className="md:text-lg mb-0">Followers</p>
                  </div>
                  <div>
                    <p className="mb-1 md:text-2xl font-bold">{items.follow}</p>
                    <p className="md:text-lg mb-0">Following</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-4">
              <div className="mb-5">
                <p className="text-lg font-medium mb-1">About</p>
                <div className="p-4 bg-gray-200">
                  <p className="italic mb-1">Web Developer</p>
                  <p className="italic mb-1">Lives in New York</p>
                  <p className="italic mb-0">Photographer</p>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-medium mb-0">Recent photos</p>
                <p className="mb-0">
                  <a href="#!" className="text-gray-500">
                    Show all
                  </a>
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 ">
                {items.images_list.map((image, index) => (
                  <Image
                    src={image}
                    alt={`Image ${index + 1}`}
                    key={index}
                    width={600}
                    height={600}
                    className="rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
