import React from "react";
import type { NextPageWithLayout } from "types";
import Home from "features/Home/components/Home";
export const Page: NextPageWithLayout  = () => {
  return (
    <div>
      <Home />
    </div>
  );
};
export default Page;

Page.mainLayoutProps = {
withoutBreadCrumb:false
};
  