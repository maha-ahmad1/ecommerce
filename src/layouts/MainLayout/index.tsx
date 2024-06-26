import Head from "next/head";
import { Navbar, Footer, BreadCrumb } from "./components";
import type { MainLayoutType } from "layouts/types";

export const MainLayout: MainLayoutType = ({
  children,
  title,
  pageDescription = "Stor",
  withoutNavbar = false,
  contentClassName = "",
  subtitle,
  pages,
  pageTitle,
  withoutBreadCrumb = true,
}) => {
  return (
    <div className="flex flex-col ignore-onOutsideClick ">
    <Head>
        <title>{title}</title>{" "}
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/assets/image/logo_dark.png" />
      </Head>
      {!withoutNavbar && (
        <header>
          <Navbar />
        </header>
      )}
      {withoutBreadCrumb && (
        <BreadCrumb pageTitle={pageTitle} subtitle={subtitle} pages={pages} />
      )}
      <main className={`ignore-onOutsideClick   ${contentClassName} `}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
