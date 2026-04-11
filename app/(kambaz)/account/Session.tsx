"use client";
import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      console.error(err);
    }
    setPending(false);
  };

  useEffect(() => {
    void fetchProfile();
  }, []);

  if (pending) {
    return (
      <div className="p-5 text-center text-muted" id="wd-session-loading">
        Loading&hellip;
      </div>
    );
  }

  return children;
}