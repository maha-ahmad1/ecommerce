import Head from "next/head";
import { Navbar, Footer } from "./components";
import type { MainLayoutType } from "layouts/types";

export const MainLayout: MainLayoutType = ({
  children,
  title,
  pageDescription = "Stor",
  withoutNavbar = false,
  contentClassName = "",
}) => {
  return (
    <div className="min-h-screen flex flex-col">
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
      <main className={`min-h-fit ${contentClassName}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
