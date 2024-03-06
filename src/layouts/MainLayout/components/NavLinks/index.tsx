import Link from "next/link";
import { useRouter } from "next/router";

const NavLinks = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="hidden md:block">
      <div>
        <Link href="/" className={`${pathname === '/' ? 'text-red-500 ' : ''}mr-4 hover:text-red-500`}>
          HOME
        </Link>
        <Link href="/Shop" className={`${pathname === '/Shop' ? 'text-red-500 ' : ''}mr-4 hover:text-red-500`}>
          SHOP
        </Link>
        <Link href="/PRODUCT" className={`${pathname === '/PRODUCT' ? 'text-red-500 ' : ''}mr-4 hover:text-red-500`}>
          PRODUCT
        </Link>
        <Link href="/BLOG" className={`${pathname === '/BLOG' ? 'text-red-500 ' : ''}mr-4 hover:text-red-500`}>
          BLOG
        </Link>
        <Link href="/CONTACTUS" className={`${pathname === '/CONTACTUS' ? 'text-red-500 ' : ''}mr-4 hover:text-red-500`}>
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
