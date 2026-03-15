import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="d-flex">
      <div>
        <AccountNavigation />
      </div>
      <div className="flex-fill p-4">
        {children}
      </div>
    </div>
  );
}