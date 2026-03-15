"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const links = currentUser ? ["profile"] : ["signin", "signup"];
  const pathname = usePathname();

  return (
    <div id="wd-account-navigation">
      {links.map((link) => (
        <div key={link}>
          <Link
            href={`/account/${link}`}
            className={pathname.endsWith(link) ? "text-danger" : ""}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
}