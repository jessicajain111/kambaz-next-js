import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-4">
      <h2>Page Not Found</h2>
      <p>
        The requested page could not be found. Please return to the dashboard.
      </p>
      <Link href="/dashboard">
        Back to Dashboard
      </Link>
    </div>
  );
}
