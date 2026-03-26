"use client";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { useRouter } from "next/navigation";
import * as client from "../client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();

  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    router.push("/dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input
        placeholder="username"
        className="form-control mb-2"
        id="wd-username"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        placeholder="password"
        type="password"
        className="form-control mb-2"
        id="wd-password"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button onClick={signin} className="btn btn-primary w-100 mb-2" id="wd-signin-btn">
        Sign in
      </button>
      <Link href="signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}