import { ActiveLink } from "components";

const NavLinks = () => {
  return (
    <div className="hidden md:block">
      <div>
        <ActiveLink href="/">Home </ActiveLink>
        <ActiveLink href="/Shop">SHOP </ActiveLink>
        <ActiveLink href="/Product">PRODUCT </ActiveLink>
        <ActiveLink href="/Blog">BLOG </ActiveLink>
        <ActiveLink href="/contact-us">CONTACTUS </ActiveLink>
      </div>
    </div>
  );
};

export default NavLinks;
