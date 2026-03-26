"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store";
import { useRouter } from "next/navigation";
import * as client from "../client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
    } else {
      setProfile(currentUser);
    }
  }, []);

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    router.push("/account/signin");
  };

  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <input className="form-control mb-2" id="wd-username"
            defaultValue={profile.username}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
          <input className="form-control mb-2" id="wd-password" type="password"
            defaultValue={profile.password}
            onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
          <input className="form-control mb-2" id="wd-firstname"
            defaultValue={profile.firstName}
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
          <input className="form-control mb-2" id="wd-lastname"
            defaultValue={profile.lastName}
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
          <input className="form-control mb-2" id="wd-dob" type="date"
            defaultValue={profile.dob}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })} />
          <input className="form-control mb-2" id="wd-email" type="email"
            defaultValue={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
          <select className="form-control mb-2" id="wd-role"
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={updateProfile} className="btn btn-primary w-100 mb-2" id="wd-update-btn">
            Update
          </button>
          <button onClick={signout} className="btn btn-danger w-100 mb-2" id="wd-signout-btn">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}