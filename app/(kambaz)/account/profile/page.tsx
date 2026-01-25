import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input defaultValue="alice" className="wd-username" /><br/>
      <input defaultValue="123" type="password" className="wd-password" /><br/>
      <input defaultValue="Alice" id="wd-firstname" /><br/>
      <input defaultValue="Wonderland" id="wd-lastname" /><br/>
      <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/>
      <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br/>
      <Link href="signin"> Sign out </Link>
    </div>
  );
}
