import React from "react";
import MainPage from "features/Home/components/home";
import type { NextPageWithLayout } from "types";

export const Home: NextPageWithLayout  = () => {
  return (
    <div>
      <MainPage />
    </div>
  );
};
export default Home;

Home.mainLayoutProps = {
withoutBreadCrumb:false
};
  