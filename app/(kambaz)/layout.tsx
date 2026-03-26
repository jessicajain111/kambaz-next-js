"use client";
import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import store from "./store";
import { Provider } from "react-redux";
import "./style.css";
import Session from "./account/Session";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Provider store={store}>
      <Session>
        <div className="d-flex" id="wd-kambaz">
          <div>
            <KambazNavigation />
          </div>
          <div className="flex-fill wd-main-content-offset">
            {children}
          </div>
        </div>
      </Session>
    </Provider>
  );
}