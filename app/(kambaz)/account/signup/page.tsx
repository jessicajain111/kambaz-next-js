"use client";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { useRouter } from "next/navigation";
import * as client from "../client";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();

  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    router.push("/account/profile");
  };

  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input
        placeholder="username"
        className="form-control mb-2 wd-username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        placeholder="password"
        type="password"
        className="form-control mb-2 wd-password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={signup} className="btn btn-primary w-100 mb-2 wd-signup-btn">
        Sign up
      </button>
      <Link href="signin" className="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}