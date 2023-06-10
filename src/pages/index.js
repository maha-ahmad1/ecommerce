import React from "react";
import { Profile } from "features/components/Profile";
import  Navbar  from "../components/Navbar";
export const Page = () => {
  return (
    <div>
      <Navbar />
    <Profile />
    </div>
  );
};
export default Page;
