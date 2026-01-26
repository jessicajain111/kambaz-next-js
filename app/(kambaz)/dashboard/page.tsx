import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />

      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="React" />
            <div>
              <h5>CS1234 React JS</h5>
              <p>Full Stack Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/2345" className="wd-dashboard-course-link">
            <Image src="/images/backend.jpg" width={200} height={150} alt="backend" />
            <div>
              <h5>CS2345 Node JS</h5>
              <p>Backend Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/3456" className="wd-dashboard-course-link">
            <Image src="/images/database.jpg" width={200} height={150} alt="databases" />
            <div>
              <h5>CS3456 MongoDB</h5>
              <p>Database Systems</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/4567" className="wd-dashboard-course-link">
            <Image src="/images/frontend.jpg" width={200} height={150} alt="frontend" />
            <div>
              <h5>CS4567 Web Dev</h5>
              <p>Frontend Engineering</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/5678" className="wd-dashboard-course-link">
            <Image src="/images/ood.jpg" width={200} height={150} alt="ood" />
            <div>
              <h5>CS5678 Software Design</h5>
              <p>Object-Oriented Design</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/6789" className="wd-dashboard-course-link">
            <Image src="/images/aws.jpg" width={200} height={150} alt="aws" />
            <div>
              <h5>CS6789 Cloud Computing</h5>
              <p>AWS & Deployment</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/7890" className="wd-dashboard-course-link">
            <Image src="/images/capstone.jpg" width={200} height={150} alt="capstone" />
            <div>
              <h5>CS7890 Capstone</h5>
              <p>Senior Project</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
