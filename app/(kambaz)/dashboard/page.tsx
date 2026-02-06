import Link from "next/link";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} lg={4} className="g-4">
          {[
            { title: "CS1234 React JS", desc: "Full Stack software developer", img: "/images/reactjs.jpg" },
            { title: "CS5678 Node.js", desc: "Backend development", img: "/images/backend.jpg" },
            { title: "CS9012 MongoDB", desc: "Database design", img: "/images/database.jpg" },
            { title: "CS3456 Python", desc: "Programming fundamentals", img: "/images/ood.jpg" },
            { title: "CS7890 TypeScript", desc: "Type-safe JavaScript", img: "/images/frontend.jpg" },
            { title: "CS2345 Express", desc: "Web APIs with Express", img: "/images/backend.jpg" },
            { title: "CS6789 Docker", desc: "Container orchestration", img: "/images/aws.jpg" },
            { title: "CS4567 Capstone", desc: "Full stack capstone", img: "/images/capstone.jpg" },
          ].map((course) => (
            <Col key={course.title} className="wd-dashboard-course" style={{ minWidth: "280px", maxWidth: "320px" }}>
              <Card>
                <Link
                  href="/courses/1234/home"
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg
                    variant="top"
                    src={course.img}
                    width="100%"
                    height={160}
                    alt=""
                  />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.title}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.desc}
                    </CardText>
                    <Button variant="primary">Go</Button>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}