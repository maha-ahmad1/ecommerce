import { useRouter } from "next/router";
import Link from "next/link";
import type { ActiveLinkType } from "components/types";

export const ActiveLink: React.FC<ActiveLinkType> = ({ href, children, className = '' }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  const LinkClassName = `${className} ${
    isActive ? "text-red-500" : ""
  } mr-4 hover:text-red-500`;

  return (
    <Link href={href} className={LinkClassName}>
      {children}
    </Link>
  );
};

export default ActiveLink;
